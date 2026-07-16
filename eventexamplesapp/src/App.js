import React, { useState } from "react";

function App() {

  // Counter
  const [count, setCount] = useState(0);

  // Currency Converter
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  // Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Hello Message
  const sayHello = () => {
    alert("Hello! Have a Nice Day.");
  };

  // Multiple Methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // Welcome
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event
  const onPress = () => {
    alert("I was clicked");
  };

  // Currency Converter
  const handleSubmit = () => {
    if (rupees === "") {
      alert("Enter Amount");
      return;
    }

    const result = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(result);
  };

  return (
    <div style={{ margin: "30px" }}>

      <h1>Event Examples App</h1>

      <hr />

      <h2>Counter Example</h2>

      <h3>Counter : {count}</h3>

      <button onClick={handleIncrement}>Increment</button>

      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <hr />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <hr />

      <button onClick={onPress}>
        Synthetic Event (OnPress)
      </button>

      <hr />

      <h2>Currency Converter</h2>

      <input
        type="number"
        placeholder="Enter Rupees"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        style={{ marginLeft: "10px" }}
      >
        Convert
      </button>

      <h3>Euro : € {euro}</h3>

    </div>
  );
}

export default App;