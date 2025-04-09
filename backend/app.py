from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)

with open("backend/model.pkl", "rb") as f:
    model = pickle.load(f)

features = ['Company', 'Product', 'TypeName', 'ScreenSize', 'Resolution', 'CPU', 'RAM', 'Memory', 'GPU', 'OS', 'Weight']

@app.route("/predict", methods=["POST"])
def predict():
    try:
        if not request.is_json:
            return jsonify({"error": "Invalid JSON format"}), 400

        data = request.get_json()

        # Check if all required features exist
        missing_features = [feature for feature in features if feature not in data]
        if missing_features:
            print("Missing features:", missing_features)
            return jsonify({"error": f"Missing features: {missing_features}"}), 400

        input_df = pd.DataFrame([data])
        print(input_df)
        prediction = model.predict(input_df)[0]

        print("Prediction:", prediction)
        return jsonify({"price": round(prediction, 2)})
    
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, port=3000)