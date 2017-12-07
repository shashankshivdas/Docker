from flask import Flask,render_template,jsonify
import json


app = Flask(__name__,static_folder="./static/dist",template_folder="./static")

@app.route("/")
def hello():
	return render_template("index.html")


jData = json.loads(open('./data.json').read())
data = jData["data"]

@app.route("/getGrocery/")
@app.route('/getGrocery/<string:gName>/')
def getGrocery(gName=''):
	return_data = jsonify([])
	if not gName:
		return_data = jsonify(data)
	else:
		for i in range(len(data)):
			if data[i]["name"].lower() == gName.lower():
				return_data = jsonify([data[i]])
	return return_data



if __name__ == "__main__":
	app.run(host='0.0.0.0')