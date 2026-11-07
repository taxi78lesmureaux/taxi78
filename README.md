# TaxiDirect — Site premium 78 & 27

Site vitrine SEO local pour un **groupement d'artisans taxis conventionnés CPAM** couvrant principalement Mantes-la-Jolie, Les Mureaux (Yvelines 78) et Vernon (Eure 27), ainsi que les communes de la vallée de la Seine sur l'axe A13.

## Liens
- Aperçu Cloudflare : https://taxidirect78-preview.pages.dev/
- Domaine officiel inchangé : https://www.taxidirect78conventionne.fr/
- Code source : `worker.js` (Cloudflare Pages Worker en mode avancé).

## Coordonnées reprises du site officiel
- Téléphone principal : 06 19 95 97 34
- Deuxième téléphone / WhatsApp : 06 01 22 58 22
- Email : taxidirect27@gmail.com
- Véhicules présentés : taxi conventionné CPAM, taxi classique, van, berline prestige
- Services : transports médicaux prescrits vers les hôpitaux, consultations, dialyse, radiothérapie, gares parisiennes, Orly, Roissy-CDG, trajets privés
- Zones principales : Mantes-la-Jolie, Les Mureaux, Vernon, communes voisines du 78 et du 27 le long de l'A13

## Version déployée
- **15 pages** avec title/description uniques :
  1. Accueil
  2. Taxi conventionné CPAM
  3. Transport médical
  4. Remboursement CPAM
  5. Gares et aéroports
  6. Les Mureaux
  7. Mantes-la-Jolie
  8. Vernon
  9. Zones desservies
  10. Notre groupement
  11. Bon de transport
  12. Questions fréquentes
  13. Réservation
  14. Mentions légales
  15. Confidentialité
- Identité bleu nuit / miel / vert, blocs géométriques, images issues du site officiel, responsive mobile
- HTML rendu côté serveur, CSS embarqué, sans framework JS ou police distante côté client
- Liens téléphone, WhatsApp, email. Lien vers le **formulaire fonctionnel du site officiel actuel**. Le formulaire propre à la preview **prépare un email** et ne constitue pas une réservation confirmée.
- 301 pour slash final et ancienne page preview Poissy, véritables 404 HTTP, favicon, sitemap.xml, robots.txt
- JSON-LD destiné au domaine public : Organization, WebSite, WebPage, BreadcrumbList, TaxiService, Service ; pas de faux avis, d'adresse ou d'horaires inventés
- **Preview *.pages.dev volontairement non indexable** (meta robots, X-Robots-Tag, robots.txt). Pas de changement DNS ou de déploiement sur le domaine officiel.

## Important avant migration
1. Les **photos affichées en aperçu sont actuellement chargées depuis le site officiel existant**. Copier et héberger ces images sur Cloudflare avant de déplacer le domaine, sinon elles risquent de ne plus fonctionner.
2. Recréer ou connecter le **véritable système de réservation actuel** (backend, confirmation, emails). Le formulaire mailto de la preview n'est pas une réservation serveur.
3. Compléter les mentions légales et la politique de confidentialité avec les informations vérifiées : dénomination légale, SIREN/SIRET, adresse professionnelle et directeur de publication.
4. Vérifier le périmètre exact des communes, les horaires, la disponibilité des quatre catégories de véhicules et les justificatifs de conventionnement.
5. Vérifier le contraste, la navigation clavier, les liens, les visuels et les Core Web Vitals (LCP, CLS, INP) sur appareils réels : aucune note Lighthouse chiffrée n'est revendiquée.
6. Réaliser une sauvegarde du site officiel et un plan de retour arrière. Conserver les URL indexées quand c'est possible, configurer les redirections 301 nécessaires et éviter les doublons.
7. À la mise en ligne officielle : activer l'indexation uniquement sur le domaine principal, valider canonical/robots/sitemap et connecter Search Console + fiche d'établissement Google.

## Stratégie SEO
- Cibles : taxi conventionné 78, taxi CPAM Yvelines, taxi conventionné Mantes-la-Jolie, taxi conventionné Les Mureaux, taxi conventionné Vernon 27, taxis conventionnés axe A13, bon de transport taxi, remboursement taxi CPAM.
- Ne pas générer des dizaines de pages de villes artificiellement dupliquées. Enrichir les trois pages locales avec des informations authentiques du secteur et de vraies photographies du service.
- Développer Google Business Profile avec catégories et secteurs exacts, coordonnées cohérentes, preuves et avis clients réels.
- Suivre la couverture Search Console, les impressions, clics, CTR, requêtes locales et conversions, puis améliorer les pages à partir des données réelles.
- **Aucune première place Google n'est garantie** : le classement local dépend aussi de la pertinence, de la distance et de la notoriété.

## Sources officielles
- https://www.ameli.fr/assure/remboursements/rembourse/frais-transport
- https://www.ameli.fr/taxi-conventionne/exercice-professionnel/prise-charge-transport/taux-remboursement
- https://www.ameli.fr/taxi-conventionne/exercice-professionnel/facturation/tiers-payant
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes

Les taux de remboursement, le tiers payant et l'accord préalable doivent toujours être présentés de manière conditionnelle, sans garantie automatique.
