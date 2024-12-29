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
        <h2 className="text-8xl md:text-6xl text-white">All-on-4 Implants</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              All-on-4® dental implants offer a revolutionary solution for individuals seeking full-mouth restoration. At Langhorne Family Smiles, our dentist and team offer All-on-4 implants to restore both function and aesthetics to patients who have lost most or all of their teeth. This procedure is an innovative alternative to traditional dentures, offering a permanent and stable solution for a complete smile makeover.
              </p>
              <h1 className="text-2xl font-bold mt-4">What Are All-on-4 Implants?</h1>
              <p className="text-xl mt-4 text-gray-600">
              All-on-4 implants involve placing four dental implants in strategic positions in the jaw to support a full arch of prosthetic teeth. This advanced technique allows for maximum support and stability using fewer implants, often eliminating the need for bone grafting. Dr. Jayashree Thorat uses cutting-edge technology to ensure a precise and comfortable implant procedure. The result is a set of natural-looking, durable teeth that function just like real teeth.
               </p>
               <h1 className="text-2xl font-bold mt-4">Benefits of All-on-4 Implants</h1>
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
                <li>Permanent solution: All-on-4 implants provide a long-lasting and fixed replacement for missing teeth.</li>
                <li>Immediate results: Patients often leave the same day with a fully functional set of teeth.</li>
                <li>Improves oral function: With All-on-4 implants, patients can eat, speak and smile confidently, just as they would with natural teeth.</li>
                <li>Prevents bone loss: Implants stimulate the jawbone, helping to prevent the bone loss that occurs with missing teeth.</li>
                <li>Cost-effective: Compared to replacing each tooth with individual implants, All-on-4 offers a more affordable full-arch restoration option.</li>
              </ul>
               </p>
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              <h1 className="text-2xl font-bold mt-4">The All-on-4 Procedure</h1>
              <p className="text-xl mt-4 text-gray-600">
              The All-on-4 procedure typically begins with a thorough consultation and examination to determine the patient’s suitability. Once the implants are placed into the jawbone, a temporary set of prosthetic teeth is attached to allow immediate functionality. After a healing period, a final, custom-made set of teeth is placed, providing a beautiful, fully restored smile.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              For more information about All-on-4 implants in Langhorne, Pennsylvania, or to schedule a consultation, contact 215-752-5505. Our team is here to help you achieve a natural-looking and fully functional smile.
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
