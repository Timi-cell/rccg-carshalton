import React from "react";
import Logo from "../assets/rccg.png";
import Menu from "../assets/menu.svg";
import CloseMenu from "../assets/cancel.svg";
import { Link, NavLink } from "react-router-dom";
import "../scss/styles.scss";
import ShowOnLogin, { ShowOnLogOut } from "./HiddenLinks";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

const Links = ({ to, title }) => {
  return (
    <NavLink to={to} className={`${activeLink} hover:text-blue-600`}>
      <li>{title}</li>
    </NavLink>
  );
};

const Header = () => {
  const showMenu = () => {
    document.getElementById("menu").style.height = "100%";
  };

  /* Close */
  const closeNav = () => {
    document.getElementById("menu").style.height = "0%";
  };
  return (
    <header className="bg-white py-4 w-full px-4 md:px-8 flex flex-row justify-between gap-4 items-center header">
      <Link to="/">
        <div className="w-16">
          <img src={Logo} alt="RCCG logo" />
        </div>
      </Link>
      <div className="block md:hidden cursor-pointer" onClick={showMenu}>
        <img src={Menu} alt="menu-icon" />
      </div>
      <div className="menu-content" id="menu" onClick={closeNav}>
        <div
          className="md:hidden block close cursor-pointer"
          onClick={closeNav}
        >
          <img src={CloseMenu} alt="close-menu-icon" />
        </div>
        <ul className="md:flex mobile-menu flex-none block flex-row justify-between md:gap-7 lg:gap-9 items-center cursor-pointer">
          <Links to="/" title={"Home"} />
          <Links to="/about-us" title={"About us"} />
          <Links to="/events" title={"Events"} />
          <Links to="/history" title={"History"} />
          <Links to="/contact-us" title={"Contact us"} />
          <Links to="/photo-gallery" title={"Gallery"} />
          <div>
            <ShowOnLogOut>
              <Link to="/login">
                <button className="block lg:text-lg text-base md:hidden px-5 py-2.5 text-green-600 border-2 border-green-600 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-green-600 focus:bg-green-700 focus:text-white">
                  Login
                </button>
              </Link>
            </ShowOnLogOut>
            <ShowOnLogin>
              <Link to="/dashboard">
                <button className="block lg:text-lg text-base md:hidden px-5 py-2.5 text-green-600 border-2 border-green-600 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-green-600 focus:bg-green-700 focus:text-white">
                  Go to Dashboard
                </button>
              </Link>
            </ShowOnLogin>
          </div>
        </ul>
      </div>
      <div className="md:block hidden">
        <ShowOnLogOut>
          <Link to="/login">
            <button className="lg:text-lg text-sm sm:text-base px-5 py-2.5 text-green-600 border-2 border-green-600 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-green-600 focus:bg-green-700 focus:text-white focus:border-green-700">
              Login
            </button>
          </Link>
        </ShowOnLogOut>
        <ShowOnLogin>
          <Link to="/dashboard">
            <button className="lg:text-lg text-sm sm:text-base px-5 py-2.5 text-green-600 border-2 border-green-600 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-green-600 focus:bg-green-700 focus:text-white focus:border-green-700">
        Dashboard
            </button>
          </Link>
        </ShowOnLogin>
      </div>
    </header>
  );
};

export default Header;
