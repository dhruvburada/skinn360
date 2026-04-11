import { CheckCircle2, Star, Sparkles } from 'lucide-react';
import GoldIcon from '../ui/GoldIcon';
import { WHY_US_FEATURES } from '../../constants/data';
import {motion} from 'framer-motion';
/**
 * WhyUs - Why patients trust us section
 */
const WhyUs = () => {
  const icons = [CheckCircle2, Star, Sparkles];

  return (
    <section id="why-us" className="py-24 px-6 bg-gradient-to-b from-yellow-50/50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          {/* Abstract Layout */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-12">
              <img src="images/young-woman-3.png" className="rounded-2xl shadow-lg" alt="Clinic Interior" />
              <div className="bg-rose-100 p-6 rounded-2xl">
                <p className="font-serif italic text-rose-800">"The best investment you can make is in yourself."</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-100 p-6 rounded-2xl h-32 flex items-center justify-center">
                <GoldIcon icon={Sparkles} size={40} />
              </div>
              <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" alt="Treatment" />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-serif text-gray-900 mb-8">
            {' '}Why Patients Trust <span className="text-yellow-600">Skinn360</span>
          </h2>
          <div className="space-y-8">
            {WHY_US_FEATURES.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-4"
              >
                <div className="mt-1">
                  <GoldIcon icon={icons[i]} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">{f.title}</h3>
                  <p className="text-gray-500">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

