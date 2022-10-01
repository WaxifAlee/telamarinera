import React from "react";
import cardStyles from "../styles/Card.module.css";

const Card = ({ title, description }) => {
  return (
    <div className={cardStyles.cardWrapper}>
      <div className={cardStyles.cardContainer}>
        <h2>
          <i>
            <u>{title}</u>
          </i>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
