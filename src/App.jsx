import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Star, Calendar, MapPin, Phone, Instagram, ArrowRight, CheckCircle2, Play, Sparkles, Menu, X, ChevronDown, Clock } from 'lucide-react';

/**
 * SKINN360 - GONDAL
 * Concept: Hydro-Luxe (Liquid Gold)
 * A visually hydrated interface mimicking the texture of luxury serums.
 */

// --- Assets & Icons ---
// Using Lucide for base icons, but wrapping them in gold-plated containers.

const GoldIcon = ({ icon: Icon, size = 24 }) => (
  <div className="relative inline-flex items-center justify-center">
    <Icon size={size} className="text-yellow-600 relative z-10" strokeWidth={1.5} />
    <div className="absolute inset-0 bg-yellow-200 blur-md opacity-40 rounded-full" />
  </div>
);

// --- Components ---

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
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 rounded-full border-2 border-yellow-400 border-dashed"
          />
          <span className={`text-2xl font-serif tracking-widest font-bold ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            SKINN<span className="text-yellow-600">360</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Treatments', 'The Doctor', 'Why Us', 'Reviews'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-yellow-600 transition-colors uppercase tracking-widest text-xs font-semibold">
              {item}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-white rounded-full font-medium shadow-lg shadow-yellow-500/30 flex items-center gap-2"
          >
            <Calendar size={16} />
            <span>Book Now</span>
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
              {['Treatments', 'The Doctor', 'Why Us', 'Reviews'].map((item) => (
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

const FluidBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
    <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-yellow-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
    <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
  </div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

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
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium flex items-center justify-center gap-3 shadow-2xl shadow-gray-900/20"
            >
              Book Consultation <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-white text-gray-900 rounded-full font-medium hover:bg-white transition-colors"
            >
              View Treatments
            </motion.button>
          </div>
        </motion.div>

        {/* Visual Content */}
        <div className="relative h-[600px] hidden md:block">
           {/* Abstract "Serum" Shapes */}
           <motion.div style={{ y: y2 }} className="absolute top-10 right-10 w-64 h-80 rounded-[4rem] overflow-hidden border border-white/50 shadow-2xl z-20">
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" alt="Glowing Skin" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent" />
           </motion.div>

           <motion.div style={{ y: y1 }} className="absolute bottom-20 left-10 w-56 h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-xl z-10 backdrop-blur-md bg-white/10">
              <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=600" alt="Skincare Product" className="w-full h-full object-cover opacity-90" />
           </motion.div>

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

const AboutDoctor = () => {
  return (
    <section id="the-doctor" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-xl">
          <div className="md:w-1/2 relative">
             <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Skinn360" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-serif text-2xl italic">"Skin is a reflection of your inner health."</p>
                  </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full blur-xl opacity-60" />
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-300 rounded-full blur-xl opacity-60" />
          </div>

          <div className="md:w-1/2 space-y-6">
            <h3 className="text-yellow-600 font-bold tracking-widest uppercase text-sm">Meet the Expert</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Dr. Ananya Mehta</h2>
            <p className="text-xl text-gray-600 font-medium">MD Dermatology & Cosmetology</p>
            <p className="text-gray-500 leading-relaxed">
              With over a decade of experience in clinical and aesthetic dermatology, Dr. Mehta brings a holistic approach to skincare in Gondal. Specializing in advanced laser treatments, anti-aging protocols, and hair restoration, she believes in enhancing natural beauty rather than changing it.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-3xl font-serif text-gray-900">10k+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Patients</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-gray-900">12+</h4>
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
      
      {/* Content Overlay */}
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

const Services = () => {
  const services = [
    {
      title: "Laser Hair Reduction",
      description: "Pain-free, advanced diode laser technology for silky smooth skin.",
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Hydra-Medi Facial",
      description: "Deep cleansing and hydration that restores your natural glow instantly.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Acne & Scar Treatment",
      description: "Customized protocols to clear active acne and smooth out textures.",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Hair Restoration",
      description: "PRP and mesotherapy solutions to regain hair density and confidence.",
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=600"
    }
  ];

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
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    { icon: CheckCircle2, title: "US-FDA Approved Tech", desc: "We use only the safest, world-class equipment." },
    { icon: Star, title: "Personalized Protocols", desc: "No cookie-cutter plans. Your skin is unique." },
    { icon: Sparkles, title: "Luxury Experience", desc: "Ambiance that relaxes you the moment you step in." },
  ];

  return (
    <section id="why-us" className="py-24 px-6 bg-gradient-to-b from-yellow-50/50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
           {/* Abstract Layout */}
           <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 translate-y-12">
               <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" alt="Clinic Interior" />
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
          <h2 className="text-4xl font-serif text-gray-900 mb-8">Why Gondal Chooses <span className="text-yellow-600">Skinn360</span></h2>
          <div className="space-y-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-4"
              >
                <div className="mt-1">
                  <GoldIcon icon={f.icon} />
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

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      type: 'video',
      quote: "My acne is completely gone!",
      author: "Priya K.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      type: 'text',
      quote: "The clinic ambiance is so soothing, unlike typical hospitals. Dr. Mehta really listens to your concerns. The hydra-facial is a must-try before any wedding!",
      author: "Rahul D.",
      role: "Google Review",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      type: 'video',
      quote: "Best hair treatment in Gondal.",
      author: "Amit S.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      type: 'text',
      quote: "I visited for laser hair reduction and the results are amazing. Dr. Ananya is very professional and the staff is cooperative.",
      author: "Sneha M.",
      role: "Google Review",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 5,
      type: 'video',
      quote: "Glowing skin after just one session!",
      author: "Vikram R.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  // Duplicate the array to create a seamless loop
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="py-24 px-0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-center text-4xl font-serif">Real Stories, <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-yellow-500">Real Glow</span></h2>
      </div>
      
      {/* Carousel Track */}
      <div className="flex overflow-hidden relative w-full mask-image-linear-gradient">
        <motion.div 
          className="flex gap-8 px-6"
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ width: "fit-content" }}
        >
          {carouselItems.map((item, index) => (
             <div key={`${item.id}-${index}`} className="w-[300px] md:w-[350px] shrink-0">
               {item.type === 'video' ? (
                 <div className="relative aspect-[9/16] bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer h-full">
                    <img src={item.image} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Review" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                        <Play className="text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-serif text-lg">{item.quote}</p>
                      <p className="text-yellow-300 text-sm">- {item.author}</p>
                    </div>
                 </div>
               ) : (
                 <div className="bg-white border border-white/60 p-8 rounded-[2rem] shadow-xl flex flex-col justify-between h-full min-h-[500px] md:min-h-auto aspect-[9/16] md:aspect-auto relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    {/* Subtle decorative background gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-50 to-transparent rounded-bl-[4rem] -z-0 opacity-50" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8">
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(s => <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />)}
                        </div>
                        {/* Google G Logo SVG */}
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm opacity-90">
                           <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 font-medium leading-loose text-lg font-serif relative">
                        <span className="text-4xl text-yellow-200 absolute -top-4 -left-2 font-serif opacity-50">"</span>
                        {item.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100 relative z-10">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img src={item.avatar} alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 font-serif tracking-wide">{item.author}</p>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 size={12} className="text-green-500/80" />
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.role}</p>
                        </div>
                      </div>
                    </div>
                 </div>
               )}
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const LocationBook = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-gray-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-yellow-500 rounded-full blur-[100px] top-0 left-0" />
          <div className="absolute w-96 h-96 bg-rose-500 rounded-full blur-[100px] bottom-0 right-0" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2">
          <div className="p-12 md:p-16 text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">Visit Our Sanctuary</h2>
            <p className="text-gray-300 text-lg">Ready to transform your skin? Book an appointment today and start your journey to radiance.</p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-400 shrink-0 mt-1" />
                <p className="text-gray-300">
                  204, Royal Complex, Near College Chowk,<br />
                  Gondal, Gujarat 360311
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400 shrink-0" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-yellow-400 shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>9:00 AM – 2:00 PM (Morning)</p>
                  <p>5:00 PM – 8:00 PM (Evening)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="text-yellow-400 shrink-0" />
                <p className="text-gray-300">@skinn360_gondal</p>
              </div>
            </div>

            <div className="pt-8">
              <button className="w-full md:w-auto px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Book Appointment Now
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-auto bg-gray-800">
            {/* Embedded Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59183.33238682701!2d70.762884!3d21.961944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958223637171e09%3A0xc3f6071306385b2e!2sGondal%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white py-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
         <div className="w-6 h-6 rounded-full border border-yellow-400 border-dashed animate-spin-slow" />
         <span className="font-serif font-bold text-gray-900">SKINN360</span>
      </div>
      <p className="text-gray-400 text-sm">© 2024 Skinn360 Gondal. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="text-gray-400 hover:text-yellow-600 text-sm">Privacy</a>
        <a href="#" className="text-gray-400 hover:text-yellow-600 text-sm">Terms</a>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="bg-orange-50/30 min-h-screen text-gray-800 font-sans selection:bg-yellow-200 selection:text-yellow-900">
      <FluidBackground />
      <Navigation />
      
      <main>
        <Hero />
        <AboutDoctor />
        <Services />
        <WhyUs />
        <Testimonials />
        <LocationBook />
      </main>

      <Footer />
    </div>
  );
};

export default App;