import React from 'react';

const HistorySection: React.FC = () => {
  return (
    <section className="bg-[#F5F1E4] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <img alt="Our History" className="w-1/2 lg:w-1/3 rounded shadow-md" height="100" src="/ourhistoryphoto.webp" width="100" />
        <div className="mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left">
          <h2 className="text-2xl font-bold">OUR HISTORY</h2>
          <p className="mt-4 text-gray-600">
            Dr. Thorat took the reins of Langhorne Family Smiles in 2022. The practice has a stellar 45-year history in the community, and Dr. Thorat enjoys connecting with our patients.
          </p>
          <div className="mt-4 space-x-4">
            <a className="bg-teal-600 text-white hover:bg-gray-200 hover:text-teal-600 py-2 px-4 rounded" href="#">
              ABOUT US
            </a>
            <a className="bg-transparent border border-teal-600 hover:bg-teal-600 hover:text-gray-200 text-teal-600 py-2 px-4 rounded" href="#">
              REQUEST AN APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
