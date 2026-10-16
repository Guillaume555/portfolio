import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// chaque fichier .md de src/content/projets = un projet
const projets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projets" }),
  schema: z.object({
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
    capture: z.string().optional(), // ex : "/captures/ecoride.webp" (dans public/)
    domaine: z.string().optional(), // affiché dans la barre du navigateur
    lienSite: z.string().optional(),
    lienCode: z.string().optional(),
  }),
});

export const collections = { projets };
