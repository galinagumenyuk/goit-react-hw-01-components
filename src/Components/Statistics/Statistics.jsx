import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Item = ({ name, value }) => {
  return (
    <li className={s.item}>
      <span className={s.label}>{name}</span>
      <span className={s.percentage}>{value}</span>
    </li>
  );
};

const Statistics = ({ title, stats }) => {
  let statItem = stats.map((stat) => (
    <Item
      key={stat.id}
      name={stat.label}
      id={stat.id}
      value={stat.percentage}
    />
  ));
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>{statItem}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;
