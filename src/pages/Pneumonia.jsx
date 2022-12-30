import React from "react";
import CTA4 from "../components/CTA4";
import SDGConnection from "../components/SDGConnection";
import WIP from "../components/PneumoniaPage/WIP";
import BPvsVP from "../components/PneumoniaPage/BPvsVP";
import ChildrenImpact from "../components/PneumoniaPage/ChildrenImpact";
import FAQ from "../components/FAQ";

const Pneumonia = () => {
  return (
    <div className="w-full my-8">
      <CTA4 />

      <WIP />
      <BPvsVP />
      <ChildrenImpact />
      <SDGConnection />
      <FAQ />
    </div>
  );
};

export default Pneumonia;
