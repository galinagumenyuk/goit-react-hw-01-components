import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import Item from "./Item";

const Statistics = ({ title, stats }) => (
  <div>
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map((stat) => (
          <Item
            key={stat.id}
            name={stat.label}
            id={stat.id}
            value={stat.percentage}
          />
        ))}
      </ul>
    </section>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;
