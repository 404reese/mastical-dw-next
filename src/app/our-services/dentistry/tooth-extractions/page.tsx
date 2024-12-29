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
              Tooth extractions are sometimes necessary to preserve overall oral health and prevent further complications. At Langhorne Family Smiles, Dr. Jayashree Thorat is experienced in providing safe and comfortable tooth extractions for patients in need. Whether due to severe decay, injury or overcrowding, extractions are a common dental procedure that helps ensure long-term oral wellness.
              </p>
              <h1 className="text-2xl font-bold mt-4">Reasons for Tooth Extractions</h1>
              <p className="text-xl mt-4 text-gray-600">
              Tooth extractions may be required for a variety of reasons. The most common reason is severe tooth decay that cannot be treated with a filling, crown or root canal therapy. Other situations include damage from trauma, overcrowding or impacted wisdom teeth that threaten the health of surrounding teeth. In each case, our skilled dentist and team carefully evaluate the patient’s condition to determine whether an extraction is the best solution.
               </p>
               <h1 className="text-2xl font-bold mt-4">What to Expect During a Tooth Extraction</h1>
              <p className="text-xl mt-4 text-gray-600">
              The thought of having a tooth extracted may cause anxiety, but the process is typically straightforward and painless. The procedure begins with the administration of local anesthesia to numb the area around the tooth. For more complex extractions, such as impacted teeth, sedation may be recommended. We will then gently remove the tooth, ensuring minimal discomfort for the patient.
After the extraction, the healing process is carefully monitored, and patients are given detailed aftercare instructions to ensure proper recovery.
               </p>
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              <h1 className="text-2xl font-bold mt-4">Benefits of Tooth Extractions</h1>
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
                <li>Relieves pain: Extraction of a decayed or damaged tooth provides immediate relief from discomfort.</li>
                <li>Prevents infection: Removing an infected tooth stops the spread of bacteria to surrounding teeth and gums.</li>
                <li>Improves oral health: Extractions eliminate overcrowding, allowing for better alignment and improved overall oral health.</li>
                <li>Facilitates orthodontic treatment: In some cases, extractions are necessary to create space for orthodontic treatments such as braces.</li>
                <li>Prevents further complications: Extracting impacted teeth, such as wisdom teeth, can prevent damage to adjacent teeth.</li>
              </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              For more information about tooth extractions in Langhorne, Pennsylvania, or to schedule a consultation, call 215-752-5505. Our team is committed to making the procedure as comfortable as possible while ensuring your long-term oral health.
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
