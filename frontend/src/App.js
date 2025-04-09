import { useState } from "react";
import LaptopForm from "./LaptopForm";

function App() {
  const [prediction, setPrediction] = useState(null);

  const handleFormSubmit = async (formData) => {
    console.log("Sending formData:", formData);
    const response = await fetch("http://127.0.0.1:3000/predict", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("Received: ", data);
    setPrediction(data.price);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Laptop Price Predictor</h1>
      <h3 className="subheader">Predict the price of a laptop based on 11 features. Uses RandomForestRegressor algorithm, trained on a public Kaggle dataset with 1000+ rows.</h3>
      <LaptopForm onSubmit={handleFormSubmit} />
      {prediction !== null && <p className="mt-4 text-lg">Predicted Price (in CAD): ${prediction}</p>}
    </div>
  );
}

export default App;

