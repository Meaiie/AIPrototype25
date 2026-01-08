from flask import Flask, render_template, request
import numpy as np
import joblib
from sklearn.datasets import load_iris

app = Flask(__name__)

# Load the trained model
model = joblib.load('iris_model.pkl')

# Load target names (Setosa, Versicolor, Virginica) for readable output
iris = load_iris()
target_names = iris.target_names

@app.route('/', methods=['GET', 'POST'])
def home():
    prediction_text = ""
    prediction_name = ""  # ตัวแปรสำหรับเก็บชื่อไฟล์รูป
    
    if request.method == 'POST':
        try:
            sl = float(request.form['sepal_length'])
            sw = float(request.form['sepal_width'])
            pl = float(request.form['petal_length'])
            pw = float(request.form['petal_width'])
            
            input_data = np.array([[sl, sw, pl, pw]])
            prediction = model.predict(input_data)[0]
            
            # ดึงชื่อสายพันธุ์ออกมา
            # ชื่อใน target_names มักจะเป็น 'setosa', 'versicolor', 'virginica'
            species_name = target_names[prediction]
            
            prediction_text = f"Class: {species_name.capitalize()}"
            prediction_name = species_name  # ส่งชื่อไปใช้หานามสกุลไฟล์
            
        except Exception as e:
            prediction_text = f"Error: {str(e)}"

    # ส่งตัวแปร prediction_name ไปด้วย
    return render_template('index.html', prediction=prediction_text, prediction_name=prediction_name)

if __name__ == "__main__":   # run code
    app.run(host='localhost',debug=True,port=5002)#host='0.0.0.0' = run on internet ,port=5001