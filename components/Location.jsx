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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338.2257997073414!2d-3.6103482084838876!3d37.0847534469606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fa91b3f687e3%3A0xdac73486e08d70ad!2sCam.%20de%20la%20Ribera%2C%2018152%2C%20Granada%2C%20Spain!5e0!3m2!1sen!2s!4v1664645793300!5m2!1sen!2s"
          width="350"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={locationStyles.container}>
        <h3>Pásseo de la ribera</h3>
        <p>40, Dilar Spain</p>
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
