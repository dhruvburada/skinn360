import { useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

/** Tight params + srcset — hero cards are ~224–256px wide on md+ */
const HERO_GLOW_BASE =
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=75';
const HERO_GLOW_SRC = `${HERO_GLOW_BASE}&w=480&h=600`;
const HERO_GLOW_SRCSET = `${HERO_GLOW_BASE}&w=320&h=400 320w, ${HERO_GLOW_BASE}&w=480&h=600 480w, ${HERO_GLOW_BASE}&w=640&h=800 640w`;

const HERO_MODEL_SRC = '/images/model-face.jpg';

/**
 * Hero - Main hero section with parallax effects
 */
const Hero = () => {
  const [showHeroMedia, setShowHeroMedia] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
  );
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const sync = () => setShowHeroMedia(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/60 backdrop-blur-md mb-6"
          >
            <Sparkles size={14} className="text-yellow-600" />
            <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">Gondal's Premium Clinic</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-gray-900 leading-[0.9] mb-8">
            <span className="block">Reveal</span>
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-700 pb-2">Your Inner</span>
            <span className="block">Radiance.</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
            Advanced dermatology meets luxury care. Experience the future of skin and hair health at Skinn360.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#location-book">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium flex items-center justify-center gap-3 shadow-2xl shadow-gray-900/20"
              >
                Book Consultation <ArrowRight size={18} />
              </motion.button>
            </a>

            <a href="#treatments">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-white text-gray-900 rounded-full font-medium hover:bg-white transition-colors"
              >
                View Treatments
              </motion.button>
            </a>
          </div>

        </motion.div>

        {/* Visual Content — only mount images at md+ so mobile avoids large downloads */}
        <div className="relative hidden h-[600px] md:block">
          {showHeroMedia && (
            <>
              <motion.div
                style={{ y: y2 }}
                className="absolute right-10 top-10 z-20 h-80 w-64 overflow-hidden rounded-[4rem] border border-white/50 shadow-2xl"
              >
                <img
                  src={HERO_GLOW_SRC}
                  srcSet={HERO_GLOW_SRCSET}
                  sizes="256px"
                  width={480}
                  height={600}
                  alt="Radiant skin aesthetic"
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent" />
              </motion.div>

              <motion.div
                style={{ y: y1 }}
                className="absolute bottom-20 left-10 z-10 h-72 w-56 overflow-hidden rounded-full border-4 border-white/30 bg-white/10 shadow-xl backdrop-blur-md"
              >
                <img
                  src={HERO_MODEL_SRC}
                  width={448}
                  height={576}
                  sizes="224px"
                  alt="Clinic skincare portrait"
                  decoding="async"
                  fetchPriority="low"
                  className="h-full w-full object-cover opacity-90"
                />
              </motion.div>
            </>
          )}

          {/* Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute w-4 h-4 rounded-full bg-yellow-400 blur-sm"
              style={{
                top: `${20 + i * 15}%`,
                left: `${40 + i * 10}%`,
                filter: 'blur(4px)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        <ChevronDown />
      </div>
    </section>
  );
};

export default Hero;

