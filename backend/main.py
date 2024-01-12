from flask import Flask, request, Blueprint, jsonify
from flask_cors import CORS
from typing import Optional, Union, List
import subprocess

app = Flask(__name__)
CORS(app)

def install_regex_routes(app: Flask):
    url_prefix = "/api/regex"
    bp = Blueprint(url_prefix, __name__)
    
    @bp.route("/execute", methods=["POST"])
    def run_string():
        req_json = request.get_json()
        input_string = req_json["input_string"]

        cmds = ["/usr/bin/regex", "a", "a", "--emit-json-stdout"] 
        
        result = subprocess.run(cmds, capture_output=True, text=True)
        stdout = result.stdout
        stderr = result.stderr

        return jsonify({
                "stdout": stdout, 
                "stderr": stderr, 
                "input": input_string
            })

    app.register_blueprint(bp, url_prefix=url_prefix)

def install_compiler_routes(app: Flask):

    url_prefix = "/api/compiler" 
    bp = Blueprint(url_prefix, __name__)

    def compiler_pipeline(input_file, output_exe):
        gazc = "/var/bin/gazc"
        libgazrt = "/var/bin/libgazrt.so"
        llc = "/usr/bin/llc"
        clang = "/usr/bin/clang"

        response = {}
        commands = [
            [gazc, input_file, "/tmp/prog.ll"],
            [llc, "-filetype=obj", "/tmp/prog.ll", "-o", "/tmp/prog.o"],
            [clang, "/tmp/prog.o", libgazrt, "-o", output_exe],
        ]

        for cmd in commands:
            result = subprocess.run(cmd, capture_output=True, text=True)
            if result.returncode != 0:
                return (result.stdout, result.stderr)
        
        final_cmd = f"LD_PRELOAD={libgazrt} {output_exe}"
        final_result = subprocess.run(
            final_cmd, shell=True, capture_output=True, text=True
        )

        with open("/tmp/prog.ll", "r") as file:
            response["llvm_ir"] = file.read()
        
        response["stdout"] = final_result.stdout
        response["stderr"] = final_result.stderr

        return response 

    @bp.route("/run", methods=["POST"])
    def run_program():

        req_json = request.get_json()
        program = req_json["program"]
        tmp_in_file = "/tmp/prog.in"
        tmp_exe = "/tmp/prog"

        with open(tmp_in_file, "w") as file:
            file.write(program)

        response = compiler_pipeline(tmp_in_file, tmp_exe)

        return jsonify(response)

    app.register_blueprint(bp, url_prefix=url_prefix)

if __name__ == "__main__":

    install_compiler_routes(app)
    install_regex_routes(app)

    @app.route("/")
    def index():
        return "hello, world"

    app.run(
        host='0.0.0.0',
        debug=True
    )