"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href?: string;
  dropdownItems?: NavItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [activeSubDropdown, setActiveSubDropdown] = useState('))');

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { 
      label: 'About', 
      dropdownItems: [
        { label: 'Meet Our Doctor', href: '/about/doctor' },
        { label: 'Our Office Tour', href: '/about/office' },
      ] 
    },
    { 
      label: 'Patient Resources', 
      dropdownItems: [
        { label: 'Financial Options', href: '/patient-resources/financial-options' },
        { label: 'Gallery', href: '/patient-resources/gallery' },
        { label: 'Patient Form', href: '/patient-resources/patient-form' },
        { label: 'Reviews', href: '/patient-resources/reviews' },
        { label: 'Special Offers', href: '/patient-resources/special-offers' },
      ] 
    },
    { 
      label: 'Our Services', 
      dropdownItems: [
        { 
          label: 'Cosmetic Dentistry', 
          dropdownItems: [
            { label: 'Dental Veneers', href: '/our-services/cosmetic-dentistry/dental-veneers' },
            { label: 'Invisalign Clear Aligners', href: '/our-services/cosmetic-dentistry/invisalign-clear-aligners' },
            { label: 'Zoom Teeth Whitening', href: '/our-services/cosmetic-dentistry/zoom-teeth-whitening' },
          ] 
        },
        { 
          label: 'Dental Technology', 
          dropdownItems: [
            { label: 'Cone Beam 3D Imaging', href: '/our-services/dental-technology/cone-beam-3d-imaging' },
            { label: 'Digital Scanner', href: '/our-services/dental-technology/digital-scanner' },
          ] 
        },
        { 
          label: 'General & Family Dentistry ', 
          dropdownItems: [
            { label: 'Cavity Detection', href: '/our-services/dentistry/cavity-detection' },
            { label: 'Dental Cleanings and Exams', href: '/our-services/dentistry/dental-cleanings-and-exams' },
            { label: 'Sports Mouth Guards', href: '/our-services/dentistry/sports-mouth-guards' },
            { label: 'Tooth Extractions', href: '/our-services/dentistry/tooth-extractions' },
            { label: 'Wisdom Teeth Removal', href: '/our-services/dentistry/wisdom-teeth-removal' },
          ] 
        },
        { 
          label: 'Restorative Dentistry', 
          dropdownItems: [
            { label: 'All On 4 Implants', href: '/our-services/rd/all-on-4-implants' },
            { label: 'Dental Bridges', href: '/our-services/rd/dental-bridges' },
            { label: 'Dental Fillings', href: '/our-services/rd/dental-fillings' },
            { label: 'Dental Implants', href: '/our-services/rd/dental-implants' },
            { label: 'Dentures', href: '/our-services/rd/dentures' },
            { label: 'Prosthetic Dentistry', href: '/our-services/rd/prosthetic-dentistry' },
            { label: 'Root Canal Therapy', href: '/our-services/rd/root-canal-therapy' },
            { label: 'Same Day Dental Crowns', href: '/our-services/rd/same-day-dental-crowns' },
          ] 
        },
      ] 
    },
    { label: 'Contact', href: '/contact' },
  ];

  const handleDropdownToggle = (label: string) => {
    if (label === activeDropdown) {
      setActiveDropdown('');
      setActiveSubDropdown('');
    } else {
      setActiveDropdown(label);
    }
  };

  const handleSubDropdownToggle = (label: string) => {
    if (label === activeSubDropdown) {
      setActiveSubDropdown('');
    } else {
      setActiveSubDropdown(label);
    }
  };

  const handleOutsideClick = () => {
    setActiveDropdown('');
    setActiveSubDropdown('');
  };

  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && !event.target.closest('.navbar')) {
        handleOutsideClick();
      }
    });
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar bg-[#F5F1E4] text-black p-4 flex items-center relative z-40">
      {/* Logo */}
      <Link href="/">
        <Image className="h-12 w-auto mr-8" src="/logo.webp" alt="Company Logo" width={100} height={100} />
      </Link>

      {/* Navigation Links */}
      <ul 
        className={`md:flex items-center space-x-4 ${isOpen ? 'flex' : 'hidden'} md:block absolute md:relative top-full left-32 right-0 bg-[#F5F1E4] md:bg-transparent md:p-0 p-4 z-50 text-xl`}
      >
        {navItems.map((item, index) => (
          <li key={index} className="relative">
            {/* Use <a> tags instead of <button> for navigation */}
            <a 
              href={item.href} 
              className="hover:text-teal-800 transition duration-300 flex items-center" 
              onClick={() => handleDropdownToggle(item.label)}
            >
              {item.label}
              {item.dropdownItems && (
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>
            {item.dropdownItems && activeDropdown === item.label && (
              <ul 
                className="absolute bg-[#F5F1E4] text-black p-4 space-y-2 top-full left-0 z-50"
                style={{ width: 'auto', minWidth: 'max-content' }} // Adjust width to accommodate text
              >
                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                  <li key={dropdownIndex} className="relative">
                    {/* Use <a> tags for dropdown items */}
                    <a 
                      href={dropdownItem.href} 
                      className="hover:text-teal-600 transition duration-300 w-full text-left flex items-center" 
                      onClick={() => handleSubDropdownToggle(dropdownItem.label)}
                    >
                      {dropdownItem.label}
                      {dropdownItem.dropdownItems && (
                        <svg 
                          className="ml-2 w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </a>
                    {dropdownItem.dropdownItems && activeSubDropdown === dropdownItem.label && (
                      <ul 
                        className="absolute bg-[#F5F1E4] text-black p-4 space-y-2 top-full left-full z-50"
                        style={{ width: 'auto', minWidth: 'max-content' }} // Same for sub-dropdowns
                      >
                        {dropdownItem.dropdownItems.map((subDropdownItem, subDropdownIndex) => (
                          <li key={subDropdownIndex}>
                            <a 
                              href={subDropdownItem.href} 
                              className="hover:text-teal-600 transition duration-300 w-full text-left"
                            >
                              {subDropdownItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Button */}
      <button 
        className="md:hidden flex flex-col items-center space-y-1" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>
    </nav>
  );
};

export default Navbar;

