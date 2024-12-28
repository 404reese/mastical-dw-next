import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: 'url("/hero-heart.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
        <h1 className="text-6xl font-bold">OUR FAMILY CARING FOR YOURS</h1>
        <p className="mt-4 text-2xl">Compassionate Care and 100% Honesty for the Langhorne Area</p>
        <div className="mt-6 space-x-4">
          <a className="bg-teal-600 hover:bg-teal-500 text-white py-2 px-4 rounded transition-colors" href="#">REQUEST AN APPOINTMENT</a>
          <a className="bg-transparent border border-white hover:bg-white hover:text-teal-600 text-white py-2 px-4 rounded transition-colors" href="#">OUR SERVICES</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

