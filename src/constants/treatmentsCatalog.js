/**
 * Full treatments catalog for /treatments — categories, one-line benefits, featured flags.
 * Icons are Lucide component names (resolved in TreatmentsPage).
 */

export const TREATMENT_CATEGORIES = [
  {
    id: 'cosmetic-aesthetic',
    title: 'Cosmetic & Aesthetic',
    subtitle: 'Results-driven glow, clarity, and confidence.',
    teaser: 'Laser, peels, bridal prep, and everyday radiance.',
    icon: 'Sparkles',
    groups: [
      {
        label: 'Signature & skin clarity',
        items: [
          { name: 'Skin Tag Removal (Neck & Underarms)', benefit: 'For small, bothersome tags in delicate areas.' },
          { name: 'DPN (Dermatosis Papulosa Nigra) Removal – Face', benefit: 'For uniform, smoother-looking facial skin.' },
          { name: 'Skin Glow Therapy', benefit: 'For dull, tired-looking skin.' },
          { name: 'Skin Whitening Therapy', benefit: 'For uneven tone and visible pigmentation.', popular: true },
          { name: 'Underarms Whitening', benefit: 'For darker underarm tone you want to soften.' },
          { name: 'Back Polishing / Back Shine Treatment', benefit: 'For rough or congested back skin before events.' },
          { name: 'Bridal Skin Treatment', benefit: 'For a clear, photo-ready complexion on your big day.' },
          { name: 'Groom Skin Treatment', benefit: 'For sharper, fresher skin without a heavy routine.' },
        ],
      },
      {
        label: 'Advanced cosmetic procedures',
        items: [
          { name: 'Laser Hair Reduction', benefit: 'Long-term unwanted hair solution.', popular: true },
          { name: 'Hydra Medi Facial', benefit: 'For dehydrated skin that needs instant plumpness.' },
          { name: 'Acne & Scar Treatment', benefit: 'For active breakouts and textured acne scars.', popular: true },
          { name: 'Carbon Facial + Blue Toning', benefit: 'For enlarged pores and oily, congested skin.' },
          { name: 'Chemical Peeling', benefit: 'For fine lines, spots, and renewal without downtime guesswork.' },
          { name: 'Dark Circle Treatment', benefit: 'For tired-looking under-eyes and shadowing.' },
          { name: 'Ambrosia Mask Treatment', benefit: 'For stressed skin that needs deep nourishment.' },
          { name: 'Blackheads Treatment', benefit: 'For stubborn T-zone congestion.' },
          { name: 'Dark Lips Treatment', benefit: 'For lips that look darker than you’d like.' },
          { name: 'Tattoo Removal', benefit: 'For ink you’ve outgrown or want faded.' },
          { name: 'Party Peels', benefit: 'For a quick glow before an event or celebration.' },
        ],
      },
    ],
  },
  {
    id: 'general-dermatology',
    title: 'General Dermatology',
    subtitle: 'Trusted care for everyday and complex skin concerns.',
    teaser: 'Diagnosis-led treatment for common skin conditions.',
    icon: 'Stethoscope',
    items: [
      { name: 'Eczema', benefit: 'For itchy, inflamed, or recurring dry patches.' },
      { name: 'Skin Allergies', benefit: 'For rashes and reactions that need a clear cause.' },
      { name: 'Urticaria (Hives)', benefit: 'For sudden welts, itching, or flare patterns.' },
      { name: 'Pigmentation Issues', benefit: 'For patches and uneven colour that won’t fade alone.' },
      { name: 'Fungal Infections', benefit: 'For ring-shaped or stubborn scaling that keeps returning.' },
      { name: 'Acne (Pimples)', benefit: 'For persistent breakouts and inflammation.' },
      { name: 'Bacterial Infections (Boils, Impetigo)', benefit: 'For painful boils or crusted, spreading sores.' },
      { name: 'Warts', benefit: 'For raised viral bumps you want gone safely.' },
      { name: 'Molluscum Contagiosum', benefit: 'For small, spreading bumps common in all ages.' },
      { name: 'Nail Problems', benefit: 'For discoloured, thickened, or painful nails.' },
    ],
  },
  {
    id: 'occupational-skin',
    title: 'Occupational Skin Diseases',
    subtitle: 'Work- and environment-linked skin issues.',
    teaser: 'Industrial and agricultural skin exposure, addressed properly.',
    icon: 'HardHat',
    items: [
      { name: 'Industrial Skin Diseases', benefit: 'For irritation or damage from chemicals, heat, or friction at work.' },
      { name: 'Agricultural Skin Diseases', benefit: 'For plant, sun, or exposure-related skin problems from the field.' },
    ],
  },
  {
    id: 'pediatric',
    title: 'Pediatric Skin Care',
    subtitle: 'Gentle, parent-friendly dermatology for children.',
    teaser: 'Common childhood rashes and infections, explained clearly.',
    icon: 'Baby',
    items: [
      { name: 'Pediatric Skin Problems', benefit: 'For rashes and changes that need a child-safe plan.' },
      { name: 'Scabies', benefit: 'For intense night itching and household spread concerns.' },
      { name: 'Chickenpox', benefit: 'For itching, infection risk, and scar prevention guidance.' },
      { name: 'Allergic Skin Conditions in Children', benefit: 'For eczema-like or reactive skin in little ones.' },
    ],
  },
  {
    id: 'hair-scalp',
    title: 'Hair & Scalp',
    subtitle: 'Density, scalp health, and pattern hair loss.',
    teaser: 'Medical and restorative options for hair you’re losing.',
    icon: 'Scissors',
    items: [
      { name: 'Hair Loss / Hair Problems', benefit: 'For thinning part lines or shedding you can’t explain.', popular: true },
      { name: 'Alopecia Areata', benefit: 'For sudden round patches of hair loss.' },
      { name: 'Hair Restoration', benefit: 'For regaining density with evidence-based protocols.' },
    ],
  },
  {
    id: 'specialized',
    title: 'Specialized Treatments',
    subtitle: 'Focused protocols for complex conditions.',
    teaser: 'Vitiligo, infections, and nerve-related skin emergencies.',
    icon: 'Microscope',
    items: [
      { name: 'Vitiligo Treatment', benefit: 'For depigmented patches you want to stabilise or repigment.', popular: true },
      { name: 'Vitiligo Laser Therapy', benefit: 'For targeted support alongside medical vitiligo care.' },
      { name: 'Sexually Transmitted Diseases (STDs)', benefit: 'For confidential diagnosis and treatment.' },
      { name: 'Herpes Zoster (Shingles)', benefit: 'For painful blistering bands and post-pain prevention.' },
    ],
  },
  {
    id: 'geriatric',
    title: 'Geriatric Skin Care',
    subtitle: 'Comfort and skin integrity in later life.',
    teaser: 'Age-related dryness, itching, and fragile skin.',
    icon: 'HeartHandshake',
    items: [
      { name: 'Age-related Skin Problems', benefit: 'For very dry, itchy, or easily injured mature skin.' },
    ],
  },
];
