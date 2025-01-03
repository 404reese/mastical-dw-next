import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <Image
          alt="Langhorne Family Smiles Logo"
          className="mx-auto mb-4"
          height={50}
          src="/footlogo.webp"
          width={300}
        />
        <p className="text-sm">712A Trenton Road, Langhorne, PA 19047</p>
        <p className="text-sm">
          <i className="fas fa-phone-alt"></i> 215-752-5505
        </p>
        <div className="mt-4 space-x-4">
          <a className="text-gray-400 hover:text-white" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-gray-400 hover:text-white" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-gray-400 hover:text-white" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">CONTACT US</h3>
            <p className="mt-2 text-gray-400">712A Trenton Road, Langhorne, PA 19047</p>
            <p className="mt-2 text-gray-400">215-752-5505</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">HOURS</h3>
            <p className="mt-2 text-gray-400">Monday: 10:00 a.m. - 7:00 p.m.</p>
            <p className="mt-2 text-gray-400">Tuesday: 10:00 a.m. - 7:00 p.m.</p>
            <p className="mt-2 text-gray-400">Wednesday: 10:00 a.m. - 7:00 p.m.</p>
            <p className="mt-2 text-gray-400">Thursday: 10:00 a.m. - 7:00 p.m.</p>
            <p className="mt-2 text-gray-400">Friday: 10:00 a.m. - 7:00 p.m.</p>
            <p className="mt-2 text-gray-400">
              *OPEN ONLY ON THE FIRST AND THIRD SATURDAYS OF THE MONTH.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">GET STARTED TODAY</h3>
            <a
              className="mt-2 inline-block bg-teal-600 hover:bg-teal-700 hover:text-white py-2 px-4 rounded"
              href="https://www.appointnow.com/?P=4701&O=100&PT=0&campaignID=123"
              target="_blank"
              rel="noopener noreferrer"
            >
              REQUEST AN APPOINTMENT
            </a>
          </div>
        </div>
        <p className="mt-8 text-gray-400 text-sm">
          &copy; 2025 Langhorne Family Smiles. All rights reserved. | Website Design by
          <a href="https://www.mastical.com" target="_blank" rel="noopener noreferrer">
            <Image
              alt="Mastical"
              className="h-6 w-auto inline-block ml-1"
              height={24}
              src="/mastical-text.png"
              width={120}
            />
          </a>
        </p>
        <a
          className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 hover:text-white py-2 px-4 rounded"
          href="#"
        >
          Book Online
        </a>
      </div>
    </footer>
  );
};

export default Footer;

