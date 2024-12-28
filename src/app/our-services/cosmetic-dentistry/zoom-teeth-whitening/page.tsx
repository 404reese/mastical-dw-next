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
        <h2 className="text-8xl md:text-6xl text-white">Zoom Teeth Whitening</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              We know there are many teeth whitening products out there to choose from, but they may not be as safe as you think. That is why at Langhorne Family Smiles, we offer Zoom teeth whitening as a safe and effective way to boost your smile’s appearance. Give us a call today at 215-752-5505 to schedule a visit with our dentist, Dr. Jayashree Thorat, and learn more about Zoom teeth whitening in Langhorne, Pennsylvania.
              </p>
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              <p className="text-xl mt-4 text-gray-600">
              Teeth whitening is a simple, effective cosmetic dental treatment that we offer to noticeably enhance your smile in as little as one treatment. Our professional teeth whitening treatments utilize a powerful yet safe whitening gel that is applied to the surface of your teeth. This gel works to lighten the appearance of stains, discoloration and yellowing on the tooth enamel. Teeth whitening is often available in both in-office and take-home systems. Professional teeth whitening can give you a noticeably whiter smile that will boost your self-esteem and help you smile with pride.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              If you have ever wished that your smile were whiter and brighter, teeth whitening might be right for you. Through professional teeth whitening, we can lighten staining and discoloration caused by various factors, such as:
              <ul className="list-disc pl-6">
                <li>The natural aging process</li>
                <li>Poor dental hygiene habits</li>
                <li>Consumption of certain drinks and foods, including tea, wine, coffee and soda</li>
                <li>Smoking and other forms of tobacco use</li>
                <li>Illness</li>
                <li>Certain medications</li>
                <li>Fluorosis</li>
              </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              Our dentist will work with you to determine the right type of treatment and treatment length to achieve the smile aesthetic you desire. To learn more about professional teeth whitening and to set up your consultation at our office, please call us today.
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
