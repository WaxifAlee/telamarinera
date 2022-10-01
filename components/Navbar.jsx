import React, { useState } from "react";
import navStyle from "../styles/Navbar.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// for brand icons
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import {
  faHome,
  faLocation,
  faClock,
  faReceipt,
  faBook,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [miniNav, toggleMiniNav] = useState(false);

  const icons = [
    {
      icon: faFacebook,
      url: "https://facebook.com/",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com/",
    },
  ];
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: faHome,
    },
    {
      text: "Direccion", // Location
      path: "#direccion",
      icon: faLocation,
    },
    {
      text: "Harrario", // Timing and email
      path: "#harrario",
      icon: faClock,
    },
    {
      text: "Reserva", // Reservation form
      path: "#reserva",
      icon: faReceipt,
    },
    {
      text: "Carta", // Menu Card
      path: "/carta",
      icon: faBook,
    },
  ];
  return (
    <>
      <div className={navStyle.container}>
        <div className="social-icons">
          {icons.map((icon) => (
            <a target={"_blank"} href={icon.url}>
              <FontAwesomeIcon className={navStyle.icons} icon={icon.icon} />
            </a>
          ))}
        </div>
        <div className={navStyle.logo}>
          <Link href={"/"}>Telamarinera</Link>
        </div>
        <div className={navStyle.navLinks}>
          {navLinks.map((link) => (
            <a href={link.path}>
              {link.text} {<FontAwesomeIcon icon={link.icon} />}
            </a>
          ))}
        </div>
      </div>

      {/* <div className={navStyle.miniContainer}>
        <div className={navStyle.logo}>
          <Link href={"/"}>Telamarinera</Link>
        </div>
        <div className={navStyle.navLinks}>
          <button onClick={() => toggleMiniNav(!miniNav)}>
            {" "}
            {<FontAwesomeIcon icon={miniNav ? faTimes : faBars} />}{" "}
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
