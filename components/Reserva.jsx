import React, { useRef, useState } from "react";
import reservaStyles from "../styles/Reserva.module.css";
import emailjs from "@emailjs/browser";

const Reserva = () => {
  const form = useRef();
  const [mailConfirm, toggleMailConfirm] = useState("");
  const [confirmColor, toggleConfirmColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_69905zr",
        "template_btcq3x8",
        form.current,
        "VyZCqjVcCJRElaHFf"
      )
      .then(
        (result) => {
          toggleMailConfirm(
            "Thank You! We have successfully recieved your order and will get back to you ASAP!"
          );
          toggleConfirmColor("green");
        },
        (error) => {
          toggleMailConfirm(
            "Oops! Something went wrong, the message was not sent. Please try again in a moment"
          );
          toggleConfirmColor("red");
        }
      );
  };
  return (
    <div id="reserva" className={reservaStyles.wrapper}>
      <div className={reservaStyles.container}>
        <h2>RESERVATIONS</h2>
        <hr color="#361500" style={{ width: "80%" }} />

        <form
          autoComplete="off"
          ref={form}
          onSubmit={sendEmail}
          className={reservaStyles.form}
        >
          <h2 style={{ fontFamily: "Poppins" }}> Book Your Seats!</h2>
          <hr color="#1C0A00" style={{ width: "30%" }} />
          <input required placeholder="Nombre *" type="text" name="fromName" />
          <input required placeholder="Email *" type="text" name="fromEmail" />
          <br />
          <input
            required
            placeholder="Telefono *"
            type="text"
            name="telephone"
            style={{ width: "100%" }}
          />
          <input
            style={{ width: "100%" }}
            required
            type="date"
            name="reservationDate"
          />
          <br />
          <input
            style={{ width: "100%" }}
            required
            placeholder="Time"
            type="time"
            name="timing"
          />
          <input
            style={{ width: "100%" }}
            required
            placeholder="Agregar respuesta aqui *"
            type="number"
            name="attendees"
          />
          <br />
          <textarea
            name="specialInstructions"
            id=""
            cols="30"
            rows="10"
            style={{ resize: "none", width: "100%" }}
            placeholder="Instrucciones Especiales (opcional)"
          ></textarea>
          <br />
          <input type="submit" value="Book Now!" />
          <p style={{ color: confirmColor }}>{mailConfirm}</p>
        </form>
      </div>
    </div>
  );
};

export default Reserva;
