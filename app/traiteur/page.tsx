import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traiteur",
  description:
    "TOOM Traiteur : cocktails dînatoires, buffets, mariages et événements d'entreprise à Nancy et en Grand Est.",
};

const prestations = [
  {
    title: "Mariages",
    description:
      "Buffet libanais généreux ou cocktail dînatoire, pensé avec vous pour votre jour J. À partir de 25 à 33 € TTC par personne.",
  },
  {
    title: "Entreprises & séminaires",
    description: "Plateaux-repas, cocktails et buffets pour vos événements professionnels.",
  },
  {
    title: "Cocktails privés",
    description: "Formules mezze et cocktail dînatoire pour vos réceptions.",
  },
];

export default function TraiteurPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent-dark">
        Votre événement
      </p>
      <h1 className="mt-3 font-serif text-4xl">TOOM Traiteur</h1>
      <p className="mt-4 max-w-xl text-muted">
        Que vous organisiez un mariage, un séminaire ou un cocktail privé,
        TOOM conçoit une offre libanaise sur mesure, de la livraison au
        service complet.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {prestations.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-serif text-xl">{p.title}</h2>
            <p className="mt-2 text-sm text-muted">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-foreground p-8 text-background sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl">Parlons de votre événement</h2>
          <p className="mt-2 text-background/80">
            Quelques questions pour cerner votre besoin, une réponse rapide de notre part.
          </p>
        </div>
        <Link
          href="/traiteur/devis"
          className="whitespace-nowrap rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-dark"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
