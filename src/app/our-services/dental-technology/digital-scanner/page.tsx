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
        <h2 className="text-8xl md:text-6xl text-white">Cone Beam 3D Imaging</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              If you are visiting Dr. Jayashree Thorat for a dental restoration, you will most likely see us use a digital scanner to create a digital scan of your mouth. This allows us to make sure your restoration fits properly so you can enjoy a healthy, beautiful smile again. Call Langhorne Family Smiles today at 215-752-5505 to schedule a consultation with our dentist and learn more about digital scanning in Langhorne, Pennsylvania.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              Our office uses a state-of-the-art digital scanner to capture three-dimensional images of the inside of your mouth. Using a digital scanner, our dentist and team can capture high-quality images of your teeth and supporting structures. This makes it easy for us to diagnose problems, create digital models of your mouth and plan treatments. This device captures multiple images in full color, allowing us to distinguish between healthy and diseased tissue to plan your treatment. The accurate models created using these images also allow us to ensure that restorations and oral appliances fit perfectly and function properly to improve your oral health and smile.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              When our dentist or hygiene team utilize our digital scanner, a small wand will be used to quickly and comfortably scan the inside of your mouth. As the wand passes over your teeth, the images captured will be processed simultaneously to provide an immediate, complete and highly accurate image of your mouth. The pictures are even saved automatically every few seconds, so there is no need for you to sit through a second scan.
              </p>
              <p className='text-xl mt-4 text-gray-600'>
              For more information about the benefits of digital scanning and to schedule a consultation with our dentist, contact our office today. We are dedicated to helping you care for your smile.
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
