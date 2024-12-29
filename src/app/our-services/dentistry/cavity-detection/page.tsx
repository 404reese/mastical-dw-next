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
        <h2 className="text-8xl md:text-6xl text-white">Cavity Detection</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              One of the important ways in which our dentist and team help you protect your smile is through cavity detection. We use several techniques to examine your teeth for cavities and decay, and during your time at Langhorne Family Smiles, we will work with you to help you keep your smile healthy. Call 215-752-5505 today to set up an appointment with Dr. Jayashree Thorat and learn more about cavity detection in Langhorne, Pennsylvania.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              Tooth decay, also known as cavities or dental caries, can be devastating to your oral health. This makes diagnosing and treating cavities as early as possible crucial. Our dentist and team use several methods to diagnose cavities early, including dental X-rays and other advanced imaging technology, as well as other examination techniques. If you are diagnosed with one or more cavities, our dentist will determine the extent of the damage to your teeth and recommend a treatment to repair your teeth and restore your smile. The most common treatment for a cavity is a dental filling, but more severe decay may require a procedure such as a root canal or dental crown.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              We recommend that you take steps to help prevent cavities and keep your smile healthy. You can prevent tooth decay by:
              <ul className="list-disc pl-6">
              <li>Brushing and flossing daily</li>
              <li>Making and keeping your regular dental appointments</li>
              <li>Asking our dentist about other preventive treatments, such as dental sealants and fluoride</li>
              <li>Minimize your intake of sugary and starchy foods</li>
              <li>Use an antibacterial mouth rinse</li>
              <li>Chew gum containing xylitol</li>
              </ul>
              </p>
              <p className='text-xl mt-4 text-gray-600'>
              If you have any questions or would like to schedule an appointment with our dentist, give us a call today!
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
