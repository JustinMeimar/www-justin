import requests

if __name__ == "__main__":

    url = "http://127.0.0.1:5000/api/"
    data = {"program": "Your program text here"}

    res = requests.post(
                url=f"{url}/compiler/run",
                json=data,
                headers={"Content-Type": "application/json"}
            )

    assert res.status_code == 200, f"request status: {res.status_code}"


"""
curl -X POST http://127.0.0.1:5000/api/compiler/run \
-H "Content-Type: application/json" \
-d '{"program": "Your program text here"}'

"""