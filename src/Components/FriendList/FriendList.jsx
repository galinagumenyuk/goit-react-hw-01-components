import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import Item from "./Item";

const FriendList = ({ friends }) => (
  <div>
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <Item
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
