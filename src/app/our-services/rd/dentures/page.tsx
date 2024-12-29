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
        <h2 className="text-8xl md:text-6xl text-white">Dentures</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              Dentures are a popular and reliable option for individuals who are missing several or all of their teeth. Langhorne Family Smiles provides high-quality, customized dentures in Langhorne, Pennsylvania, designed to restore both the function and aesthetics of your smile. Whether you are missing teeth due to age, injury or dental disease, dentures can help you regain your ability to chew, speak and smile with confidence.
              </p>
              <h1 className="text-2xl font-bold mt-4">What Are Dentures?</h1>
              <p className="text-xl mt-4 text-gray-600">
              Dentures are removable prosthetic devices designed to replace missing teeth. They are custom-made to fit each patient’s mouth, ensuring comfort and a natural appearance. There are two main types of dentures: complete dentures, which replace all the teeth in either the upper or lower jaw, and partial dentures, which replace a few missing teeth while preserving the remaining natural teeth. Dr. Jayashree Thorat will assess your specific needs and guide you in choosing the best option for your situation.
               </p>
               <h1 className="text-2xl font-bold mt-4">Types of Dentures</h1>
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
              <li>Complete Dentures: These are used when all teeth are missing. They rest directly on the gums and are made to fit securely in the mouth.</li>
              <li>Partial Dentures: Designed for patients with some remaining natural teeth, partial dentures use a metal framework or clasps to stay in place.</li>
              <li>Immediate Dentures: Placed immediately after teeth extraction, allowing patients to have dentures while their gums heal.</li>
              <li>Implant-Supported Dentures: For added stability, dental implants can be used to secure dentures in place, providing a more permanent and secure fit.</li>
              </ul>
               </p>
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              <h1 className="text-2xl font-bold mt-4">Benefits of Dentures</h1>
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
              <li>Restores functionality: Dentures allow you to eat and speak normally.</li>
              <li>Improves appearance: Custom-made dentures restore a natural-looking smile.</li>
              <li>Affordable solution: Dentures are a cost-effective option for replacing missing teeth.</li>
              <li>Boosts confidence: Replacing missing teeth improves self-esteem and social confidence.</li>
              <li>Easily removable: Dentures can be easily removed for cleaning and maintenance.</li>
              </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              For more information about dentures or to schedule a consultation with our dentist, contact 215-752-5505. Our team is here to help you regain your smile and improve your quality of life.
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
