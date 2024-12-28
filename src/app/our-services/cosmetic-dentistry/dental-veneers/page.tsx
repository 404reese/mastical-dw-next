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
              Achieve a red-carpet-worthy smile with custom dental veneers at Langhorne Family Smiles. With this treatment, our dentist will place tiny shells onto the surface of your teeth to treat gapped, discolored and chipped teeth at the same time. For more information about dental veneers in Langhorne, Pennsylvania, and to schedule an appointment with Dr. Jayashree Thorat, please call us at 215-752-5505
              </p>
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              <p className="text-xl mt-4 text-gray-600">
              Dental veneers are very thin shells, typically made of porcelain or resin, that are bonded to the front of your teeth to enhance the beauty of your smile. Our dentist may recommend dental veneers to correct several types of smile imperfections. Porcelain veneers are an excellent choice for enhancing your smile because the color and translucence of porcelain is a great match for the natural appearance of tooth enamel. Porcelain is stain resistant as well, so your smile will stay bright for years to come. Resin veneers can also be matched to your natural tooth color. With dental veneers, you can achieve a beautiful, natural-looking smile that you will love to show off.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              Our dentist may recommend dental veneers if you would like to improve the appearance of your smile. Custom-made veneers can be used for just one tooth or for your entire smile. We may suggest veneers to:
              <ul className="list-disc pl-6">
                <li>Close large spaces and gaps between teeth</li>
                <li>Whiten teeth that are severely stained or discolored</li>
                <li>Improve the appearance of irregularly shaped teeth</li>
                <li>Correct slightly crooked teeth</li>
                <li>Restore teeth that are broken, chipped, worn or fractured
                </li>
              </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              We invite you to call or visit our office today to learn more about custom dental veneers and how we can enhance your smile. We look forward to hearing from you!
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
