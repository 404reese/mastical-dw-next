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
        <h2 className="text-8xl md:text-6xl text-white">Dental Veneers</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              Dental cleanings and exams are a key part of maintaining your oral health and smile. Dr. Jayashree Thorat offers this preventive care to help you avoid dental problems and ensure any issues that do develop are diagnosed and treated promptly. Call Langhorne Family Smiles at 215-752-5505 to make an appointment with our dentist and learn more about dental cleanings and exams in Langhorne, Pennsylvania.
              </p>
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              <p className="text-xl mt-4 text-gray-600">
              Dental cleanings and exams are two of the most basic yet important preventive treatments we provide at our office. Each time you visit our dental practice for a checkup, we will provide a professional teeth cleaning and dental exam to help your smile stay healthy. During your cleaning and exam, our dental team will:
              <ul className="list-disc pl-6">
              <li>Clean your teeth by removing any plaque or tartar (also called dental calculus), which can lead to tooth decay and periodontal disease</li>
              <li>Floss and polish your teeth for a healthy, bright smile</li>
              <li>Examine your smile for signs of any damaging dental conditions or diseases</li>
                </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              We may utilize dental X-rays to further evaluate your smile and make certain that you receive the dental care you need. Regular dental cleanings and exams are essential in maintaining good oral health, preventing cavities and gum disease, and making sure that any damaging conditions are treated as early as possible.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              We recommend that you visit us every six months for a routine dental cleaning and exam. We may suggest more frequent visits if needed, and we also encourage you to contact us if you suffer from a dental emergency, pain or injury. To schedule your next appointment, we invite you to contact us today. We look forward to caring for your smile!
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
