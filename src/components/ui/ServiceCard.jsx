import React from 'react';
import { ArrowRight } from 'lucide-react';
import {motion} from 'framer-motion';
/**
 * ServiceCard - Individual service card with hover effects
 */
const ServiceCard = ({ title, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer"
    >
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-serif text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm line-clamp-2 group-hover:line-clamp-none transition-all">
            {description}
          </p>
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-yellow-300 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              Learn More <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

