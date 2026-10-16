# Portfolio — Guillaume

Portfolio de développeur full-stack junior, en recherche d'alternance **Concepteur Développeur d'Applications** (EPSI, rythme 2 semaines entreprise / 1 semaine école).

🔗 Site en ligne : _à venir_

## Stack

- [Astro](https://astro.build) — génération du site (HTML statique, composants)
- [Tailwind CSS v4](https://tailwindcss.com) — style, avec des design tokens clair/sombre
- Déploiement : Vercel _(à venir)_

## Lancer le projet en local

Prérequis : Node.js (version LTS récente) et npm.

```bash
git clone https://github.com/Guillaume555/portfolio.git
cd portfolio
npm install
npm run dev
```

Le site est ensuite visible sur `http://localhost:4321`.

## Scripts

| Commande          | Rôle                                            |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Serveur de développement avec rechargement auto |
| `npm run build`   | Génère le site final dans `dist/`               |
| `npm run preview` | Prévisualise le site généré                     |

## Structure

```
src/
├── components/   composants réutilisables (Header, Hero…)
├── layouts/      gabarit commun des pages (Layout.astro)
├── pages/        une page = un fichier (routage par fichiers)
└── styles/       global.css : design tokens clair/sombre
public/           fichiers servis tels quels (images, CV)
docs/             cahier des charges, charte graphique
```

## Design

Couleurs et polices définies dans `src/styles/global.css` à partir de la [charte graphique](docs/charte-graphique.md). Le mode sombre passe par l'attribut `data-theme` sur `<html>`.

## Documentation

- [Cahier des charges](docs/cahier-des-charges.md) — objectifs, périmètre, feuille de route, suivi des itérations
- [Charte graphique](docs/charte-graphique.md) — couleurs, typo, composants
- [AGENTS.md](AGENTS.md) — consignes pour les assistants IA de code

## Avancement

- ✅ Fondations : projet, design tokens, layout commun
- 🔄 Page d'accueil : header et hero faits, sections suivantes en cours

## Auteur

Guillaume — développeur full-stack junior, Île-de-France.
