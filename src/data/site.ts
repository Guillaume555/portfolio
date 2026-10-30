// infos perso : à modifier ici, pas dans les composants
export const moi = {
  nom: "Guillaume Papalia",
  email: "papaliaguillaume9@gmail.com",
  github: "https://github.com/Guillaume555",
  linkedin: "https://www.linkedin.com/in/guillaume-papalia-6445692a0/",
  cv: "/cv-guillaume.pdf",
  photo: "/photo.webp", // fichier dans public/
};

// carte "Autres projets" de la section Projets (le détail est dans le parcours)
export const autresProjets = {
  titre: "Autres projets",
  nombre: 3,
  periode: "2024 – 2025",
  resume: "Sites WordPress, e-commerce, intégration d'API : les projets réalisés pendant mes stages et alternances, détaillés dans mon parcours.",
  tags: ["WordPress", "WooCommerce", "API"],
  lien: "#parcours",
};

export const liens = [
  { nom: "Projets", href: "/#projets" },
  { nom: "Mon approche", href: "/#approche" },
  { nom: "Parcours", href: "/#parcours" },
  { nom: "Contact", href: "/#contact" },
];

// une formation = un bloc de la frise, avec les entreprises faites pendant cette formation
export const parcours = [
  {
    periode: "2026 – 2027",
    ecole: "EPSI",
    diplome: "Concepteur Développeur d'Applications",
    niveau: "Titre RNCP 37873 · Bac+3 · en alternance",
    texte: "En recherche d'une entreprise pour une alternance full-stack (2 semaines en entreprise / 1 semaine à l'école).",
    experiences: [],
  },
  {
    periode: "2024 – 2026",
    ecole: "Studi",
    diplome: "Développeur Web Full-Stack",
    niveau: "Titre pro · Bac+2 · en alternance",
    texte: "",
    experiences: [
      {
        type: "Alternance",
        entreprise: "Carib Holidays",
        poste: "Développeur web full-stack",
        dates: "09/2025 – 02/2026",
        lieu: "Saint-François",
        resume: "Seul développeur sur les sites d'une agence de voyages.",
        missions: [
          "Développement full-stack du site (PHP, CSS) : conception, intégration et logique back-end",
          "Gestion autonome du projet : choix techniques, maintenance, évolutions",
          "Déploiement et gestion des fichiers sur le serveur",
        ],
        tags: ["PHP", "CSS", "JavaScript", "SEO"],
        lien: "/projets/carib-holidays",
      },
      {
        type: "Alternance",
        entreprise: "Thalia Caraïbes",
        poste: "Développeur web",
        dates: "07/2025",
        lieu: "Le Gosier",
        resume: "Intégration d'API et affichage dynamique de données.",
        missions: [
          "Conception d'interfaces web en PHP, HTML, CSS",
          "Connexion à des API, exploitation des données (JSON) et affichage dynamique",
          "Tests, débogage et amélioration de fonctionnalités existantes",
        ],
        tags: ["PHP", "API", "JSON"],
      },
      {
        type: "Alternance",
        entreprise: "CSBF",
        poste: "Chargé de communication et gestion administrative",
        dates: "10/2024 – 06/2025",
        lieu: "",
        resume: "Réalisation et mise à jour du site WordPress de l'organisation.",
        missions: [
          "Réalisation et mise à jour du site web (WordPress)",
          "Création de contenus pour les réseaux sociaux",
          "Suivi des comptes clients, facturation, accueil",
        ],
        tags: ["WordPress"],
      },
      {
        type: "Projet de certification",
        entreprise: "EcoRide",
        poste: "Plateforme de covoiturage",
        dates: "",
        lieu: "",
        resume: "Application full-stack PHP / MySQL, déployée en ligne.",
        missions: [],
        tags: ["PHP", "MySQL"],
        lien: "/projets/ecoride",
      },
    ],
  },
  {
    periode: "2023 – 2024",
    ecole: "IUT de Guadeloupe",
    diplome: "Bachelor Métiers du Multimédia et de l'Internet",
    niveau: "1re année validée",
    texte: "",
    experiences: [
      {
        type: "Stage",
        entreprise: "Aligné",
        poste: "Développeur web & designer digital",
        dates: "06/2024",
        lieu: "Le Gosier",
        resume: "Création complète d'un site WordPress / WooCommerce.",
        missions: [
          "Conception UX/UI et design du site",
          "Développement sous WordPress (Elementor, WooCommerce)",
          "Intégration de fonctionnalités : formulaire, newsletter, paiement",
          "Optimisation SEO et mise en place de Google Analytics",
        ],
        tags: ["WordPress", "WooCommerce", "UX/UI", "SEO"],
      },
    ],
  },
];
