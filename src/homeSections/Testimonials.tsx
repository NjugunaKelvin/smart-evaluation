/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      content: "SmartEval has completely changed the way we discover and evaluate relevant projects. The clear and transparent evaluation process gives us confidence in where we stand, while also showing us exactly what we need to work on to make our proposals stronger and more competitive. It’s taken a lot of the guesswork out of the process.",
      author: "Njuguna Kelvin",
      company: "Tech Solutions Inc.",
      role: "CEO",
      image: "/images/home/2.jpg"
    },
    {
      id: 2,
      content: "The quality of opportunities we’ve found on SmartEval is truly unmatched. Since joining the platform, we’ve seen our business grow by more than 40%, which is a milestone we didn’t expect to hit this quickly. Beyond growth, we’ve been able to secure funding that we never would have had access to otherwise. SmartEval hasn’t just helped us find opportunities. it’s helped shape the future of our business in a way that feels strategic and sustainable.",
      author: "Mariam Mboya",
      company: "Cloud Innovations",
      role: "Director",
      image: "/images/home/1.jpg"
    },
    {
      id: 3,
      content: "As a small business, breaking into government tenders always felt like an uphill battle. The process was overwhelming, and we often felt like we didn’t stand a chance against bigger competitors. SmartEval completely leveled the playing field, giving us the insight, guidance, and confidence we needed. Thanks to the platform, we were able to put together a winning proposal and secure our very first major contract, which has been a turning point for our growth.",
      author: "James Mwangi",
      company: "GreenBuild Constructions",
      role: "Managing Partner",
      image: "/images/home/3.jpeg"
    },
    {
      id: 4,
      content: "The analytics tools on SmartEval have given us invaluable insight into the strengths and weaknesses of our proposals. For the first time, we can clearly see what’s working, what’s not, and where to focus our efforts. By making data-driven improvements, we’ve managed to boost our success rate by an incredible 65%, turning more proposals into real opportunities and measurable results.",
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      </div>

      {/* Testimonial Content - pushed closer to true vertical center */}
      <div className="relative z-10 max-w-4xl h-full flex items-center justify-end pr-6 md:pr-12 lg:pr-20">
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
