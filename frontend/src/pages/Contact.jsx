import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import memberService from "../services/memberService";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [data, setData] = useState(initialState);
  let { name, email, phone, message } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      toast.error("Please fill in all required fields!", {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }

    try {
      await memberService.getMemberMessage(data);
      setData(initialState);
    } catch (error) {
      toast.error("Report could not be sent, please try again!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="bg-green-950 p-4 md:p-8 contact">
        <div className="flex flex-col md:flex-row md:gap-16 gap-4 justify-center items-start">
          <div className="md:w-1/2 w-full text-white">
            <h2 className="text-2xl lg:text-3xl md:text-left text-center">
              Contact us
            </h2>
            <p className="lg:text-base text-xs sm:text-sm leading-5 mt-4">
              Telephone: +447908364574
            </p>{" "}
            <p className="lg:text-base text-xs sm:text-sm leading-5 mt-4">
              E-mail Addresses: inspirationhouse_18@yahoo.com,
              info@theredeemedchristianchurchofgodcarshalton.org.uk
            </p>
            <p className="lg:text-base text-xs sm:text-sm leading-5 mt-4">
              Address: Rccg Carshalton, Riverside Community Centre 113 Culvers
              Avenue, Carshalton, Surrey, SM5 2FJ, United Kingdom
            </p>
          </div>
          <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
                required
                name="name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
                required
                name="email"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
                required
                name="phone"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                cols="20"
                rows="5"
                value={message}
                onChange={handleChange}
                placeholder="Type a message..."
                className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
                name="message"
                required
              ></textarea>
            </div>
            {/* <div className="mt-4 flex flex-row gap-4 items-center">
              <input type="checkbox" id="checkbox" name="checkbox" required />
              <label htmlFor="checkbox">
                I hereby agree that this data will be stored and processed for
                the purpose of establishing contact. I am aware that I can
                revoke my consent at any time.
              </label>
            </div> */}
            <button className="px-6 py-3 mt-4 lg:text-lg text-sm sm:text-base bg-blue-600 text-white rounded-md transition-all delay-100 ease-in hover:bg-blue-800  hover:border-blue-800">
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
