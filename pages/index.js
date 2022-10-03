import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Harrario from "../components/Harrario";
import Footer from "../components/Footer";
import Reserva from "../components/Reserva";

const index = () => {
  return (
    <>
      <Head>
        <title>Telamarinera</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Hero />
      <Harrario />
      <Location />
      <Reserva />
      <Footer />
    </>
  );
};

export default index;
