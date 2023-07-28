/*
God's heritage
RCCG CARSHALTON'S 2ND ANNIVERSARY
Ministration by Pastor Adegbenro
RCCG CARSHALTON'S INAGUARATION SERVICE
Inaguration service
Inaguration of Rccg Carshalton
Inaguration
Carshalton Carnival
Minstrels ministering to the elderly 2019
Christmas Outreach 2019
Christmas Songs Of Praise
Rccg Carshalton's Christmas Carol 2019
Rccg Carshalton's Christmas Party 2019
Ladies' catchup @RCCG Christmas Party 2019
Women's conference beauty stand
Women's conference 2020
Women's conference health checkup desk
Women's conference 2020
Women's conference 2020
Women's conference health checkup desk
Women's conference 2020
Women's conference
Love Christmas Outreach @Riverside community centre
Love Christmas Outreach to the homeless @Riverside community centre
Day out in the park
Everybody look u look u
Graduation thanksgiving
Stasia @50
Love Feast
Park day out 2021
Family of God
Officia Deserunt
*/

// grid grid-cols-1 grid-rows-32 md:grid-cols-2 md:grid-rows-16 lg:grid-cols-4 lg:grid-rows-8 gap-4 place-items-center mt-8
// flex flex-row flex-wrap justify-around items-center gap-4

import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PhotoBlock } from "../components/Blocks";
import Fourteen from "../assets/cs14.jpeg";
import Fifteen from "../assets/cs15.jpeg";
import Sixteen from "../assets/cs16.jpeg";
import Seventeen from "../assets/cs17.jpeg";
import Eighteen from "../assets/cs18.jpeg";
import Nineteen from "../assets/cs19.jpeg";
import Twenty from "../assets/cs20.jpeg";
import TwentyOne from "../assets/cs21.jpeg";
import TwentyTwo from "../assets/cs22.jpeg";
import TwentyThree from "../assets/cs23.jpeg";
import TwentyFour from "../assets/cs24.jpeg";
import TwentyFive from "../assets/cs25.jpeg";
import TwentySix from "../assets/cs26.jpeg";
import TwentySeven from "../assets/cs27.jpeg";
import TwentyEight from "../assets/cs28.jpeg";
import TwentyNine from "../assets/cs29.jpeg";
import Thirty from "../assets/cs30.jpeg";
import ThirtyOne from "../assets/cs31.jpeg";
import ThirtyTwo from "../assets/cs32.jpeg";
import ThirtyThree from "../assets/cs33.jpeg";
import ThirtyFour from "../assets/cs34.jpeg";
import ThirtyFive from "../assets/cs35.jpeg";
import ThirtySix from "../assets/cs36.jpeg";
import ThirtySeven from "../assets/cs37.jpeg";
import ThirtyEight from "../assets/cs38.jpeg";
import ThirtyNine from "../assets/cs39.jpeg";
import Fourty from "../assets/cs40.jpeg";
import FourtyOne from "../assets/cs41.jpeg";
import FourtyTwo from "../assets/cs42.jpeg";
import FourtyThree from "../assets/cs43.jpeg";
import FourtyFour from "../assets/cs44.jpeg";
import FourtyFive from "../assets/cs45.jpeg";
const PhotoGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="bg-light py-8">
        <div className="px-4 md:px-8">
          <h1 className="underline text-2xl w-full sm:text-3xl md:text-4xl text-center">
            BLESSED GENERATION
          </h1>
          <div className="grid grid-cols-1 grid-rows-32 md:grid-cols-2 md:grid-rows-16 lg:grid-cols-4 lg:grid-rows-8 gap-5 place-items-center my-8">
            <PhotoBlock image={Fourteen} title={"God's Heritage"} />
            <PhotoBlock
              image={Fifteen}
              title={"RCCG CARSHALTON'S 2ND ANNIVERSARY"}
            />
            <PhotoBlock
              image={Sixteen}
              title={"Ministration by Pastor Adegbenro"}
            />
            <PhotoBlock
              image={Seventeen}
              title={"RCCG CARSHALTON'S INAGUARATION SERVICE"}
            />
            <PhotoBlock image={Eighteen} title={"Inaguration service"} />
            <PhotoBlock
              image={Nineteen}
              title={"Inaguration of Rccg Carshalton"}
            />
            <PhotoBlock image={Twenty} title={"Inaguration"} />
            <PhotoBlock image={TwentyOne} title={"Carshalton Carnival"} />
            <PhotoBlock
              image={TwentyTwo}
              title={"Minstrels ministering to the elderly 2019"}
            />
            <PhotoBlock image={TwentyThree} title={"Christmas Outreach 2019"} />
            <PhotoBlock
              image={TwentyFour}
              title={"Christmas Songs Of Praise"}
            />
            <PhotoBlock
              image={TwentyFive}
              title={"Rccg Carshalton's Christmas Carol 2019"}
            />
            <PhotoBlock
              image={TwentySix}
              title={"Rccg Carshalton's Christmas Party 2019"}
            />
            <PhotoBlock
              image={TwentySeven}
              title={"Ladies' catchup @RCCG Christmas Party 2019"}
            />
            <PhotoBlock
              image={TwentyEight}
              title={"Women's conference beauty stand"}
            />
            <PhotoBlock image={TwentyNine} title={"Women's conference 2020"} />
            <PhotoBlock
              image={Thirty}
              title={"Women's conference health checkup desk"}
            />
            <PhotoBlock image={ThirtyOne} title={"Women's conference 2020"} />
            <PhotoBlock image={ThirtyTwo} title={"Women's conference 2020"} />
            <PhotoBlock
              image={ThirtyThree}
              title={"Women's conference health checkup desk"}
            />
            <PhotoBlock image={ThirtyFour} title={"Women's conference 2020"} />
            <PhotoBlock image={ThirtyFive} title={"Women's conference"} />
            <PhotoBlock
              image={ThirtySix}
              title={"Love Christmas Outreach @Riverside community centre"}
            />
            <PhotoBlock
              image={ThirtySeven}
              title={
                "Love Christmas Outreach to the homeless @Riverside community centre"
              }
            />
            <PhotoBlock image={ThirtyEight} title={"Day out in the park"} />
            <PhotoBlock image={ThirtyNine} title={"Everybody look u look u"} />
            <PhotoBlock image={Fourty} title={"Graduation thanksgiving"} />
            <PhotoBlock image={FourtyOne} title={"Stasia @50"} />
            <PhotoBlock image={FourtyTwo} title={"Love Feast"} />
            <PhotoBlock image={FourtyThree} title={"Park day out 2021"} />
            <PhotoBlock image={FourtyFour} title={"Family of God"} />
            <PhotoBlock image={FourtyFive} title={"Officia Deserunt"} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PhotoGallery;
