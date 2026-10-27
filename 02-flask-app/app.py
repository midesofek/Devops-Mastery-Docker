from flask import Flask

app = Flask(__name__)

@app.route("/")

def hello():

    return "Hello, Docker!"

if __name__ == "__main__":

    # Run the app on host 0.0.0.0 so it’s accessible outside the container

    app.run(host="0.0.0.0", port=5000)
