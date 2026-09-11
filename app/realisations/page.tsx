import type { Metadata } from "next";
import Image from "next/image";
import { realisations } from "@/lib/event-types";

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
        Un aperçu de nos plats, de notre cuisine et de nos événements.
      </p>

      {realisations.length === 0 ? (
        <p className="mt-12 rounded-2xl border border-dashed border-border p-8 text-center text-muted">
          Galerie en cours d&rsquo;alimentation — les photos de vos événements
          (dont le mariage Maud &amp; Taha) arrivent bientôt ici.
        </p>
      ) : (
        <div className="mt-12 grid gap-4 sm:grid-cols-3 md:grid-cols-4">
          {realisations.map((r) => (
            <figure
              key={r.id}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <Image
                src={r.imageSrc}
                alt={r.title}
                fill
                sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
