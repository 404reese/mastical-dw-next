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
        <h2 className="text-8xl md:text-6xl text-white">Dental Bridges</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              Dental bridges are an effective and reliable solution for replacing missing teeth, helping to restore both function and aesthetics. We offer dental bridges in Langhorne, Pennsylvania, to improve your smile and overall oral health. Whether you have lost one tooth or multiple teeth, a dental bridge can offer a comfortable and lasting solution.
              </p>
              <h1 className="text-2xl font-bold mt-4">What Are All-on-4 Implants?</h1>
              <p className="text-xl mt-4 text-gray-600">
              All-on-4 implants involve placing four dental implants in strategic positions in the jaw to support a full arch of prosthetic teeth. This advanced technique allows for maximum support and stability using fewer implants, often eliminating the need for bone grafting. Dr. Jayashree Thorat uses cutting-edge technology to ensure a precise and comfortable implant procedure. The result is a set of natural-looking, durable teeth that function just like real teeth.
               </p>
               <h1 className="text-2xl font-bold mt-4">What Is a Dental Bridge?</h1>
              <p className="text-xl mt-4 text-gray-600">
              A dental bridge is a prosthetic device used to fill the gap left by missing teeth. It is made up of one or more artificial teeth, known as pontics, that are anchored in place by crowns attached to the surrounding healthy teeth, also known as abutment teeth. This creates a “bridge” across the gap, restoring both the appearance and function of the teeth. Dr. Jayashree Thorat, our highly trained dentist, works closely with each patient to ensure that their dental bridge fits comfortably and blends seamlessly with their natural teeth.
               </p>
              
              <h1 className="text-2xl font-bold mt-4">Benefits of Dental Bridges</h1>
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
                <li>Restores function: Dental bridges allow patients to chew and speak properly, just as they would with natural teeth.</li>
                <li>Improves appearance: A dental bridge fills gaps in your smile, providing a more complete and aesthetically pleasing appearance.</li>
                <li>Prevents shifting: Replacing missing teeth with a bridge prevents adjacent teeth from shifting out of alignment, which can lead to bite problems or further oral health issues.</li>
                <li>Maintains facial structure: By filling in gaps, dental bridges help maintain the natural structure of your face and jaw.</li>
                <li>Durable solution: With proper care, dental bridges can last for many years, offering a reliable solution for missing teeth.</li>
              </ul>
              </p>

              <h1 className="text-2xl font-bold mt-4">The Dental Bridge Process</h1>
              <p className="text-xl mt-4 text-gray-600">
              The process of getting a dental bridge involves two appointments. During the first visit, we will prepare the abutment teeth by reshaping them so that crowns can be placed. Impressions of your teeth will be taken to ensure a perfect fit. During the second visit, the custom-made bridge will be fitted and cemented into place, restoring your smile.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              For more information about dental bridges or to schedule a consultation, contact Langhorne Family Smiles at 215-752-5505. Our team is here to help you regain your confidence and improve your oral health.
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
