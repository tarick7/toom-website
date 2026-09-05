import type { Metadata } from "next";
import { eventTypes, realisations } from "@/lib/event-types";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Les événements réalisés par TOOM Traiteur : mariages, entreprises, cocktails.",
};

export default function RealisationsPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent-dark">
        Ils nous ont fait confiance
      </p>
      <h1 className="mt-3 font-serif text-4xl">Réalisations</h1>
      <p className="mt-4 max-w-xl text-muted">
        {/* TODO(contenu réel) : remplacer par les vraies photos d'événements, */}
        {/* triées par type. Filtre client à ajouter une fois le contenu réel en place. */}
        Un aperçu de nos événements récents, classés par type.
      </p>

      {realisations.length === 0 ? (
        <p className="mt-12 rounded-2xl border border-dashed border-border p-8 text-center text-muted">
          Galerie en cours d&rsquo;alimentation — les photos de vos événements
          (dont le mariage Maud &amp; Taha) arrivent bientôt ici.
        </p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {realisations.map((r) => (
            <figure key={r.id} className="rounded-2xl border border-border bg-surface p-4">
              <figcaption className="mt-2 text-sm text-muted">
                {r.title} —{" "}
                {eventTypes.find((t) => t.id === r.eventType)?.label}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
