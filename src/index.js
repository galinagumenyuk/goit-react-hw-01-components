import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import user from "../src/Components/Profile/User.json";

ReactDOM.render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>,
  document.getElementById("root")
);
