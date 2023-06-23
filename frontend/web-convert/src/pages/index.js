import React from "react";
import Hero from "../components/Hero/hero";
import Options from "../components/Hero/options";
import Featured from "../components/Product/Featured";
import FrameInfo from "../components/Info/FrameInfo";
import PlaqueInfo from "../components/Info/PlaqueInfo";
import Process from "../components/Info/Process";
import Reviews from "../components/Info/Reviews";
import Footer from "../components/Footer/footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Options />
      <Featured />
      <FrameInfo />
      <PlaqueInfo />
      <Process />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
