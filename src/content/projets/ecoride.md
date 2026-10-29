---
titre: EcoRide
accroche: "Une plateforme de covoiturage complète, du sprint de 10 jours jusqu'au retour du jury."
resume: "Application de covoiturage écologique en PHP objet, MySQL et MongoDB, conçue seul pour le titre professionnel Développeur Web et Web Mobile, puis déployée avec Docker."
type: Covoiturage · certification
annee: 2025 – 2026
label: Full-stack · PHP / MySQL
teinte: corail
stack: [PHP 8, MySQL, MongoDB, Docker]
ordre: 2
capture: /captures/ecoride.webp
domaine: ecoride-guillaume.onrender.com
# à remettre une fois les bloquants corrigés (page des logs protégée, trajets de démo à jour, branche fusionnée)
# lienSite: https://ecoride-guillaume.onrender.com
# lienCode: https://github.com/Guillaume555/ecoride

# à remettre en même temps que lienSite
# demo:
#   texte: "Créez un compte pour tester tout le parcours : 20 crédits sont offerts à l'inscription. Le site est sur une offre gratuite, la première page peut mettre une minute à se réveiller."

infos:
  - label: Cadre
    valeur: ECF du titre pro DWWM
  - label: Rôle
    valeur: Seul, de la maquette au déploiement
  - label: Durée
    valeur: Juillet 2025 – juillet 2026
  - label: Bases
    valeur: MySQL + MongoDB Atlas

contexte: "Le sujet de l'évaluation : une startup fictive, EcoRide, veut une application de covoiturage pour les trajets en voiture, avec une identité écologique. Le cahier des charges contenait 13 user stories. La stack était libre, avec trois obligations : une base relationnelle, une base NoSQL et une mise en ligne. J'ai d'abord livré une première version en un sprint de 10 jours, puis je l'ai fait évoluer pendant un an."

probleme: "L'enjeu n'était pas un joli site vitrine, mais une vraie application avec des règles métier :"
chantiers:
  - "Gérer une monnaie interne, les crédits, sans jamais en perdre ni en créer, même en cas d'erreur."
  - "Séparer clairement les droits du visiteur, de l'utilisateur et de l'administrateur."
  - "Faire tourner en ligne une base relationnelle et une base NoSQL, sur des hébergements gratuits."

approche:
  - titre: Une réservation qui ne peut pas réussir à moitié
    texte: "Avant de réserver, l'application vérifie les crédits, les places, la date, et qu'on ne réserve pas son propre trajet. Ensuite, une transaction SQL fait quatre opérations : débit du passager, crédit du conducteur, création de la réservation et mise à jour des places. Si une seule échoue, tout est annulé. L'annulation et le remboursement suivent la même logique."
  - titre: Du PHP objet, sans framework
    texte: "Des classes métier (utilisateur, trajet, véhicule, admin) et des services séparés pour la session, la base, les emails et la réinitialisation du mot de passe. Un point d'entrée unique avec une liste blanche des pages, et PDO avec des requêtes préparées partout."
  - titre: Deux bases, deux rôles
    texte: "MySQL stocke les données métier : 6 tables reliées par des clés étrangères, avec des index. MongoDB Atlas sert de journal d'activité (connexions, trajets, réservations). Si Atlas ne répond pas, un fichier de secours prend le relais pour ne pas bloquer le site."
  - titre: La sécurité dès les bases
    texte: "Mots de passe hachés avec bcrypt, échappement des affichages, contrôle du rôle et du propriétaire sur chaque action, session régénérée à la connexion, cookies httponly, jeton de réinitialisation haché, valable une heure et à usage unique, secrets en variables d'environnement."
  - titre: Une recherche qui répond sans recharger
    texte: "La recherche interroge une petite API qui renvoie du JSON, avec un délai pour ne pas lancer une requête à chaque lettre et un échappement des résultats côté client. Sans JavaScript, le formulaire fonctionne quand même."
  - titre: L'IA comme binôme, sous contrôle
    texte: "Je l'ai utilisée pour planifier, comprendre, déboguer et générer des classes que j'intégrais et testais. Ce projet m'a appris à la contrôler : du code écrit sur une structure de base supposée a provoqué de vrais bugs. Depuis, ma règle est simple : je lis le vrai code et la vraie base avant d'affirmer quoi que ce soit."

galerie:
  - src: /projets/ecoride/recherche.webp
    legende: "Recherche d'un trajet, avec filtres par prix et par type de véhicule. Les trajets en voiture électrique portent un badge « Éco »."
  - src: /projets/ecoride/detail.webp
    legende: "Détail d'un trajet : conducteur, véhicule, préférences et réservation avec calcul du total."
  - src: /projets/ecoride/mes-trajets.webp
    legende: "Mes trajets : les trajets publiés comme conducteur et les réservations comme passager, avec annulation."
  - src: /projets/ecoride/profil.webp
    legende: "Profil : crédits, statistiques et actions rapides."
  - src: /projets/ecoride/admin-dashboard.webp
    legende: "Tableau de bord administrateur : utilisateurs, trajets, réservations et crédits en circulation."
  - src: /projets/ecoride/admin-utilisateurs.webp
    legende: "Gestion des utilisateurs : suspension, réactivation, suppression et ajustement des crédits. Emails floutés."

mobiles:
  - src: /projets/ecoride/mobile-accueil.webp
    legende: Accueil
  - src: /projets/ecoride/mobile-recherche.webp
    legende: Résultats de recherche
  - src: /projets/ecoride/mobile-reservation.webp
    legende: Réservation

difficultes:
  - titre: Ça marche en local, ça plante en ligne
    probleme: "Une partie des classes avait été écrite sur une structure de base supposée, pas sur la vraie. En local, j'avais ajouté une colonne à la main ; la base en ligne, recréée depuis un ancien script, ne l'avait pas. La réservation fonctionnait chez moi et plantait en production."
    solution: "J'ai lu le message d'erreur PDO (« Unknown column »), comparé avec la vraie structure de la base dans DBeaver, puis aligné toutes les requêtes sur le schéma réel."
  - titre: Le remboursement infini
    probleme: "Après une annulation, appuyer sur F5 renvoyait le formulaire : le compte était recrédité à chaque rafraîchissement."
    solution: "Redirection systématique après chaque formulaire, et vérification du statut de la réservation avant tout remboursement."
  - titre: Du local à la production
    probleme: "Échec sur Railway à cause de la version de PHP, port imposé par l'hébergeur, extensions manquantes, SSL obligatoire côté base, et une base gratuite vidée pour inactivité."
    solution: "Passage sur Render avec un Dockerfile (PHP, extensions, Apache reconfiguré), options SSL dans PDO, réimport de la base avec DBeaver, et un guide de déploiement pour ne plus refaire les mêmes erreurs."
  - titre: GitHub qui bloque les push
    probleme: "Des identifiants étaient écrits dans le code : GitHub a refusé les envois."
    solution: "Identifiants déplacés dans des variables d'environnement, fichiers sensibles ajoutés au .gitignore, et mots de passe changés."

annexe:
  titre: Le retour du jury, et la suite
  texte: "La correction de l'évaluation m'a fait un retour critique, notamment sur la connexion et sur la documentation. J'ai pris trois semaines pour corriger avant la soutenance. Et je préfère être clair sur ce qui n'est pas encore fait."
  titreConstats: Ce qui n'est pas encore fait
  constats:
    - "Le rôle employé (la modération est faite par l'administrateur)."
    - "La commission de la plateforme sur chaque trajet."
    - "Le démarrage et l'arrêt d'un trajet par le conducteur."
    - "Le dépôt d'un avis depuis l'interface."
    - "La protection CSRF des formulaires."
  titreActions: Ce que j'ai corrigé avant la soutenance
  actions:
    - "La connexion, qui lisait encore une ancienne colonne de la base."
    - "La recherche asynchrone, ajoutée à cette occasion."
    - "Un nouveau jeu de données de démo et un environnement Docker pour le local."
    - "La documentation : guide de déploiement, MCD, MLD, diagramme de classes et cas d'utilisation."

stackComplete: ["PHP 8.1 (objet)", PDO, MySQL, MongoDB Atlas, "JavaScript (fetch)", Bootstrap 5.3, Composer, PHPMailer, Docker, Render, Aiven, Git et GitHub, Figma]

resultats:
  - titre: Titre professionnel obtenu
    texte: "Ce projet m'a permis d'obtenir le titre Développeur Web et Web Mobile (niveau 5, Bac+2) en 2026."
  - titre: Une application en ligne
    texte: "Déployée avec Docker, avec une base relationnelle et une base NoSQL hébergées dans le cloud."
  - titre: Un projet suivi dans le temps
    texte: "Une soixantaine de commits sur un an : d'un sprint de 10 jours à une version corrigée après le retour du jury."
  - titre: Une documentation complète
    texte: "README, guide de déploiement et diagrammes : MCD, MLD, classes et cas d'utilisation."

autrement:
  - "Partir sur une architecture objet dès le premier jour."
  - "Utiliser Git dès le début, avec une branche par fonctionnalité."
  - "Garder un seul script SQL pour le local et la production."
  - "Cocher le cahier des charges user story par user story, pour savoir exactement ce qui est fait."
  - "Mettre en place la protection CSRF et un vrai jeton « se souvenir de moi » dès le départ."
  - "Écrire la documentation au fil de l'eau, et moi-même."
---
