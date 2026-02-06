
'use client'
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  
  const calculateTargetDate = () => {
    const target = new Date();
    target.setDate(target.getDate() + 47);
    return target;
  };

  const [targetDate] = useState(calculateTargetDate());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        {}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          We will drop the
        </h1>
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            Pricing Soon
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>
        
        {}
        <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto">
          We're working towards implementing a budget friendly plan for you:
        </p>
        
        {/* Countdown Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {/* Days */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-gray-800 rounded-lg p-6 transform transition duration-300 group-hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Days</div>
            </div>
          </div>
          
          {/* Hours */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-gray-800 rounded-lg p-6 transform transition duration-300 group-hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Hours</div>
            </div>
          </div>
          
          {/* Minutes */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-gray-800 rounded-lg p-6 transform transition duration-300 group-hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Minutes</div>
            </div>
          </div>
          
          {/* Seconds */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-gray-800 rounded-lg p-6 transform transition duration-300 group-hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Seconds</div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-gray-400 text-sm mb-2">
            <span>Time passed</span>
            <span>Time remaining</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
              style={{ width: `${(1 - (timeLeft.days / 47)) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Notify Me Button */}
        <a href="/about/story">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Our Story in the meantime
          </button>
        </a>
        
        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-12">
          We're working hard to bring you something special. Follow us for updates.
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;