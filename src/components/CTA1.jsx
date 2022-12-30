import React from "react";
import lungs from "./ctaLungs.png";
import { Link } from "react-router-dom";
import { BiCog, BiCategory } from "react-icons/bi";
import { HiCursorClick } from "react-icons/hi";
import { GrTechnology } from "react-icons/gr";
import { GoSettings } from "react-icons/go";
import {FaLungsVirus} from "react-icons/fa"

const CTA1 = () => {
  return (
    <section class="overflow-hidden bg-primary-content sm:grid sm:grid-cols-2 w-full rounded-2xl">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Don't let pneumonia sneak up on you - detect it early with {" "}
            <span className="text-primary font-bold">
              {/* <FaLungsVirus className="text-primary text-3xl font-semibold mx-2" />{" "} */}
              PneumoScan™
            </span>
          </h2>

          <p class="hidden text-primary-focus md:mt-4 md:block font-medium text-md">
            PneumoScan is an online app that uses artificial intelligence to
            detect pneumonia from X-ray images. It allows users to upload an
            X-ray image and receive a prediction on whether or not the image
            contains pneumonia. <br /> <br />
            The app uses a deep learning model that has been trained on a
            dataset of X-ray images to make these predictions. The project
            includes a web interface for the app and a back-end server to
            process the predictions made by the model. The purpose of this app
            is to provide an easy and accurate way for everyone to detect
            pneumonia instantly using X-ray images.
          </p>

          <div class="mt-4 md:mt-8 w-full flex items-center justify-between">
            <button className="w-3/5 mr-1 h-full">
              <Link
                to={"/drugSearch"}
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
          class=" w-5/6 h-full"
        />
      </div>
    </section>
  );
};

export default CTA1;
