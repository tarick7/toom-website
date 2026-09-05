# TOOM Website

Site public de TOOM (restaurant + traiteur, cuisine libanaise à Nancy).
Next.js (App Router) + TypeScript + Tailwind CSS v4. Contenu géré en Git
(pas de CMS) — voir `lib/content.ts` et `lib/event-types.ts`.

## Démarrer

```bash
npm install
npm run dev
```

Site disponible sur http://localhost:3000.

## Structure

- `app/` — pages (Restaurant, Traiteur, devis, Réalisations, À propos, mentions légales)
- `components/` — Header, Footer, formulaire devis
- `lib/` — contenu éditorial et types d'événements
- `app/api/devis/route.ts` — réception du formulaire de devis (stocké en
  local dans `data/devis-leads.json`, hors Git — **TODO(intégration)** :
  brancher sur le CRM / Hermes Agent avant mise en production, car le
  système de fichiers de Vercel est éphémère.

## Contenu à compléter

Chercher `TODO(contenu réel)` dans le code pour la liste des textes, photos
et coordonnées encore à renseigner.

## Déploiement

Déployé sur Vercel, connecté au dépôt GitHub du propriétaire (pas de compte
partagé). Domaine à brancher une fois choisi/confirmé (voir `app/sitemap.ts`
et `app/robots.ts`).
