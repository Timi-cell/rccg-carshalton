import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EventBlock } from "../components/Blocks";
import Two from "../assets/cs2.jpeg";
import Nine from "../assets/cs9.jpeg";
import Ten from "../assets/cs10.jpeg";
import Eleven from "../assets/cs11.jpeg";
import Twelve from "../assets/cs12.png";
import Thirteen from "../assets/cs13.jpeg";

const Events = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <Header />
      <section className="bg-light py-8">
        <div className="px-4 md:px-8">
          <h1 className="underline text-2xl w-full sm:text-3xl md:text-4xl text-center">
            OUR SERVICES SCHEDULE
          </h1>
          <h2 className="text-lg md:text-xl mt-4">
            You can Join us for face to face service at Riverside Community
            Centre every Sunday as well as Virtually on Zoom(ID:-379-418-0848)
          </h2>
          <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-8 place-items-center mt-8">
            <EventBlock
              image={Two}
              heading={"Sunday School"}
              text={
                "Join us every Sunday from 09:30am, for  face to face service @Riverside Community Centre or Virtually on Zoom"
              }
            />
            <EventBlock
              image={Nine}
              heading={"Prayer Meeting"}
              text={
                "Join us every wednesday virtually on Zoom for Prayer meeting from 20:30-21:30pm"
              }
            />
            <EventBlock
              image={Ten}
              heading={"Night Vigil"}
              text={
                "Join us every last Friday of the month. Join us virtually for our monthly night with the King with divine testimonies abounding from 11:00pm-12:30am"
              }
            />
            <EventBlock
              image={Eleven}
              heading={"Childrens' Service (Ages 0-12)"}
              text={"Join us every Sunday  @Riverside Community Centre"}
            />
            <EventBlock
              image={Twelve}
              heading={"Single & Marriage Seminar"}
              text={"Join us @Riverside Community Centre"}
            />
            <EventBlock
              image={Thirteen}
              heading={"Community Outreach"}
              text={
                "Our community outreaches is targeted to show love to those in our community that needs resources e.g. food, Homeless, Vulnerable etc."
              }
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
