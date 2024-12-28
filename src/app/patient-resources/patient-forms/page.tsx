// pages/index.tsx
import React from 'react';
import PatientReviews from '@/components/PatientReviews';

const Home: React.FC = () => {
  return (
    <main>
      <div
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/patient.jpg')",
        }}
      >
        <h2 className="text-8xl md:text-6xl text-white">Patient Forms</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-white max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p>
              While you are not obligated to fill out our patient forms before your appointment, getting them out of the way now can help you save time when you check in. These are easy to fill out and allow our dentist and team in Langhorne, Pennsylvania, to review your medical needs to ensure your appointment runs smoothly. If you have any questions about these forms before your visit with Dr. Jayashree Thorat, please contact Langhorne Family Smiles at 215-752-5505.
              </p>
              <div className="flex items-left mt-8">
                <a href="/patient-registration-form.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="bg-transparent border-2 border-teal-600 text-teal-600 py-2 px-4 rounded hover:bg-teal-600 hover:text-white transition-colors">
                    Patient Registration Form
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <PatientReviews />
        </div>
      </div>
    </main>
  );
};

export default Home;