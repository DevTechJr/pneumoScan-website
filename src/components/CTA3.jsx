import React from "react";
import { Link } from "react-router-dom";
import { FaViruses } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

const CTA3 = () => {
  return (
    <section class="bg-primary-content text-white rounded-2xl">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center ">
        <div class="mx-auto max-w-3xl text-center w-full">
          <h1 class=" text-3xl font-bold text-primary sm:text-5xl">
            How{" "}
            <span className="text-accent-content font-bold">
              {/* <FaLungsVirus className="text-primary text-3xl font-semibold mx-2" />{" "} */}
              PneumoScan™
            </span>{" "}
            Works.
          </h1>

          <p class="mx-auto mt-4 max-w-xl text-accent-content sm:text-xl sm:leading-relaxed font-medium">
            PneumoScan™ is an online app that uses artificial intelligence to
            detect pneumonia from X-ray images. Learn more about how it works!
          </p>

          <div class="mt-4 md:mt-8 w-full flex md:flex-row flex-col items-center justify-between">
            <button className="md:w-3/5 w-full md:mr-1 mr-0 md:my-0 my-2 h-full drop-shadow-xl hover:-translate-y-2 transition linear duration-300">
              <Link
                to={"/pneumoScan"}
                className="hover:text-white text-white font-bold btn btn-secondary mx-2 flex items-center"
              >
                <HiCursorClick className="text-white text-3xl font-bold mx-2" />{" "}
                Detect Pneumonia Now!
              </Link>
            </button>
            <button className="md:w-2/5 w-full md:ml-1 ml-0 h-full md:my-0 my-2 drop-shadow-xl hover:-translate-y-2 transition linear duration-300">
              <Link
                to={"/pneumonia"}
                className="hover:text-white text-white font-bold btn btn-primary mx-2 flex items-center"
              >
                <FaViruses className="text-white  text-3xl font-bold mx-2" />{" "}
                WHAT IS PNEUMONIA
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA3;
