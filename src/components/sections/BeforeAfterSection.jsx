import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import { BEFORE_AFTER_COMPARISONS } from '../../constants/data';
import {motion} from 'framer-motion';
/**
 * BeforeAfterSection - Before/After transformation gallery with carousel
 */
const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerView = isDesktop ? 2 : 1;
  const maxIndex = BEFORE_AFTER_COMPARISONS.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="results" className="py-24 px-6 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Transformations</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Witness the visible results of our personalized treatment plans.
          </p>
        </div>

        <div className="relative">
          {/* Slider Container with max-width */}
          <div className="max-w-5xl mx-auto relative">
            {/* Slider Window */}
            <div className="overflow-hidden px-4 md:px-0 -mx-4 md:mx-0">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {BEFORE_AFTER_COMPARISONS.map((item, idx) => (
                  <div key={idx} className={`w-full md:w-1/2 flex-shrink-0 px-4 md:px-6`}>
                    <BeforeAfterSlider {...item} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons - centered on slider content */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-[45%] -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white shadow-lg text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-yellow-50 hover:text-yellow-600 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="absolute right-0 top-[45%] -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white shadow-lg text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-yellow-50 hover:text-yellow-600 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-yellow-500' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

