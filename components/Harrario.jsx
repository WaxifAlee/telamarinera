import React from "react";
import harrarioStyles from "../styles/Harrario.module.css";
import Cards from "./Cards";

import {
  faPlateWheat,
  faBowlFood,
  faClock,
  faPhone,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Harrario = () => {
  return (
    <div id="harrario" className={harrarioStyles.wrapper}>
      <div className={harrarioStyles.container}>
        <h2>
          <u> HERE TO SERVE YOU WITH THE BEST! </u>
          {<FontAwesomeIcon icon={faPlateWheat} />}{" "}
        </h2>
      </div>
      <div className={harrarioStyles.cardsWrapper}>
        <div className={harrarioStyles.card}>
          <h2> Quality Food {<FontAwesomeIcon icon={faBowlFood} />} </h2>
          <p>
            The Only thing we never compromise on is the quality of our food.{" "}
            <br />
            Made out of fresh vegetables and meat, delivered directly from
            farms.
          </p>
        </div>
        <div className={harrarioStyles.card}>
          <h2>Hours Open {<FontAwesomeIcon icon={faClock} />} </h2>
          <p>
            - Open Kitchen - From 11:00 a.m. to 12:00 a.m. So feel free to pay
            us a visit at any day of the week <br /> and let us serve you with
            our variety of dishes.
          </p>
        </div>
        <div style={{ borderRight: "none" }} className={harrarioStyles.card}>
          <h2>Reach Out on Us {<FontAwesomeIcon icon={faPhone} />} </h2>
          <p>
            You can contact us for booking a table or asking out at anytime of
            the day through following channels.
            <br />
            <FontAwesomeIcon icon={faMailForward} />
            <u>
              <a href="mailto:stafftelamarinera@gmail.com">
                {" "}
                1. Send an E-Mail
              </a>
            </u>
            <br />
            <FontAwesomeIcon icon={faPhone} />
            <u>
              <a href="tel:938533678 "> 2. Make a Call</a>
            </u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Harrario;
