// TODO: replace with real Sanity CMS queries once NEXT_PUBLIC_SANITY_PROJECT_ID is set.
// This file is the single mock data source so swapping in Sanity later only requires
// changing /lib/sanity-client.ts call sites, not every page.

export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string[];
  heroImageAlt: string;
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription: "Permanent, natural-looking replacements for missing teeth.",
    description: [
      "Dental implants replace both the root and the crown of a missing tooth, giving you a result that looks, feels, and functions like a natural tooth. We use titanium implant posts that fuse with your jawbone over a few months, creating a stable foundation for a custom-matched crown.",
      "Most patients are candidates for implants regardless of how long ago they lost a tooth. During your consultation we take a 3D scan to evaluate bone density and plan exact implant placement before any drilling begins.",
    ],
    heroImageAlt: "Dentist showing a dental implant model to a patient",
    faqs: [
      {
        question: "How long does the implant process take?",
        answer:
          "From placement to final crown, most patients complete treatment in 3-6 months, which allows time for the implant to fully integrate with the jawbone.",
      },
      {
        question: "Are dental implants painful?",
        answer:
          "The placement procedure is done under local anesthesia (sedation options available), and most patients report less discomfort than they expected — typically managed with over-the-counter pain relievers for a few days.",
      },
      {
        question: "Does insurance cover dental implants?",
        answer:
          "Coverage varies widely by plan. Our team verifies your benefits before treatment and walks you through financing options on our Insurance & Financing page.",
      },
    ],
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    shortDescription: "Straighten your teeth discreetly with clear, removable aligners.",
    description: [
      "Invisalign uses a series of custom, clear aligners to gradually shift your teeth into alignment — no metal brackets or wires. Each set of aligners is worn for about two weeks before moving to the next in the series.",
      "Treatment typically takes 6-18 months depending on the complexity of your case. Because aligners are removable, you can eat, brush, and floss normally throughout treatment.",
    ],
    heroImageAlt: "Close-up of a clear Invisalign aligner being placed on teeth",
    faqs: [
      {
        question: "How is Invisalign different from traditional braces?",
        answer:
          "Invisalign aligners are clear, removable, and far less noticeable than metal braces. They're also easier to keep clean since you take them out to eat and brush.",
      },
      {
        question: "Will Invisalign work for my case?",
        answer:
          "Invisalign treats most mild-to-moderate alignment issues, including crowding, spacing, and some bite problems. We'll confirm candidacy with a complimentary consultation and digital scan.",
      },
      {
        question: "How much does Invisalign cost?",
        answer:
          "Cost depends on case complexity and treatment length, typically comparable to traditional braces. We provide an exact quote after your consultation and digital scan, and walk you through insurance and financing options.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription: "Professional-grade whitening for noticeably brighter results.",
    description: [
      "Our in-office whitening treatment uses a higher-concentration whitening gel than anything available over the counter, activated under a specialized light for faster, more even results — typically several shades brighter in one visit.",
      "We also offer custom take-home whitening trays for patients who prefer a gradual approach or want touch-up kits for maintenance.",
    ],
    heroImageAlt: "Before and after comparison of professionally whitened teeth",
    faqs: [
      {
        question: "How long do whitening results last?",
        answer:
          "Results typically last 6-12 months depending on your diet and oral hygiene habits. Avoiding coffee, red wine, and tobacco helps results last longer.",
      },
      {
        question: "Is professional whitening safe for sensitive teeth?",
        answer:
          "Yes — we assess your enamel and gum health beforehand and can adjust gel concentration or recommend desensitizing treatments for sensitive patients.",
      },
      {
        question: "How much does professional teeth whitening cost?",
        answer:
          "In-office whitening is a one-time, same-visit treatment, while take-home trays are priced separately for ongoing touch-ups. Exact pricing depends on which option fits your goals — we quote this at your consultation, before any treatment begins.",
      },
    ],
  },
  {
    slug: "root-canal-therapy",
    name: "Root Canal Therapy",
    shortDescription: "Relieve pain and save an infected tooth from extraction.",
    description: [
      "Root canal therapy removes infected or inflamed pulp from inside a tooth, then cleans, disinfects, and seals the space to prevent further infection — relieving pain and saving the natural tooth.",
      "Modern root canal treatment is far more comfortable than its reputation suggests. Most patients report the procedure feels similar to getting a standard filling.",
    ],
    heroImageAlt: "Dental x-ray used to diagnose a tooth needing root canal therapy",
    faqs: [
      {
        question: "Is a root canal painful?",
        answer:
          "The procedure itself is performed under local anesthesia and is typically no more uncomfortable than a filling. The infection causing your pain beforehand is usually far more painful than the treatment.",
      },
      {
        question: "What happens after a root canal?",
        answer:
          "Most teeth need a crown afterward to restore strength and protect against future fracture. We'll walk you through next steps at your visit.",
      },
      {
        question: "How much does a root canal cost?",
        answer:
          "Cost varies by tooth location and case complexity, and whether a crown is needed afterward. Most PPO insurance plans cover a portion of root canal treatment — we verify your benefits and provide a clear estimate before starting.",
      },
    ],
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    shortDescription: "Same-day care for dental pain, injuries, and urgent problems.",
    description: [
      "We reserve same-day appointment slots for dental emergencies — severe toothaches, broken or knocked-out teeth, lost fillings or crowns, and facial swelling. Call us as soon as a problem happens; many issues are far easier to treat (and less costly) the sooner we see you.",
      "After hours, our answering service will connect you with the on-call dentist for guidance until we can see you.",
    ],
    heroImageAlt: "Dentist examining a patient with a dental emergency",
    faqs: [
      {
        question: "What counts as a dental emergency?",
        answer:
          "Severe or sudden tooth pain, a knocked-out or broken tooth, uncontrolled bleeding, facial swelling, or a lost crown/filling that's causing pain all warrant an emergency call.",
      },
      {
        question: "Do you offer same-day emergency appointments?",
        answer:
          "Yes, we hold same-day slots specifically for emergencies. Call our office as early as possible so we can get you in quickly.",
      },
    ],
  },
  {
    slug: "veneers",
    name: "Veneers",
    shortDescription: "Thin, custom shells that transform the look of your smile.",
    description: [
      "Porcelain veneers are thin, custom-fabricated shells bonded to the front of your teeth to correct chips, gaps, discoloration, or minor misalignment — often completed in just two visits.",
      "Each veneer is shade-matched and shaped specifically for your face and smile, so results look natural rather than uniform or artificial.",
    ],
    heroImageAlt: "Dentist comparing porcelain veneer shade samples",
    faqs: [
      {
        question: "How long do veneers last?",
        answer:
          "With proper care, porcelain veneers typically last 10-15 years or longer before needing replacement.",
      },
      {
        question: "Are veneers reversible?",
        answer:
          "Veneers require removing a thin layer of enamel, so the process is not reversible. We'll discuss whether veneers or a non-invasive alternative is the better fit for your goals.",
      },
      {
        question: "How much do veneers cost?",
        answer:
          "Pricing depends on how many teeth you're treating and the shade/shape customization involved. We provide an itemized quote at your consultation, along with available financing options.",
      },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-you-need-a-root-canal",
    title: "5 Signs You Might Need a Root Canal",
    excerpt:
      "Persistent tooth pain isn't something to ignore. Here are the warning signs that mean it's time to call your dentist.",
    publishedAt: "2026-09-02",
    author: "Dr. Sarah Bennett, DDS",
    content: [
      "Tooth pain that lingers after eating something hot or cold, pain that wakes you up at night, or a tooth that's become sensitive to pressure are all signs worth getting checked out promptly.",
      "1. Persistent or throbbing pain. 2. Sensitivity to hot and cold that lingers. 3. Swollen or tender gums near a specific tooth. 4. A tooth that's darkened in color. 5. A recurring pimple-like bump on the gums.",
      "If you're noticing any of these symptoms, don't wait — call our office. Catching an infection early almost always means a simpler, less costly treatment.",
    ],
  },
];

export type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

export const reviews: Review[] = [
  {
    author: "Jessica M.",
    rating: 5,
    text: "Best dental experience I've had in years. The whole team is friendly and they explained every step before doing anything.",
    date: "2026-08-14",
  },
  {
    author: "Marcus T.",
    rating: 5,
    text: "Got in same-day for a cracked tooth and they took great care of me. Highly recommend for anyone nervous about the dentist.",
    date: "2026-07-29",
  },
  {
    author: "Priya R.",
    rating: 4,
    text: "Clean, modern office and great with my kids. Scheduling was easy and wait times were short.",
    date: "2026-06-11",
  },
];

export const aggregateRating = {
  ratingValue:
    Math.round(
      (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10,
    ) / 10,
  reviewCount: reviews.length,
};
