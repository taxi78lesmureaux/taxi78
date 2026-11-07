# Taxi Direct 78 — site premium et SEO local

Site vitrine multi-pages pour taxi conventionné CPAM dans les Yvelines (78). Code déployé sur Cloudflare Pages, sauvegardé dans `worker.js`.

## Accès
- Prévisualisation : https://taxidirect78-preview.pages.dev/
- Domaine officiel actuellement distinct : https://www.taxidirect78conventionne.fr/
- Environnement : Cloudflare Pages, déploiement direct d'un Pages Worker avancé (`_worker.js`).

## État
- 13 pages avec balises title et meta description uniques.
- Design responsive, appels téléphoniques directs, formulaire de demande par ouverture de l'application email (aucun stockage serveur).
- Pages CPAM, transport médical, remboursements, aéroport/gares et secteurs Les Mureaux, Mantes-la-Jolie et Poissy.
- Pages de guide pratique et FAQ, zone de service, mentions légales provisoires et confidentialité.
- Réponses HTML côté serveur, navigation par URL, 404 HTTP, redirections 301 de slash, robots.txt, sitemap.xml, favicon.
- Données structurées JSON-LD Organization, WebSite, WebPage, Service, BreadcrumbList et FAQPage prévues lorsque la page est servie sur un domaine non-preview.
- L'aperçu *.pages.dev est **non indexable** par choix : meta robots noindex, en-tête X-Robots-Tag noindex, robots.txt Disallow: /. Aucune migration du domaine public n'a été déclenchée.

## Avant le lancement public
1. Confirmer le statut réel de taxi conventionné CPAM et fournir les justificatifs réglementaires.
2. Confirmer le téléphone public, l'email commercial, la zone réelle de prise en charge, les jours/horaires, les services réellement proposés, et de vraies photos du véhicule (remplacer la photo illustrative).
3. Compléter les mentions légales : raison sociale, SIREN/SIRET, adresse professionnelle si obligatoire, responsable de publication ; revoir la politique de confidentialité.
4. Mettre en place un processus de réservation fiable (actuellement le formulaire prépare un email et n'envoie pas de demande serveur). Vérifier l'accessibilité et les performances sur les vrais appareils.
5. Valider le site en prévisualisation, définir une stratégie de migration avec redirections 301 pour les anciennes URL, sauvegarde et possibilité de retour arrière.
6. Publier sur le domaine principal uniquement après validation, contrôler HTTPS, canoniques, robots.txt, sitemap.xml et balisage schema.org ; soumettre le sitemap à Google Search Console.
7. Compléter et vérifier Google Business Profile avec informations identiques au site. Collecter des avis authentiques, sans créer de faux avis.
8. Consolider les pages avec des contenus exclusifs utiles (accessibilité réelle, informations vérifiées, réponses aux questions clients, trajets réels) ; ne pas multiplier les pages géographiques quasi identiques.

## SEO — cibles prioritaires
- taxi conventionné 78
- taxi CPAM Yvelines
- taxi conventionné Les Mureaux
- taxi conventionné Mantes-la-Jolie
- taxi conventionné Poissy
- bon de transport taxi CPAM
- remboursement taxi conventionné CPAM

## Prudence réglementaire
Ne jamais garantir 100 % de remboursement, tiers payant automatique, disponibilité 24h/24, prestation VSL/ambulance, TPMR ou avis clients sans justificatif. Références :
- https://www.ameli.fr/assure/remboursements/rembourse/frais-transport
- https://www.ameli.fr/taxi-conventionne/exercice-professionnel/prise-charge-transport/taux-remboursement
- https://www.ameli.fr/taxi-conventionne/exercice-professionnel/prise-charge-transport/demande-accord-prealable

Le positionnement n°1 sur Google ne peut pas être garanti. Le SEO technique et éditorial favorise l'indexation, mais le classement dépend de l'ensemble de l'écosystème de recherche.
