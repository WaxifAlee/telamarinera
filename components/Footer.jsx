import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import footerStyles from "../styles/Footer.module.css";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={footerStyles.wrapper}>
      <div className={footerStyles.container}>
        <span>
          <FontAwesomeIcon icon={faMailBulk} /> :
          <code> staffaelamarinera@gmail.com </code>
          <br />
          <FontAwesomeIcon icon={faPhone} /> :<code> 938533678 </code>
        </span>

        <span style={{ textAlign: "center" }}>
          All Rights Reserved <br />
          <code>2022-2023</code>
        </span>

        <span style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "Coldiac" }}>Telamarinera</h1>
          <p>- CAFE & RESTURANT -</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
