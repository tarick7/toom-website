import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et politique de confidentialité du site TOOM.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="container-page max-w-2xl py-16 sm:py-24 space-y-10">
      <div>
        <h1 className="font-serif text-4xl">Mentions légales</h1>
        {/* TODO(à valider) : SIRET, forme juridique, adresse, hébergeur réels */}
        <dl className="mt-6 space-y-2 text-muted">
          <div>
            <dt className="font-medium text-foreground">Éditeur</dt>
            <dd>TOOM — Tarick Osseirane — TODO(à compléter) : SIRET, adresse</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Hébergeur</dt>
            <dd>TODO(à compléter) : nom et adresse de l&rsquo;hébergeur (Vercel Inc.)</dd>
          </div>
        </dl>
      </div>

      <div>
        <h2 className="font-serif text-2xl">Politique de confidentialité</h2>
        <p className="mt-4 text-muted">
          Les informations recueillies via le formulaire de demande de devis
          sont utilisées exclusivement pour traiter votre demande et vous
          recontacter. Elles sont conservées 3 ans à compter du dernier
          contact, puis supprimées. Conformément au RGPD, vous disposez d&rsquo;un
          droit d&rsquo;accès, de rectification et de suppression de vos données,
          {/* TODO(contenu réel) : email de contact pour l'exercice des droits */}
          en nous écrivant à TODO(à compléter) : email de contact.
        </p>
        <p className="mt-4 text-muted">
          Ce site utilise des cookies de mesure d&rsquo;audience (Google
          Analytics) uniquement après votre consentement.
        </p>
      </div>
    </div>
  );
}
