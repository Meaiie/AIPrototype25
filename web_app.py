from flask import Flask, render_template, request, jsonify # <-- เพิ่ม jsonify
import numpy as np
import joblib
from sklearn.datasets import load_iris

app = Flask(__name__)

# Load Model & Target Names
model = joblib.load('iris_model.pkl')
iris = load_iris()
target_names = iris.target_names

# หน้าแรกแสดง HTML ปกติ
@app.route('/')
def home():
    return render_template('index.html')

# API สำหรับรับค่าไปทำนายและส่ง JSON กลับ
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # รับค่าจาก JavaScript (fetch)
        data = request.get_json()
        sl = float(data['sepal_length'])
        sw = float(data['sepal_width'])
        pl = float(data['petal_length'])
        pw = float(data['petal_width'])

        # Predict
        input_data = np.array([[sl, sw, pl, pw]])
        prediction_idx = model.predict(input_data)[0]
        
        # ดึงชื่อสายพันธุ์
        prediction_name = target_names[prediction_idx]
        
        # ส่งข้อมูล JSON กลับไปให้ JavaScript
        return jsonify({
            'status': 'success',
            'prediction_name': prediction_name,
            'image_url': f"static/images/{prediction_name}.jpg"
        })

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

if __name__ == "__main__":
    app.run(host='localhost', debug=True, port=5002)