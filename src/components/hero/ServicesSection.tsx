import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/patient.jpg')` }}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-white md:text-5xl font-normal pt-4 pb-8">
          WE FOCUS ON WHAT MATTERS MOST TO YOU
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/emergency-dental-care">
          <div className="bg-white p-6 rounded shadow-md bg-[#F5F1E4]">
            <Image src="/1.webp" alt="Tooth Icon" className="mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">EMERGENCY DENTAL</h3>
            <p className="mt-2 text-gray-600">
              We provide emergency dental care to address urgent dental issues.
            </p>
          </div>
        </Link>
        <Link href="/our-services/rd/same-day-dental-crowns">
          <div className="bg-white p-6 rounded shadow-md bg-[#F5F1E4]">
            <Image src="/2.webp" alt="Dental Crown Icon" className="mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">SAME-DAY CROWNS</h3>
            <p className="mt-2 text-gray-600">
              Get your crowns done in a single visit with our advanced technology.
            </p>
          </div>
        </Link>
        <Link href="/our-services/cosmetic-dentistry/zoom-teeth-whitening">
          <div className="bg-white p-6 rounded shadow-md bg-[#F5F1E4]">
            <Image src="/4.webp" alt="Teeth Whitening Icon" className="mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">ZOOM TEETH WHITENING</h3>
            <p className="mt-2 text-gray-600">
              Brighten your smile with our professional teeth whitening services.
            </p>
          </div>
        </Link>
        <Link href="/our-services/rd/dental-implants">
          <div className="bg-white p-6 rounded shadow-md bg-[#F5F1E4]">
            <Image src="/3.webp" alt="Dental Implants Icon" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">DIGITAL GUIDED IMPLANTS</h3>
            <p className="mt-2 text-gray-600">
              Experience precise and efficient dental implants with our digital technology.
            </p>
          </div>
        </Link>
        <Link href="/our-services/cosmetic-dentistry/invisalign-clear-aligners">
          <div className="bg-white p-6 rounded shadow-md bg-[#F5F1E4]">
            <Image src="/5.webp" alt="Invisalign Icon" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">INVISALIGN</h3>
            <p className="mt-2 text-gray-600">
              Straighten your teeth discreetly with our Invisalign treatment.
            </p>
          </div>
        </Link>
        <Link href="/our-services/dentistry/wisdom-teeth-removal">
          <div className="bg-white p-6 rounded shadow-md bg-[#F5F1E4]">
            <Image src="/6.webp" alt="Wisdom Teeth Icon" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">WISDOM TEETH REMOVAL</h3>
            <p className="mt-2 text-gray-600">
              Safe and comfortable wisdom teeth removal services.
            </p>
          </div>
        </Link>
        </div>
        <a className="mt-8 inline-block border border-teal-600 bg-teal-600 text-white hover:bg-white hover:text-teal-600 py-2 px-4 rounded transition-colors" href="/our-services">
          VIEW ALL SERVICES
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;

