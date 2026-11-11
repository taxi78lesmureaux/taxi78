# TaxiDirect 78 — Charte graphique et contrôle qualité

## Identité retenue
La marque affichée est **TaxiDirect 78**. Le logo horizontal validé comprend : monogramme TD, route stylisée, voiture avec une enseigne **TAXI posée sur son toit**, nom TaxiDirect 78 et signature « Taxi conventionné CPAM dans les Yvelines ». Fond blanc.

Le site utilise l'image validée, optimisée en **AVIF 420 × 140, 5 519 octets**, servie directement par Cloudflare à l'adresse `/brand-logo.avif`. Le fichier original existe dans les ressources de cette conversation. Le favicon SVG est une réduction stylistique TD.

## Palette officielle — actualisée le 11 novembre 2026
Le logo final validé est la référence. **Une seule teinte de bleu** sur le site, associée au jaune taxi, au gris neutre et au blanc.

| Usage | Nom | Hex |
|---|---|---|
| Navigation, liens, sélections, bandeaux, actions secondaires | Bleu royal | `#0053B4` |
| Réservation et éléments clés, détails taxi, focus | Jaune taxi | `#FFC400` |
| Titres, textes, zones profondes (pas de bleu marine) | Gris anthracite | `#293442` |
| Fond général et header | Blanc | `#FFFFFF` |
| Surfaces discrètes et séparateurs, dérivés neutres | Blanc bleuté / gris clair | `#F3F7FC`, `#DEE6F0` |

Exception fonctionnelle : la marque **WhatsApp garde son vert officiel** pour rester identifiable. Les états hover, menus PC, tablette et mobile, réservations, pied de page et contrôle cookies doivent respecter cette palette. Le CSS de thème est ajouté après les règles historiques pour éviter de modifier la mise en page, le centrage du logo et les composants fonctionnels.

## Structure et UX
- Entête avec logo approuvé, navigation concise et téléphones du groupement.
- Accueil : message taxi conventionné 78, CTA réservation/appel, quatre services, méthode de réservation et informations CPAM.
- Cards de services : icônes **SVG outline** de même épaisseur, coins cohérents, animations discrètes.
- Mobile : navigation accessible, CTA fixes en bas, aucune largeur horizontale supplémentaire.
- Footer : logo sur plaquette blanche, informations de contact et mentions légales.

## Hiérarchie géographique SEO
1. **Yvelines 78** — région prioritaire
2. **Mantes-la-Jolie**, **Les Mureaux**, **vallée de la Seine**, communes de l'A13 dans le 78
3. **Vernon / Eure (27)** — secteur complémentaire et page locale disponible, pas une ville principale du bandeau d'accueil

## Contacts confirmés sur le site officiel
- 06 19 95 97 34
- 06 01 22 58 22 (également WhatsApp)
- taxidirect27@gmail.com

## Tests déjà effectués
- 15 pages : titres, descriptions, H1 uniques par page, logo et deux numéros présents
- Syntaxe JavaScript validée par compilation locale
- Fichier image : identité binaire contrôlée par CRC32/Adler32
- Cloudflare Pages : déploiement en succès
- Navigation mobile 390 px : logo chargé, largeur du document égale à 390 px (aucun débordement horizontal)

## À vérifier avant transfert sur le domaine officiel
- Réservation serveur actuelle non migrée : le lien vers la réservation officielle reste disponible. Le formulaire de la preview génère un courriel et n'enregistre pas de commande.
- Photos externes actuellement servies depuis le site en production à transférer avant migration.
- Mentions légales complètes, SIRET, directeur de publication, données et politique de confidentialité à compléter après vérification.
- Performance chiffrée Lighthouse et Core Web Vitals sur mobiles réels non encore auditées.
- Prévoir sauvegarde, redirections 301, canoniques, sitemap, Google Search Console et Google Business Profile.
- La preview **pages.dev** est volontairement non indexée pour ne pas entrer en compétition avec le domaine public.
- Le top 1 Google n'est pas garanti et dépend aussi du référencement local, de la concurrence et des avis vérifiés.
