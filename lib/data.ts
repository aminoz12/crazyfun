/**
 * Contenu produit et marketing (français, Europe).
 * Paiement : Stripe Checkout Sessions (POST /api/checkout).
 */

export const product = {
  name: "SquishyBun Dumplings",
  tagline: "Minuscules ravioles, maxi plaisir.",
  /** Copie urgence — remplacer par du stock réel si backend plus tard */
  stockRemaining: 47,
} as const;

/** Favicon, navbar, footer — placer `icon.png` dans `/public`. */
export const siteIconPath = "/icon.png" as const;

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

export const showcaseSlides: ShowcaseSlide[] = [
  {
    src: "/image2.jpg",
    alt: "SquishyBun Dumplings, jouet anti-stress squishy",
    caption: "Anti-stress à presser entre deux réunions",
  },
  {
    src: "/image1.png",
    alt: "SquishyBun Dumplings, déco de bureau kawaii",
    caption: "Une touche mignonne sur le bureau",
  },
  {
    src: "/image3.jpg",
    alt: "SquishyBun Dumplings, déballage mystère",
    caption: "Surprise au déballage — le plaisir du mystère",
  },
];

export const benefits = [
  "Anti-stress à presser entre deux réunions",
  "Une touche mignonne sur le bureau",
  "Surprise au déballage — le plaisir du mystère",
] as const;

export const reviews = [
  {
    name: "Léa M.",
    location: "Paris, France",
    rating: 5,
    text: "J’ai crié tellement c’est mignon. Déjà recommandé le lot de 3.",
  },
  {
    name: "Thomas K.",
    location: "Bruxelles, Belgique",
    rating: 5,
    text: "Quali au toucher, envoi rapide, le squish est parfait.",
  },
  {
    name: "Sofia R.",
    location: "Lyon, France",
    rating: 5,
    text: "Acheté pour rigoler, c’est devenu mon anti-stress du bureau.",
  },
] as const;

/** Liste longue sur `/products` — style avis e-commerce. */
export type ProductPageReview = {
  rating: number;
  title: string;
  body?: string;
  reviewPosted: string;
  purchaseDate: string;
  author: string;
  image: string;
};

export const productPageReviews: ProductPageReview[] = [
  {
    rating: 5,
    title: "Trop mignon, j’en ai recommandé",
    body: "J’ai hurlé de joie. C’est débile et parfait à la fois — déjà commandé le pack de 3.",
    reviewPosted: "2026-03-18",
    purchaseDate: "2026-03-02",
    author: "Léa M.",
    image: "/rev1.png",
  },
  {
    rating: 5,
    title: "« Attends… QUOI ? » au déballage",
    body: "Je pensais que ce serait gadget. Dès que je l’ai pressé, j’ai éclaté de rire — hyper doux, slow-rise au top. Livraison rapide en France. Je le recommande.",
    reviewPosted: "2026-03-12",
    purchaseDate: "2026-02-28",
    author: "Thomas K.",
    image: "/rev2.png",
  },
  {
    rating: 5,
    title: "Pour ma fille… finalement on adore toutes les deux",
    body: "Commandé pour l’anniversaire de ma fille, elle a adoré. Le côté mystère, c’est le fun. Honnêtement je le pique sur son bureau pour le presser — validé par les parents.",
    reviewPosted: "2026-02-26",
    purchaseDate: "2026-02-10",
    author: "Sofia R.",
    image: "/rev3.png",
  },
  {
    rating: 5,
    title: "La nouvelle star de sa chambre — moi aussi impressionnée",
    body: "Mystery dumpling pour ma fille : déballage pur bonheur. Slow-rise nickel, elle l’emmène partout. Je ne pensais pas accrocher autant. Je rachèterais.",
    reviewPosted: "2026-03-05",
    purchaseDate: "2026-02-19",
    author: "Elena V.",
    image: "/rev4.png",
  },
  {
    rating: 5,
    title: "Comme sur les vidéos",
    reviewPosted: "2026-01-30",
    purchaseDate: "2026-01-14",
    author: "Chris P.",
    image: "/rev5.png",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Commandez votre lot",
    body: "Choisissez 1, 3 ou 5 — chaque pack est une surprise.",
  },
  {
    step: 2,
    title: "On prépare le mystère",
    body: "On emballe vos squishy avec soin (et du papier bulle).",
  },
  {
    step: 3,
    title: "Vous déballez",
    body: "Filmez, partagez, pressez — taguez-nous sur TikTok.",
  },
] as const;

export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Qu’est-ce qu’une raviole SquishyBun ?",
    a: "Un petit jouet squishy slow-rise en forme de bao. Couleur et style exacts : surprise jusqu’à l’arrivée du colis.",
  },
  {
    q: "Quels sont les délais de livraison en Europe ?",
    a: "Expédition sous environ 2 jours ouvrés pour la plupart des commandes. Livraison généralement en 3 à 7 jours selon le pays (France, Belgique, UE). Suivi envoyé par e-mail.",
  },
  {
    q: "Politique de remboursement ?",
    a: "Article abîmé ou non conforme : contactez-nous sous 14 jours, on trouve une solution.",
  },
  {
    q: "C’est comestible ?",
    a: "Non — c’est un jouet. Ne pas manger le squishy.",
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
  description:
    "Jouet sensoriel bao mystère, texture slow-rise, fun type boîte surprise — chance de dénicher la raviole ultra rare « Starlight » irisée. Dès 3 ans. Prix en euros (EUR), TVA incluse le cas échéant.",
  deliveryEuro: 9,
  images: ["/big1.png", "/vid2.mp4", "/big3.png"],
  details: [
    "Jouet sensoriel squishy type bao mystère.",
    "Marque Crazy Fun.",
    "Fidget / anti-stress.",
    "Dès 3 ans.",
    "1 set par emballage.",
    "Possibilité de raviole super rare « Starlight » irisée.",
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
      "Découvrez le jouet sensoriel bao mystère Crazy Fun : déballage excitant, texture squishy satisfaisante, dès 3 ans. Peut-être la raviole rare irisée ? Quelle variante allez-vous recevoir ?",
    details: [
      "Jouet sensoriel squishy type bao mystère.",
      "Marque Crazy Fun.",
      "Fidget / anti-stress.",
      "Dès 3 ans.",
      "1 set par emballage.",
      "Possibilité de raviole super rare « Starlight » irisée.",
    ],
    specs: {
      color: "Mystère",
      theme: "Raviole mystère",
      brand: "RMS",
      character: "Raviole",
      dimensions: "17 × 17 × 12,75 cm",
      weight: "Environ 0,73 kg",
    },
    images: ["/big1.png", "/vid2.mp4", "/big3.png"],
  },
  {
    id: "big-crazy-fun-rainbow",
    name: "Grand Crazy Fun Rainbow — raviole mystère squishy bun 28 cm",
    size: "28 cm",
    price: 24.99,
    compareAt: 29.97,
    description:
      "Découvrez le jouet sensoriel bao mystère Crazy Fun : déballage excitant, texture squishy satisfaisante, dès 3 ans. Peut-être la raviole rare irisée ? Quelle variante allez-vous recevoir ?",
    details: [
      "Jouet sensoriel squishy type bao mystère.",
      "Marque Crazy Fun.",
      "Fidget / anti-stress.",
      "Dès 3 ans.",
      "1 set par emballage.",
      "Possibilité de raviole super rare « Starlight » irisée.",
    ],
    specs: {
      color: "Mystère",
      theme: "Raviole mystère",
      brand: "RMS",
      character: "Raviole",
      dimensions: "28 × 28 × 21 cm",
      weight: "Environ 1,90 kg",
    },
    images: ["/big1.png", "/vid2.mp4", "/big3.png"],
  },
];

export const buzzReelVideos = [
  "/dumpling-1-trimmed.mp4",
  "/dumpling-2-trimmed.mp4",
  "/dumpling-3-trimmed.mp4",
  "/dumplings-5.mp4",
] as const;
