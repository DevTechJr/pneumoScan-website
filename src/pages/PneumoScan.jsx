import React from "react";

const PneumoScan = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-5 mt-5 p-10 bg-primary rounded-xl">
      <div className="w-full flex lg:p-14 flex-col items-center p-10 bg-white rounded-xl">
        <div className="lg:divider mb-4">
          <h1 className="font-bold text-4xl text-primary text-center">
            <span className="text-accent font-bold ml-2">
              {/* <FaLungsVirus className="text-primary text-3xl font-semibold mx-2" />{" "} */}
              PneumoScan™
            </span>{" "}
            (Version 1.1) (2022)
          </h1>
        </div>
        <iframe
          className="mt-4 w-full h-screen"
          src={"https://devtechjr-pneumoscan-model-app-drswsb.streamlit.app/?embedded=true"}
        ></iframe>
      </div>
    </div>
  );
};

export default PneumoScan;
