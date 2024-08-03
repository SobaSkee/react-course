import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Stanley",
    age: 19,
    address: {
      city: "NYC",
      state: "NY",
      country: "US",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-2 rounded-md">
        Vite with tailwind
      </h1>
      <Card
        username={myObj.name}
        occupation="Student"
        locale={myObj.address.country}
        myArr={newArr}
      />
      <Card />
    </>
  );
}

export default App;
