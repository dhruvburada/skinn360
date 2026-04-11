import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  GraduationCap,
  Medal,
  BookOpen,
  Users,
  HeartHandshake,
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { GoldIcon } from '../components/GoldIcon';

export default function TheExpertPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: '2006',
      title: 'MBBS',
      detail: 'Pramukh Swami Medical College, Karamsad — foundation in medicine and patient care.',
    },
    {
      year: '2009',
      title: 'Gold Medal — Paper Presentation',
      detail: 'West Conference, Ahmedabad — recognised for research excellence and clear clinical communication.',
    },
    {
      year: '2010',
      title: 'MD (Skin)',
      detail: 'Pramukh Swami Medical College, Karamsad — Gold Medalist. Specialisation in dermatology, cosmetology & hair science.',
    },
  ];

  const achievements = [
    {
      icon: Medal,
      title: 'MD — Gold Medalist',
      text: 'Top honours in postgraduate dermatology training — a reflection of depth, discipline, and clinical rigour.',
    },
    {
      icon: Award,
      title: 'West Conference, 2009',
      text: 'Gold Medalist for paper presentation — bridging evidence with everyday dermatology practice.',
    },
    {
      icon: BookOpen,
      title: 'Research & presentations',
      text: 'Multiple national and international paper and poster presentations — staying current so your care stays ahead.',
    },
  ];

  const memberships = ['IADVL', 'AAD', 'CDSI', 'ACSICON'];

  return (
    <Layout>
      <section
        id="the-expert"
        className="py-20 md:py-28 px-6 relative pt-28 md:pt-32"
      >
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-5"
          >
            <p className="text-yellow-600 font-bold tracking-widest uppercase text-sm">
              The Expert
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Dr. Parag Talavia
            </h1>
            <p className="text-gray-500 text-lg">
              MD Skin — Dermatologist, Cosmetologist & Hair Expert
            </p>
            <p className="pt-2">
              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-yellow-700 transition-colors inline-flex items-center gap-1.5"
              >
                ← Back to home
              </Link>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-yellow-400/80 via-amber-200/60 to-rose-200/40 hidden md:block" />
            <div className="bg-white/50 backdrop-blur-xl border border-white/70 rounded-[2.5rem] p-8 md:p-12 shadow-lg shadow-yellow-900/5">
              <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-700 mb-4">
                Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8 max-w-3xl">
                Skin and hair concerns are rarely only about appearance — they affect how you feel in your own body. Dr. Talavia takes time to understand your history, lifestyle, and goals, then builds a plan that is medically sound, honest, and kind. No unnecessary procedures; no vague promises — only thoughtful care you can trust.
              </p>
              <blockquote className="relative pl-6 md:pl-8 border-l-2 border-yellow-400/90">
                <p className="font-serif text-xl md:text-2xl text-gray-800 italic leading-snug">
                  &ldquo;We treat your skin problems with genuine, rational and holistic approach.&rdquo;
                </p>
              </blockquote>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-yellow-50/80 to-white/60 border border-yellow-100/80 rounded-[2rem] p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <GoldIcon icon={Users} size={22} />
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-800">
                  Experience &amp; expertise
                </h2>
              </div>
              <p className="text-5xl md:text-6xl font-serif text-gray-900 mb-2">15+</p>
              <p className="text-gray-600 mb-6 font-medium">Years of dedicated clinical and aesthetic practice</p>
              <p className="text-gray-600 leading-relaxed">
                From common skin conditions to advanced laser work and hair restoration, the focus stays the same: accurate diagnosis, ethical advice, and treatments that fit your life — not a template copied from the internet.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-white/45 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 md:p-10 h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <GoldIcon icon={HeartHandshake} size={22} />
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-800">
                  How we work with you
                </h2>
              </div>
              <ul className="space-y-4 text-gray-600 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
                  Clear explanations — you leave understanding why a treatment is suggested.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
                  Holistic view — nutrition, stress, and habits considered alongside prescriptions and procedures.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
                  Steady follow-through — adjustments when your skin responds, not a one-size-fits-all protocol.
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center md:text-left"
            >
              <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-600 mb-2">
                Achievements &amp; recognition
              </h2>
              <p className="text-gray-500 max-w-xl">
                Credentials matter — but how they translate into your visit matters more. Here is the backbone behind Skinn360.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="group bg-white/50 backdrop-blur-md border border-white/70 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-yellow-200/80 transition-all duration-300"
                >
                  <div className="mb-4">
                    <GoldIcon icon={a.icon} size={26} />
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
            >
              <div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-600 mb-2">
                  Education
                </h2>
                <p className="text-2xl md:text-3xl font-serif text-gray-900">
                  A path built in Karamsad
                </p>
              </div>
              {/* <p className="text-gray-500 text-sm max-w-md md:text-right">
                MBBS and MD (Skin) from Pramukh Swami Medical College — rigorous training that still informs every consultation at Skinn360.
              </p> */}
            </motion.div>

            <div className="relative pl-0 md:pl-8">
              <div className="hidden md:block absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-yellow-400/50 via-amber-200/40 to-rose-200/30" />
              <ul className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.li
                    key={m.year + m.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.45 }}
                    className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-10"
                  >
                    <div className="flex items-center gap-4 md:block md:w-28 shrink-0">
                      <span className="hidden md:flex h-6 w-6 rounded-full border-2 border-yellow-400 bg-white shadow-sm items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-yellow-500" />
                      </span>
                      <span className="text-yellow-700 font-serif text-2xl md:text-3xl tabular-nums">
                        {m.year}
                      </span>
                    </div>
                    <div className="flex-1 bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl p-6 md:p-8">
                      <h3 className="font-medium text-gray-900 text-lg mb-2 flex items-center gap-2">
                        <GraduationCap size={18} className="text-yellow-600 shrink-0" />
                        {m.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{m.detail}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center md:text-left text-sm text-gray-500 max-w-2xl"
            >
              {/* <span className="font-medium text-gray-700">On record:</span> MD Skin — Cosmetologist, Dermatologist &amp; Hair Expert (2010). MBBS — Pramukh Swami Medical College, Karamsad (2006). MD (Skin) — same institute, Gold Medalist. */}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/95 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-sm font-bold tracking-widest uppercase text-yellow-400/90 mb-6">
                Professional memberships
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Active engagement with leading dermatology forums keeps protocols evidence-based and aligned with global standards — so you benefit from both experience and ongoing learning.
              </p>
              <div className="flex flex-wrap gap-3">
                {memberships.map((org) => (
                  <span
                    key={org}
                    className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-sm font-medium tracking-wide text-white/95 backdrop-blur-sm"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto space-y-6 pb-4"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
              A clinic where you are heard first
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you walk in for a stubborn rash, hair thinning, or a cosmetic goal, you will find a doctor who listens without rushing, explains without jargon, and stands by rational, ethical choices. That is the Skinn360 promise — premium care with a human pace.
            </p>
            <Link
              to="/#location-book"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-yellow-300 to-yellow-500 text-white rounded-full font-medium shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/35 transition-shadow"
            >
              Book a consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
