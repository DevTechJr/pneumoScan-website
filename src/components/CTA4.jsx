import React from "react";
import { Link } from "react-router-dom";
import { HiCursorClick } from "react-icons/hi";
import { GoSettings } from "react-icons/go";

const CTA4 = () => {
  return (
    <div>
      <section class="overflow-hidden bg-[url(https://blogs.biomedcentral.com/on-health/wp-content/uploads/sites/8/2019/11/upper-body-944557_1280-620x342.jpg)] bg-cover bg-center bg-no-repeat rounded-2xl w-full">
        <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="w-full text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white md:text-left text-center sm:text-3xl md:text-5xl">
              What Is Pneumonia?
            </h2>

            <p class="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Learn about Pneumonia, it's variations, the impacts it has and how
              PneumoScan™ is working to fight it.
            </p>

            <div class="mt-4 md:mt-8 md:w-1/2 w-full flex md:flex-row flex-col items-center justify-between">
              <button className="md:w-3/5 w-full md:mr-1 md:my-0 my-2 h-full">
                <Link
                  to={"/pneumoScan"}
                  className="hover:text-white text-white font-bold btn btn-secondary mx-2 flex items-center"
                >
                  <HiCursorClick className="text-white text-lg md:text-2xl font-bold mx-2" />{" "}
                  Detect Pneumonia Now!
                </Link>
              </button>
              <button className="md:w-2/5 w-full md:ml-1 md:my-0 my-2 h-full">
                <Link
                  to={"/hiw"}
                  className="hover:text-white text-white font-bold btn btn-primary mx-2 flex items-center"
                >
                  <GoSettings className="text-white text-lg md:text-2xl font-bold mx-2" />{" "}
                  HOW IT WORKS
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA4;
