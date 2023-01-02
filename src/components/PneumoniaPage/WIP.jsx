import React from "react";

const WIP = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-5 mt-5 p-10 bg-primary rounded-xl">
      <div className="w-full flex lg:p-10 md:flex-row flex-col items-center p-8 bg-white rounded-xl">
        {/* Box num 1 */}
        <div className="md:w-1/2 w-full p-5 bg-primary mx-3 rounded-2xl flex flex-col drop-shadow-xl">
          <h1 className="text-center text-white font-bold text-2xl my-3">
            What Is Pneumonia?
          </h1>
          <div className="p-5 rounded-2xl bg-primary-content">
            <p className="md:text-md text-sm font-medium text-grey-900">
              Pneumonia is a type of respiratory infection caused by bacteria,
              viruses, or other microorganisms. It is characterized by
              inflammation of the alveoli (tiny air sacs) in the lungs, which
              can fill with fluid or pus, making it difficult to breathe.
              Symptoms of pneumonia can include fever, cough with phlegm, chest
              pain, shortness of breath, rapid breathing, sweating, and fatigue.
              Pneumonia can range in severity from mild to severe, and can be
              life-threatening in older adults, young children, and people with
              compromised immune systems.{" "}
              <span className="md:inline-block hidden">
                The most common cause of bacterial pneumonia is Streptococcus
                pneumoniae, but other bacteria, such as Haemophilus influenzae
                and Staphylococcus aureus, can also cause the disease. Viral
                pneumonia, which is typically less severe than bacterial
                pneumonia, is caused by viruses such as the influenza virus and
                the respiratory syncytial virus (RSV). Pneumonia can be treated
                with antibiotics, antiviral medications, and supportive care,
                such as oxygen therapy and hydration. Vaccines are available to
                prevent some types of pneumonia.
              </span>
            </p>
          </div>
        </div>
        <div className="mx-2 grid grid-cols-2 gap-5 h-full">
          <img
            className="object-cover w-full h-56 col-span-2 shadow-lg rounded-2xl md:mt-0 mt-3 drop-shadow-xl"
            src="http://www.news.uct.ac.za/images/userfiles/images/news/2021/2021-03-04_COVID-19-lung.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-56 shadow-lg rounded-2xl hidden md:inline-block drop-shadow-xl"
            src="https://i0.wp.com/www.nfid.org/wp-content/uploads/2019/08/Pneumococcal-v1-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-56 shadow-lg rounded-2xl hidden md:inline-block drop-shadow-xl"
            src="https://www.boldsky.com/img/2020/07/pneumonia-1594633241.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WIP;
