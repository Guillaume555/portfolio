---
titre: Carib Holidays
accroche: "Refondre un site en production et l'outil de toute une agence, en seul développeur."
resume: "Deux sites d'agence de voyages et leur administration, repris en alternance : Carib Holidays et sa déclinaison Vacances Dominique."
type: Agence de voyages
annee: 2025 – 2026
label: Client réel · 2 sites
teinte: lagon
stack: [PHP, MySQL, JavaScript, CKEditor, SEO]
ordre: 1
capture: /captures/carib-holidays.webp
domaine: caribholidays.fr
lienSite: https://www.caribholidays.fr

infos:
  - label: Rôle
    valeur: Seul développeur, en alternance
  - label: Durée
    valeur: Sept. 2025 – fév. 2026, 3 j / semaine
  - label: Équipe
    valeur: 7 à 8 personnes, aucun autre dev
  - label: Statut
    valeur: En ligne depuis fin novembre 2025

contexte: "Carib Holidays est une agence de voyages guadeloupéenne spécialisée dans les Caraïbes : hôtels, croisières, séjours et voyages de groupe. Son site tournait depuis 2018 sur un CMS fait maison, développé par une agence qui ne s'en occupait plus. Aucune documentation, aucun historique des modifications, et même pas les accès techniques : j'ai d'abord dû me faire déclarer contact technique chez l'hébergeur pour récupérer cPanel, le FTP et la base de données."

probleme: "Trois chantiers sont arrivés l'un après l'autre, sur un site en production avec du vrai trafic :"
chantiers:
  - "Moderniser tout le site public, resté figé avec ses couleurs agressives, sa double navigation et un affichage mobile peu lisible."
  - "Transformer l'admin en vrai outil de suivi : plusieurs agents lisaient les mêmes demandes de devis sans savoir qui s'en occupait."
  - "Fiabiliser les emails clients, peu soignés et de plus en plus rejetés par Gmail et Orange."

approche:
  - titre: Ne jamais toucher la production à l'aveugle
    texte: "J'étais seul sur le code : si je cassais quelque chose, personne ne pouvait réparer derrière moi. Tout passait d'abord en local, puis sur une copie de test avec sa propre base, validée avec mon tuteur avant la mise en ligne (seules quelques petites retouches de démonstration se faisaient directement sur la copie de test, jamais sur la production). Avec Git, j'ai gardé une branche d'origine intacte comme point de retour, une pour le réencodage et une pour la refonte, soit une trentaine de commits."
  - titre: Un vrai système de suivi des demandes
    texte: "C'est le cœur du projet. Chaque agent peut s'attribuer une demande (une couleur par agent), changer son statut depuis la liste sans recharger la page (AJAX), filtrer par responsable, client, lettre ou période. La fiche d'une demande regroupe le devis, les notes internes et l'éditeur de réponse. J'ai ajouté les colonnes nécessaires en base."
  - titre: Des emails qui arrivent, et qui ressemblent à l'agence
    texte: "Le mail de confirmation est généré à partir de l'offre depuis laquelle le client a demandé un devis : nom, image, détails, sur plusieurs centaines d'offres. La réponse de l'agent part de l'admin, dans un modèle CKEditor pré-rempli avec les données du client et la signature de l'agent."
  - titre: Une refonte pilotée par des variables CSS
    texte: "J'ai codé directement, par itérations, en comparant des captures avant / après. Environ 25 fichiers retouchés : 11 pages refaites, 4 gabarits communs (en-tête, navigation, footer, recherche), 5 pages adaptées et l'admin des devis. Toutes les couleurs (bleus et accent doré) sont des variables : changer de palette ne demande qu'une ligne."
  - titre: L'IA comme assistant, pas comme pilote
    texte: "Je m'en suis servi pour accélérer les diagnostics, avoir un regard extérieur sur un bug et gagner du temps sur le code répétitif. Chaque proposition passait d'abord par mon environnement local. J'en ai rejeté ou corrigé plusieurs : une « optimisation » CSS qui supprimait le footer, ou une piste d'image corrompue alors que la vraie cause était un chemin de configuration."

comparaisons:
  - mode: curseur
    titre: Page d'accueil
    avant: /projets/carib-holidays/accueil-avant.webp
    apres: /projets/carib-holidays/accueil-apres.webp
    legende: "Une seule barre de navigation, une recherche mise en avant et des cartes d'offres lisibles. L'ancienne version est une copie locale : les accents cassés viennent du problème d'encodage corrigé pendant la mission."
  - mode: curseur
    titre: Admin, liste des demandes
    avant: /projets/carib-holidays/admin-liste-avant.webp
    apres: /projets/carib-holidays/admin-liste-apres.webp
    legende: "Statut modifiable en un clic, ancienneté de la demande, responsable et compteurs par statut. Les données clients sont floutées."
  - mode: cote
    titre: Accueil sur mobile
    avant: /projets/carib-holidays/mobile-avant.webp
    apres: /projets/carib-holidays/mobile-apres.webp
    legende: "Les informations de contact occupaient tout le premier écran. Elles tiennent maintenant dans un en-tête compact."
    etroit: true
  - mode: cote
    titre: Fiche d'une demande
    avant: /projets/carib-holidays/fiche-avant.webp
    apres: /projets/carib-holidays/fiche-apres.webp
    legende: "Le devis à gauche, le suivi à droite : statut, retour téléphonique, notes internes et historique des échanges."
  - mode: cote
    titre: Email de confirmation
    avant: /projets/carib-holidays/email-avant.webp
    apres: /projets/carib-holidays/email-apres.webp
    legende: "Un texte générique remplacé par un mail aux couleurs de l'agence, qui reprend l'offre demandée. Mis en page en tableaux et styles en ligne pour bien s'afficher dans Gmail."
  - mode: cote
    titre: Formulaire de devis
    avant: /projets/carib-holidays/devis-avant.webp
    apres: /projets/carib-holidays/devis-apres.webp
    legende: "Des étapes claires, des compteurs pour la composition du groupe et une option « je ne connais pas encore mes dates »."

galerie:
  - src: /projets/carib-holidays/reponse.webp
    legende: "Réponse au client depuis l'admin : le modèle se pré-remplit avec la demande et la signature de l'agent."
  - src: /projets/carib-holidays/hotel-apres.webp
    legende: "Fiche hôtel : galerie photo et informations organisées en onglets."

difficultes:
  - titre: Une admin ouverte, et sans navigation
    probleme: "Sur la copie de test, l'admin s'ouvrait sans mot de passe et la barre de navigation n'apparaissait nulle part, sans aucune erreur dans les logs."
    solution: "Deux causes : la protection HTTP Basic (.htaccess / .htpasswd) n'était pas en place, et l'utilisateur connecté n'était jamais transmis au PHP. J'ai relié l'identifiant HTTP à la table des utilisateurs et réinstallé la protection."
  - titre: Des accents cassés partout
    probleme: "Le site était en ISO-8859-1. Une ancienne migration avait mal encodé la base : environ 95 hôtels affichaient « Ã© » au lieu de « é », et certaines icônes devenaient des « ? »."
    solution: "J'ai reconverti les données, corrigé le jeu de caractères de la connexion MySQL et réencodé les fichiers en UTF-8, par étapes, dans une branche dédiée."
  - titre: Des emails rejetés par Gmail et Orange
    probleme: "À force d'envois, les messageries ont commencé à refuser les mails des agents : le domaine n'avait ni SPF, ni DKIM, ni DMARC."
    solution: "J'ai fait le diagnostic, coordonné l'hébergeur et le gestionnaire DNS, puis repéré une faute de frappe dans l'enregistrement SPF. En attendant, tous les mails partaient de l'adresse principale de l'agence."
  - titre: Un mail parfait dans l'éditeur, cassé chez le client
    probleme: "Le rendu changeait dans Gmail, le logo ne s'affichait pas et les icônes ne chargeaient pas."
    solution: "J'ai réécrit les modèles en HTML compatible messageries (tableaux, styles en ligne, pas de dégradés), appelé les images par URL absolue et remplacé les icônes par de simples caractères, en gardant un texte facile à modifier pour les agents."

annexe:
  titre: Le deuxième site, Vacances Dominique
  texte: "La déclinaison de Carib Holidays dédiée à la Dominique, sur le même type de CMS, avec sa propre charte verte et orange. Le code était encore moins documenté que celui du site principal, et l'équipe avait perdu les accès à l'admin."
  constats:
    - "Du CSS éclaté dans beaucoup de fichiers, avec des classes copiées du site principal et du style en ligne."
    - "Du PHP dupliqué : des requêtes presque identiques et un diaporama recopié de page en page."
    - "Une configuration avec des chemins Windows en dur, qui empêchait le site de s'afficher en ligne."
    - "Des fichiers mal nommés ou inutiles, et aucun README pour savoir quoi faisait quoi."
  actions:
    - "Récupéré l'admin en recréant les accès directement en base, sans connaître le chiffrement d'origine."
    - "Refait la navigation (menu « Découvrir » sur ordinateur et mobile), l'accueil et le footer."
    - "Regroupé le style dans une feuille commune à variables, puis une feuille par section."
    - "Retrouvé 4 fichiers sur 446 enregistrés dans le mauvais encodage, grâce à un script de diagnostic."
  image: /projets/carib-holidays/vacances-dominique.webp
  legende: "Fiche séjour de Vacances Dominique après la refonte. Le référencement restait à faire à la fin de ma mission."

stackComplete: ["PHP 7 (procédural)", MySQL, JavaScript, jQuery, AJAX, "CSS (variables, Grid, Flexbox)", W3.CSS, CKEditor 4, Emails HTML, "SPF / DKIM / DMARC", Git et GitHub, cPanel, Laragon]

resultats:
  - titre: Un site modernisé, en ligne
    texte: "La nouvelle version tourne en production depuis fin novembre 2025."
  - titre: Plus de doublons
    texte: "Les demandes sont attribuées, suivies et traitées dans un seul outil. Deux agents ne répondent plus au même client."
  - titre: Des emails qui arrivent
    texte: "Les clients reçoivent un mail personnalisé selon l'offre, et les réponses des agents arrivent de nouveau en boîte de réception."
  - titre: Une équipe autonome après mon départ
    texte: "README technique, journal des modifications et guide pas à pas pour traiter les devis."

autrement:
  - "Installer un outil d'analytics dès le premier jour, pour pouvoir chiffrer l'impact de la refonte."
  - "Documenter au fil de l'eau, plutôt que de tout rassembler en fin de mission."
  - "Prendre le temps de comprendre l'existant avant de le remplacer, que ce soit le routage ou la stratégie d'encodage."
  - "Faire des commits plus petits et plus fréquents : au début, ils regroupaient trop de changements."
---
