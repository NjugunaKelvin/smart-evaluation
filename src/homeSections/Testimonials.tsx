/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      content: "SmartEval has transformed how we find relevant projects. The transparency in evaluation means we know exactly where we stand and how to improve our proposals.",
      author: "Njuguna Kelvin",
      company: "Tech Solutions Inc.",
      role: "CEO",
      image: "/images/home/bg2.jpg"
    },
    {
      id: 2,
      content: "The quality of opportunities on SmartEval is unmatched. We've grown our business by 40% since joining the platform and secured funding we wouldn't have accessed otherwise.",
      author: "Mariam Mboya",
      company: "Cloud Innovations",
      role: "Director",
      image: "/images/home/bg3.jpg"
    },
    {
      id: 3,
      content: "As a small business, accessing government tenders was always challenging. SmartEval leveled the playing field and helped us win our first major contract.",
      author: "James Mwangi",
      company: "GreenBuild Constructions",
      role: "Managing Partner",
      image: "/images/home/bg4.jpg"
    },
    {
      id: 4,
      content: "The analytics tools provided invaluable insights into our proposal strengths and weaknesses. We've increased our success rate by 65% since using SmartEval.",
      author: "Sarah Otieno",
      company: "DataDrive Analytics",
      role: "CTO",
      image: "/images/home/bg.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: SetStateAction<number>) => setCurrentSlide(index);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={testimonials[currentSlide].image}
          alt={testimonials[currentSlide].author}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Testimonial Content - pushed closer to true vertical center */}
      <div className="relative z-10 max-w-4xl mx-auto h-full flex items-center justify-end pr-6 md:pr-12 lg:pr-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentSlide].id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left max-w-2xl translate-y-[5%] md:translate-y-[10%]"
          >
            <p className="text-lg md:text-xl lg:text-2xl italic font-light text-gray-100 leading-relaxed mb-4">
              "{testimonials[currentSlide].content}"
            </p>
            <h4 className="text-lg md:text-xl font-semibold text-white">
              {testimonials[currentSlide].author}
            </h4>
            <p className="text-gray-300 text-sm">
              {testimonials[currentSlide].role}, {testimonials[currentSlide].company}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-3 md:left-6 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full text-white transition shadow-lg"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 md:right-6 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full text-white transition shadow-lg"
      >
        &#8594;
      </button>

      {/* Indicators */}
      
    </section>
  );
}
