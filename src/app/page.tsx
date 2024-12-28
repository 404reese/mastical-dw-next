import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import PatientSpecials from '@/components/hero/PatientSpecials';
import ServicesSection from '@/components/hero/ServicesSection';
import DentistSection from '@/components/hero/DentistSection';
import TourSection from '@/components/hero/TourSection';
import TestimonialsSection from '@/components/hero/TestimonialsSection';
import NewSmilesSection from '@/components/hero/NewSmilesSection';
import HistorySection from '@/components/hero/HistorySection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <PatientSpecials />
      <ServicesSection />
      <DentistSection />
      <TourSection />
      <TestimonialsSection />
      <NewSmilesSection />
      <HistorySection />
    </div>
  );
};

export default HomePage;
