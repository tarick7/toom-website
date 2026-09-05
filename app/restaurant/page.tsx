import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Restaurant",
  description: "La carte, les horaires et la commande en livraison chez TOOM à Nancy.",
};

export default function RestaurantPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent-dark">
        Manger chez TOOM
      </p>
      <h1 className="mt-3 font-serif text-4xl">Restaurant</h1>
      <p className="mt-4 max-w-xl text-muted">
        {/* TODO(contenu réel) : texte de présentation du restaurant */}
        Une cuisine libanaise généreuse, sur place ou en livraison.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl">Infos pratiques</h2>
          <dl className="mt-4 space-y-2 text-muted">
            <div>
              <dt className="font-medium text-foreground">Adresse</dt>
              <dd>{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Téléphone</dt>
              <dd>{siteConfig.phone}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Horaires</dt>
              {/* TODO(contenu réel) : horaires d'ouverture */}
              <dd>À préciser</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="font-serif text-2xl">Commander en livraison</h2>
          <div className="mt-4 flex flex-col gap-3">
            <DeliveryLink label="Uber Eats" href={siteConfig.deliveryLinks.uberEats} />
            <DeliveryLink label="Deliveroo" href={siteConfig.deliveryLinks.deliveroo} />
            <DeliveryLink label="DOOD" href={siteConfig.deliveryLinks.dood} />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-serif text-2xl">La carte</h2>
        {/* TODO(contenu réel) : la carte complète, plat par plat */}
        <p className="mt-4 text-muted">La carte détaillée arrive bientôt ici.</p>
      </div>
    </div>
  );
}

function DeliveryLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-border px-5 py-3 text-center font-medium transition-colors hover:border-accent-dark hover:text-accent-dark"
    >
      {label}
    </a>
  );
}
