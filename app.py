from flask import Flask, render_template, jsonify
import logging

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/symptoms')
def api_return_symptoms():
    return jsonify(['cough', 'fever', 'sore throat'])


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)