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
        <h2 className="text-8xl md:text-6xl text-white">Wisdom Teeth Removal</h2>
      </div>
      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-[#f1e6dd] max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className='rounded-lg'>
              <p className="text-xl text-gray-600">
              Looking to take care of those third molars in the back corners of your mouth? If so, come see us for wisdom teeth removal at Langhorne Family Smiles. Following your procedure, our dentist and team will provide you a list of post-op instructions we recommend you follow closely to ensure you have a smooth recovery. Give us a call today at 215-752-5505 to schedule a consultation with Dr. Jayashree Thorat and learn more about wisdom teeth removal in Langhorne, Pennsylvania.
              </p>
              <div className="flex items-left mt-8 mb-8">
              <video className="w-full" controls autoPlay>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              </div>
              
              <p className="text-xl mt-4 text-gray-600">
              The third molars, which are commonly called the wisdom teeth, are typically the last teeth to come in. Because they are the last to erupt, there is often not enough room for the wisdom teeth to grow in as they should. When there is not sufficient space for the wisdom teeth, they may become impacted (unable to fully break through the gum tissues and jawbone) or grow in at an incorrect angle. Wisdom teeth that do not erupt as they should can lead to several dental problems, such as:
              <ul className="list-disc pl-6">
              <li>Disturbance of the natural tooth alignment or orthodontic treatment</li>
              <li>Damage to the neighboring teeth</li>
              <li>Tooth decay</li>
              <li>Infection and inflammation in the gums and other tissues</li>
              <li>The formation of cysts</li>
              <li>Damage to the jawbone</li>

              </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              Our dentist may recommend wisdom teeth removal to avoid these serious complications and to keep your smile healthy. We will carefully evaluate your smile, including the positioning of your teeth and wisdom teeth, to determine whether your smile would benefit from wisdom teeth removal. Our team will ensure that your wisdom teeth removal treatment is as painless and comfortable as possible. To learn more about wisdom teeth removal, please call or visit us today. We are committed to keeping your smile in the best possible health.
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
