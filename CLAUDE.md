# AGENTS.md

## Projet

Portfolio perso de Guillaume, dev full-stack junior. Objectif : décrocher une alternance CDA.

## Stack

- Astro + Tailwind CSS v4
- Déploiement : Vercel (à venir)

## Commandes

- `npm run dev` : serveur local (port 4321)
- `npm run build` : build de prod dans `dist/`

## Structure

- `src/components/` composants, `src/layouts/` gabarits, `src/pages/` routes
- `src/styles/global.css` : design tokens (couleurs, polices)
- `docs/` : cahier des charges + charte graphique (source de vérité du design)

## Règles

- Couleurs : uniquement les classes des tokens (`bg-fond`, `text-texte`, `text-accent`…), jamais de hexa en dur dans les composants
- Mode sombre : passe par `data-theme` sur `<html>`, pas de classes `dark:`
- Mobile d'abord, accessibilité AA (contrastes, clavier, alt)
- Code : noms simples, en français pour le contenu
- Commentaires : peu nombreux, courts, en français, seulement pour repérer les grandes sections (ex : `<!-- photo de profil -->`)
- Ne jamais ajouter de dépendance sans me demander
- Mettre à jour `docs/` et le README à la fin de chaque grosse section

## Git

Messages de commit : `feat:`, `fix:`, `docs:`, `chore:`
