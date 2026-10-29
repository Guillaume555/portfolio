# Cahier des charges — Portfolio

_Créé le 14/10/2026 · mis à jour à chaque itération importante (voir « Suivi des itérations » en bas)._

## 1. Contexte

Ancien portfolio perdu, ainsi qu'une partie des anciens projets. Le nouveau portfolio doit appuyer les candidatures pour une **alternance CDA** (EPSI, 09/2026–07/2027, rythme 2 sem. / 1 sem.).

## 2. Objectifs

- Faire comprendre en quelques secondes **qui je suis, ce que je cherche et comment me contacter**.
- Parler à deux publics : les **recruteurs** (alternance, priorité) et les **clients** (missions freelance).
- **Prouver** mes compétences par des projets réels, expliqués et en ligne, plutôt que par une liste d'outils.
- Montrer une **utilisation maîtrisée de l'IA** : aller vite, mais comprendre, vérifier et assumer ce qui est livré.
- Être lui-même une preuve de qualité : rapide, accessible, bien référencé, responsive.

## 3. Cible

1. Recruteurs / RH : lecture rapide, besoin de clarté.
2. Tuteurs et devs en entreprise : regardent les études de cas et le code GitHub.

## 4. Périmètre

### V1 (avant reprise des candidatures)

- Page d'accueil : header, hero (dispo alternance + photo), projets à la une, mon approche (IA), parcours, contact, footer.
- Pages projets en étude de cas : **Carib Holidays**, **EcoRide**.
- CV téléchargeable (PDF).
- Bouton « Copier mon email » dans la section contact.
- Responsive (mobile en priorité), accessibilité de base, SEO de base.
- Mise en ligne sur Vercel.

### Après la V1

- Mode sombre avec bouton de bascule (tokens déjà en place).
- Nom de domaine perso.
- Refonte avant/après de l'ancien site (hors WordPress).
- Nouveau projet « application » avec une fonctionnalité IA.
- Portfolio interactif au style original (univers personnel, pas de franchise existante), réutilisant les mêmes données projets.
- Animations légères.

### Hors périmètre

- Blog, version anglaise (à réévaluer plus tard).
- Barres de compétences notées (peu crédibles pour un recruteur).

### Décisions de structure (16/10/2026)

- **Direction** : base sobre + interactions utiles (options A + B). Un concept plus audacieux (C) pourra venir plus tard, en évolution ou en portfolio à part.
- **Parcours** : une frise unique, organisée par formation (EPSI → Studi → IUT MMI), avec les entreprises rattachées à la formation pendant laquelle j'y ai travaillé (Carib Holidays, Thalia Caraïbes, CSBF, stage Aligné). Missions repliables pour ne pas surcharger. Si la frise reste trop chargée : détails déplacés vers une carte « Autres projets ».
- **Projets principaux** (captures + étude de cas) : Carib Holidays (une seule étude de cas couvrant les 2 sites : Carib Holidays et Vacances Dominique) et EcoRide. Un 3e projet viendra plus tard.
- **Source de vérité** pour les dates et intitulés : le CV.
- **Projets** : carrousel de cartes compactes (mockup navigateur) + carte « Autres projets » qui renvoie vers le parcours.
- **Contact** à deux entrées : « Vous recrutez ? » et « Vous avez un projet ? ».
- **Études de cas** : gabarit commun (contexte, approche, avant/après, difficultés, résultats, recul). Données clients floutées, aucun prénom de collègue.
- **EcoRide** : présenté honnêtement (ce qui n'est pas encore fait est listé). Liens vers le site et le dépôt désactivés tant que les bloquants côté EcoRide ne sont pas corrigés.
- **Recommandation** : reportée, à intégrer quand le texte sera disponible.

## 5. Arborescence

```
/                        Accueil
/projets/carib-holidays  Étude de cas
/projets/ecoride         Étude de cas
/cv-guillaume.pdf        CV
```

## 6. Contenu d'une étude de cas

Contexte · problème · mon rôle · stack · 2-3 décisions techniques · une difficulté et sa solution · utilisation de l'IA (et ce que j'ai dû corriger) · résultat · liens (site en ligne, dépôt).

## 7. Exigences techniques

| Domaine | Exigence |
|---|---|
| Stack | Astro + Tailwind CSS v4 |
| Données | Projets dans des fichiers de contenu (content collections), séparés du code |
| Style | Couleurs uniquement via les tokens de la charte ; mode sombre via `data-theme` |
| Responsive | Mobile d'abord, testé de 360 px à 1440 px |
| Accessibilité | Contrastes AA, navigation clavier, textes alternatifs, HTML sémantique |
| SEO | Title + description par page, image de partage, sitemap |
| Performance | Objectif Lighthouse ≥ 95 sur les 4 catégories |
| Versionnement | Git + GitHub dès le jour 1, commits clairs (`feat:`, `fix:`, `docs:`, `chore:`), fins de ligne LF |
| IA | Consignes du projet dans `AGENTS.md` (importé par `CLAUDE.md`) |

## 8. Contenus à fournir

- [ ] Accroche + présentation courte (version provisoire en place dans le hero)
- [ ] Texte du parcours
- [ ] Photo
- [ ] CV PDF à jour
- [ ] Captures Carib Holidays (accord du client, données floutées)
- [ ] Captures EcoRide + liens (site, dépôt)

## 9. Feuille de route

| Phase | Contenu | Statut |
|---|---|---|
| 0 — Cadrage | Objectifs, cible, stack, direction visuelle (caribéenne) | ✅ Fait |
| 1 — Fondations | Projet Astro, GitHub, tokens, layout, déploiement | ✅ Fait (déploiement reporté) |
| 2 — Contenu | Textes, captures, fichiers projets | ⏳ |
| 3 — Accueil | Sections une par une | ✅ Fait (finitions en phase 5) |
| 4 — Pages projets | Gabarit étude de cas | ✅ Fait : Carib Holidays, EcoRide |
| 5 — Qualité | Mobile, a11y, SEO, perf, mode sombre | ⏳ |
| 6 — Mise en ligne V1 | Relecture, domaine, liens CV/LinkedIn | ⏳ |
| 7 — Itérations | Nouveaux projets, portfolio interactif, mises à jour | ⏳ |

## 10. Suivi des itérations

| Date | Itération | Changements |
|---|---|---|
| 14/10/2026 | Cadrage | Choix d'Astro + Tailwind, direction visuelle caribéenne validée sur maquette, création du README, du cahier des charges et de la charte graphique |
| 15/10/2026 | Fondations | Dépôt GitHub, AGENTS.md / CLAUDE.md, design tokens clair/sombre (couleurs sombres provisoires), Layout commun, polices, réglages VS Code |
| 16/10/2026 | Accueil — haut de page | Header et Hero (badge dispo, accroche, bio, boutons, emplacement photo), fins de ligne LF |
| 16/10/2026 | Accueil complète | Sections Projets (collection de contenu, emplacements captures), Mon approche, Parcours, Contact (copier l'email), Footer ; pages projets simples |
| 16/10/2026 | Structure | Frise par formation avec entreprises rattachées (données du CV), étude de cas Carib Holidays sur 2 sites, décisions de structure |
| 17/10/2026 | Projets et contact | Mockups navigateur, carrousel compact, carte « Autres projets », double cible alternance / freelance |
| 19/10/2026 | Étude de cas Carib Holidays | Gabarit d'étude de cas, curseur avant/après, captures floutées, Vacances Dominique |
| 28/10/2026 | Étude de cas EcoRide | Contenu complet, galerie ordinateur et mobile, encadré compte de démo (désactivé) |
| 29/10/2026 | Menu mobile | Menu burger accessible (clavier, Échap, aria-expanded) |
