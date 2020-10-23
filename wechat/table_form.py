from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    return "Index"

@app.route('/hello', methods=["POST", "GET"])
def hello():
    return f"<h1> 你好 {request.form['username']}, 你已经成功完成了注册<h1/>"

if __name__ == "__main__":
    app.run()