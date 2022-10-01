import React from "react";
import locationStyles from "../styles/Location.module.css";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Location = () => {
  return (
    <div id="direccion" className={locationStyles.wrapper}>
      <div className={locationStyles.container}>
        <h1>
          <FontAwesomeIcon icon={faLocationArrow} /> <i> Direccion </i>
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6648.406074394467!2d72.64057159423825!3d33.574077223737966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df74592db70997%3A0xc66e0810e2e8d04e!2zMzPCsDM0JzI2LjciTiA3MsKwMzgnNDEuOCJF!5e0!3m2!1sen!2s!4v1664625414121!5m2!1sen!2s"
          width="350"
          height="300"
          style={{ border: 2 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={locationStyles.container}>
        <h3>House No 2</h3>
        <p>Abdullah Street, Stadium Road, Fateh Jang</p>
        <p>Dist Attock, 43350</p>
        <a
          target={"_blank"}
          href="https://www.google.com/maps/place/33%C2%B034'26.7%22N+72%C2%B038'41.8%22E/@33.5740772,72.6405716,16z/data=!4m6!3m5!1s0x38df74592db70997:0xc66e0810e2e8d04e!7e2!8m2!3d33.5740772!4d72.644949"
        >
          View On Maps
        </a>
      </div>
    </div>
  );
};

export default Location;
