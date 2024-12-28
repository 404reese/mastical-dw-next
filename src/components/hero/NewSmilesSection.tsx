import React from 'react';

const NewSmilesSection: React.FC = () => {
  return (
    <section className="bg-teal-600 text-white text-center py-12">
      <h2 className="text-4xl md:text-5xl font-normal pt-4 text-white">
      NEW SMILES WELCOME DAILY <br />
        </h2>
      <h3 className="mt-4 text-xl">WE ACCEPT WALK-INS &amp; BY APPOINTMENT</h3>
      <div className="mt-6 space-x-4">
        <a className="bg-white hover:bg-teal-400 hover:text-white text-teal-600 py-2 px-4 rounded" href="#">
          REQUEST AN APPOINTMENT
        </a>
        <a className="bg-transparent border border-white hover:bg-white hover:text-teal-600 text-white py-2 px-4 rounded" href="#">
          CALL TODAY
        </a>
      </div>
    </section>
  );
};

export default NewSmilesSection;
