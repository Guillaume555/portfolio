# Charte graphique — Portfolio (direction « caribéenne subtile »)

_Version 1 · 14/10/2026_

## Principe

**90 % sobriété pro, 10 % signature.** Une base claire et aérée ; l'identité caribéenne passe par la palette (lagon, sable, coucher de soleil) et quelques détails, jamais par des clichés (palmiers, hibiscus, polices « vacances »).

## Couleurs

Règle : dans le code, on utilise **toujours les noms sémantiques** (`fond`, `texte`, `accent`…), jamais un code hexa en dur. Le mode sombre = les mêmes noms avec d'autres valeurs.

| Token | Rôle | Clair | Sombre |
|---|---|---|---|
| `fond` | Fond de page | `#F7F1E6` sable | `#0F1B26` nuit profonde |
| `surface` | Cartes, blocs | `#FFFAF2` | `#172735` |
| `bordure` | Contours discrets | `#EBE1D0` | `#2A3B4A` |
| `texte` | Texte principal | `#10202E` nuit | `#F3ECE0` sable clair |
| `texte-doux` | Texte secondaire | `#3D4B57` | `#B9C2C9` |
| `accent` | Liens, mots clés, badge | `#0B6670` lagon | `#5CC8C2` lagon clair |
| `accent-doux` | Fond du badge | `#DCEFED` | `#123B40` |
| `corail` | Petites touches (point du logo, labels) | `#B4461F` | `#F2784B` |
| `degrade-1` → `degrade-2` | Cadre photo uniquement | `#5CC8C2 → #F2784B` | idem |

⚠️ Les valeurs du mode sombre sont **provisoires**, à valider visuellement.

Contrastes : `texte`, `texte-doux` et `accent` respectent AA (4,5:1) sur `fond` et `surface`. Le corail vif `#F2784B` ne sert **pas** pour du petit texte en mode clair (contraste trop faible) : on utilise `#B4461F`.

## Typographie

| Usage | Police | Graisse |
|---|---|---|
| Titres, logo | **Bricolage Grotesque** | 600 / 800 |
| Texte courant, boutons | **DM Sans** | 400 / 500 |

| Élément | Mobile | Desktop |
|---|---|---|
| H1 (hero) | 40 px | 62 px, interlignage 1.05 |
| H2 (section) | 28 px | 36 px |
| H3 (carte) | 22 px | 24 px |
| Texte | 17 px | 19 px, interlignage 1.6 |
| Petit texte / label | 13–14 px | 13–14 px |

Titres en léger resserrement (`letter-spacing: -0.02em`).

## Espacements et formes

- Échelle d'espacement Tailwind (multiples de 4 px) ; sections séparées de 72–96 px en desktop.
- Contenu centré, largeur max **1120 px**, marges latérales 24 px (16 px mini sur mobile).
- Rayons : boutons et badges en pilule (`999px`), cartes `20px`, cadre photo `32px`.
- Ombres : aucune ou très légère ; on préfère une bordure `bordure`.

## Composants

- **Bouton principal** : fond `texte`, texte `fond`, pilule, hauteur ≥ 48 px. Survol : fond `accent`.
- **Bouton secondaire** : contour 2 px `texte`, fond transparent. Survol : contour et texte `accent`.
- **Badge dispo** : fond `accent-doux`, texte `accent`, point de 8 px `accent`.
- **Carte projet** : fond `surface`, bordure `bordure`, rayon 20 px ; label en couleur (`corail` ou `accent`), titre H3, description `texte-doux`.
- **Cadre photo** : image carrée rayon 32 px, posée sur le dégradé lagon → corail incliné de 3°. **Seule utilisation du dégradé.**
- **Logo** : « Guillaume » en Bricolage 800 + point `corail`.

## À faire / à éviter

✅ Beaucoup d'espace, une idée par section, couleurs via les tokens, icônes en trait fin.
❌ Dégradés en fond de page, emojis dans l'interface, plus de deux couleurs d'accent dans un même bloc, clichés tropicaux.

## Historique

| Version | Date | Changement |
|---|---|---|
| 1 | 14/10/2026 | Création à partir de la maquette B validée ; ajout des valeurs du mode sombre |
| 1.1 | 16/10/2026 | Tokens du dégradé nommés `degrade-1` / `degrade-2` ; couleurs sombres marquées provisoires |
