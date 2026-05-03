/**
 * Application constants and data
 */

export const NAVIGATION_ITEMS = ['Treatments', 'The Doctor', 'Why Us', 'Reviews'];

export const SERVICES = [
  {
    title: "Laser Hair Reduction",
    description: "Pain-free, advanced diode laser technology for silky smooth skin.",
    image: "https://www.rmskinclinic.com/wp-content/uploads/2023/07/upper_lip_laser_hair_removal_toronto-1024x682-1024x682-1.jpg"
  },
  {
    title: "Hydra-Medi Facial",
    description: "Deep cleansing and hydration that restores your natural glow instantly.",
    image: "https://as2.ftcdn.net/jpg/04/11/74/15/1000_F_411741559_WFQsgPbqfhlpUc4UznbzmPniADsY4qcR.jpg"
  },
  {
    title: "Acne & Scar Treatment",
    description: "Customized protocols to clear active acne and smooth out textures.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Hair Restoration",
    description: "PRP and mesotherapy solutions to regain hair density and confidence.",
    image: "images/hair-growth.png"
  }
];

/** Local before/after assets in /public/images — paired by treatment name from filenames */
export const BEFORE_AFTER_COMPARISONS = [
  {
    beforeImage: '/images/acne-before.png',
    afterImage: `/images/${encodeURIComponent('acne after.png')}`,
    title: 'Acne & Scar Treatment',
    sessions: 'Personalized plan',
    description: 'Clearer skin and smoother texture with protocols matched to your acne type.',
  },
  {
    beforeImage: '/images/skinn-brightning-before.png',
    afterImage: '/images/skinn-brightning-after.png',
    title: 'Skin Brightening',
    sessions: 'Glow protocol',
    description: 'Brighter, more even radiance—aligned with our skin brightening and glow therapies.',
  },
  {
    beforeImage: '/images/anti-aging-before.png',
    afterImage: '/images/anti-aging-after.png',
    title: 'Anti-Aging',
    sessions: 'Lift & firming',
    description: 'Firmer, more youthful-looking skin with our anti-aging and tightening approach.',
  },
  {
    beforeImage: '/images/pigmentation-before.png',
    afterImage: '/images/pigmentation-after.png',
    title: 'Pigmentation',
    sessions: 'Even-tone focus',
    description: 'Reduced visible spots and more uniform tone with targeted pigmentation care.',
  },
];

export const WHY_US_FEATURES = [
  {
    title: "Accurate Diagnosis & Safe Technology",
    desc: "Every treatment begins with precise diagnosis and US-FDA approved technology for safe, effective results."
  },
  {
    title: "Personalized & Result-Oriented Care",
    desc: "No one-size-fits-all solutions. We create customized treatment plans focused on visible, long-term results."
  },
  {
    title: "Ethical, Transparent & Compassionate Care",
    desc: "We believe in honest guidance, clear communication, and empathetic care at every step of your journey."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    type: "video",
    quote: "My acne is completely gone!",
    author: "Priya K.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    videoUrl: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    type: "text",
    quote: "I had been struggling with my skin for a long time, but after consulting At skinn 360 (Dr parag talaviya) everything changed. Their treatment plan, patience and detailed explanations helped my skin become healthy and glowing again. I'm truly thankful for the care and transformation they brought into my skincare journey",
    author: "Tanvi J.",
    role: "Google Review"
  },
  {
    id: 3,
    type: "video",
    quote: "Best hair treatment in Gondal.",
    author: "Amit S.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    videoUrl: "dQw4w9WgXcQ",
  },
  {
    id: 4,
    type: "text",
    quote: "I visited Dr. Parag Talaviya's dermatology clinic for hair treatment and had a great experience. The doctor was very professional and explained everything clearly. The treatment worked well for me — I've seen noticeable improvement in my hair. Highly recommend for anyone dealing with hair issues!",
    author: "Aryan S.",
    role: "Google Review",
    avatar: "",
  },
  {
    id: 5,
    type: "video",
    quote: "Glowing skin after just one session!",
    author: "Vikram R.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    videoUrl: "dQw4w9WgXcQ",
  },
];

export const CONTACT_INFO = {
  address: "C-VikramSinhji Complex, Near Bus Stand Road",
  city: "Gondal, Gujarat 360311",
  phone: "+91 95864 12805",
  instagram: "@dr_parag_talavia",
  morningHours: "10:00 AM – 2:00 PM (Morning)",
  eveningHours: "5:00 PM – 8:00 PM (Evening)",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.2843793993375!2d70.79659749999999!3d21.9620461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39583896563400b7%3A0xae94bb93a120638b!2sDr.%20Parag%20Talavia'%20Skinn%20360%20Skin%20Laser%20and%20Cosmetic%20Center!5e0!3m2!1sen!2sin!4v1770974933187!5m2!1sen!2sin"
};

export const DOCTOR_INFO = {
  name: "Dr. Parag Talavia",
  qualification: "MD Skin & Dermatology",
  quote: "Skin is a reflection of your inner health.",
  bio: "With over a decade of experience in clinical and aesthetic dermatology, Dr. Parag Talavia, a Gold Medalist, brings a holistic and patient-centric approach to skincare in Gondal. He specializes in the diagnosis and treatment of skin diseases and hair disorders, along with advanced laser treatments, anti-aging protocols, and hair restoration. Dr. Talavia believes in enhancing natural beauty and restoring skin and hair health rather than changing one's natural appearance.",
  image: "images/doctor.jpeg",
  stats: {
    patients: "150k+",
    experience: "15+"
  }
};

