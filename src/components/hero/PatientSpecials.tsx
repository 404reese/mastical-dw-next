import React from 'react';

const PatientSpecials: React.FC = () => {
  return (
    <section className="bg-teal-600 text-white py-12 flex flex-col md:flex-row items-center justify-center">
      <h2 className="text-2xl font-bold mr-0 md:mr-4 mb-4 md:mb-0">EXPLORE OUR PATIENT SPECIALS</h2>
      <a className="bg-white text-teal-600 hover:bg-teal-400 hover:text-white py-2 px-4 rounded" href="#">
        VIEW SPECIALS
      </a>
    </section>
  );
};

export default PatientSpecials;

