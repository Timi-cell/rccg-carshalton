import React from "react";
import Logo from "../assets/rccg.png";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-8 md:gap-4 px-4 md:px-8 items-center justify-between py-8 bg-blue-900 text-white">
      <div>
        <Link to="/">
          <div className="w-full md:w-16 md:flex-none flex flex-col items-center justify-center">
            <img src={Logo} alt="RCCG logo" className="w-16 md:w-full" />
          </div>
        </Link>
        <p className="mt-3 text-base text-center md:text-left">
          RCCG Carshalton
        </p>
      </div>
      <div className="flex flex-col gap-8 items-center justify-between">
        <div className="flex flex-row justify-between gap-8 items-center cursor-pointer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/rccg.carshalton.3"
          >
            <BsFacebook size={25} color="#fff" />
          </a>
          <a
            href="https://www.instagram.com/rccglionandlamb/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={25} color="#fff" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Rccglionandlamb"
          >
            <BsTwitter size={25} color="#fff" />
          </a>
          <a href="mailto:info@theredeemedchristianchurchofgodcarshalton.org.uk">
            <GrMail size={25} color="#fff" />
          </a>
          <a href="tel:+447908364574">
            <BsFillTelephoneFill size={25} color="#fff" />
          </a>
        </div>
        <p className="text-base">&copy; 2023, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
