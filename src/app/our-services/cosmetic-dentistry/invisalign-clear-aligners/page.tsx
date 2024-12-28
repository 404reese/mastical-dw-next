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
        <h2 className="text-8xl md:text-6xl text-white">Invisalign Clear Aligners  </h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              Here at Langhorne Family Smiles, we believe it is never too late to enjoy healthy, straight teeth. That is why our dentist and team are proud to offer Invisalign® clear aligners. Not only do these provide a discreet appearance, but they are also removable, allowing you to take them out whenever you brush your teeth or eat. Give us a call today at 215-752-5505 to schedule a consultation with Dr. Jayashree Thorat and learn more about Invisalign clear aligners in Langhorne, Pennsylvania
              </p>
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              <p className="text-xl mt-4 text-gray-600">
              Invisalign® aligners are a great choice for patients who are searching for a more discreet orthodontic treatment option for straightening their smile. Rather than using metal brackets and wires like traditional braces, the Invisalign system uses a series of custom-made, computer-generated plastic aligners to straighten teeth. Each set of aligners is designed to make small changes to the alignment of the teeth. As you switch sets of aligners about every two weeks, your teeth will gradually and gently move to their proper positions. You will also visit our office on a regular basis during treatment to make certain that your smile is progressing as planned.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              In general, Invisalign aligners can be used to treat the same orthodontic issues that are normally treated with braces. Our dentist may recommend Invisalign treatment to correct:
              <ul className="list-disc pl-6">
                <li>Crowded teeth</li>
                <li>Crooked teeth</li>
                <li>Gapped and spaced teeth</li>
                <li>Certain problems with the bite, such as an overbite, open bite, underbite or crossbite</li>
              </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              During your initial visit, we will determine whether you are a good candidate for Invisalign treatment. This treatment is often a good choice for adult patients and others who are interested in a virtually invisible orthodontic treatment. In addition to being discreet, Invisalign aligners are very comfortable because they are custom made from smooth, thin plastic. The aligners are removable as well, which allows you to easily remove them as needed to eat, brush and floss. We welcome you to call or visit us today to learn more about Invisalign clear aligners.
              </p>
              <p className='text-xl mt-4 text-gray-600 italic'>
              Invisalign and the Invisalign logo, among others, are trademarks of Align Technology, Inc., and are registered in the U.S. and other countries.
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
