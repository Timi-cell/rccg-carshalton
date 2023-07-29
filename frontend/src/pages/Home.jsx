import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../assets/cs1.jpeg";
import Img1 from "../assets/cs2.jpeg";
import Img2 from "../assets/cs6.jpeg";
import Img3 from "../assets/cs7.jpeg";
import Img4 from "../assets/cs3.jpeg";
import Img5 from "../assets/cs4.jpeg";
import Img6 from "../assets/cs8.jpeg";
import Img7 from "../assets/cs5.jpeg";
import { Link } from "react-router-dom";
import { MinistryBlock, SimpleBlock } from "../components/Blocks";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollL = () => {
    const scrollsnap = document.querySelector(".ministry");
    scrollsnap.scrollBy(-350, 0);
  };
  const scrollR = () => {
    const scrollsnap = document.querySelector(".ministry");
    scrollsnap.scrollBy(350, 0);
  };
  return (
    <main>
      <Header />
      {/* banner */}
      <section className="relative">
        <div className="w-full h-[32rem]">
          <img src={Banner} alt="banner" className="w-full h-full" />
        </div>
        <div className="h-full w-full banner absolute top-0">
          <div className="text-2xl absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 text-center text-white sm:text-3xl md:text-5xl w-full px-4 md:px-8 py-4">
            <h1 className="animate__animated animate__zoomIn  text-2xl sm:text-3xl md:text-4xl">
              WELCOME TO THE REDEEMED CHRISTIAN CHURCH OF GOD CARSHALTON <br />{" "}
              WHERE JESUS IS LORD!
            </h1>
            <h2 className="italic text-2xl sm:text-3xl md:text-4xl text-green-700 mt-2 animate__animated animate__zoomIn">
              2023 OUR YEAR OF COVENANT SETTLEMENT
            </h2>
            <Link to="/events">
              <button className="p-3 mt-2 lg:text-lg text-sm sm:text-base bg-blue-900 text-white border-2 border-blue-900 rounded-md transition-all delay-100 ease-in hover:bg-red-900 hover:border-red-900">
                View Events
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* quick info */}
      <section className="bg-gray-300 flex flex-col md:flex-row px-4 md:px-8 justify-center items-center gap-12 pt-8 pb-0">
        <SimpleBlock
          heading={"Round-the-clock Support"}
          text={
            "You can contact our Ordained ministers round the clock for support through our contact page"
          }
        />
        <SimpleBlock
          heading={"Community Partnership"}
          text={
            "We partner with Sutton Night Watch Homeless Charity and the Riverside Community Centre to bring relief to the homeless"
          }
        />
        <SimpleBlock
          heading={"Our Opening Hours"}
          text={
            "Every Sunday 09:30 am -11:00 pm @ Riverside Community Centre and virtually on Zoom simultaneously ID:379-418-0848"
          }
        />
      </section>
      {/* our ministries */}
      <section className="py-8 relative px-4 md:px-8 bg-gray-300">
        <h2 className="text-center text-2xl text-green-800">OUR MINISTRIES</h2>
        <div className="flex flex-row justify-center items-center mt-5">
          <div className="flex absolute buttons w-full -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 flex-row justify-between items-center px-4">
            <p
              className="text-center p-3 text-xl md:text-2xl cursor-pointer text-white bg-blue-800 w-12 h-12 flex flex-row items-center justify-center"
              onClick={scrollL}
            >
              &lt;
            </p>
            <p
              className="text-center text-xl md:text-2xl p-3 text-white cursor-pointer bg-blue-800 w-12 h-12 flex flex-row items-center justify-center"
              onClick={scrollR}
            >
              &gt;
            </p>
          </div>
          <div className="ministry w-full">
            <MinistryBlock
              image={Img1}
              heading={"Sunday School"}
              verse={`Matthew 28:29-30 "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,  and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.”`}
              text={
                "The Sunday school ministry is a ministry that teaches the undiluted word of God in a very simple and practical way that makes daily christian living fruitful."
              }
            />
            <MinistryBlock
              image={Img2}
              heading={"Prayer and Intercessory"}
              verse={`Jeremiah 29:13-14 "And you will seek Me and find Me, when you search for Me with all your heart. I will be found by you, says the Lord".`}
              text={
                "In this ministry we pray for the will of God to be done in people's lives, for his kingdom to come in our nation and for the manifestation of God's promises through his word. John 16:24"
              }
            />
            <MinistryBlock
              image={Img3}
              heading={"Mentoring"}
              verse={`2 Timothy 2:2 "The things which you have heard from me in the presence of many witnesses, entrust these to faithful men who will be able to teach others" `}
              text={`Rccg Carshalton's mentors plan is to offer unique training, mentorship and coaching through seminars, workshops that will reveal purpose in the lives of our Teenagers and Youth. The program plans to bring awareness to young peoples’ thinking, communication, behaviour patterns, gifts and hidden talents`}
            />
            <MinistryBlock
              image={Img4}
              heading={"I-care and Follow up "}
              verse={`Psalm 84:10 " I would rather be a doorkeeper in the house of my God than dwell in the tents of wickedness"`}
              text={`The I-care and follow up  are the first face of the Church and are very proud to welcome and serve you in an hospitable way. You meet us before anyone else. This is why serving you and doing it very satisfactorily is one of top most responsibilities in this Church. The ministry  caters for all the needy in the church, they provide health services, food, provisions etc...`}
            />
            <MinistryBlock
              image={Img5}
              heading={"Choir"}
              verse={`Psalm 96:1 "Sing to the LORD a new song; sing to the LORD, all the earth"`}
              text={`Our main aim is to worship God in Spirit and in truth John4:24 through our Ministrations. We meet every last Friday of the week and If you feel you have what it takes to be part of us please Join in and we would be glad to have you.`}
            />
            <MinistryBlock
              image={Img6}
              heading={"Media"}
              verse={`Mark 13:10 "The gospel must first be preached to all the nations."`}
              text={`Join our live broadcast on Zoom every Sunday with Zoom ID:379-418-0848`}
            />
            <MinistryBlock
              image={Img7}
              heading={"Children, Youth and Singles"}
              verse={`2 Tim. 3:15 "And that from childhood you have known the Holy Scriptures, which are able to make you wise for salvation through faith which is in Christ Jesus".`}
              text={`Our mission is to raise a generation that fears, love and follows God, catering for the spiritual needs of children, teenagers  and singles in a safe and loving  environment. Proverbs 22:6. Join us for children service every Sunday. 10am-11:00am`}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
