import React from "react";
import { SiTensorflow, SiStreamlit, SiReact } from "react-icons/si";

const MachineLearning = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-secondary-content rounded-2xl">
      <div className=" mb-10 md:mx-auto sm:text-center w-full md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          The Tech Behind{" "}
          <span className="text-primary font-bold">
            {/* <FaLungsVirus className="text-primary text-3xl font-semibold mx-2" />{" "} */}
            PneumoScan™
          </span>
          :
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary">
                <SiTensorflow className="text-white text-2xl" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Tensorflow-powered CNN Model
              </h6>
              <p className="text-sm text-gray-900">
                PneumoScan's tensorflow-based CNN model is trained on a dataset
                of X-ray images, where it learns to recognize patterns and
                features associated with pneumonia. When the model is presented
                with a new X-ray image, it uses this learned knowledge to make a
                prediction on whether or not the image contains pneumonia.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary">
                <SiStreamlit className="text-white text-2xl" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Streamlit-based Web Interface
              </h6>
              <p className="text-sm text-gray-900">
                PneumoScan's streamlit web interface is a graphical user
                interface (GUI) that allows users to interact with the app
                through a web browser. The interface is built using the
                Streamlit library, which is a framework for creating interactive
                web applications in Python. The interface allows users to upload
                X-ray images, receive a prediction on whether or not the image
                contains pneumonia, and view the prediction results in
                real-time. The streamlit web interface provides an easy and
                convenient way for users to access and use the app's pneumonia
                detection capabilities.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-primary">
                <SiReact className="text-white text-2xl" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                React.JS + Tailwind-based Website
              </h6>
              <p className="text-sm text-gray-900">
                PneumoScan's React JS-based website is a web application that is
                built using the React JavaScript library. The website for
                PneumoScan includes a variety of components, such as a homepage,
                a how-it-works page (you're on it right now!), and a page for
                uploading and viewing X-ray images.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded-2xl shadow-lg"
            src="https://rpmarchildon.com/wp-content/uploads/2018/06/RM-CNN-Schematic-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded-2xl shadow-lg"
            src="https://cdn.thenewstack.io/media/2021/11/28de6660-screen-shot-2021-11-29-at-6.46.11-am.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-56 shadow-lg rounded-2xl"
            src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
