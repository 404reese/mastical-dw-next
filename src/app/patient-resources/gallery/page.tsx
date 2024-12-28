// pages/index.tsx
import React from 'react';
import PatientReviews from '@/components/PatientReviews';

const Home: React.FC = () => {
  return (
    <main>
      <div
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/finance.webp')",
        }}
      >
        <h2 className="text-8xl md:text-6xl text-white">Gallery</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-white max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p>
              Are you looking to enhance the appearance of your smile? If so, we invite you to check out our smile gallery to see what our talented dentist and team can do for you. Give Langhorne Family Smiles a call today at 215-752-5505 to schedule a consultation with Dr. Jayashree Thorat and learn more about our dental services in Langhorne, Pennsylvania.
              </p>
              <p className="mt-4 italic">
              Check back soon to view our smile gallery!
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