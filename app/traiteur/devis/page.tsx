import type { Metadata } from "next";
import { DevisForm } from "@/components/DevisForm";

export const metadata: Metadata = {
  title: "Demander un devis",
  description: "Décrivez votre événement, TOOM revient vers vous avec un devis adapté.",
};

export default function DevisPage() {
  return (
    <div className="container-page max-w-2xl py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent-dark">
        Traiteur
      </p>
      <h1 className="mt-3 font-serif text-4xl">Demander un devis</h1>
      <p className="mt-4 text-muted">
        Plus vous nous en dites, plus vite nous pourrons revenir vers vous
        avec une proposition juste.
      </p>

      <div className="mt-10">
        <DevisForm />
      </div>
    </div>
  );
}
