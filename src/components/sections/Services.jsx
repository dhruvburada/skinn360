import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import { SERVICES } from '../../constants/data';

/**
 * Services - Services/Treatments section
 */
const Services = () => {
  return (
    <section id="treatments" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Curated Treatments</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our menu of services combines medical precision with spa-like luxury designed for the modern individual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/treatments"
            className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-gray-900/20 transition hover:bg-gray-800"
          >
            Explore our Treatments
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

