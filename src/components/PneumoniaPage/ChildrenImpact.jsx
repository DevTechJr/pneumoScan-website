import React from "react";

const ChildrenImpact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-5 mt-5 p-10 bg-primary rounded-xl">
      <div className="w-full flex lg:p-10 flex-row items-center p-8 bg-white rounded-xl">
        {/* Box num 1 */}
        <div className="w-1/2 p-5 bg-primary mx-3 rounded-2xl flex flex-col">
          <h1 className="text-center text-white font-bold text-2xl my-3">
            <span className="text-primary-content">"</span>A CHILD DIES OF
            PNEUMONIA EVERY 39 SECONDS
            <span className="text-primary-content">"</span> - UNICEF (2019)
          </h1>
          <div className="p-5 rounded-2xl bg-primary-content">
            <p className="text-md font-medium text-primary">
              Pneumonia is a serious illness that can affect children of all
              ages, but it is particularly dangerous for young children and
              infants. Children under the age of five are the most vulnerable to
              pneumonia, and it is the leading cause of death in this age group
              globally. In fact, pneumonia is responsible for approximately 16%
              of all deaths in children under the age of five, making it the
              most deadly infectious disease for children in this age range.
              Children are more vulnerable to pneumonia due to their
              underdeveloped immune systems and smaller airways, which can make
              it more difficult for them to clear mucus and other secretions
              from their lungs.
              <br />
              <br />
              Pneumonia death rates have significantly declined over the past
              few decades. According to data from the World Health Organization
              (WHO), the global pneumonia death rate fell by 73% between 1990
              and 2019, from 73 deaths per 100,000 people to 20 deaths per
              100,000 people. This decline is largely due to improved access to
              vaccines, better treatment and care, and increased efforts to
              prevent and control the spread of pneumonia.
            </p>
          </div>
        </div>
        <div className="mx-2 h-full w-1/2">
          <iframe
            src="https://ourworldindata.org/grapher/pneumonia-death-rates-age-standardized?time=latest"
            loading="lazy"
            className="w-full h-96 rounded-2xl border-solid border-8 border-primary"
          ></iframe>
          <div className="p-5 rounded-2xl bg-primary-content mt-3 border-solid border-8 border-primary">
            <p className="text-sm font-medium text-center text-accent-content">
              <span className="text-primary">"</span>Every day, nearly 2,200
              children under the age of five die from pneumonia, a curable and
              mostly preventable disease. Strong global commitment and increased
              investments are critical to the fight against this disease. Only
              through cost-effective protective, preventative and treatment
              interventions delivered to where children are will we be able to
              truly save millions of lives.
              <span className="text-primary">" - UNICEF (2019)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenImpact;
