import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ReservationForm from "../components/ReservationForm";
const Reservations = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Solicita tu reserva">
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
        </Banner>
      </Hero>
      <ReservationForm />

    </>
  );
};

export default Reservations;
