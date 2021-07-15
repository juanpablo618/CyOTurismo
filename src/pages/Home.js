import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import whatsappImageJuan from "../images/contactoWhatsappJuan.png";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Alojamientos en Córdoba"
          subtitle="tenemos todas las opciones para su comodidad. Departamentos Temporarios en Córdoba"
        >
          <Link to="/rooms" className="btn-primary">
            Nuestros Alojamientos
          </Link>


          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <a href="https://wa.me/543513220999?text=Me%20gustaría%20saber%20alojamiento%20en%20Córdoba%20" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
        
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
