import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-5 mt-5 p-10 bg-primary rounded-xl">
      <div className="w-full flex lg:p-14 flex-col items-center p-10 bg-white rounded-xl">
        <div className="lg:divider">
          <h1 className="font-bold text-4xl text-primary text-center">
            How{" "}
            <span className="text-accent font-bold ml-2">
              {/* <FaLungsVirus className="text-primary text-3xl font-semibold mx-2" />{" "} */}
              PneumoScan™
            </span>{" "}
            Is Breaking Barriers
          </h1>
        </div>

        <div className="steps flex w-full justify-evenly mt-20 lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col">
          <div class="flex justify-center flex flex-col lg:flex-row">
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-solid border-4 border-primary mx-8 lg:my-0 my-10">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg lg:h-64 h-30 w-full"
                  src="https://guardian.ng/wp-content/uploads/2016/03/Internet-IPv6.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-primary text-xl font-medium my-5 divider">
                  Internationally Accessible
                </h5>
                <p class="text-primary-focus text-base mb-4 font-medium text-center">
                  PneumoScan is accessible online, which means that users can
                  access it from anywhere with an internet connection. This can
                  be particularly useful for people who live in remote or
                  underserved areas where access to healthcare resources may be
                  limited.
                </p>
              </div>
            </div>
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-solid border-4 border-accent mx-8 lg:my-0 my-10">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg lg:h-64 h-30 w-full"
                  src="https://global-uploads.webflow.com/5ec4696a9b6d337d51632638/603ec732867d8566474be592_Machine%20Learning%20Accuracy%20Using%20Synthetic%20Data.png"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-accent text-xl font-medium my-5 divider">
                  Reduced Misdiagnosis
                </h5>
                <p class="text-accent-focus text-base mb-4 font-medium text-center">
                  PneumoScan has a high model accuracy of 92.3%, which means
                  that it is able to correctly identify pneumonia in X-ray
                  images with a high degree of accuracy. This can help to reduce
                  the risk of misdiagnosis and ensure that people receive the
                  appropriate treatment for their condition.
                </p>
              </div>
            </div>
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-solid border-4 border-primary mx-8 lg:my-0 my-10">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg lg:h-64 h-30 w-full"
                  src="https://telehealth.hhs.gov/assets/img/about-telehealth.svg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-primary text-xl font-medium my-5 divider">
                  No-Cost Solution
                </h5>
                <p class="text-primary-focus text-base mb-4 font-medium text-center">
                  PneumoScan is free for everyone to use, which means that it is
                  accessible to people regardless of their financial resources.
                  People who may not have the means to pay for expensive medical
                  tests or treatments can still take charge of their health and
                  seek out early detection and treatment for pneumonia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
