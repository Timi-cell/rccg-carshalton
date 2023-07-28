import React from "react";
import loaderImage from "../assets/arrows.gif";
import pageLoaderImage from "../assets/rccg-loader.png";
import ReactDOM from "react-dom";
import "../scss/loader.scss";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={pageLoaderImage} alt="Loading..." className="animate-bounce" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="center mb-4">
      <img src={loaderImage} alt="Loading..." className="animate-spin" />
    </div>
  );
};
export default Loader;
