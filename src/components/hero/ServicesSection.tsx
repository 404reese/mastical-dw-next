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
          <Link href="/emergency-dental-care" className="block h-full">
            <div className="bg-[#F5F1E4] p-6 rounded shadow-md bg-[#F5F1E4] h-full flex flex-col items-center">
              <Image src="/1.webp" alt="Tooth Icon" className="mb-4" width={80} height={64} />
              <h3 className="text-xl font-semibold text-center">EMERGENCY DENTAL</h3>
              <p className="mt-2 text-gray-600 text-center">
                We provide emergency dental care to address urgent dental issues.
              </p>
            </div>
          </Link>
          <Link href="/our-services/rd/same-day-dental-crowns" className="block h-full">
            <div className="bg-[#F5F1E4] p-6 rounded shadow-md bg-[#F5F1E4] h-full flex flex-col items-center">
              <Image src="/2.webp" alt="Dental Crown Icon" className="mb-4" width={80} height={64} />
              <h3 className="text-xl font-semibold text-center">SAME-DAY CROWNS</h3>
              <p className="mt-2 text-gray-600 text-center">
                Get your crowns done in a single visit with our advanced technology.
              </p>
            </div>
          </Link>
          <Link href="/our-services/cosmetic-dentistry/zoom-teeth-whitening" className="block h-full">
            <div className="bg-[#F5F1E4] p-6 rounded shadow-md bg-[#F5F1E4] h-full flex flex-col items-center">
              <Image src="/4.webp" alt="Teeth Whitening Icon" className="mb-4" width={80} height={64} />
              <h3 className="text-xl font-semibold text-center">ZOOM TEETH WHITENING</h3>
              <p className="mt-2 text-gray-600 text-center">
                Brighten your smile with our professional teeth whitening services.
              </p>
            </div>
          </Link>
          <Link href="/our-services/rd/dental-implants" className="block h-full">
            <div className="bg-[#F5F1E4] p-6 rounded shadow-md bg-[#F5F1E4] h-full flex flex-col items-center">
              <Image src="/3.webp" alt="Dental Implants Icon" className="mb-4" width={80} height={64} />
              <h3 className="text-xl font-semibold text-center">DIGITAL GUIDED IMPLANTS</h3>
              <p className="mt-2 text-gray-600 text-center">
                Experience precise and efficient dental implants with our digital technology.
              </p>
            </div>
          </Link>
          <Link href="/our-services/cosmetic-dentistry/invisalign-clear-aligners" className="block h-full">
            <div className="bg-[#F5F1E4] p-6 rounded shadow-md bg-[#F5F1E4] h-full flex flex-col items-center">
              <Image src="/5.webp" alt="Invisalign Icon" className="mb-4" width={80} height={64} />
              <h3 className="text-xl font-semibold text-center">INVISALIGN</h3>
              <p className="mt-2 text-gray-600 text-center">
                Straighten your teeth discreetly with our Invisalign treatment.
              </p>
            </div>
          </Link>
          <Link href="/our-services/dentistry/wisdom-teeth-removal" className="block h-full">
            <div className="bg-[#F5F1E4] p-6 rounded shadow-md bg-[#F5F1E4] h-full flex flex-col items-center">
              <Image src="/6.webp" alt="Wisdom Teeth Icon" className="mb-4" width={80} height={64} />
              <h3 className="text-xl font-semibold text-center">WISDOM TEETH REMOVAL</h3>
              <p className="mt-2 text-gray-600 text-center">
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
