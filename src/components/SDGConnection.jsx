import React from "react";
import { Link } from "react-router-dom";
import { HiCursorClick } from "react-icons/hi";
import { GoSettings } from "react-icons/go";
import { FaBookMedical } from "react-icons/fa";

const SDGConnection = () => {
  return (
    <div className="w-full">
      <section className="rounded-2xl w-full">
        <div class="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8 ">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
            <div class="bg-primary p-8 md:p-12 lg:px-16 lg:py-24 rounded-2xl">
              <div class="mx-auto max-w-xl text-center">
                <h2 class="text-2xl font-bold text-white md:text-3xl flex flex-row items-center justify-center">
                  UN SDG #3 &{" "}
                  <span className="text-primary-content font-bold ml-2">
                    {/* <FaLungsVirus className="text-primary text-3xl font-semibold mx-2" />{" "} */}
                    PneumoScan™
                  </span>
                </h2>

                <p class="hidden text-white/90 sm:mt-4 sm:block">
                  <div className="p-3 rounded-2xl bg-primary-content text-primary text-md font-medium">
                    UN SDG #3, or the United Nations Sustainable Development
                    Goal #3, is to "ensure healthy lives and promote well-being
                    for all at all ages." PneumoScan could potentially
                    contribute to this goal by providing an accessible and
                    accurate way for people to detect pneumonia, which is a
                    serious respiratory illness that can be life-threatening if
                    not treated promptly. Early detection and treatment of
                    pneumonia can help to reduce morbidity and mortality rates,
                    particularly in vulnerable populations such as young
                    children and the elderly.
                    <br /> <br /> This could aid in the implementation of
                    effective prevention and control measures, such as
                    vaccination programs and public health campaigns.
                    Additionally, the use of artificial intelligence and machine
                    learning in the development of PneumoScan could potentially
                    help to build capacity in these areas in developing
                    countries.
                  </div>
                </p>

                <div class="mt-4 md:mt-8 w-full flex items-center justify-between">
                  <button className="w-1/2 mr-1 h-full">
                    <Link
                      to={"/pneumoScan"}
                      className="hover:text-white text-white font-bold btn btn-secondary mx-2 flex items-center"
                    >
                      <HiCursorClick className="text-white text-3xl font-bold mx-2" />{" "}
                      Detect Pneumonia Now!
                    </Link>
                  </button>
                  <button className="w-1/2 ml-1 h-full">
                    <Link
                      to={"/pneumonia"}
                      className="hover:text-white text-white font-bold btn btn-accent hover:btn-accent-focus mx-2 flex items-center justify-center"
                    >
                      <FaBookMedical className="text-white  text-3xl font-bold mx-2" />{" "}
                      Learn About Pneumonia
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Student"
                src="https://www.gatesfoundation.org/-/media/gfo/4our-work/programs/global-health/globalhealth_pneumonia_ga11126852_mm561381_3200x1800.jpg"
                class="h-40 w-full object-cover sm:h-56 md:h-full rounded-2xl"
              />

              <img
                alt="Student"
                src="https://www.lshtm.ac.uk/sites/default/files/SDG-HAW-graphic-850.jpg"
                class="h-40 w-full object-cover sm:h-56 md:h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDGConnection;
