import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";

// multi language framework react-i18next
import "./i18n/config";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
