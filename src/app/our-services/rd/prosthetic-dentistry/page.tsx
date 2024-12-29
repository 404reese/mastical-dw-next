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
        <h2 className="text-8xl md:text-6xl text-white">Prosthetic Dentistry</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              Prosthetic dentistry focuses on the replacement of missing or damaged teeth with artificial devices, enhancing both the appearance and functionality of a patient’s smile. We dedicated to helping patients regain their confidence and oral health through state-of-the-art prosthetic treatments. Prosthetic dentistry in Langhorne, Pennsylvania, includes a range of restorative solutions designed to mimic the look, feel and function of natural teeth, allowing patients to chew, speak and smile with ease.
              </p>
              <h1 className="text-2xl font-bold mt-4">What Are Prosthetic Dentistry?</h1>
              <p className="text-xl mt-4 text-gray-600">
              Prosthetic dentistry, also known as prosthodontics, involves creating and fitting dental prostheses such as crowns, bridges, dentures and implants. These prosthetics are customized to fit each patient’s unique dental structure and restore both aesthetics and function. Dr. Jayashree Thorat, our experienced dentist, works closely with patients to determine the most suitable option for their specific needs, ensuring a comfortable and long-lasting result.
               </p>
               <h1 className="text-2xl font-bold mt-4">Types of Prosthetic Dentistry</h1>
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
              <li>Crowns: These are tooth-shaped caps placed over a damaged or decayed tooth to restore its size, shape, strength and appearance.</li>
              <li>Bridges: Dental bridges are used to replace one or more missing teeth by anchoring to adjacent healthy teeth or dental implants.</li>
              <li>Dentures: Removable prosthetics designed to replace several or all missing teeth in either the upper or lower jaw.</li>
              <li>Dental Implants: Implants are artificial tooth roots surgically placed into the jawbone, supporting crowns, bridges or dentures for a secure and permanent solution.</li>
              <li>Veneers: Thin, custom-made shells applied to the front surface of teeth to enhance their appearance, correct discoloration or cover imperfections.</li>
              </ul>
               </p>
              
              <h1 className="text-2xl font-bold mt-4">Benefits of Prosthetic Dentistry</h1>
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
              <li>Restores function: Prosthetics enable normal eating and speaking abilities.</li>
              <li>Improves appearance: Customized prosthetics help restore a natural-looking smile.</li>
              <li>Prevents shifting: Filling gaps prevents adjacent teeth from shifting into the empty spaces.</li>
              <li>Boosts confidence: Replacing missing teeth can dramatically improve a person’s self-esteem.</li>
              <li>Long-lasting solutions: Quality prosthetics can last for many years with proper care.</li>

              </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              To learn more about how prosthetic dentistry can restore your smile, call Langhorne Family Smiles at 215-752-5505 to schedule a consultation with us.
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
