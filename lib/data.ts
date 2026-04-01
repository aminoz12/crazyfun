/**
 * Central product + marketing copy.
 * Checkout uses Stripe Checkout Sessions (POST /api/checkout), not Payment Links.
 */

export const product = {
  name: "SquishyBun Dumplings",
  tagline: "Minuscules ravioles. Énorme dopamine.",
  /** Static urgency copy — swap for real inventory if you add backend later */
  stockRemaining: 47,
} as const;

export type PricingTierId = "single" | "triple" | "five";

export type PricingTier = {
  id: PricingTierId;
  label: string;
  count: number;
  price: number;
  compareAt?: number;
  badge?: string;
  highlight?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "single",
    label: "Découverte",
    count: 1,
    price: 9.99,
  },
  {
    id: "triple",
    label: "Coup de cœur",
    count: 3,
    price: 24.99,
    compareAt: 29.97,
    badge: "Best-seller",
    highlight: true,
  },
  {
    id: "five",
    label: "Pack équipe",
    count: 5,
    price: 39.99,
    compareAt: 49.95,
  },
];

export type ShowcaseSlide = {
  src: string;
  alt: string;
  caption: string;
};

/** Product showcase carousel — files in `/public` */
export const showcaseSlides: ShowcaseSlide[] = [
  {
    src: "/image2.jpg",
    alt: "SquishyBun Dumplings, photo produit, anti-stress",
    caption: "Un anti-stress à presser entre deux réunions",
  },
  {
    src: "/image1.png",
    alt: "SquishyBun Dumplings, photo produit, bureau",
    caption: "Une touche kawaii sur le bureau qui fait plaisir",
  },
  {
    src: "/image3.jpg",
    alt: "SquishyBun Dumplings, photo produit, déballage mystère",
    caption: "Surprise mystère — découvrez la dopamine au déballage",
  },
];

export const benefits = [
  "Un anti-stress à presser entre deux réunions",
  "Une touche kawaii sur le bureau qui fait plaisir",
  "Surprise mystère — découvrez la dopamine au déballage",
] as const;

export const reviews = [
  {
    name: "Mia R.",
    location: "Paris, FR",
    rating: 5,
    text: "J’ai hurlé. C’est débile et parfait. J’ai déjà recommandé le lot de 3.",
  },
  {
    name: "Jordan K.",
    location: "Lyon, FR",
    rating: 5,
    text: "Ça fait quali, livraison rapide, et le squish est au top.",
  },
  {
    name: "Sam L.",
    location: "Bruxelles, BE",
    rating: 5,
    text: "Acheté pour rigoler. C’est devenu ma raviole émotionnelle.",
  },
] as const;

export const howItWorks = [
  {
    step: 1,
    title: "Commandez votre lot",
    body: "Choisissez 1, 3 ou 5 — chaque pack est une surprise.",
  },
  {
    step: 2,
    title: "On prépare le mystère",
    body: "On sélectionne vos squishy avec soin (et du papier bulle).",
  },
  {
    step: 3,
    title: "Vous déballez la surprise",
    body: "Filmez, montrez, pressez — taguez-nous sur TikTok.",
  },
] as const;

export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Qu’est-ce qu’une raviole SquishyBun ?",
    a: "Un petit jouet squishy lent à reprendre sa forme, inspiré des ravioles. Vous ne connaîtrez ni le style ni la couleur exacts avant l’arrivée — c’est le fun.",
  },
  {
    q: "Combien de temps pour la livraison ?",
    a: "La plupart des commandes partent sous 2 jours ouvrés ; comptez en général 3 à 7 jours pour la réception. Vous recevrez le suivi par e-mail.",
  },
  {
    q: "Quelle est votre politique de remboursement ?",
    a: "Si un article arrive abîmé ou non conforme, écrivez-nous sous 14 jours et on trouvera une solution.",
  },
  {
    q: "Est-ce que c’est comestible ?",
    a: "Non — c’est un jouet. Ne pas manger le squishy. (On n’aurait pas cru devoir le préciser.)",
  },
];

export const social = {
  tiktok: "https://www.tiktok.com/",
  instagram: "https://www.instagram.com/",
  email: "hello@squishybun.com",
} as const;

export type ProductSizeOption = {
  id: string;
  label: string;
  sizeCm: number;
  priceEuro: number;
};

export const singleProductOffer = {
  id: "squishybun-mystery-dumpling",
  name: "Crazy Fun Rainbow — raviole mystère squishy bun",
  deliveryEuro: 9,
  images: ["/big1.png", "/big2.png", "/big3.png"],
  description:
    "Un produit, deux tailles. Choisissez la vôtre et payez en un clic. Livraison 9 € sur les petits paniers ; offerte dès 50 € de sous-total (voir la bannière du site).",
  details: [
    "Jouet sensoriel squishy type bao mystère.",
    "Marque Crazy Fun.",
    "Fonction fidget / anti-stress.",
    "Dès 3 ans.",
    "1 set par emballage.",
    "Chance de trouver une raviole super rare « Starlight » irisée.",
  ],
  specs: [
    { label: "Couleur", value: "Mystère" },
    { label: "Thème", value: "Raviole mystère" },
    { label: "Marque", value: "RMS" },
    { label: "Personnage", value: "Raviole" },
    {
      label: "Dimensions",
      value: "Selon la taille (17 cm ou 24 cm) — voir l’option.",
    },
    { label: "Poids", value: "Environ 0,7 à 1,9 kg selon la taille." },
  ],
  options: [
    {
      id: "size-17",
      label: "17 cm",
      sizeCm: 17,
      priceEuro: 18,
    },
    {
      id: "size-24",
      label: "24 cm",
      sizeCm: 24,
      priceEuro: 26,
    },
  ] as ProductSizeOption[],
} as const;

export type ProductDetail = {
  id: string;
  name: string;
  size: string;
  price: number;
  compareAt?: number;
  description: string;
  details: string[];
  specs: {
    color: string;
    theme: string;
    brand: string;
    character: string;
    dimensions: string;
    weight: string;
  };
  images: string[];
};

export const productDetails: ProductDetail[] = [
  {
    id: "mini-crazy-fun-rainbow",
    name: "Mini Crazy Fun Rainbow — raviole mystère squishy bun 17 cm",
    size: "17 cm",
    price: 9.99,
    description:
      "Découvrez le jouet sensoriel bao mystère Crazy Fun : un déballage excitant où vous pourriez tomber sur une raviole super rare irisée. Texture squishy satisfaisante, dès 3 ans. Quelle raviole allez-vous recevoir ?",
    details: [
      "Jouet sensoriel squishy type bao mystère.",
      "Marque Crazy Fun.",
      "Fonction fidget / anti-stress.",
      "Dès 3 ans.",
      "1 set par emballage.",
      "Chance de trouver une raviole super rare « Starlight » irisée.",
    ],
    specs: {
      color: "Mystère",
      theme: "Raviole mystère",
      brand: "RMS",
      character: "Raviole",
      dimensions: "17 × 17 × 12,75 cm",
      weight: "Environ 0,73 kg",
    },
    images: ["/big1.png", "/big2.png", "/big3.png"],
  },
  {
    id: "big-crazy-fun-rainbow",
    name: "Grand Crazy Fun Rainbow — raviole mystère squishy bun 28 cm",
    size: "28 cm",
    price: 24.99,
    compareAt: 29.97,
    description:
      "Découvrez le jouet sensoriel bao mystère Crazy Fun : un déballage excitant où vous pourriez tomber sur une raviole super rare irisée. Texture squishy satisfaisante, dès 3 ans. Quelle raviole allez-vous recevoir ?",
    details: [
      "Jouet sensoriel squishy type bao mystère.",
      "Marque Crazy Fun.",
      "Fonction fidget / anti-stress.",
      "Dès 3 ans.",
      "1 set par emballage.",
      "Chance de trouver une raviole super rare « Starlight » irisée.",
    ],
    specs: {
      color: "Mystère",
      theme: "Raviole mystère",
      brand: "RMS",
      character: "Raviole",
      dimensions: "28 × 28 × 21 cm",
      weight: "Environ 1,90 kg",
    },
    images: ["/big1.png", "/big2.png", "/big3.png"],
  },
];

/** « Le buzz partout » — uniquement ces MP4 dans `/public` (pas d’affiches ni assets en plus). */
export const buzzReelVideos = [
  "/dumpling-1-trimmed.mp4",
  "/dumpling-2-trimmed.mp4",
  "/dumpling-3-trimmed.mp4",
  "/dumplings-5.mp4",
] as const;
