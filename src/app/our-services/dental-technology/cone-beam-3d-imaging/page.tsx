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
              Our dentist and team are proud to feature cone beam 3D imaging here at Langhorne Family Smiles. This technology allows us to gather detailed images of your mouth structure to plan your treatment more efficiently. Give us a call today at 215-752-5505 to schedule a consultation with Dr. Jayashree Thorat and learn more about cone beam 3D imaging in Langhorne, Pennsylvania.
              </p>
              <p className="text-xl mt-4 text-gray-600">
              At our office, we are committed to utilizing advanced dental technology to always provide you with the highest level of dental care. We are proud to utilize cone beam 3D imaging technology at our practice. Cone beam 3D technology is an imaging system that provides our dentist and team with a three-dimensional image reconstruction of your teeth, mouth, jaw, neck, ears, nose and throat. We may use dental cone beam 3D imaging to:
              <ul className="list-disc pl-6">
                <li>Plan dental implant placement</li>
                <li>Evaluate the jaws and face</li>
                <li>View the head and neck as a comprehensive whole</li>
                <li>Diagnose tooth decay (cavities) and other dental problems</li>
                <li>Detect endodontic problems and plan root canal therapy</li>
                <li>Analyze dental and facial trauma</li>
                <li>Plan and evaluate the progress of orthodontic treatment</li>
                <li>Visualize abnormal teeth</li>
                <li>Assess a TMJ disorder</li>
              </ul>
              </p>
              <p className="text-xl mt-4 text-gray-600">
              Cone beam 3D imaging is effective for diagnosing and evaluating dental conditions, as well as planning treatments. One of the advantages of 3D cone beam technology is that it provides our dentist and team with a view of your mouth and supporting structures that is more comprehensive than that provided by digital X-rays. To learn more about cone beam 3D imaging and how it helps us provide you with exceptional care, we invite you to contact us today.
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
