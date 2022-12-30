import React from "react";
import { FaLungsVirus } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="w-full py-5 px-5 bg-primary mt-8 mb-4 flex flex-col items-center justify-center rounded-2xl">
      <h1 className="text-center text-4xl font-bold text-accent my-2 flex items-center flex-row">
        <span className="text-white flex items-center flex-row mr-2">
          {" "}
          <FaLungsVirus className="text-white text-3xl font-semibold mx-2" />{" "}
          PneumoScan™
        </span>{" "}
        - By The Numbers :
      </h1>

      <div className="stats shadow w-full bg-primary-content w-full rounded-2xl mt-5">
        <div className="stat place-items-center">
          <div className="stat-title font-bold text-primary">
            Amount Of Training Data Supplied
          </div>
          <div className="stat-value">2.50 GB+</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title font-bold text-grey-900">
            # Of Chest X-rays Used For Model Training
          </div>
          <div className="stat-value text-secondary">112,000+</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title font-bold text-primary"># Of Unique Patient X-ray Scans</div>
          <div className="stat-value ">30,000+</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title font-bold text-grey-900">
            Current Model Accuracy
          </div>
          <div className="stat-value text-secondary">92.3%</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
