import React from "react";
import PropTypes from "prop-types";
import s from "./Profile.module.css";

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="avatar" className={s.avatar} />
        <p className={s.name}> {username} </p>
        <p className={s.tag}> @{tag} </p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
