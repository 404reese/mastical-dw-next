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
        <h2 className="text-8xl md:text-6xl text-white">Our Services</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              At Langhorne Family Smiles, our goal is to help give you a healthy, beautiful smile you can admire every day when looking in the mirror. That is why our dentist and team provide a full range of services and stay up to date with the latest technology to properly care for anything you need. These include:
              <ul className="list-disc pl-6">
              <li>cosmetic dentistry
                <ul className="list-disc pl-6">
                  <li>dental veneers</li>
                  <li>Invisalign clear aligners</li>
                  <li>zoom teeth whitening</li>
                </ul>
              </li>
              <li>dental technology
                <ul className="list-disc pl-6">
                  <li>cone beam 3D imaging</li>
                  <li>digital scanner</li>
                </ul>
              </li>
              <li>general & family dentistry
                <ul className="list-disc pl-6">
                  <li>cavity detection</li>
                  <li>dental cleanings and exams</li>
                  <li>sports mouth guards</li>
                  <li>tooth extractions</li>
                  <li>wisdom teeth removal</li>
                </ul>
              </li>
              <li>restorative dentistry
                <ul className="list-disc pl-6">
                  <li>all on 4 implants</li>
                  <li>dental bridges</li>
                  <li>dental fillings</li>
                  <li>dental implants</li>
                  <li>dentures</li>
                  <li>prosthetic dentistry</li>
                  <li>root canal therapy</li>
                  <li>same day dental crowns</li>
                </ul>
              </li>
              </ul>
              </p>
              
              <p className="text-xl mt-4 text-gray-600">
              We invite you to call us today at 215-752-5505 to schedule an appointment with Dr. Jayashree Thorat and learn more about comprehensive dentistry in Langhorne, Pennsylvania. We are happy to see every member of your family, starting as young as age 1!
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
