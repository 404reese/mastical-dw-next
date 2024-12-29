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
        <h2 className="text-8xl md:text-6xl text-white">Same-Day Dental Crowns</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              Our skilled dentist may recommend same-day dental crowns to restore your smile. These crowns allow you to leave Langhorne Family Smiles with a renewed smile after just one appointment, saving you time and helping you return to your regular activities more quickly. Give us a call at 215-752-5505 to schedule a consultation with Dr. Jayashree Thorat and learn more about same-day dental crowns in Langhorne, Pennsylvania.
              </p>
              
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
             <p className="text-xl mt-4 text-gray-600">
             Traditionally, dental crowns have required two appointments to complete. Using state-of-the-art CAD/CAM (computer-aided design/computer-aided manufacturing) technology, our dentist can create and place your crown in a single visit, saving you time and preventing the need for multiple visits to our office to restore your smile. Your dental crown is designed using an advanced imaging system which creates a digital impression. From this impression, our dentist can design and mill a custom dental crown in a matter of minutes to complete your restoration and help you leave our office with a renewed smile.
             </p>
              <p className="text-xl mt-4 text-gray-600">
              When you visit our office for a same-day dental crown, our dentist will:
              <ul className="list-disc pl-6">
              <li>Thoroughly examine your teeth to ensure that a crown is the right treatment for you</li>
              <li>Remove weakened, decayed or broken tooth material</li>
              <li>Capture a digital picture of your mouth</li>
              <li>Convert that picture into a 3D model</li>
              <li>Create your restoration based on the 3D model</li>
              <li>Mill your crown from a block of tooth-colored material</li>
              </ul>
              </p>
              
              <p className="text-xl mt-4 text-gray-600">
              In a matter of a few minutes, your crown will be ready. Our dentist will then place it in your mouth, check that it fits properly, bond it into place and polish it to complete your treatment.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              To learn more about same-day dental crowns and schedule a consultation with our experienced dentist, please contact our office today.
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
