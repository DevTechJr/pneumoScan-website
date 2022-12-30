import React from "react";
import { FaLungsVirus, FaViruses } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoSettings } from "react-icons/go";
import { HiCursorClick } from "react-icons/hi";
const CTA2 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-5 mt-5 p-10 bg-primary rounded-xl">
      <div
        className="hero min-h-full py-20 rounded-2xl"
        style={{
          backgroundImage: `url("https://www.riversideonline.com/-/media/patients-and-visitors/healthy-you/covid-lungs.ashx")`,
        }}
      >
        <div className="hero-overlay bg-opacity-90 w-2/3 rounded-2xl "></div>
        <div className="hero-content text-center text-neutral-content w-full">
          <div className="w-full p-5 flex items-center flex-col justify-center">
            <h1 className="mb-5 text-5xl font-bold text-center w-2/3 py-3">
              Say goodbye to guesswork - <br />
              <span className="text-white py-2 block">PneumoScan™</span> is
              here.
            </h1>
            <p className="mb-5 w-2/3 font-medium text-lg">
              With PneumoScan, you can quickly and accurately scan your X-ray
              images for pneumonia, taking charge of your respiratory health and
              detecting the illness early. PneumoScan puts the power of accurate
              pneumonia detection in the palm of your hand, providing a reliable
              and convenient way to take control of your health.
            </p>
            <div class="mt-4 md:mt-8 w-2/3 flex items-center justify-between">
              <button className="w-3/5 mr-1 h-full">
                <Link
                  to={"/pneumoScan"}
                  className="hover:text-white text-white font-bold btn btn-secondary mx-2 flex items-center"
                >
                  <HiCursorClick className="text-white text-3xl font-bold mx-2" />{" "}
                  Detect Pneumonia Now!
                </Link>
              </button>
              <button className="w-2/5 ml-1 h-full">
                <Link
                  to={"/drugSearch"}
                  className="hover:text-white text-white font-bold btn btn-primary mx-2 flex items-center"
                >
                  <FaViruses className="text-white  text-3xl font-bold mx-2" />{" "}
                  WHAT IS PNEUMONIA
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA2;
