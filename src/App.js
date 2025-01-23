import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import sum from "./main/sum";

function App() {
  const [stringValue, setStringValue] = useState("");
  const [result, setResult] = useState(0);

  const calculateSum = () => {
    const result = sum(stringValue);
    setResult(result);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="title">String Calculator</div>
        <input
          className="input"
          placeholder="Enter numbers..."
          onChange={(e) => setStringValue(e.target.value)}
        />
        <button className="button" onClick={calculateSum}>
          Calculate
        </button>
        <div className="value">Sum: {result}</div>
      </div>
    </div>
  );
}

export default App;
