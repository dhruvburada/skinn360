import { useEffect, useId, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Stethoscope,
  HardHat,
  Baby,
  Scissors,
  Microscope,
  HeartHandshake,
  ChevronDown,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { TREATMENT_CATEGORIES } from '../constants/treatmentsCatalog';
import { CONTACT_INFO } from '../constants/data';

const ICON_MAP = {
  Sparkles,
  Stethoscope,
  HardHat,
  Baby,
  Scissors,
  Microscope,
  HeartHandshake,
};

function telHref(phone) {
  return `tel:${phone.replace(/\s/g, '')}`;
}

function splitPopular(items) {
  const popular = items.filter((i) => i.popular);
  const rest = items.filter((i) => !i.popular);
  return { popular, rest };
}

function TreatmentCards({ items, featured, tel }) {
  const { popular, rest } = splitPopular(items);
  const bookClass =
    'inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-yellow-500/25 transition hover:opacity-95';

  return (
    <div className="space-y-8">
      {popular.length > 0 && (
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-yellow-700">Popular picks</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {popular.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl border border-yellow-100 bg-gradient-to-br from-white to-amber-50/50 p-6 shadow-lg shadow-amber-900/5 ${featured ? 'sm:min-h-[160px]' : ''}`}
              >
                <span className="mb-2 inline-block rounded-full bg-yellow-400/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-yellow-950">
                  Popular
                </span>
                <h4 className="font-serif text-lg text-gray-900 md:text-xl">{t.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.benefit}</p>
                <div className="mt-4">
                  <a href={tel} className={bookClass}>
                    <PhoneCall size={16} />
                    Book now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-sm transition hover:border-yellow-200/80 hover:shadow-md"
            >
              <h4 className="font-serif text-base text-gray-900">{t.name}</h4>
              <p className="mt-1.5 flex-1 text-sm text-gray-600">{t.benefit}</p>
              <div className="mt-4">
                <a href={tel} className={bookClass}>
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CategoryPanel({ category, tel }) {
  if (category.groups?.length) {
    return (
      <div className="space-y-10 border-t border-gray-100 pt-8">
        {category.groups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-5 font-serif text-lg text-gray-800">{group.label}</h3>
            <TreatmentCards items={group.items} featured tel={tel} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="border-t border-gray-100 pt-8">
      <TreatmentCards items={category.items ?? []} featured={false} tel={tel} />
    </div>
  );
}

export default function TreatmentsPage() {
  const baseId = useId();
  const [openId, setOpenId] = useState(null);
  const tel = useMemo(() => telHref(CONTACT_INFO.phone), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Layout>
      <div className="relative overflow-hidden px-6 pb-24 pt-28 md:pt-32">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-yellow-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-40 h-64 w-64 rounded-full bg-rose-100/50 blur-[90px]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-600">Treatments</p>
            <h1 className="mb-5 font-serif text-4xl leading-tight text-gray-900 md:text-5xl">Explore Our Treatments</h1>
            <p className="text-lg text-gray-600">
              Personalized solutions for skin, hair, and overall dermatological care.
            </p>
          </motion.header>

          <div className="space-y-4">
            {TREATMENT_CATEGORIES.map((cat, index) => {
              const Icon = ICON_MAP[cat.icon] ?? Sparkles;
              const isOpen = openId === cat.id;
              const panelId = `${baseId}-panel-${cat.id}`;
              const headerId = `${baseId}-header-${cat.id}`;

              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="overflow-hidden rounded-3xl border border-gray-100/80 bg-white/70 shadow-lg shadow-gray-200/40 backdrop-blur-sm"
                >
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(cat.id)}
                    className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-white/80 md:p-7"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-100 to-amber-50 text-yellow-800">
                      <Icon size={26} strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-xl text-gray-900 md:text-2xl">{cat.title}</span>
                      <span className="mt-1 block text-sm text-gray-500">{cat.teaser}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-gray-400"
                    >
                      <ChevronDown size={24} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100/80 px-5 pb-8 pt-2 md:px-8 md:pb-10">
                          <p className="mb-6 text-gray-600">{cat.subtitle}</p>
                          <CategoryPanel category={cat} tel={tel} />
                          <div className="mt-10 flex justify-center">
                            <a
                              href={tel}
                              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-gray-900/15 transition hover:bg-gray-800"
                            >
                              Book consultation <ArrowRight size={18} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
