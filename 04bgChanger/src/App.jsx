import "./App.css";
import React from "react";

function App() {
  const [color, setColor] = React.useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            test 1
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            test 2
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            test 3
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
