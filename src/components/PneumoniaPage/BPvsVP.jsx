import React from "react";

const BPvsVP = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* <div className="w"></div> */}
      <h1 className="text-primary text-3xl font-bold text-center mb-8 p-4 rounded-2xl bg-primary-content border-solid border-8 border-primary">
        Bacterial Pneumonia <span className="text-accent-content">VS</span>{" "}
        Viral Pneumonia
      </h1>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
        <div className="transition duration-300 transform bg-primary-content border-solid border-8 border-primary rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
          <div className="relative">
            <img
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2017/04/mycoplasma-pneumoniae-943418028-650x428.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-primary">
              Bacterial Pneumonia
            </h5>
            <p className="mb-5 text-accent-content text-sm font-medium">
              Bacterial pneumonia is a type of pneumonia that is caused by
              bacterial infections. It is usually more severe than viral
              pneumonia and requires treatment with antibiotics. The most common
              cause of bacterial pneumonia is Streptococcus pneumoniae, but
              other bacteria, such as Haemophilus influenzae and Staphylococcus
              aureus, can also cause the disease. Symptoms of bacterial
              pneumonia can include fever, cough with phlegm, chest pain,
              shortness of breath, rapid breathing, sweating, and fatigue. Risk
              factors for bacterial pneumonia include being older than 65,
              having a compromised immune system, smoking, and having chronic
              respiratory conditions such as asthma or COPD. Bacterial pneumonia
              can be treated with antibiotics, and supportive care, such as
              oxygen therapy and hydration, may also be necessary.
            </p>
          </div>
        </div>
        <div className="transition duration-300 transform bg-primary-content border-solid border-8 border-primary rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
          <div className="relative">
            <img
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src="https://images.emedicinehealth.com/images/article/main_image/inflammation-of-lungs.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-primary">
              Viral Pneumonia
            </h5>
            <p className="mb-5 text-sm font-medium text-accent-content">
              Viral pneumonia is a type of pneumonia that is caused by viral
              infections. It is typically less severe than bacterial pneumonia
              and does not require treatment with antibiotics. Viruses that can
              cause viral pneumonia include the influenza virus and the
              respiratory syncytial virus (RSV). Symptoms of viral pneumonia can
              include fever, cough, shortness of breath, rapid breathing, and
              fatigue. Risk factors for viral pneumonia include being older than
              65, having a compromised immune system, and having underlying
              health conditions such as asthma or COPD. Treatment for viral
              pneumonia typically involves supportive care, such as rest,
              hydration, and oxygen therapy, as well as medications to relieve
              symptoms. In some cases, antiviral medications may be used to
              treat viral pneumonia caused by the influenza virus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BPvsVP;
