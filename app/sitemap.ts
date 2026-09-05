import type { MetadataRoute } from "next";

// TODO(à valider) : remplacer par le vrai domaine une fois choisi/confirmé.
const BASE_URL = "https://www.toom-nancy.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/restaurant", "/traiteur", "/traiteur/devis", "/realisations", "/a-propos", "/mentions-legales"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
