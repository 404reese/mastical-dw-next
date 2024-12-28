import React from 'react';

const TourSection: React.FC = () => {
  return (
    <section className="bg-[#F5F1E4] py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-normal pt-4 pb-8">
        TOUR OUR OFFICE
        </h2>
        <p className="mt-4 text-xl text-gray-600 ">
          Our dental office features cutting-edge technology and ample parking with easy access right off the road. Click the button below to see more about your visit!
        </p>
        <a className="mt-4 inline-block text-white bg-teal-600 hover:bg-white hover:text-teal-600 py-2 px-4 rounded transition-colors" href="#">
          VIEW MORE
        </a>
        <div className="mt-8 flex justify-center">
          <img alt="Dental Office Interior" className="w-full lg:w-1/2 rounded shadow-md" height="400" src="./office.jpg" width="600"/>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
