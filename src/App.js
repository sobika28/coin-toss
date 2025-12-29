import { useState } from "react";
import "./App.css";

function App() {
  const [side, setSide] = useState("");
  const [flipping, setFlipping] = useState(false);

  const tossCoin = () => {
    if (flipping) return;

    setFlipping(true);
    setSide("");

    setTimeout(() => {
      const result = Math.random() < 0.5 ? "heads" : "tails";
      setSide(result);
      setFlipping(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h1>🪙  Coin Toss</h1>

      <div className={`coin ${flipping ? "flip" : ""} ${side}`}>
        <div className="face heads">H</div>
        <div className="face tails">T</div>
      </div>

      <button onClick={tossCoin} disabled={flipping}>
        {flipping ? "Flipping..." : "Toss Coin"}
      </button>

      {side && <h2>Result: {side.toUpperCase()}</h2>}
    </div>
  );
}

export default App;
