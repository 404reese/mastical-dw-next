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
              If you play sports or participate in other athletic activities, our dentist and team recommend that you wear a sports mouth guard. This oral appliance is designed to fit your mouth comfortably and protect your teeth and smile from injury. To find out more about sports mouth guards in Langhorne, Pennsylvania, and set up an appointment with Dr. Jayashree Thorat, contact Langhorne Family Smiles at 215-752-5505.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              Our dentist and team are dedicated to keeping your smile healthy and free from discomfort. To help us do this, we provide several types of mouth guards at our office. For our athletic patients, we often recommend a type of mouth guard called an athletic mouth guard or sports guard. Sports guards fit over your teeth while you play sports and participate in other athletic activities to protect your smile from injury. Sports guards are especially important for our patients who play high-contact sports such as wrestling, football, hockey and rugby; however, all types of athletes can benefit from an athletic mouth guard. Whether you play soccer, basketball or baseball, a sports guard can be a great way to protect your smile and keep it safe.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              While a number of types of athletic mouth guards are available, a custom-made mouth guard is the most effective in protecting your smile. This type of mouth guard is designed to comfortably fit your smile and prevent dental injury, such as knocked out and chipped teeth. A sports guard can also help to prevent injury to the soft tissues of the mouth, including the tongue, lips, cheeks and gums.
              </p>
              <p className='text-xl mt-4 text-gray-600'>
              We invite you to contact our office today to learn more about mouth guards and their benefits. We look forward to caring for your smile!
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
