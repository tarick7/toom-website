import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "L'histoire de TOOM, cuisine libanaise à Nancy.",
};

export default function AProposPage() {
  return (
    <div className="container-page max-w-2xl py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent-dark">
        Notre histoire
      </p>
      <h1 className="mt-3 font-serif text-4xl">À propos de TOOM</h1>
      {/* TODO(contenu réel) : histoire de TOOM, valeurs, équipe (Tarick, Yaya, Corentin...) */}
      <p className="mt-6 text-muted">
        TOOM, cuisine libanaise à Nancy, portée par Tarick Osseirane.
        Le texte de présentation arrive bientôt ici.
      </p>
    </div>
  );
}
