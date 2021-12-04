import React from "react";
import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionHistory = (items) => {
  let row = items.items.map((item) => (
    <Transaction
      key={item.id}
      type={item.type}
      amount={item.amount}
      currency={item.currency}
    />
  ));
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{row}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
