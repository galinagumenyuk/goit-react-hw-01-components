import React from "react";
import s from "./Statistics.module.css";

const Item = ({ name, value }) => {
  return (
    <li className={s.item}>
      <span className={s.label}>{name}</span>
      <span className={s.percentage}>{value}</span>
    </li>
  );
};

export default Item;
