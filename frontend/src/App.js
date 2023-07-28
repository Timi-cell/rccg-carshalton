import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { MdOutlineArrowUpward } from "react-icons/md";
import History from "./pages/History";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhotoGallery from "./pages/PhotoGallery";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddMemberForm from "./pages/AddMemberForm";
import EditMemberForm from "./pages/EditMemberForm";
import Layout from "./components/Layout";

const App = () => {
  const [display, setDisplay] = useState("none");

  const scrollFunc = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  window.onscroll = function () {
    scrollFunc();
  };
  const TopFunc = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <>
      <BrowserRouter>
        <button
          onClick={TopFunc}
          className={`px-2 py-3 hidden fixed md:bottom-32 bottom-10 right-5 z-50 cursor-pointer bg-blue-500 text-white border-2 border-blue-500 rounded-md transition-all delay-100 ease-in hover:bg-red-700  hover:border-red-700 focus:bg-green-800 focus:border-green-800 ${
            display === "none" ? "" : "show"
          }`}
        >
          <MdOutlineArrowUpward size={25} color="#fff" />
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/add-member"
            element={
              <Layout>
                <AddMemberForm />
              </Layout>
            }
          />
          <Route
            path="/edit-member/:id"
            element={
              <Layout>
                <EditMemberForm />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
