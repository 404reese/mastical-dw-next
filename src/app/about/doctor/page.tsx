// pages/index.tsx
import React from 'react';
import PatientReviews from '@/components/PatientReviews';

const Home: React.FC = () => {
  return (
    <main>
      <div
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/out-doctor.jpg')",
        }}
      >
        <h2 className="text-4xl text-white font-bold">Meet Our Doctor</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] rounded-lg flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-white max-h-96 overflow-y-auto">
          <div className="flex items-center mb-6">
            <img
              alt="Dr. Jayashree Thorat"
              className="h-24 w-24 rounded-full mr-6"
              height="100"
              src="/doctor.jpg"
              width="100"
            />
            <div>
              <h3 className="text-2xl font-bold">Jayashree Thorat, DDS</h3>
              <p>
                Dr. Jayashree Thorat acquired Langhorne Family Sm iles in 2022. She graduated from dental school in India in 1999 and received a dental degree from the University of Minnesota School of Dentistry in 2020. She continues to pursue her education on a regular basis and has completed a live surgical placement implant course at the California Implant Institute. She is an active member of the American Academy of Cosmetic Dentistry and provides total dental care under one roof, including root canal therapy, surgical extractions, wisdom teeth removal, Invisalign® treatment, and Zoom in-office teeth whitening.
              </p>
              <p className="mt-4">
                She and her husband have two daughters. Their older daughter has graduated from Columbia College, and their youngest daughter is in high school. She enjoys running, hiking, biking, and is currently training for a half marathon. Dentistry has been Dr. Thorat’s passion for over 20 years now, and she looks forward to serving the community with the utmost care and compassion.
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