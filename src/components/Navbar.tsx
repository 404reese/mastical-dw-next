// components/Navbar.tsx
"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [patientResourcesDropdown, setPatientResourcesDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="logo">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10 cursor-pointer" />
        </Link>
      </div>
      <div className="nav-links flex space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        {/* About Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
        >
          <button className="hover:underline focus:outline-none">
            About
          </button>
          {aboutDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
              <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-600">
                Our Team
              </Link>
              <Link href="/about/mission" className="block px-4 py-2 hover:bg-gray-600">
                Our Mission
              </Link>
            </div>
          )}
        </div>

        {/* Patient Resources Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setPatientResourcesDropdown(true)}
          onMouseLeave={() => setPatientResourcesDropdown(false)}
        >
          <button className="hover:underline focus:outline-none">
            Patient Resources
          </button>
          {patientResourcesDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
              <Link href="/patient-resources/forms" className="block px-4 py-2 hover:bg-gray-600">
                Forms
              </Link>
              <Link href="/patient-resources/faqs" className="block px-4 py-2 hover:bg-gray-600">
                FAQs
              </Link>
            </div>
          )}
        </div>

        {/* Our Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setServicesDropdown(true)}
          onMouseLeave={() => setServicesDropdown(false)}
        >
          <button className="hover:underline focus:outline-none">
            Our Services
          </button>
          {servicesDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
              <Link href="/our-services/service1" className="block px-4 py-2 hover:bg-gray-600">
                Service 1
              </Link>
              <Link href="/our-services/service2" className="block px-4 py-2 hover:bg-gray-600">
                Service 2
              </Link>
            </div>
          )}
        </div>

        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;