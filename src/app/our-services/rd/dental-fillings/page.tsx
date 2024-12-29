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
        <h2 className="text-8xl md:text-6xl text-white">Dental Fillings</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              If your teeth sustain minor tooth damage, our dentist may recommend repairing them with a dental filling. Fillings restore the shape, appearance and strength of your teeth so that you can once again enjoy a healthy smile. To learn more about dental fillings in Langhorne, Pennsylvania, and schedule an appointment with Dr. Jayashree Thorat, contact Langhorne Family Smiles at 215-752-5505.
              </p>
              
              <p className="text-xl mt-4 text-gray-600">
              A dental filling is a restoration used to repair minor to moderate tooth damage. We may recommend a filling if a tooth has been damaged by decay (for example, if it has a cavity) or suffers from minor fracturing or chipping. The dental filling is used to restore the tooth to its original structure and function, and return your smile to good health. There are two main types of dental fillings available: amalgam fillings and composite fillings.
               </p>
               
              <p className="text-xl mt-4 text-gray-600">
              The process for placing a dental filling requires just one comfortable visit to our office. Our dentist will first remove the decayed and damaged portion of the tooth, then clean it to remove all traces of decay. We then fill the area with the filling material and shape it to match your tooth’s shape. Finally, the filling is hardened by our dentist for a lasting restoration.
               </p>
              
              <p className="text-xl mt-4 text-gray-600">
              If one of your teeth is decayed or damaged, a dental filling may be a great choice for restoring your oral health and function. We invite you to call or visit us today to learn more about dental fillings and schedule your next appointment with our dentist and team. We look forward to caring for your smile!
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
