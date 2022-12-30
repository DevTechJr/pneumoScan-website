import React from "react";
import CTA1 from "../components/CTA1";
import Stats from "../components/Stats";
import SDGConnection from "../components/SDGConnection";
import Steps from "../components/Steps";
import CTA2 from "../components/CTA2";

const Home = () => {
  return (
    <div className="w-full my-8">
      <CTA1 />
      <Stats />
      <SDGConnection />
      <Steps />
      <CTA2 />
    </div>
  );
};

export default Home;
