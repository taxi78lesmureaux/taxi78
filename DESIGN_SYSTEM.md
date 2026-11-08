# TaxiDirect 78 — Charte graphique et contrôle qualité

## Identité retenue
La marque affichée est **TaxiDirect 78**. Le logo horizontal validé comprend : monogramme TD, route stylisée, voiture avec une enseigne **TAXI posée sur son toit**, nom TaxiDirect 78 et signature « Taxi conventionné CPAM dans les Yvelines ». Fond blanc.

Le site utilise l'image validée, optimisée en **AVIF 420 × 140, 5 519 octets**, servie directement par Cloudflare à l'adresse `/brand-logo.avif`. Le fichier original existe dans les ressources de cette conversation. Le favicon SVG est une réduction stylistique TD.

## Palette officielle : trois couleurs + blanc
| Usage | Nom | Hex |
|---|---|---|
| Structure, menu, titres | Bleu nuit | `#0B1F33` |
| Pictogrammes, étapes, éléments actifs | Turquoise | `#14B8A6` |
| Réservation principale, signature du logo | Doré | `#E7B96A` |
| Fond principal, contraste | Blanc | `#FFFFFF` |

Les variations de luminosité dérivent de ces couleurs ; ne pas introduire d'autre couleur de marque. Éviter les dégradés multicolores, le bleu électrique et les boutons criards. Le doré est réservé aux accents, appels à l'action et zones importantes.

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
