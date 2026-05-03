import React from 'react';
import { motion } from 'framer-motion';
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
      className="group relative h-[400px] overflow-hidden rounded-[2rem]"
    >
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-serif text-white mb-2">{title}</h3>
          <p className="text-sm text-white/80 transition-all line-clamp-2 group-hover:line-clamp-none">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

