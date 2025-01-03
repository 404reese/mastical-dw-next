"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I had several issues treated very well. The staff did their jobs very well and added to the overall experience. She did an awesome job! Kudos to her! I would recommend anyone to her office.",
    name: "Ann G.",
    image: "/person-1.jpg",
  },
  {
    id: 2,
    text: "I was very impressed with the professionalism and friendly demeanor of everyone in the office. Great experience! I would definitely recommend this office to anyone!",
    name: "John D.",
    image: "/person-1.jpg",
  },
  {
    id: 3,
    text: "I had a great experience at Langhorne Family Smiles. The office is very clean and modern, and the staff is very friendly and knowledgeable. I would definitely recommend this office to anyone!",
    name: "Sarah K.",
    image: "/person-1.jpg",
  },
  {
    id: 4,
    text: "I have been going to this office for a while now and have had nothing but positive experiences. The staff is very friendly and professional. I would definitely recommend this office to anyone!",
    name: "Michael T.",
    image: "/person-1.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/testbg.jpg")' }}
      ></div>
      <div className="container mx-auto relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-normal pt-4 pb-8 text-white">
      TESTIMONIALS
        </h2>
        <div className="mt-8 overflow-hidden">
          <div
            className="transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div key={testimonials[currentIndex].id} className="flex items-center justify-center p-8">
              <div className="flex-none w-1/3 md:w-1/4 p-4">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="rounded-full h-32 w-32"
                  height={128}
                  width={128}
                />
              </div>
              <div className="flex-1 p-4">
                <p className="text-lg text-white">{testimonials[currentIndex].text}</p>
                <p className="mt-2 text-gray-200">{`- ${testimonials[currentIndex].name}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            className="mt-8 inline-block border border-teal-600 bg-teal-600 text-white hover:bg-white hover:text-teal-600 py-2 px-4 rounded transition-colors"
            href="#"
          >
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

