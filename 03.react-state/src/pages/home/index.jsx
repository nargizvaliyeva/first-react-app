import React from "react";
import { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const incrementbyInputValue = () => {
    setCount(count + input);
  };
  return (
    <div>
      <h1>Counter Example</h1>
      <button onClick={increment}>increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>decrement</button>
      <hr />
      <input
        type="number"
        onChange={(e) => {
          setInput(e.target.valueAsNumber);
        }}
      />
      <button onClick={incrementbyInputValue}>Inc by Value</button>
    </div>
  );
};

export default Counter;
