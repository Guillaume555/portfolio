import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const point = z.object({ titre: z.string(), texte: z.string() });

// chaque fichier .md de src/content/projets = un projet
const projets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projets" }),
  schema: z.object({
    // carte de l'accueil
    titre: z.string(),
    accroche: z.string(),
    resume: z.string(),
    type: z.string(),
    annee: z.string(),
    label: z.string(),
    stack: z.array(z.string()),
    ordre: z.number(),
    aLaUne: z.boolean().default(true),
    teinte: z.enum(["lagon", "corail", "sable"]).default("lagon"),
    capture: z.string().optional(),
    domaine: z.string().optional(),
    lienSite: z.string().optional(),
    lienCode: z.string().optional(),

    // étude de cas (tout est optionnel : un projet peut se contenter du texte en dessous)
    infos: z.array(z.object({ label: z.string(), valeur: z.string() })).default([]),
    contexte: z.string().optional(),
    probleme: z.string().optional(),
    chantiers: z.array(z.string()).default([]),
    approche: z.array(point).default([]),
    comparaisons: z.array(z.object({
      mode: z.enum(["curseur", "cote"]),
      titre: z.string(),
      avant: z.string(),
      apres: z.string(),
      legende: z.string().optional(),
      etroit: z.boolean().default(false),
    })).default([]),
    galerie: z.array(z.object({ src: z.string(), legende: z.string() })).default([]),
    mobiles: z.array(z.object({ src: z.string(), legende: z.string() })).default([]),
    demo: z.object({
      texte: z.string(),
      comptes: z.array(z.object({ role: z.string(), identifiant: z.string(), motDePasse: z.string() })),
    }).optional(),
    difficultes: z.array(z.object({ titre: z.string(), probleme: z.string(), solution: z.string() })).default([]),
    annexe: z.object({
      titre: z.string(),
      texte: z.string(),
      titreConstats: z.string().default("Ce que j'ai trouvé"),
      titreActions: z.string().default("Ce que j'ai fait"),
      constats: z.array(z.string()).default([]),
      actions: z.array(z.string()).default([]),
      image: z.string().optional(),
      legende: z.string().optional(),
    }).optional(),
    stackComplete: z.array(z.string()).default([]),
    resultats: z.array(point).default([]),
    autrement: z.array(z.string()).default([]),
  }),
});

export const collections = { projets };
