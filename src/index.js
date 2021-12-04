import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import user from "../src/Components/Profile/User.json";
import data from "../src/Components/Statistics/Data.json";

ReactDOM.render(
  <React.StrictMode>
    <App user={user} data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
