import React from "react";
import s from "./FriendList.module.css";

const Item = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span
        className={s.isOnline}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
export default Item;
