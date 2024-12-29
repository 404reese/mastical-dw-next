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
        <h2 className="text-8xl md:text-6xl text-white">Emergency Dental Care</h2>
      </div>

      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-white max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className="rounded-lg">
              
              <p className="text-xl text-gray-600">
              A dental emergency is a situation that requires prompt attention from a dental professional. At our office, we understand that you cannot always plan when you will need our care. If you experience a dental emergency, we encourage you to contact us as soon as possible. Our team will schedule you to meet with our dentist as soon as we are able so you can receive the care you need. We are happy to care for several types of dental emergencies, including:
              </p>
              
              <p className="text-xl mt-4 text-gray-600">
              <ul className="list-disc pl-6">
                <li>Severe, lasting toothaches or other types of tooth pain</li>
                <li>A lost dental restoration, such as a lost filling or crown</li>
                <li>Damage to the soft tissues of the mouth, including the tongue, cheeks, lips and gums</li>
                <li>A cracked or fractured tooth</li>
                <li>A chipped or broken tooth</li>
                <li>A partially or fully knocked-out tooth</li>
              </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              If you suffer from one of these conditions or another type of dental emergency, please contact our office. Our team will also be able to provide you with instructions on how to take care of your smile until you are able to come to our office to meet with us. If you have experienced trauma to the head or neck, we recommend that you visit the emergency room or your general physician before coming to us, even if your smile is also damaged. To learn more about dental emergency care, we invite you to call or visit us today.
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
