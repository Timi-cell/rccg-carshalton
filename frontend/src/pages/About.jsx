import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <>
      <Header />
      <section className="bg-light py-8 about">
        <div>
          <h1 className="underline text-2xl w-full sm:text-3xl md:text-4xl text-center">
            ABOUT US
          </h1>
          <div className="mt-5 px-4 md:px-8">
            {/* our beliefs */}
            <div className="mt-5">
              <h2 className="text-xl md:text-2xl">OUR BELIEFS</h2>
              <ol className="ml-5 text-base md:text-lg">
                <li>
                  We believe in the death and resurrection of our Lord Jesus
                  Christ.
                </li>
                <li>We believe in the 2nd coming of our Lord Jesus Christ.</li>{" "}
                <li>We believe in Water Baptism by immersion.</li>
                <li>We believe in the 2nd coming of our Lord Jesus Christ.</li>
                <li>
                  We believe in the Holy Scripture(Bible) as the authority and
                  true word of God.
                </li>
              </ol>
            </div>
            {/* our vision */}
            <div className="mt-5">
              <h2 className="text-xl md:text-2xl">OUR VISION</h2>
              <ul className="ml-5 text-base md:text-lg">
                <li>To make heaven.</li>
                <li>To take as many people with us.</li>{" "}
                <li>
                  To have a member of RCCG in every family of all nations.
                </li>{" "}
                <li>
                  To accomplish No. 1 above, holiness will be our lifestyle.
                </li>
                <li>
                  To accomplish No. 2 and 3 above, we will plant churches within
                  five minutes walking distance in every city and town of
                  developing countries and within five minutes driving distance
                  in every city and town of developed countries.
                </li>{" "}
                <li>
                  We will pursue these objectives until every Nation in the
                  world is reached for the Lord Jesus Christ.
                </li>
              </ul>
            </div>
            {/* our goals and purposes */}
            <div className="mt-5">
              <h2 className="text-xl md:text-2xl">
                OUR GOALS & PURPOSE IN RCCG CARSHALTON
              </h2>
              <ol className="ml-5 text-base md:text-lg">
                <li>To Worship God in Spirit & in truth.</li>{" "}
                <li>
                  To make disciples of all men through wholesome teaching from
                  the bible.
                </li>{" "}
                <li>
                  To see Christ established in Marriages, Homes & Families.
                </li>{" "}
                <li>
                  To impact our community with various outreaches that meets
                  their needs.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
