import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { menu } from "@/lib/menu";

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
              <dd>
                {siteConfig.openingHours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days} : {h.hours}
                  </span>
                ))}
              </dd>
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
        <p className="mt-2 text-sm text-muted">
          La sélection tourne selon les arrivages — tous les plats ne sont
          pas disponibles en même temps.
        </p>

        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          {menu.map((category) => (
            <div key={category.id}>
              <h3 className="font-serif text-lg text-accent-dark">
                {category.label}
              </h3>
              <ul className="mt-3 divide-y divide-border">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-2 text-sm"
                  >
                    <span>
                      {item.name}
                      {item.tags?.includes("nouveau") && (
                        <span className="ml-2 text-xs text-accent-dark">
                          Nouveau
                        </span>
                      )}
                    </span>
                    <span className="whitespace-nowrap font-medium text-foreground">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
