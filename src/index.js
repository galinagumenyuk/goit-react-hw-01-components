import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import user from "../src/Components/Profile/User.json";
import data from "../src/Components/Statistics/Data.json";
import friends from "../src/Components/FriendList/friends.json";
import transactions from "../src/Components/TransactionHistory/transactions.json";

ReactDOM.render(
  <React.StrictMode>
    <App
      user={user}
      data={data}
      friends={friends}
      transactions={transactions}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
