import React from 'react';
import Image from 'next/image';

const DentistSection: React.FC = () => {
  return (
    <section className="bg-[#F5F1E4] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <Image
          alt="Dr. Jayashree Thorat"
          className="w-full lg:w-1/3 rounded shadow-md"
          height={400}
          src="/doctor.jpg"
          width={300}
        />
        <div className="mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Your Dentist in Langhorne, PA</h2>
          <h3 className="text-4xl mb-4">DR. JAYASHREE THORAT</h3>
          <p className="mt-4 text-gray-600">
            Dr. Thorat is here to provide you with the most comfortable dental care. Her gentle approach and expertise will make your visit a pleasant experience. She is dedicated to your oral health and well-being.
          </p>
          <a className="mt-4 inline-block bg-teal-600 text-white hover:text-teal-600 hover:bg-gray-200 py-2 px-4 rounded" href="/about/doctor">
            MEET THE TEAM
          </a>
        </div>
        <div className="container mx-auto flex flex-col items-center bg-gray-800 text-white mt-12 p-8">
          <div className="text-4xl text-center mb-4 mt-4">NO INSURANCE NO PROBLEM <br /> WE ARE HERE TO HELP</div>
          <div className="flex space-x-4">
            <a className="mb-4 mt-4 inline-block bg-transparent text-white border border-white hover:bg-white hover:text-black py-2 px-4 rounded" href="#">
              REQUEST AN APPOINTMENT
            </a>
            <a className="mb-4 mt-4 inline-block bg-transparent text-white border border-white hover:bg-white hover:text-black py-2 px-4 rounded" href="#">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentistSection;

