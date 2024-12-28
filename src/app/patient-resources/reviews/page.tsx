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
              Read the reviews below to learn why people have Langhorne Family Smiles as their go-to choice for comprehensive dentistry in Langhorne, Pennsylvania. We also welcome you to share your experience with us after your visit. Call us today at 215-752-5505 to schedule an appointment with our dentist, Dr. Jayashree Thorat. We cannot wait to make you smile.
              </p>
              <div className="flex items-left mt-8">
                <a href="https://app.dentalqore.com/dashr-app-shell/public/action/review/?app=416587938" target="_blank" rel="noopener noreferrer">
                  <button className="bg-transparent border-2 border-teal-600 text-teal-600 py-2 px-4 rounded hover:bg-teal-600 hover:text-white transition-colors">
                    Review Us
                  </button>
                </a>
              </div>
              <div className="flex items-center mt-8 space-x-4">
                <a href="https://g.page/LanghorneFamilySmiles/review?gm" target="_blank" rel="noopener noreferrer">
                  <img src="/google-icon.svg" className="h-12 w-12 text-red-600 mr-4" />
                </a>
                <a href="https://www.facebook.com/pg/LanghorneFamilySmiles/reviews/?ref=page_internal" target="_blank" rel="noopener noreferrer">
                  <img src="/fb-icon.svg" className="h-12 w-12 text-blue-600" />
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