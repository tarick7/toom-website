// Types d'événements traiteur, utilisés pour le filtre de la galerie
// "Réalisations" et pour le formulaire devis. Un seul endroit à modifier
// si de nouveaux types apparaissent.

export type EventTypeId = "mariage" | "entreprise" | "cocktail" | "buffet" | "autre";

export const eventTypes: { id: EventTypeId; label: string }[] = [
  { id: "mariage", label: "Mariage" },
  { id: "entreprise", label: "Entreprise / séminaire" },
  { id: "cocktail", label: "Cocktail privé" },
  { id: "buffet", label: "Buffet" },
  { id: "autre", label: "Autre" },
];

export type Realisation = {
  id: string;
  title: string;
  eventType: EventTypeId;
  // TODO(contenu réel) : remplacer par le vrai chemin de la photo une fois
  // les photos d'événements récupérées et rangées dans /public/realisations.
  imageSrc: string;
  description?: string;
};

// TODO(contenu réel) : remplacer ce jeu de données par les vraies réalisations
// TOOM (mariage Maud & Taha, événements entreprise, cocktails privés...).
export const realisations: Realisation[] = [];
