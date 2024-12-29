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
        <h2 className="text-8xl md:text-6xl text-white">Root Canal Therapy</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              Root canal therapy is a common and effective dental procedure designed to save a severely damaged or infected tooth. At Langhorne Family Smiles, Dr. Jayashree Thorat and our skilled team are dedicated to providing patients with comfortable and successful treatments. Root canal therapy in Langhorne, Pennsylvania, not only helps alleviate pain but also preserves the natural tooth, preventing the need for extraction.
              </p>
              <h1 className="text-2xl font-bold mt-4">What is Root Canal Therapy?</h1>
              <p className="text-xl mt-4 text-gray-600">
              Root canal therapy, the most common endodontic treatment, involves removing the infected or damaged pulp from the inside of a tooth. The pulp contains nerves and blood vessels, and when it becomes infected due to deep decay, cracks or trauma, it can cause severe pain or lead to an abscess. The goal of the procedure is to remove the infection, clean and disinfect the inner tooth and seal it with a filling to prevent future infections. Our dentist and team performs this procedure with precision and care to ensure patient comfort and long-term success.
               </p>
               
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              <h1 className="text-2xl font-bold mt-4">Benefits of Root Canal Therapy</h1>
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
              <li>Relieves pain: Root canal therapy eliminates the source of tooth pain caused by infection or inflammation.</li>
              <li>Preserves natural teeth: The procedure allows patients to keep their natural teeth instead of having them extracted.</li>
              <li>Prevents future infection: Thorough cleaning and sealing of the tooth prevent bacteria from entering and causing further problems.</li>
              <li>Restores function: After root canal therapy, the tooth can function normally, allowing patients to chew and speak without discomfort.</li>
              <li>Avoids extraction: Saving the natural tooth helps maintain proper alignment and prevents the need for more extensive restorative work, such as dental implants or bridges.</li>
              </ul>
              </p>
              <h1 className="text-2xl font-bold mt-4">What is the Procedure?</h1>
              <p className="text-xl mt-4 text-gray-600">
              During the procedure, we will numb the tooth and surrounding area to ensure the patient feels comfortable throughout the treatment. A small opening is made in the tooth to access the infected pulp, which is then carefully removed. The inside of the tooth is cleaned, disinfected and filled with a biocompatible material before being sealed. In some cases, a crown may be placed over the tooth to restore its full strength and function.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              For more information or to schedule an appointment, contact us at 215-752-5505.
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
