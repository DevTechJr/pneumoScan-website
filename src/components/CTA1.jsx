import React from "react";
import lungs from "./ctaLungs.png";
import { Link } from "react-router-dom";
import { BiCog, BiCategory } from "react-icons/bi";
import { HiCursorClick } from "react-icons/hi";
import { GrTechnology } from "react-icons/gr";
import { GoSettings } from "react-icons/go";
import { FaLungsVirus } from "react-icons/fa";

const CTA1 = () => {
  return (
    <section class="overflow-hidden bg-primary-content sm:grid sm:grid-cols-2 w-full rounded-2xl">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Don't let pneumonia sneak up on you - detect it early with{" "}
            <span className="text-primary font-bold">
              {/* <FaLungsVirus className="text-primary text-3xl font-semibold mx-2" />{" "} */}
              PneumoScan™
            </span>
          </h2>

          <p class="hidden text-primary-focus md:mt-4 md:block font-medium text-md">
            PneumoScan is an online app designed that uses AI to
            detect variants of pneumonia from X-ray images. It allows users to
            upload an xray scan of the chest and get a free prediction about the
            presence of pneumonia. <br /> <br />
            The app is powered by a machine learning model that has been trained
            on a public database of X-ray images. The web application has a web
            interface for users to upload images to. Predictions are made from
            the backend. The purpose of this project is to create a free and
            accessible medical solution to healthcare professionals for a better
            diagnosis of Pneumonia.
          </p>

          <div class="mt-4 md:mt-8 w-full md:flex-row flex-col flex items-center justify-between">
            <button className=" md:w-3/5 w-full mr-0 md:mr-1 md-my-0 my-2 h-full drop-shadow-xl hover:-translate-y-2 transition linear duration-300">
              <Link
                to={"/pneumoScan"}
                className="hover:text-white text-white font-bold btn btn-secondary mx-2 flex items-center"
              >
                <HiCursorClick className="text-white text-3xl font-bold mx-2" />{" "}
                Detect Pneumonia Now!
              </Link>
            </button>
            <button className="md:w-2/5 w-full md:ml-1 ml-0 md-my-0 my-2 h-full drop-shadow-xl hover:-translate-y-2 transition linear duration-300">
              <Link
                to={"/hiw"}
                className="hover:text-white text-white font-bold btn btn-primary mx-2 flex items-center"
              >
                <GoSettings className="text-white  text-3xl font-bold mx-2" />{" "}
                HOW IT WORKS
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <img
          alt="Student"
          src="https://i.ibb.co/RPrvL6d/cta-Lungs-Improved.png"
          class=" w-5/6 h-full hidden md:block"
        />
      </div>
    </section>
  );
};

export default CTA1;
