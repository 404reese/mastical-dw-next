// pages/index.tsx
import React from 'react';
import PatientReviews from '@/components/PatientReviews';

const Home: React.FC = () => {
  return (
    <main>
      <div
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/fam.webp')",
        }}
      >
        <h2 className="text-8xl md:text-6xl text-white">Special Offers</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-white max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <h3 className="text-2xl font-bold mb-6">About Special Offers</h3>
              <p>
              Interested in saving money on treatments for your smile? If so, check out the patient specials our caring dentist and team in Langhorne, Pennsylvania, currently offer below. If you have any questions about these offers or would like to schedule a consultation with Dr. Jayashree Thorat, please contact Langhorne Family Smiles at 215-752-5505.
              </p>
              <div className="flex items-left mt-8 mb-8">
                <img className="w-1/2 mr-4" src="/zoomspecial.jpg" alt="carecredit-logo" />
                <img className="w-1/2" src="/newpatientspecial.jpg" alt="cheery-logo" />
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