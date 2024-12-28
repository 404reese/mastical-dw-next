// pages/index.tsx
import React from 'react';
import PatientReviews from '@/components/PatientReviews';

const Home: React.FC = () => {
  return (
    <main>
      <div
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/office.jpg')",
        }}
      >
        <h2 className="text-4xl text-white font-bold">Our Office Tour</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-white max-h-96 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <h3 className="text-2xl font-bold mb-6">About Our Office</h3>
              <p>
              Looking to visit us at Langhorne Family Smiles? If so, we invite you to explore a virtual tour of our office below. Not only does our office feature ample parking and easy access from the road, but it also has a wonderful team here to handle anything you need. Call us today at 215-752-5505 to schedule a consultation with our dentist, Dr. Jayashree Thorat, and learn more about comprehensive dentistry in Langhorne, Pennsylvania.
              </p>
              <p className="mt-4 italic">
              Come back soon to tour our office!
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