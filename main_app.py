from flask import Flask, redirect, url_for, render_template, request, abort, session
from datetime import datetime

app = Flask(__name__)

@app.route("/") 
def default(): 
    return render_template("main_page.html")

 
@app.route("/normal_mode") 
def normal_mode(): 
        return render_template("game_mode.html", mode="normal")
    
@app.route("/repeat_mode") 
def repeat_mode(): 
        return render_template("game_mode.html", mode="repeat")

if __name__ == "__main__":
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=4000, debug=True)
