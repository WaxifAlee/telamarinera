import React from "react";
import heroStyles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={heroStyles.wrapper}>
        <div className={heroStyles.container}>
          <h2>
            {" "}
            <span style={{ position: "relative", top: "-18px" }}>|</span>{" "}
            Telamarinera{" "}
            <span style={{ position: "relative", top: "8px" }}>|</span>{" "}
          </h2>
          <h3>{"[ COMER - EN VIVO - REPETIR ]"}</h3>

          <a href="#" className={heroStyles.callToAction}>
            Letter
          </a>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          padding: "10px",
          fontSize: "large",
          fontFamily: "Poppins",
          fontWeight: "bold",
        }}
      >
        <q style={{ fontFamily: "Coldiac" }}>
          <i>el ingrediente secreto es siempre el amor</i>
        </q>
      </p>
    </>
  );
};

export default Hero;
