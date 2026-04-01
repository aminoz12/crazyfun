"use client";

import { SectionReveal } from "@/components/SectionReveal";
import { ProductCard } from "@/components/ProductCard";
import { pricingTiers } from "@/lib/data";

export function Pricing() {
  return (
    <SectionReveal
      id="pricing"
      className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="text-center">
        <p className="text-sm font-extrabold uppercase tracking-widest text-accent">
          Tarifs
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-fredoka)] text-3xl font-bold text-foreground sm:text-4xl">
          Choisissez votre lot. Plongez dans le mystère.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-muted sm:text-base">
          Chaque option est payée en toute sécurité avec Stripe — sans compte.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <ProductCard key={tier.id} tier={tier} index={index} />
        ))}
      </div>
    </SectionReveal>
  );
}
