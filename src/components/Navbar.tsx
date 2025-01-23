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
  const [isOpen, setIsOpen] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [activeDropdown, setActiveDropdown] = useState('');
  const [activeSubDropdown, setActiveSubDropdown] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
    <nav className="bg-[#F5F1E4] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <div className={`w-6 h-6 relative transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`absolute h-1 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`absolute h-1 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''} top-2.5`} />
              <span className={`absolute h-1 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''} top-5`} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link href={item.href} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <div
                    onClick={() => handleDropdownToggle(item.label)}
                    className="cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {item.label}
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                {item.dropdownItems && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#F5F1E4] ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <div key={dropdownItem.label}>
                          {dropdownItem.href ? (
                            <Link href={dropdownItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              {dropdownItem.label}
                            </Link>
                          ) : (
                            <div className="relative group/sub">
                              <div
                                onClick={() => handleSubDropdownToggle(dropdownItem.label)}
                                className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                              >
                                {dropdownItem.label}
                                <svg
                                  className={`ml-2 h-5 w-5 transform transition-transform ${
                                    activeSubDropdown === dropdownItem.label ? 'rotate-180' : ''
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              {dropdownItem.dropdownItems && activeSubDropdown === dropdownItem.label && (
                                <div className="absolute left-full top-0 w-56 ml-0.5 rounded-md shadow-lg bg-[#F5F1E4] ring-1 ring-black ring-opacity-5">
                                  <div className="py-1">
                                    {dropdownItem.dropdownItems.map((subItem) => (
                                      <Link
                                        key={subItem.label}
                                        href={subItem.href || '#'}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <div className="flex-shrink-0">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/logo.webp"
                alt="Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-md p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                    >
                      {item.label}
                      <svg
                        className={`ml-2 h-5 w-5 transform transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {item.dropdownItems && activeDropdown === item.label && (
                      <div className="pl-4">
                        {item.dropdownItems.map((dropdownItem) => (
                          <div key={dropdownItem.label}>
                            {dropdownItem.href ? (
                              <Link
                                href={dropdownItem.href}
                                className="block px-3 py-2 rounded-md text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.label}
                              </Link>
                            ) : (
                              <>
                                <div
                                  onClick={() => handleSubDropdownToggle(dropdownItem.label)}
                                  className="flex justify-between items-center px-3 py-2 rounded-md text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                                >
                                  {dropdownItem.label}
                                  <svg
                                    className={`ml-2 h-5 w-5 transform transition-transform ${
                                      activeSubDropdown === dropdownItem.label ? 'rotate-180' : ''
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                                {dropdownItem.dropdownItems && activeSubDropdown === dropdownItem.label && (
                                  <div className="pl-4">
                                    {dropdownItem.dropdownItems.map((subItem) => (
                                      <Link
                                        key={subItem.label}
                                        href={subItem.href || '#'}
                                        className="block px-3 py-2 rounded-md text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
