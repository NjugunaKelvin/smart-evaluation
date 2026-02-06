

'use client'
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); 
  
  const testimonials = [
    {
      id: 1,
      content: "SmartEval has completely changed the way we discover and evaluate relevant projects. The clear and transparent evaluation process gives us confidence in where we stand, while also showing us exactly what we need to work on to make our proposals stronger and more competitive. It's taken a lot of the guesswork out of the process.",
      author: "Njuguna Kelvin",
      company: "Tech Solutions Inc.",
      role: "CEO",
      image: "/images/home/2.jpg"
    },
    {
      id: 2,
      content: "The quality of opportunities we've found on SmartEval is truly unmatched. Since joining the platform, we've seen our business grow by more than 40%, which is a milestone we didn't expect to hit this quickly. Beyond growth, we've been able to secure funding that we never would have had access to otherwise.",
      author: "Mariam Mboya",
      company: "Cloud Innovations",
      role: "Director",
      image: "/images/home/1.jpg"
    },
    {
      id: 3,
      content: "As a small business, breaking into government tenders always felt like an uphill battle. The process was overwhelming, and we often felt like we didn't stand a chance against bigger competitors. SmartEval completely leveled the playing field.",
      author: "James Mwangi",
      company: "GreenBuild Constructions",
      role: "Managing Partner",
      image: "/images/home/3.jpeg"
    },
    {
      id: 4,
      content: "The analytics tools on SmartEval have given us invaluable insight into the strengths and weaknesses of our proposals. For the first time, we can clearly see what's working, what's not, and where to focus our efforts.",
      author: "Sarah Otieno",
      company: "DataDrive Analytics",
      role: "CTO",
      image: "/images/home/bg.jpg"
    }
  ];

  
  const goToNext = useCallback(() => {
    setDirection(0);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(true);
  }, [testimonials.length]);

  const goToPrev = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(true);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 0 : 1);
    setCurrentSlide(index);
    setIsAutoPlaying(true);
  };

  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(goToNext, 6000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, goToNext]);

  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section 
      className="relative w-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {}
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].author}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-4 md:px-8 lg:px-12">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={testimonials[currentSlide].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: "tween", 
              ease: "easeOut", 
              duration: 0.8 
            }}
            className="flex flex-col items-start text-left max-w-2xl lg:max-w-3xl"
          >
            <div className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10">
              <p className="text-lg md:text-xl lg:text-2xl italic font-light text-gray-100 leading-relaxed mb-6 md:mb-8">
                "{testimonials[currentSlide].content}"
              </p>
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  {testimonials[currentSlide].author}
                </h4>
                <p className="text-gray-300 text-sm md:text-base">
                  {testimonials[currentSlide].role}, {testimonials[currentSlide].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-3 md:left-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:scale-110 z-20"
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 md:right-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:scale-110 z-20"
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  );
}