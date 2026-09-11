// Carte du restaurant TOOM.
// Source : export de la carte de commande en ligne (livraison/sur place).
// La disponibilité réelle tourne selon les arrivages — tous les plats ne
// sont pas proposés en même temps, tout le temps.

export type MenuItem = {
  name: string;
  price: string;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "mezzas-froids",
    label: "Mezzas froids",
    items: [
      { name: "Hommos", price: "5,90 €", tags: ["végé"] },
      { name: "Salade du Moine", price: "5,90 €", tags: ["végé"] },
      { name: "M'tabbal spécial", price: "5,90 €", tags: ["végé"] },
      { name: "Salade fattouche", price: "12,90 €" },
      { name: "Taboulé", price: "5,90 €", tags: ["végé"] },
      { name: "Labné", price: "5,90 €", tags: ["végé"] },
      { name: "Hommos Lahmé (bœuf Angus)", price: "6,90 €" },
      { name: "Salade de fèves", price: "5,90 €", tags: ["végé"] },
      { name: "Salade de lentilles au cumin", price: "5,90 €", tags: ["végé"] },
    ],
  },
  {
    id: "mezzas-chauds",
    label: "Mezzas chauds",
    items: [
      { name: "Sambousik bœuf", price: "6,90 €" },
      { name: "Sambousik poulet au sumac", price: "6,90 €" },
      { name: "Sambousik fromage", price: "6,90 €", tags: ["végé"] },
      { name: "Falafels x3", price: "5,90 €", tags: ["végé"] },
      { name: "Chou-fleurs frits", price: "5,90 €", tags: ["végé", "nouveau"] },
      { name: "Frites au zaatar", price: "4,90 €", tags: ["végé"] },
      { name: "Nid de Halloumi", price: "7,90 €" },
      { name: "Brochettes kafta", price: "8,90 €" },
    ],
  },
  {
    id: "sandwichs",
    label: "Sandwichs",
    items: [
      { name: "Pulled Poulet", price: "9,80 €" },
      { name: "Falafel roll", price: "9,80 €", tags: ["végé"] },
      { name: "Burger Kafta & frites", price: "15,90 €" },
      { name: "Sandwich poulet au sumac", price: "9,80 €", tags: ["nouveau"] },
    ],
  },
  {
    id: "suggestions",
    label: "Suggestions du moment",
    items: [{ name: "Carte blanche !", price: "15,90 €" }],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Douceur d'oranger", price: "5,90 €" },
      { name: "Pain du Sérail", price: "5,90 €" },
      { name: "Citron perlé", price: "5,90 €" },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    items: [
      { name: "Coca", price: "2,00 €" },
      { name: "Coca Zéro", price: "2,00 €" },
      { name: "Eau pétillante", price: "2,00 €" },
      { name: "Citronnade maison", price: "2,50 €" },
    ],
  },
];
