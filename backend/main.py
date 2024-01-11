from flask import Flask, request, Blueprint, jsonify
from typing import Optional, Union, List

app = Flask(__name__)

def install_regex_routes(app: Flask):
    url_prefix = "/api/regex"
    bp = Blueprint(url_prefix, __name__)
    
    @bp.route("/execute", methods=["POST"])
    def run_string():
        req_json = request.get_json()
        input_string = req_json["input_string"]

        return jsonify({"output": 123})

    app.register_blueprint(bp, url_prefix=url_prefix)

def install_compiler_routes(app: Flask):

    url_prefix = "/api/compiler" 
    bp = Blueprint(url_prefix, __name__)

    @bp.route("/run", methods=["POST"])
    def run_program():

        req_json = request.get_json()
        program = req_json["program"]

        print(program)

        res = {
            "llvm-ir": "chris lattner dancing with a flame emoji",
            "output": program
        }
        
        return jsonify({"output": res})

    app.register_blueprint(bp, url_prefix=url_prefix)

if __name__ == "__main__":

    install_compiler_routes(app)
    install_regex_routes(app)

    app.run(
        debug=True
    )