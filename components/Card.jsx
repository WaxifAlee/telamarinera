import React from "react";
import cardStyles from "../styles/Card.module.css";

const Card = ({ title, description }) => {
  return (
    <div className={cardStyles.wrapper}>
      <div className={cardStyles.container}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
