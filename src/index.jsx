import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.css";
import LatterContext from "context/LatterContext";
import HomeContext from "context/HomeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LatterContext>
    <HomeContext>
      <App />
    </HomeContext>
  </LatterContext>
);
