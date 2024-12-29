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
        <h2 className="text-8xl md:text-6xl text-white">Dental Implants</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              Dental implants are a long-lasting and highly effective solution for replacing missing teeth. Our office offers high-quality dental implants in Langhorne, Pennsylvania, designed to restore both the function and aesthetics of your smile. Whether you are missing one tooth or several, dental implants can help you regain your confidence and oral health by providing a permanent and natural-looking replacement.
              </p>
              <h1 className="text-2xl font-bold mt-4">What Are Dental Implants?</h1>
              <p className="text-xl mt-4 text-gray-600">
              Dental implants consist of a titanium post that is surgically placed into the jawbone, acting as an artificial tooth root. Once the implant has integrated with the bone, a custom-made dental crown is attached to the post, providing a durable and natural-looking restoration. Dental implants are considered one of the most reliable and long-term solutions for tooth loss because they closely mimic the structure and function of natural teeth. Dr. Jayashree Thorat works closely with each patient to create a personalized treatment plan that meets their specific needs.
               </p>
               <h1 className="text-2xl font-bold mt-4">Benefits of Dental Implants</h1>
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
              <li>Permanent solution: Dental implants are designed to be a long-lasting replacement for missing teeth.</li>
              <li>Natural appearance: The custom-made crown is designed to match the shape, size and color of your natural teeth.</li>
              <li>Improves oral health: Dental implants help prevent bone loss and maintain the structure of your jawbone.</li>
              <li>Restores function: Implants allow patients to chew, speak and smile with confidence, just as they would with natural teeth.</li>
              <li>No impact on surrounding teeth: Unlike traditional bridges, dental implants do not require the support of adjacent teeth, preserving their integrity.</li>
              </ul>
               </p>
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              <h1 className="text-2xl font-bold mt-4">The Implant Process</h1>
              <p className="text-xl mt-4 text-gray-600">
              The dental implant process typically involves two stages. First, the titanium post is surgically placed into the jawbone. After a healing period, during which the implant integrates with the bone, our dentist will attach a custom crown to complete the restoration. The result is a strong, durable and natural-looking tooth replacement.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              To learn more about dental implants or to schedule a consultation, contact Langhorne Family Smiles at 215-752-5505. Our team is here to help you restore your smile and improve your oral health.
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
