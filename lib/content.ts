// Contenu éditorial du site TOOM.
// Convention : identifiants/types en anglais, texte affiché en français.
// TODO(contenu réel) : remplacer les textes et images marqués par les vrais
// contenus TOOM (photos d'événements, avis, logos partenaires) au fil de l'eau.

export const siteConfig = {
  name: "TOOM",
  tagline: "Cuisine libanaise à Nancy",
  city: "Nancy",
  phone: "07 56 80 11 39",
  email: "TODO(contenu réel) : email de contact",
  address: "61 avenue du XXe Corps, Nancy",
  openingHours: [
    { days: "Mardi au vendredi", hours: "12h - 14h | 19h - 21h" },
    { days: "Samedi", hours: "12h30 - 14h30 | 19h30 - 21h30" },
    { days: "Dimanche & lundi", hours: "Fermé" },
  ],
  deliveryLinks: {
    uberEats: "https://www.ubereats.com/",
    deliveroo: "https://deliveroo.fr/",
    dood: "https://www.dood.com/",
  },
};

export const mainNav = [
  { label: "Restaurant", href: "/restaurant" },
  { label: "Traiteur", href: "/traiteur" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
];
