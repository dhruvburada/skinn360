import React, { useState, useEffect } from 'react';
import {AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../constants/data';
import {motion} from 'framer-motion';
/**
 * Navigation - Responsive navigation bar with scroll effect
 */
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="images/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-yellow-600 transition-colors uppercase tracking-widest text-xs font-semibold">
              {item}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-white rounded-full font-medium shadow-lg shadow-yellow-500/30 flex items-center gap-2"
          >
            <PhoneCall size={16} />
            <a href="tel:+919586412805">Book Now</a>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4 items-center">
              {NAVIGATION_ITEMS.map((item) => (
                <a key={item} onClick={() => setIsOpen(false)} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-800 text-lg font-serif">
                  {item}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-yellow-400 text-white rounded-full font-medium mt-4">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

