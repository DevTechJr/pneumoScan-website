import React from "react";
import Item from "./Item";

const FAQ = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-primary rounded-2xl flex items-center">
      <div class="w-1/2 max-w-xl sm:mx-auto lg:max-w-2xl p-10 bg-white rounded-2xl drop-shadow-xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-3 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
              FAQ About <span className="text-primary">PneumoScan™</span> :
            </h2>
          </div>
        </div>
        <div class="space-y-4">
          <Item title="What is PneumoScan?">
            PneumoScan is an online app that uses artificial intelligence to
            detect pneumonia from X-ray images. It allows users to upload an
            X-ray image and receive a prediction on whether or not the image
            contains pneumonia.
          </Item>
          <Item title="How does PneumoScan work?">
            PneumoScan uses a deep learning model that has been trained on a
            dataset of X-ray images to make predictions about whether a given
            image contains pneumonia. The model is able to recognize patterns
            and features in the images that are indicative of pneumonia. When a
            user uploads an X-ray image to the app, the model analyzes the image
            and provides a prediction about the presence of pneumonia.
          </Item>
          <Item title="Is PneumoScan accurate?">
            The accuracy of PneumoScan will depend on the quality of the
            inputted X-ray image. It is important to note that PneumoScan is not
            a replacement for a medical diagnosis from a qualified healthcare
            professional. It is intended to be used as a tool to assist with
            diagnosis, and the final decision about a patient's diagnosis should
            always be made by a healthcare professional.
          </Item>
          <Item title="Can I use PneumoScan to diagnose myself or someone I know?">
            No, PneumoScan is not intended for self-diagnosis or diagnosis of
            others. It is a tool that is intended to assist healthcare
            professionals with diagnosis and treatment planning. If you or
            someone you know is experiencing symptoms of pneumonia or any other
            medical condition, it is important to seek medical attention from a
            qualified healthcare professional.
          </Item>
        </div>
      </div>

      <div className="w-1/2  p-3">
        {/* <img
          className="rounded-2xl ml-4 border-solid border-8 border-primary-content hover:-translate-y-3 transition linear duration-300"
          src={
            "https://post.healthline.com/wp-content/uploads/2022/06/doctor-looking-at-chest-x-rays-732-549-feature-thumb.jpg"
          }
        /> */}
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 hover:-translate-y-3 transition linear duration-300 drop-shadow-xl"
              src="https://www.cdc.gov/dotw/pneumonia/images/types_928px.jpg"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 hover:-translate-y-3 transition linear duration-300 drop-shadow-xl"
              src="https://www.news-medical.net/image.axd?picture=2018%2F11%2Fshutterstock_566888527.jpg"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 hover:-translate-y-3 transition linear duration-300 drop-shadow-xl"
              src="https://qtxasset.com/quartz/qcloud5/media/image/fiercebiotech/1592492062/Lunit%20Xray%20AI.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
