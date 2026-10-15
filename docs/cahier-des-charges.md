# Cahier des charges — Portfolio

_Créé le 14/10/2026 · mis à jour à chaque itération importante (voir « Suivi des itérations » en bas)._

## 1. Contexte

Ancien portfolio perdu, ainsi qu'une partie des anciens projets. Le nouveau portfolio doit appuyer les candidatures pour une **alternance CDA** (EPSI, 09/2026–07/2027, rythme 2 sem. / 1 sem.).

## 2. Objectifs

- Faire comprendre en quelques secondes **qui je suis, ce que je cherche et comment me contacter**.
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
- Responsive (mobile en priorité), accessibilité de base, SEO de base.
- Mise en ligne sur Vercel.

### Après la V1

- Mode sombre avec bouton de bascule.
- Nom de domaine perso.
- Refonte avant/après de l'ancien site (hors WordPress).
- Nouveau projet « application » avec une fonctionnalité IA.
- Animations légères.

### Hors périmètre

- Blog, version anglaise (à réévaluer plus tard).

## 5. Arborescence

```
/                      Accueil
/projets/carib-holidays  Étude de cas
/projets/ecoride         Étude de cas
/cv.pdf                  CV
```

## 6. Contenu d'une étude de cas

Contexte · problème · mon rôle · stack · 2-3 décisions techniques · une difficulté et sa solution · utilisation de l'IA (et ce que j'ai dû corriger) · résultat · liens (site en ligne, dépôt).

## 7. Exigences techniques

| Domaine | Exigence |
|---|---|
| Stack | Astro + Tailwind CSS |
| Données | Projets dans des fichiers de contenu (content collections), séparés du code |
| Style | Couleurs uniquement via les tokens de la charte (prépare le mode sombre) |
| Responsive | Mobile d'abord, testé de 360 px à 1440 px |
| Accessibilité | Contrastes AA, navigation clavier, textes alternatifs, HTML sémantique |
| SEO | Title + description par page, image de partage, sitemap |
| Performance | Objectif Lighthouse ≥ 95 sur les 4 catégories |
| Versionnement | Git + GitHub dès le jour 1, commits clairs (`feat:`, `fix:`, `docs:`, `chore:`) |

## 8. Contenus à fournir

- [ ] Accroche + présentation courte
- [ ] Texte du parcours
- [ ] Photo
- [ ] CV PDF à jour
- [ ] Captures Carib Holidays (accord du client, données floutées)
- [ ] Captures EcoRide + liens (site, dépôt)

## 9. Feuille de route

| Phase | Contenu | Statut |
|---|---|---|
| 0 — Cadrage | Objectifs, cible, stack, direction visuelle (caribéenne) | ✅ Fait |
| 1 — Fondations | Projet Astro, GitHub, tokens, layout, déploiement | 🔄 En cours |
| 2 — Contenu | Textes, captures, fichiers projets | ⏳ |
| 3 — Accueil | Sections une par une | ⏳ |
| 4 — Pages projets | Gabarit étude de cas | ⏳ |
| 5 — Qualité | Mobile, a11y, SEO, perf, mode sombre | ⏳ |
| 6 — Mise en ligne V1 | Relecture, domaine, liens CV/LinkedIn | ⏳ |
| 7 — Itérations | Nouveaux projets, mises à jour | ⏳ |

## 10. Suivi des itérations

| Date | Itération | Changements |
|---|---|---|
| 14/10/2026 | Cadrage | Choix d'Astro + Tailwind, direction visuelle caribéenne validée sur maquette, création du README, du cahier des charges et de la charte graphique |
