// pages/index.tsx
import React from 'react';
import PatientReviews from '@/components/PatientReviews';

const Home: React.FC = () => {
  return (
    <main>
      <div
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/finance.jpg')",
        }}
      >
        <h2 className="text-8xl md:text-6xl text-white">Finance Options</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-white max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <h3 className="text-2xl font-bold mb-6">About Finance</h3>
              <p>
              At Langhorne Family Smiles, we prioritize the well-being of our patients and strive to ensure their satisfaction. In order to cater to their diverse financial needs and preferences, we offer a variety of payment options that are designed to make dental care accessible and budget-friendly. We accept many insurance plans and the following out-of-pocket payments:
              <ul className="list-disc pl-6">
                <li>Cash</li>
                <li>Check</li>
                <li>Credit Card</li>
                <li>CareCredit&reg;</li>
              </ul>
              </p>
              <div className="flex items-left mt-8 mb-8">
                <img className="w-1/3 mr-4" src="/carecredit-logo.svg" alt="carecredit-logo" />
                <img className="w-1/3" src="/c-logo.webp" alt="cheery-logo" />
              </div>
              <p className="mt-4">
              No insurance? No problem. Our compassionate dentist and team offer a Total Health Dental Plan that covers dental cleanings and X-rays and offers 20% off other treatments.
              </p>
              <p className="mt-4">
              We invite you to contact us today at 215-752-5505 if you have any questions about our financial options for dental care in Langhorne, Pennsylvania, before your visit with Dr. Jayashree Thorat.
              </p>
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