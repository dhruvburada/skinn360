import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DOCTOR_INFO } from '../../constants/data';

/**
 * AboutDoctor - Doctor profile section
 */
const AboutDoctor = () => {
  return (
    <section id="the-doctor" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-xl">
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img
                src={DOCTOR_INFO.image}
                alt={DOCTOR_INFO.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-serif text-2xl italic">"{DOCTOR_INFO.quote}"</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full blur-xl opacity-60" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-300 rounded-full blur-xl opacity-60" />
          </div>

          <div className="md:w-1/2 space-y-6">
            <h3 className="text-yellow-600 font-bold tracking-widest uppercase text-sm">Meet the Expert</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">{DOCTOR_INFO.name}</h2>
            <p className="text-xl text-gray-600 font-medium">{DOCTOR_INFO.qualification}</p>
            <p className="text-gray-500 leading-relaxed">
              {DOCTOR_INFO.bio}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-3xl font-serif text-gray-900">{DOCTOR_INFO.stats.patients}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Patients</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-gray-900">{DOCTOR_INFO.stats.experience}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</p>
              </div>
            </div>

            <button className="text-yellow-700 font-semibold border-b-2 border-yellow-400 pb-1 inline-flex items-center gap-2 hover:gap-4 transition-all">
              Read Full Bio <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;

