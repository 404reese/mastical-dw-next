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
        <h2 className="text-8xl md:text-6xl text-white">Contact</h2>
      </div>

      <div className="p-6 shadow-md bg-[#f8e4dc] border border-[#d6b9a1] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 shadow-md bg-white max-h-120 overflow-y-auto">
          <div className="flex items-center mb-6">
            <div className="rounded-lg">
              <h1 className="text-2xl font-bold mb-6">
                Contact Your Dentist in Langhorne, Pennsylvania
              </h1>
              <p className="text-xl text-gray-600">
                Thank you for visiting Langhorne Family Smiles online! We are excited for you to call us your new dental home. Our dentist and team are proud to welcome patients of all ages and offer personalized care to achieve your best smile. Give us a call today to schedule an appointment with Dr. Jayashree Thorat and learn more about comprehensive dentistry in Langhorne, Pennsylvania, nearby the areas of Parryville, Middletown, Bensalem and Bristol, Pennsylvania.
              </p>
              <h1 className="text-2xl font-bold mt-4">Hours</h1>
              <p className="text-xl mt-4 text-gray-600">
                Day        Hours
                <br />
                Monday     10:00 a.m. - 7:00 p.m.
                <br />
                Tuesday    10:00 a.m. - 7:00 p.m.
                <br />
                Wednesday  10:00 a.m. - 7:00 p.m.
                <br />
                Thursday   10:00 a.m. - 7:00 p.m.
                <br />
                Friday     9:00 a.m. - 5:00 p.m.
                <br />
                Saturday   9:00 a.m. - 2:00 p.m.*
                <br />
                Sunday     Closed
              </p>
              <p className="italic text-xl mt-4 text-gray-600">*Open only on the first and third Saturdays of the month.</p>
            </div>
            
          </div>
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12198.761530789914!2d-74.903261!3d40.14918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c15241594eca4f%3A0xb27f512967559e96!2sLanghorne%20Family%20Smiles!5e0!3m2!1sen!2sus!4v1735454355596!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>

        <div className="lg:w-1/3">
          <PatientReviews />
        </div>
      </div>

      {/* Use the ContactInfo Component */}
      <div className="p-6">
        
      </div>
    </main>
  );
};

export default Home;
