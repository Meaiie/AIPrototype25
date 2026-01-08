import pandas as pd
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

# 1. Load the dataset
iris = load_iris()
X = iris.data
y = iris.target

# 2. Split dataset (optional for this simple example, but good practice)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Create and train the model
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# 4. Save the model
joblib.dump(rf_model, 'iris_model.pkl')

print("Model trained and saved as 'iris_model.pkl'")