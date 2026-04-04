import type { Metadata } from "next";
import { Suspense } from "react";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutReturnBanner } from "@/components/CheckoutReturnBanner";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { ProductPageOffer } from "@/components/ProductPageOffer";
import { ProductReviewsSection } from "@/components/ProductReviewsSection";
import { singleProductOffer, siteIconPath } from "@/lib/data";
import {
  getMetadataBase,
  productBreadcrumbJsonLd,
  productJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const productDesc = `${singleProductOffer.description} Prix en euros (EUR). Paiement sécurisé Stripe — livraison France, Belgique et Europe.`;

export const metadata: Metadata = {
  title: `Acheter ${singleProductOffer.name}`,
  description: productDesc,
  keywords: [
    "raviole squishy mystère",
    "Crazy Fun rainbow",
    "jouet sensoriel EUR",
    "squishy France",
    "livraison Europe",
    "paiement Stripe",
  ],
  alternates: {
    canonical: "/products",
    languages: {
      "x-default": "/products",
      fr: "/products",
      "fr-FR": "/products",
      "fr-BE": "/products",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/products",
    title: `${singleProductOffer.name} | ${SITE_NAME}`,
    description: productDesc,
    images: [
      {
        url: new URL(singleProductOffer.images[0] ?? "/big1.png", getMetadataBase()),
        alt: singleProductOffer.name,
      },
    ],
  },
  twitter: {
    title: `${singleProductOffer.name} | ${SITE_NAME}`,
    description: productDesc,
  },
  icons: {
    icon: siteIconPath,
    shortcut: siteIconPath,
    apple: siteIconPath,
  },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={[productJsonLd(), productBreadcrumbJsonLd()]} />
      <Navbar />
      <Suspense fallback={null}>
        <CheckoutReturnBanner />
      </Suspense>
      <main className="flex-1 pb-20 md:pb-0">
        <ProductPageOffer
          id="offer"
          className="mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-7"
          offer={singleProductOffer}
        />
        <ProductReviewsSection />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
