import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="container-page py-20 text-center sm:py-28">
        <p className="font-serif text-sm uppercase tracking-[0.3em] text-accent-dark">
          Cuisine libanaise à Nancy
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
          TOOM
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Deux façons de vivre TOOM : venir manger, ou nous confier votre
          événement.
        </p>
      </section>

      <section className="container-page grid gap-6 pb-24 sm:grid-cols-2">
        <IntentCard
          eyebrow="Manger chez TOOM"
          title="Restaurant"
          description="La carte, les horaires, l'adresse, et la commande en livraison."
          href="/restaurant"
          cta="Voir la carte"
        />
        <IntentCard
          eyebrow="Votre événement"
          title="TOOM Traiteur"
          description="Cocktails, buffets, mariages, entreprises. Un devis pensé pour votre événement."
          href="/traiteur"
          cta="Découvrir le traiteur"
        />
      </section>
    </div>
  );
}

function IntentCard({
  eyebrow,
  title,
  description,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent-dark sm:p-10"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-accent-dark">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl">{title}</h2>
        <p className="mt-4 text-muted">{description}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 font-medium text-foreground group-hover:text-accent-dark">
        {cta} →
      </span>
    </Link>
  );
}
