import React from "react";
import PropTypes from "prop-types";
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

const FriendList = (friends) => {
  let friendItem = friends.friends.map((friend) => (
    <Item
      key={friend.id}
      name={friend.name}
      avatar={friend.avatar}
      isOnline={friend.isOnline}
    />
  ));
  return (
    <div>
      <ul className={s.friendList}>{friendItem}</ul>
    </div>
  );
};

// FriendList.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(PropTypes.shape),
// };

export default FriendList;
