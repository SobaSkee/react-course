import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  function addVal() {
    setCounter();
  }

  const removeVal = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>React course with Stanleyyy</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addVal}>Add value</button>{" "}
      <button onClick={removeVal}>Remove value</button>
    </>
  );
}

export default App;
