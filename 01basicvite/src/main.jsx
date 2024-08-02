import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";

const bozoElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const aReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
