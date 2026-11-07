const site=(function makeSite() {
  const name="TaxiDirect", tel="06 19 95 97 34", phone="tel:+33619959734", tel2="06 01 22 58 22", phone2="tel:+33601225822", whatsapp="https://wa.me/33601225822?text=Bonjour%20TaxiDirect%2C%20je%20souhaite%20organiser%20un%20trajet.", email="taxidirect27@gmail.com", official="https://www.taxidirect78conventionne.fr";
  const ameli="https://www.ameli.fr/assure/remboursements/rembourse/frais-transport";
  const cpam="https://www.ameli.fr/taxi-conventionne/exercice-professionnel/prise-charge-transport/taux-remboursement";
  const accord="https://www.ameli.fr/taxi-conventionne/exercice-professionnel/prise-charge-transport/demande-accord-prealable";
  const photo="https://www.taxidirect78conventionne.fr/assets/optimized/hero-940.v1.webp";
  const driverPhoto="https://www.taxidirect78conventionne.fr/assets/optimized/driver-passenger-995.v1.webp";
  const meterPhoto="https://www.taxidirect78conventionne.fr/assets/optimized/taximeter-995.v1.webp";
  const cardPhoto="https://www.taxidirect78conventionne.fr/assets/optimized/driver-card-995.v1.webp";
  const pages=[
  [
    "/",
    "Taxi conventionné 78 et 27 : Mantes, Les Mureaux, Vernon | TaxiDirect",
    "TaxiDirect, groupement de taxis conventionnés CPAM dans les Yvelines 78 et l'Eure 27. Mantes-la-Jolie, Les Mureaux, Vernon et axe A13. Réservez votre trajet."
  ],
  [
    "/taxi-conventionne-cpam/",
    "Taxi conventionné CPAM 78 et 27 | TaxiDirect",
    "Taxi conventionné CPAM dans les Yvelines et l'Eure. Transport assis sur prescription, bon de transport et démarches de prise en charge."
  ],
  [
    "/transport-medical/",
    "Transport médical taxi conventionné 78–27 | TaxiDirect",
    "Consultations, dialyse, radiothérapie, hospitalisations : trajets médicaux prescrits vers les centres de soins et hôpitaux parisiens."
  ],
  [
    "/remboursement-taxi-cpam/",
    "Remboursement taxi conventionné CPAM 2026 | TaxiDirect",
    "Prise en charge 55 % ou 100 % selon vos droits, prescription, tiers payant et transport partagé : le guide taxi CPAM."
  ],
  [
    "/taxi-aeroport-gare/",
    "Taxi gares Paris, Roissy CDG, Orly | TaxiDirect 78–27",
    "Gares parisiennes, aéroports Orly et Roissy-CDG depuis Mantes, Les Mureaux, Vernon et l'axe A13 : contactez TaxiDirect."
  ],
  [
    "/taxi-les-mureaux/",
    "Taxi conventionné Les Mureaux 78130 | TaxiDirect",
    "Taxi conventionné CPAM aux Mureaux 78130. Trajets vers CHIMM, centres de soins et hôpitaux parisiens."
  ],
  [
    "/taxi-mantes-la-jolie/",
    "Taxi conventionné Mantes-la-Jolie 78200 | TaxiDirect",
    "Taxi conventionné à Mantes-la-Jolie 78200 : hôpital François-Quesnay, transports médicaux et gares."
  ],
  [
    "/taxi-vernon/",
    "Taxi conventionné Vernon 27200 (Eure) | TaxiDirect",
    "Taxi conventionné CPAM à Vernon 27200, transport médical vers Paris et soins en Normandie. TaxiDirect dans l'Eure."
  ],
  [
    "/zones-desservies/",
    "Zones TaxiDirect Yvelines 78 & Eure 27 | Axe A13",
    "Communes desservies : Mantes, Les Mureaux, Vernon, Limay, Aubergenville, Mantes-la-Ville, Saint-Marcel, vallée de la Seine."
  ],
  [
    "/notre-groupement/",
    "TaxiDirect : artisans taxis conventionnés 78 et 27",
    "TaxiDirect, groupement d'artisans taxis conventionnés CPAM : services, véhicules, réglementations et secteurs."
  ],
  [
    "/guide-bon-de-transport/",
    "Bon de transport CPAM et taxi conventionné | TaxiDirect",
    "Prescription, carte Vitale, accord préalable, démarches : préparer votre transport médical conventionné."
  ],
  [
    "/faq-taxi-conventionne/",
    "FAQ taxi conventionné CPAM 78 et 27 | TaxiDirect",
    "Questions sur les transports taxi CPAM : ALD, dialyse, chimiothérapie, remboursement, bon de transport et réservation."
  ],
  [
    "/reservation/",
    "Réserver un taxi conventionné 78–27 | TaxiDirect",
    "TaxiDirect : réservation par téléphone au 06 19 95 97 34 et 06 01 22 58 22, WhatsApp et demande de trajet."
  ],
  [
    "/mentions-legales/",
    "Mentions légales | TaxiDirect",
    "Informations légales et éditoriales de TaxiDirect."
  ],
  [
    "/confidentialite/",
    "Confidentialité | TaxiDirect",
    "Politique de confidentialité et protection des données de TaxiDirect."
  ]
];
  const locations={
  "/taxi-les-mureaux/": [
    "Les Mureaux",
    "78130",
    "Centre hospitalier intercommunal de Meulan–Les Mureaux",
    "Meulan-en-Yvelines, Verneuil-sur-Seine, Aubergenville et Épône",
    "la vallée de la Seine"
  ],
  "/taxi-mantes-la-jolie/": [
    "Mantes-la-Jolie",
    "78200",
    "Centre hospitalier François-Quesnay",
    "Mantes-la-Ville, Limay, Magnanville, Buchelay et Rosny-sur-Seine",
    "le Mantois"
  ],
  "/taxi-vernon/": [
    "Vernon",
    "27200",
    "Centre hospitalier Eure-Seine – site de Vernon",
    "Saint-Marcel, Gasny, Vernonnet, Port-Mort et Tilly",
    "la vallée de la Seine dans l'Eure (27)"
  ]
};
  const questions=[
  [
    "Qu'est-ce qu'un taxi conventionné CPAM ?",
    "Un taxi conventionné a signé une convention avec l'Assurance Maladie. Il peut effectuer des transports assis médicalement prescrits pouvant être pris en charge sous conditions."
  ],
  [
    "Faut-il un bon de transport ?",
    "Pour une prise en charge, une prescription médicale établie avant le trajet est généralement requise. Certaines convocations peuvent en tenir lieu."
  ],
  [
    "Les séances de dialyse ou de radiothérapie sont-elles prises en charge ?",
    "Ces traitements peuvent être concernés par la prise en charge sous réserve des conditions médicales, d'une prescription et des droits de l'assuré."
  ],
  [
    "Une ALD ouvre-t-elle automatiquement droit à 100 % ?",
    "Non. Il faut que le déplacement soit lié à une ALD exonérante et que les critères médicaux de transport ainsi que les conditions réglementaires soient remplis."
  ],
  [
    "Quel est le remboursement d'un taxi conventionné ?",
    "La prise en charge est en règle générale de 55 % de la base conventionnelle. Elle peut être de 100 % dans certains cas. Une franchise peut s'appliquer."
  ],
  [
    "Le tiers payant supprime-t-il toujours l'avance de frais ?",
    "Non. Cela dépend de vos droits, des justificatifs et des règles applicables. Le refus d'un transport partagé proposé peut entraîner la perte du tiers payant dans certains cas."
  ],
  [
    "Quels documents dois-je présenter ?",
    "La prescription médicale ou convocation recevable, votre carte Vitale à jour, les justificatifs de droits et l'accord préalable s'il est nécessaire."
  ],
  [
    "Peut-on réserver un aller-retour ?",
    "Oui, précisez les horaires souhaités. Votre demande sera confirmée selon la disponibilité des chauffeurs."
  ],
  [
    "Quelles communes sont desservies ?",
    "TaxiDirect intervient principalement à Mantes-la-Jolie, aux Mureaux, à Vernon et dans des communes de la vallée de la Seine le long de l'A13."
  ],
  [
    "Quels véhicules sont proposés ?",
    "Le site officiel présente taxi conventionné, taxi classique, van et berline prestige, sous réserve de disponibilité."
  ],
  [
    "Faites-vous les gares et aéroports ?",
    "TaxiDirect indique assurer des trajets vers les gares parisiennes et les aéroports Roissy-CDG et Orly. Contactez le groupement pour confirmer votre trajet."
  ]
];
  const css=String.raw`
  :root{--navy:#0c192c;--navy2:#17314c;--ink:#15253a;--muted:#657587;--paper:#f7f9fa;--line:#e0e7eb;--gold:#ebc58c;--teal:#137b78}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font:15px/1.7 "DM Sans",system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,p{margin-top:0}h1,h2,h3{line-height:1.16}a{text-decoration:none;color:inherit}button,input,select{font:inherit}button{cursor:pointer}.wrap{width:min(1190px,calc(100% - 48px));margin:auto}.skip{position:absolute;top:-100px;background:#fff;padding:12px;z-index:99}.skip:focus{top:0}.topstrip{background:#081422;color:#afc4d3;font-size:11px;letter-spacing:.03em}.topstrip .wrap{display:flex;align-items:center;justify-content:space-between;padding:8px 0}.topstrip b{color:#ebce9b}.header{background:#fff;position:sticky;top:0;z-index:40;border-bottom:1px solid #e4e9ec;box-shadow:0 2px 15px #08142208}.navbar{min-height:81px;display:flex;align-items:center;gap:24px}.logo{display:flex;align-items:center;gap:12px;font:900 20px/1 "Manrope",sans-serif;letter-spacing:-.065em;white-space:nowrap}.logo-icon{width:44px;height:44px;display:grid;place-items:center;background:#10253b;color:#eac688;border-radius:12px}.logo-icon svg{width:35px;height:35px}.logo em{font-style:normal;color:#ad8144}.logo small{display:block;letter-spacing:.2em;font-size:9px;font-weight:800;color:#708092;margin-top:6px}.nav{margin-left:auto;display:flex;align-items:center;gap:22px}.nav a{font-size:12px;font-weight:800;color:#405569}.nav a:hover{color:var(--teal)}.headcall{border:1px solid var(--line);border-radius:100px;padding:11px 15px;font-size:12px;font-weight:900;white-space:nowrap}.mobile-nav{display:none}.hero{background:radial-gradient(circle at 77% 35%,#2d4f61 0,transparent 50%),linear-gradient(127deg,#081628,#142d45);color:#fff;position:relative;overflow:hidden}.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:65px;min-height:610px;padding:62px 0}.kicker,.eyebrow{display:inline-block;font-size:11px;font-weight:900;letter-spacing:.19em;text-transform:uppercase;color:#b68b50;margin-bottom:18px}.hero .kicker,.dark .eyebrow{color:#eac68b}.hero h1,.innerhero h1{font-family:"Manrope",sans-serif;font-weight:800;letter-spacing:-.068em;line-height:1.08}.hero h1{font-size:clamp(45px,5.3vw,73px);max-width:650px;margin:0 0 27px}.hero h1 em{font-style:normal;color:#f2ce96}.hero p{max-width:555px;color:#b7c9d5;font-size:16px;line-height:1.85;margin-bottom:30px}.actions{display:flex;gap:12px;flex-wrap:wrap}.btn{min-height:51px;padding:13px 21px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;gap:14px;font-size:13px;font-weight:900;border:1px solid transparent;transition:transform .2s}.btn:hover{transform:translateY(-2px)}.btn.primary{color:#182c3e;background:var(--gold)}.btn.primary:hover{background:#ffe0b1}.btn.outline{color:white;border-color:#657a8a;background:#ffffff08}.btn.darkbtn{background:#102b42;color:white}.btn.lightbtn{background:white;color:#122b40}.hero-trust{display:flex;flex-wrap:wrap;gap:18px;margin-top:35px;font-size:12px;color:#d0dde5}.hero-trust span:before{content:"✓";color:#e5c487;margin-right:8px}.hero-picture{position:relative;height:486px;min-width:0}.hero-img{position:absolute;inset:0 10px 18px 0;border-radius:180px 180px 140px 140px;overflow:hidden;background:linear-gradient(160deg,#48717c,#0a2033);border:1px solid #70879788;box-shadow:0 30px 55px #0004}.hero-img img{width:100%;height:100%;object-fit:cover;filter:brightness(.78) contrast(1.05)}.hero-img:after{content:"";position:absolute;inset:40% 0 0;background:linear-gradient(0deg,#071320ca,transparent)}.picture-label{position:absolute;left:28px;right:38px;bottom:39px;background:#081827c9;backdrop-filter:blur(10px);color:#fff;border:1px solid #aab6c13a;padding:17px;border-radius:15px;z-index:2}.picture-label b{display:block;font-size:15px}.picture-label small{font-size:11px;color:#b9c7d0}.medallion{position:absolute;right:-3px;top:34px;width:106px;height:106px;border-radius:50%;border:7px solid #13293f;background:#f0cc92;color:#10253c;display:flex;align-items:center;justify-content:center;flex-direction:column;z-index:4;transform:rotate(11deg);box-shadow:0 10px 30px #0004}.medallion strong{font-size:42px;line-height:1;font-weight:900;letter-spacing:-.1em}.medallion span{font-size:8px;font-weight:900;letter-spacing:.08em}.cityline{border-top:1px solid #ffffff22;display:flex;gap:22px;justify-content:space-between;flex-wrap:wrap;padding:21px 0;color:#a9bccb;font-size:10px;letter-spacing:.1em;font-weight:900}.section{padding:93px 0}.section-head{max-width:770px;margin-bottom:37px}.section h2,.strip h2{font:800 clamp(33px,4vw,49px)/1.17 "Manrope",sans-serif;letter-spacing:-.055em;margin:0 0 17px}.serif{font-family:Georgia,serif;font-style:italic;color:#b28b53;font-weight:400;letter-spacing:-.04em}.section-head p,.section p,.inner-content p{color:var(--muted);line-height:1.85}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:19px}.card{display:flex;flex-direction:column;background:white;min-height:245px;border:1px solid var(--line);border-radius:17px;padding:30px;transition:transform .2s,box-shadow .2s}.card:hover{transform:translateY(-5px);box-shadow:0 20px 45px #102b4112}.card-icon{width:55px;height:55px;background:#e3f2f0;border-radius:13px;color:#197e79;display:grid;place-items:center;font-size:27px;font-weight:900}.card h3{font-size:21px;letter-spacing:-.04em;margin:25px 0 12px}.card p{font-size:13px;margin:0}.card-link{margin-top:auto;padding-top:20px;font-size:12px;color:#107e7a;font-weight:900}.split{display:grid;grid-template-columns:.95fr 1.05fr;gap:9%;align-items:center}.darkpanel{height:430px;padding:34px;border-radius:22px;color:#fff;background:radial-gradient(circle at 67% 40%,#2f6370,#112d41 55%,#0b2034);display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}.darkpanel:before,.darkpanel:after{content:"";position:absolute;border:1px solid #b3d9d72b;border-radius:50%;width:400px;height:400px;top:30px;left:110px}.darkpanel:after{width:270px;height:270px;top:95px;left:175px}.darkpanel .num{font-weight:900;color:#f0d09b;font-size:29px;position:relative;z-index:1}.darkpanel .med-icon{font-size:70px;text-align:center;color:#efcb95;position:relative;z-index:1}.darkpanel h3{font-size:25px;max-width:340px;position:relative;z-index:1;letter-spacing:-.04em}.split-content h2{font-size:clamp(32px,3.6vw,46px)}.checklist{list-style:none;padding:0;margin:25px 0}.checklist li{padding:10px 0;display:flex;gap:11px;align-items:flex-start;font-size:14px;color:#526578}.checklist li:before{content:"✓";border-radius:50%;background:#d9eee9;color:#17867b;font-weight:900;padding:0 5px}.pale{background:#edf3f3}.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}.step{border-top:2px solid #c8d8da;padding:25px 8px}.step .number{color:#9aafb4;font-size:11px;font-weight:900;letter-spacing:.16em}.step .emoji{display:block;font-size:30px;margin:21px 0}.step h3{font-size:21px;letter-spacing:-.04em}.step p{font-size:13px}.dark{background:#0d2337;color:white}.dark h2{color:white}.dark p{color:#b4c7d3}.area-layout{display:grid;grid-template-columns:1fr 1fr;gap:8%;align-items:center}.city-links{display:flex;flex-direction:column;margin:25px 0}.city-links a{border-bottom:1px solid #ffffff33;padding:16px 0;font-weight:800;display:flex;justify-content:space-between;gap:20px}.city-links a span{font-size:12px;color:#edcb94}.city-links a:hover{color:#f2d4a8}.map-art{height:420px;border-radius:22px;background:radial-gradient(circle at center,#2e6670,#133e4c 55%,#102c40);position:relative;overflow:hidden;display:grid;place-items:center;border:1px solid #60989a88}.map-art:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#ffffff0c 1px,transparent 1px),linear-gradient(90deg,#ffffff0c 1px,transparent 1px);background-size:42px 42px;transform:rotate(15deg) scale(1.5)}.map-art .big78{position:relative;color:#efcf99;font-size:132px;letter-spacing:-.14em;font-weight:900;line-height:1}.map-art small{position:absolute;top:65%;color:#d7e5e7;font-size:11px;letter-spacing:.3em;font-weight:900}.map-art .map-dot{position:absolute;border:4px solid #edc993;border-radius:100%;width:18px;height:18px;box-shadow:0 0 0 8px #edc99330}.map-art .map-dot.one{top:18%;left:23%}.map-art .map-dot.two{right:17%;bottom:23%}.fact{border:1px solid #deebeb;border-radius:19px;background:#fff;padding:35px}.fact strong{font-size:25px;display:block;line-height:1.2;margin-bottom:13px}.fact p{font-size:14px}.fact a{font-size:13px;font-weight:900;color:#127d79}.faqlist{border-top:1px solid #dce4e8}.faqitem{border-bottom:1px solid #dce4e8}.faqitem summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:15px;padding:20px 0;font-size:15px;font-weight:800;line-height:1.45}.faqitem summary::-webkit-details-marker{display:none}.faqitem summary:after{content:"+";border:1px solid #cedddf;border-radius:50%;width:29px;height:29px;flex:0 0 29px;text-align:center;font-size:21px;color:#0e7671;line-height:26px;font-weight:400}.faqitem[open] summary:after{content:"−"}.faqitem p{padding:0 35px 18px 0;font-size:14px;margin:0}.faqgrid{display:grid;grid-template-columns:.75fr 1.25fr;gap:9%}.strip{padding:65px 0;background:#edcc98}.strip-grid{display:flex;justify-content:space-between;align-items:center;gap:55px}.strip p{font-size:14px;color:#564a3b;max-width:640px;margin:0}.strip .btns{display:flex;flex-direction:column;gap:10px;min-width:215px}.footer{background:#081727;color:#b1c3d0;padding:70px 0 30px}.footer .logo{color:white}.footer .logo em{color:#efcb95}.foot-top{display:flex;justify-content:space-between;gap:45px;border-bottom:1px solid #31475b;padding-bottom:34px}.foot-top p{max-width:420px;font-size:13px;color:#a8bfca}.foot-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;padding:40px 0}.foot-cols>div{display:flex;flex-direction:column;gap:12px}.foot-cols h3{color:#fff;font-size:14px;margin-bottom:5px}.foot-cols a{font-size:13px}.foot-cols a:hover{color:#f1d0a0}.foot-bottom{border-top:1px solid #26394d;display:flex;justify-content:space-between;gap:20px;padding-top:25px;font-size:12px}.foot-bottom div{display:flex;gap:16px}.foot-disclaimer{font-size:10px;margin:17px 0 0;color:#859aaa}.bottom-mobile{display:none}.innerhero{background:radial-gradient(circle at 92% 30%,#32566c,transparent 42%),linear-gradient(130deg,#0b192c,#132c43);color:white;padding:65px 0 75px}.crumb{font-size:12px;color:#9cbdcd;margin-bottom:42px}.crumb a:hover{color:white}.innerhero .kicker{color:#e8c692}.innerhero h1{font-size:clamp(40px,5vw,63px);max-width:850px;margin-bottom:23px}.innerhero p{color:#c0d0dc;font-size:16px;max-width:740px}.innerhero .actions{margin-top:24px}.inner-layout{display:grid;grid-template-columns:1fr 290px;align-items:start;gap:9%}.inner-content h2{font:800 clamp(27px,2.8vw,34px)/1.2 "Manrope",sans-serif;letter-spacing:-.05em;margin:33px 0 16px}.inner-content h2:first-child{margin-top:0}.inner-content p{font-size:15px}.inner-content a,.article-sources a{color:#117c77;text-decoration:underline;text-underline-offset:3px}.mini-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:30px 0}.mini{background:#eaf2f1;border-radius:12px;padding:21px}.mini b{display:block;font-size:13px;color:#0c7974;margin-bottom:18px}.mini h3{font-size:16px;margin:0 0 9px}.mini p{font-size:12px;margin:0;line-height:1.6}.side{background:white;border:1px solid #dce7ea;border-radius:17px;padding:29px;position:sticky;top:104px}.side h3{font-size:22px;letter-spacing:-.045em}.side p{font-size:13px}.side a{color:#107b77;font-size:15px;font-weight:900}.notice{border-left:3px solid #197c78;background:#eaf2f1;border-radius:0 11px 11px 0;padding:18px 20px;color:#49677a;font-size:13px;margin:27px 0}.article-sources{margin-top:28px;padding-top:18px;border-top:1px solid #e3e8ea;color:#728194;font-size:12px}.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin:26px 0}.stat{padding:22px;background:#e3f1ed;border-radius:12px}.stat strong{font-size:42px;color:#0e7773;display:block}.stat span{color:#537166;font-size:12px}.book-layout{display:grid;grid-template-columns:1.2fr .65fr;gap:9%}.book h2{font-size:31px;letter-spacing:-.05em}.book p{color:var(--muted)}.book form{margin-top:25px}.fields{display:grid;grid-template-columns:1fr 1fr;gap:15px}.book label{display:flex;flex-direction:column;gap:7px;margin-bottom:17px;font-size:12px;font-weight:900}.book input:not([type=checkbox]),.book select{width:100%;border:1px solid #c6d2db;border-radius:9px;background:white;padding:13px 14px;outline:none;color:var(--ink)}.book input:focus,.book select:focus{border-color:#147f79;box-shadow:0 0 0 3px #138b7e22}.book .consent{display:flex;flex-direction:row;font-weight:500;color:#617184}.book .consent input{margin-top:5px}.book .note{font-size:12px}.contact-card{background:#112b43;color:white;padding:30px;border-radius:17px;position:sticky;top:104px}.contact-card h3{font-size:27px;letter-spacing:-.045em}.contact-card a{display:block;color:#f4d39d;font-weight:900;font-size:21px;margin:20px 0 8px}.contact-card p{font-size:13px;color:#bbcdda}.readable{max-width:760px}.readable h2{font-size:29px}.readable p{color:var(--muted)}@media(max-width:1070px){.nav{gap:12px}.nav a{font-size:11px}.headcall{font-size:11px;padding:9px}.hero-grid{gap:22px}.hero h1{font-size:59px}}@media(max-width:830px){.nav,.headcall{display:none}.navbar{min-height:70px}.mobile-nav{display:block;margin-left:auto;position:relative}.mobile-nav summary{list-style:none;cursor:pointer;border:1px solid #d9e2e7;border-radius:9px;padding:9px 13px;font-weight:900;font-size:21px}.mobile-nav summary::-webkit-details-marker{display:none}.mobile-nav nav{position:absolute;right:0;top:57px;width:min(330px,calc(100vw - 35px));background:white;border:1px solid #d9e2e7;box-shadow:0 14px 30px #0b233422;border-radius:13px;padding:13px}.mobile-nav nav a{display:block;padding:11px 9px;border-bottom:1px solid #e7eeef;font-size:14px;font-weight:700}.hero-grid{grid-template-columns:1fr;gap:20px;padding:66px 0 20px}.hero-picture{height:455px;width:min(640px,100%);margin:auto}.split,.area-layout,.faqgrid{grid-template-columns:1fr;gap:38px}.darkpanel{height:350px}.map-art{max-width:650px;width:100%}.inner-layout,.book-layout{grid-template-columns:1fr;gap:25px}.side,.contact-card{position:static}.bottom-mobile{position:fixed;display:flex;gap:10px;bottom:0;left:0;right:0;background:#fff;padding:10px 16px calc(10px + env(safe-area-inset-bottom));border-top:1px solid #dae3e6;z-index:50}.bottom-mobile a{flex:1;text-align:center;background:#112d43;color:white;font-size:12px;font-weight:900;padding:13px 5px;border-radius:8px}.bottom-mobile a:last-child{background:#ebc68e;color:#12263b}.footer{padding-bottom:95px}}@media(max-width:620px){.wrap{width:calc(100% - 34px)}.topstrip .hide{display:none}.hero h1{font-size:clamp(41px,10vw,55px)}.hero p{font-size:14px}.hero-grid{padding:53px 0 5px}.hero-picture{height:330px}.hero-img{border-radius:100px 100px 110px 110px}.medallion{width:85px;height:85px}.medallion strong{font-size:32px}.medallion span{font-size:7px}.picture-label{left:15px;right:25px;bottom:24px;padding:10px 15px}.cityline{justify-content:flex-start;font-size:9px;gap:10px 15px}.section{padding:65px 0}.cards,.steps,.mini-grid,.fields,.stat-grid{grid-template-columns:1fr}.card{min-height:215px;padding:25px}.darkpanel{height:310px}.map-art{height:315px}.map-art .big78{font-size:100px}.strip{padding:50px 0}.strip-grid{flex-direction:column;align-items:stretch;gap:23px}.strip .btns{flex-direction:row;flex-wrap:wrap;min-width:0}.strip .btns a{flex:1}.foot-top,.foot-bottom{flex-direction:column}.foot-cols{grid-template-columns:1fr 1fr;gap:30px}.foot-cols>div:last-child{grid-column:1/-1}.innerhero{padding:38px 0 56px}.innerhero h1{font-size:clamp(36px,8vw,48px)}.crumb{margin-bottom:29px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*:before,*:after{transition:none!important;animation:none!important}}

/* TAXIDIRECT STUDIO 2026 — premium lightweight design system */
:root{--navy:#0a1928;--navy2:#152f43;--ink:#112437;--muted:#607283;--paper:#f7f8f7;--line:#dee6e6;--gold:#f1c77f;--teal:#277b74}
body{font:15px/1.68 system-ui,-apple-system,"Segoe UI",sans-serif;background:#f9faf9}
h1,h2,h3{font-family:system-ui,-apple-system,"Segoe UI",sans-serif}
.section h2,.strip h2{font-weight:850;letter-spacing:-.065em}
.wrap{width:min(1210px,calc(100% - 56px))}
.eyebrow,.kicker{font-size:11px;letter-spacing:.2em;font-weight:850}
.logo{font-family:system-ui,-apple-system,sans-serif;letter-spacing:-.07em;font-size:21px}
.logo-icon{border-radius:13px 6px 13px 6px;background:#0d2639}
.logo small{font-size:8px;letter-spacing:.16em;font-weight:900}
.nav{gap:20px}
.nav a{font-size:11px;text-transform:uppercase;letter-spacing:.04em}
.phone-stack{display:flex;flex-direction:column;align-items:flex-end;gap:1px}
.phone-stack .headcall{background:#0c2335;color:#fff;border:none;padding:11px 14px;font-size:12px;box-shadow:0 5px 15px #0d273512}
.phone-stack .headcall:hover{background:#19435a}
.secondphone{font-size:12px;font-weight:850;letter-spacing:.02em;color:#a07436}
.topstrip{letter-spacing:.07em}
.topstrip .wrap{padding:9px 0}
.header{box-shadow:none}
.header .navbar{min-height:87px}
.btn{font-size:13px;font-weight:850;letter-spacing:.005em;min-height:54px;border-radius:11px 11px 11px 3px}
.btn.primary{background:#f1c77f;color:#0d2332;box-shadow:0 10px 26px #edc58026}
.btn.outline{background:transparent;border:1px solid #6b8795;color:white}
.btn.darkbtn{background:#123147;color:#fff}
.btn:hover{transform:translateY(-2px)}
.hero-premium{background:radial-gradient(ellipse at 80% 55%,#234d5e44,transparent 55%),linear-gradient(115deg,#071725 0%,#102a3a 100%);isolation:isolate;min-height:660px}
.hero-premium::before{content:"";position:absolute;inset:0;background-image:linear-gradient(#fff1 1px,transparent 1px),linear-gradient(90deg,#fff1 1px,transparent 1px);background-size:120px 120px;opacity:.12;pointer-events:none}
.hero-premium::after{content:"";position:absolute;bottom:-150px;right:-180px;width:520px;height:520px;border:1px solid #d7c6a71f;border-radius:50%;pointer-events:none}
.hero-orbit{border:1px solid #f4e0bd16;position:absolute;border-radius:50%;pointer-events:none}
.orbit-one{width:790px;height:790px;top:-380px;left:-370px}
.orbit-two{width:1050px;height:1050px;bottom:-830px;left:4%}
.hero-new-grid{display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:4%;padding:78px 0 84px;min-height:620px}
.hero-new-content{z-index:3;position:relative}
.hero-eyebrow{display:inline-flex;align-items:center;gap:13px;color:#e6c79a;font-size:11px;letter-spacing:.19em;font-weight:900;margin-bottom:26px}
.hero-dot{width:8px;height:8px;border-radius:100%;background:var(--gold);box-shadow:0 0 0 5px #efc88928}
.hero-premium h1{font-size:clamp(48px,5vw,80px);line-height:1.07;letter-spacing:-.074em;max-width:750px;margin:0 0 28px;font-weight:900;font-family:system-ui,-apple-system,"Segoe UI",sans-serif}
.hero-highlight{color:var(--gold)}
.hero-font-outline{color:transparent;-webkit-text-stroke:1px #d4e0dfb5;text-shadow:none}
.hero-lead{max-width:580px;font-size:15px;line-height:1.88;color:#c1d1d9;margin:0 0 27px}
.hero-lead strong{color:#fff;font-weight:700}
.hero-new-actions{display:flex;gap:12px;flex-wrap:wrap;align-items:center}
.hero-new-actions .btn{min-height:56px}
.hero-meta{display:flex;gap:25px;flex-wrap:wrap;margin-top:37px;color:#bdcfda;font-size:12px}
.little-check{background:#efc88920;border:1px solid #efc88950;border-radius:50%;color:#f1c887;width:19px;height:19px;display:inline-grid;place-items:center;margin-right:7px;font-size:12px}
.hero-new-media{position:relative;min-height:495px;isolation:isolate}
.hero-photo-edge{position:absolute;inset:15px 0 10px 5%;background:#2f4b5b;overflow:hidden;border:1px solid #dde6e134;clip-path:polygon(12% 0,100% 0,100% 84%,86% 100%,0 100%,0 12%);box-shadow:0 30px 70px #0003}
.hero-photo-edge::after{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#0d1b2f33 0%,transparent 28%,#07142191 100%)}
.hero-photo-edge img{width:100%;height:100%;object-fit:cover;object-position:center;filter:brightness(.89) contrast(1.08)}
.hero-media-label{position:absolute;bottom:31px;left:-10px;background:#f4f6f3;color:#0a2535;min-width:250px;padding:23px 25px 22px;z-index:2;box-shadow:0 20px 35px #0003;clip-path:polygon(0 0,94% 0,100% 15%,100% 100%,0 100%)}
.hero-media-label .label-line{display:block;color:#7b8a8c;font-size:9px;font-weight:900;letter-spacing:.16em;margin-bottom:7px}
.hero-media-label strong{display:block;font-size:35px;letter-spacing:-.065em;line-height:1;font-weight:900}
.hero-media-label>span:last-child{display:flex;align-items:center;gap:12px;font-size:11px;font-weight:800;letter-spacing:.06em;margin-top:9px}
.hero-media-label>span i{width:24px;height:1px;background:#bea274}
.hero-round-stamp{position:absolute;top:-18px;right:-20px;z-index:4;width:125px;height:125px;background:#edc88e;color:#153348;border:9px solid #0e293c;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;transform:rotate(12deg);box-shadow:0 12px 25px #0003}
.hero-round-stamp b{font-size:47px;line-height:1;letter-spacing:-.09em}
.hero-round-stamp span{font-size:9px;font-weight:900;line-height:1.25;text-align:center;letter-spacing:.07em}
.hero-bottom-info{display:flex;align-items:center;justify-content:space-between;gap:15px;border-top:1px solid #91b1b62e;padding:22px 0;font-size:10px;font-weight:800;letter-spacing:.13em;color:#9bb4c0}
.hero-bottom-info a{color:#f2c98d;font-weight:900;white-space:nowrap}
.hero-bottom-info a span{margin-left:7px}
.service-overview{padding:100px 0 115px;background:#f9faf9}
.section-topline{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-bottom:20px;border-top:1px solid #d9e2e2;padding-top:18px}
.section-topline .eyebrow{margin:0}
.section-micro{color:#9aa9ae;font-size:10px;letter-spacing:.18em;font-weight:900}
.headline-flex{display:grid;grid-template-columns:1.05fr .65fr;gap:12%;align-items:end;margin-bottom:41px}
.headline-flex h2{font-size:clamp(34px,3.9vw,51px);margin:0}
.headline-flex p{max-width:430px;font-size:14px;line-height:1.8;margin:0 0 3px}
.services-modern{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.service-block{min-width:0;background:#fff;border:1px solid #e2e8e6;border-radius:15px 15px 15px 3px;min-height:335px;display:flex;flex-direction:column;padding:26px 24px 21px;position:relative;overflow:hidden;transition:transform .2s,box-shadow .2s,border-color .2s}
.service-block:hover{transform:translateY(-5px);box-shadow:0 15px 35px #12334a12;border-color:#acc9c6}
.service-special{background:linear-gradient(148deg,#134c54,#123349);color:white;border-color:#15525a}
.service-special::after{content:"";position:absolute;right:-63px;top:-53px;width:175px;height:175px;border-radius:50%;border:1px solid #e5b97977;box-shadow:0 0 0 25px #ffffff04,0 0 0 70px #ffffff03}
.service-index{font-size:10px;letter-spacing:.15em;font-weight:900;color:#77919a}
.service-special .service-index{color:#bcdbd3}
.service-emblem{display:grid;place-items:center;width:60px;height:60px;color:#0f726e;background:#e6f3ee;border-radius:17px 17px 17px 4px;font-size:31px;margin:31px 0 23px}
.service-special .service-emblem{background:#f0c98a;color:#163549}
.service-block h3{font-size:21px;letter-spacing:-.05em;line-height:1.19;margin:0 0 14px}
.service-block p{font-size:13px;color:#6f818d;line-height:1.66;margin-bottom:19px}
.service-special p{color:#d1e2e5}
.service-more{margin-top:auto;font-size:11px;font-weight:850;color:#137b75;letter-spacing:.03em}
.service-special .service-more{color:#efcb8e}
.experience-band{background:#eff3f2;padding:85px 0}
.experience-grid{display:grid;grid-template-columns:.89fr 1.11fr;gap:9%;align-items:center}
.experience-media{height:500px;position:relative;overflow:visible}
.experience-media>img{width:100%;height:100%;object-fit:cover;border-radius:4px 110px 4px 110px;filter:saturate(.87) contrast(1.05);box-shadow:0 25px 50px #15394d22}
.experience-sticker{position:absolute;bottom:26px;right:-32px;background:#ecc991;padding:23px 30px;color:#1a3143;transform:rotate(-6deg);box-shadow:0 12px 28px #102e3d24}
.experience-sticker span{font-size:9px;font-weight:900;letter-spacing:.16em;display:block;margin-bottom:8px}
.experience-sticker strong{font-size:35px;line-height:1.07;letter-spacing:-.055em}
.experience-copy h2{font-size:clamp(33px,3.7vw,49px)}
.experience-copy>p{font-size:14px;line-height:1.9;color:#5d7281}
.promise-list{margin:23px 0 25px}
.promise-list>div{display:grid;grid-template-columns:42px 1fr;gap:16px;border-top:1px solid #cfdbda;padding:18px 0 12px}
.promise-list>div>span{color:#1f7975;font-weight:900;font-size:12px}
.promise-list b{font-size:15px;color:#1a3345}
.promise-list p{margin:3px 0 0;font-size:13px;color:#617785}
.zone-section{padding:100px 0 105px;background:linear-gradient(115deg,#081b29,#112f40 85%)}
.zone-section .eyebrow{color:#e9c790}
.zone-section .section-topline{border-color:#45657788}
.zone-section .section-micro{color:#91aaba}
.zone-new-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:10%;align-items:center}
.zone-new-grid h2{font-size:clamp(34px,4vw,53px);color:#fff}
.zone-new-grid p{color:#b7c8d3;line-height:1.9;font-size:14px}
.zone-list{margin:28px 0 19px}
.zone-list a{border-top:1px solid #63828d50;display:flex;justify-content:space-between;gap:15px;padding:17px 3px;align-items:center;transition:padding .2s,color .2s}
.zone-list a:last-child{border-bottom:1px solid #63828d50}
.zone-list a:hover{padding-left:11px;color:#f4d5a5}
.zone-list a>span{display:flex;flex-direction:column;line-height:1.38;font-size:20px;font-weight:800;letter-spacing:-.035em}
.zone-list small{font-size:9px;color:#83a2b1;letter-spacing:.17em;font-weight:850;margin-bottom:5px}
.zone-list a>b{font-size:21px;color:#efce9a}
.zone-all{display:inline-flex;align-items:center;gap:16px;color:#f0cb90;font-weight:900;font-size:12px;margin-top:6px}
.route-visual{position:relative;overflow:hidden;height:485px;background:radial-gradient(circle at 60% 35%,#28616b,#0f3749 65%,#082738);border:1px solid #67949580;border-radius:120px 12px 120px 12px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-shadow:inset 0 0 0 18px #ffffff03}
.route-lines{position:absolute;inset:0;background-image:linear-gradient(#ffffff0a 1px,transparent 1px),linear-gradient(90deg,#ffffff0a 1px,transparent 1px);background-size:41px 41px;transform:rotate(-18deg) scale(1.4)}
.route-visual::after{content:"";width:80%;height:280px;border:1px dashed #edce9e50;border-radius:50%;position:absolute;transform:rotate(-31deg)}
.route-symbol{display:flex;position:relative;z-index:2;align-items:center;gap:18px;color:#edcf97;font-size:94px;letter-spacing:-.09em;font-weight:900;line-height:1}
.route-symbol small{font-size:35px;color:#c3d6d9;font-weight:400}
.route-small{position:relative;z-index:2;letter-spacing:.32em;color:#b8d8db;font-weight:900;font-size:12px;margin-bottom:26px}
.route-cities{position:relative;z-index:2;display:flex;gap:17px;color:#c4dce1;font-size:10px;letter-spacing:.1em;font-weight:850;margin-top:34px}
.route-cities span{border:1px solid #85b0af66;border-radius:30px;padding:9px 12px}
.route-ribbon{position:absolute;left:0;bottom:25px;right:0;text-align:center;font-weight:800;font-size:10px;letter-spacing:.12em;color:#88b0b5}
.medical-story{background:#fff;padding:100px 0}
.medical-layout{display:grid;grid-template-columns:1fr 1fr;gap:10%;align-items:center}
.medical-layout h2{font-size:clamp(33px,3.7vw,49px)}
.medical-layout p{font-size:14px;line-height:1.9}
.medical-tags{display:flex;gap:9px;flex-wrap:wrap;margin:24px 0 30px}
.medical-tags span{border:1px solid #cbdedb;border-radius:100px;background:#f6fbf9;padding:8px 13px;color:#315f62;font-size:11px;font-weight:800}
.medical-photo{height:440px;position:relative}
.medical-photo img{width:100%;height:100%;object-fit:cover;border-radius:120px 4px 4px 4px;filter:saturate(.88)}
.medical-note{position:absolute;left:-35px;bottom:-21px;background:#0e2d40;color:white;padding:21px 25px;max-width:300px;border-left:4px solid #efc78a}
.medical-note span{display:block;font-size:9px;letter-spacing:.17em;color:#f2c991;font-weight:900;margin-bottom:5px}
.medical-note strong{font-size:15px;line-height:1.4}
.how-section{padding:95px 0}
.how-section .section-head{max-width:900px}
.how-section .section-head>.eyebrow{display:none}
.how-flow{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:37px 0 27px}
.how-step{padding:28px 25px 22px;border:1px solid #d7e3e0;background:#fff;border-radius:16px 16px 16px 3px;position:relative}
.how-step>span{color:#1d837b;font-size:31px;letter-spacing:-.07em;font-weight:900}
.how-step h3{font-size:20px;margin:20px 0 11px}
.how-step p{font-size:13px;line-height:1.76;margin:0}
.reservation-actions{display:flex;gap:12px;flex-wrap:wrap}
.cpam-guide{background:#f9f9f6;padding:90px 0}
.cpam-grid{display:grid;grid-template-columns:1fr .95fr;gap:10%;align-items:center}
.cpam-guide h2{font-size:clamp(32px,3.5vw,45px)}
.cpam-guide p{font-size:14px}
.cpam-knowledge{background:#e7f1eb;border-radius:24px 24px 24px 4px;padding:35px;border:1px solid #d3e4dc}
.cpam-stats{display:grid;grid-template-columns:1fr 1fr;gap:17px}
.cpam-stats>div{border-bottom:1px solid #bacfc5;padding-bottom:15px}
.cpam-stats strong{font-size:60px;font-weight:900;color:#146f6c;letter-spacing:-.08em;line-height:1}
.cpam-stats strong small{font-size:27px}
.cpam-stats span{font-size:12px;font-weight:800;color:#50716b;display:block;margin-top:5px}
.cpam-knowledge p{font-size:12px;color:#61766e;margin:23px 0 14px}
.cpam-knowledge a{font-size:12px;font-weight:900;color:#11766d}
.faq-section{background:#fff}
.faq-section h2{font-size:clamp(32px,3.8vw,47px)}
.faqitem summary:hover{color:#067972}
.strip{background:#f1ca91;position:relative;overflow:hidden}
.strip::after{content:"";position:absolute;right:-110px;top:-110px;width:380px;height:380px;border:1px solid #12314733;border-radius:50%;pointer-events:none}
.strip-grid{position:relative;z-index:2}
.strip .btns{min-width:220px}
.foot-top .logo{color:white}
.foot-cols>div:last-child a:first-of-type,.foot-cols>div:last-child a:nth-of-type(2){font-weight:900;color:#f0ca8e}
.bottom-mobile a:nth-child(2){background:#218d65;color:#fff}
.bottom-mobile a:last-child{background:#ecc88e;color:#11273a}
.local-links{display:flex;gap:12px;flex-wrap:wrap;margin:20px 0 26px}
.local-links a{border:1px solid #c8dcd9;background:#eff7f4;color:#1b736c;padding:10px 13px;border-radius:8px;font-size:13px;font-weight:850;text-decoration:none!important}
.booking-direct{display:flex;gap:10px;flex-wrap:wrap;margin:20px 0 30px}
.booking-direct a{background:#edf4f2;color:#176f69;border-radius:9px;padding:12px 14px;font-size:12px;font-weight:800;text-decoration:none!important;border:1px solid #d3e6e0}
.real-photos{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin:25px 0}
.real-photos figure{margin:0}
.real-photos img{width:100%;height:175px;object-fit:cover;border-radius:12px}
.real-photos figcaption{font-size:11px;color:#7a8b94;margin-top:7px}
@media(max-width:1150px){
 .nav{gap:12px}.nav a{font-size:10px}.phone-stack .headcall{font-size:11px}
 .hero-new-grid{gap:25px}.hero-premium h1{font-size:60px}
 .hero-new-media{min-height:450px}
 .services-modern{gap:11px}.service-block{padding:23px 18px}
}
@media(max-width:950px){
 .nav,.phone-stack{display:none}
 .header .navbar{min-height:72px}
 .hero-new-grid{grid-template-columns:1fr;gap:35px;padding:67px 0 38px}
 .hero-new-content{max-width:730px}
 .hero-premium h1{font-size:clamp(48px,8vw,70px)}
 .hero-new-media{min-height:450px;width:min(700px,100%);margin:auto}
 .hero-photo-edge{inset:0 0 8px 0}
 .hero-round-stamp{right:0}
 .services-modern{grid-template-columns:repeat(2,1fr)}
 .service-block{min-height:305px}
 .experience-grid,.zone-new-grid,.medical-layout,.cpam-grid{grid-template-columns:1fr;gap:45px}
 .experience-media{width:min(700px,100%);height:420px;margin:auto}
 .experience-sticker{right:0}
 .route-visual{max-width:700px;width:100%;margin:auto}
 .medical-photo{width:min(700px,100%);margin:auto}
 .medical-note{left:5px}
 .hero-bottom-info{flex-wrap:wrap;justify-content:flex-start;gap:12px 22px}
 .headline-flex{grid-template-columns:1fr;gap:13px}
}
@media(max-width:650px){
 .wrap{width:calc(100% - 34px)}
 .hero-premium h1{font-size:clamp(43px,12vw,57px)}
 .hero-new-grid{padding:54px 0 25px}
 .hero-lead{font-size:14px;line-height:1.8}
 .hero-new-actions{align-items:stretch}
 .hero-new-actions .btn{flex:1;font-size:12px;padding:10px 13px}
 .hero-meta{font-size:11px;gap:12px}
 .hero-new-media{min-height:325px}
 .hero-photo-edge{inset:0 2px 10px 2px;clip-path:polygon(10% 0,100% 0,100% 83%,84% 100%,0 100%,0 10%)}
 .hero-media-label{left:-2px;bottom:20px;min-width:188px;padding:15px 18px}
 .hero-media-label strong{font-size:26px}
 .hero-media-label .label-line{font-size:7px}
 .hero-media-label>span:last-child{font-size:9px}
 .hero-round-stamp{width:86px;height:86px;border-width:6px;right:-5px;top:-10px}
 .hero-round-stamp b{font-size:31px}
 .hero-round-stamp span{font-size:6px}
 .hero-bottom-info{padding:16px 0;font-size:9px;gap:10px 18px}
 .hero-bottom-info a{width:100%}
 .service-overview{padding:75px 0}
 .services-modern{grid-template-columns:1fr 1fr;gap:9px}
 .service-block{padding:19px 14px;min-height:305px}
 .service-index{font-size:8px}
 .service-emblem{width:48px;height:48px;font-size:26px;margin:24px 0 18px}
 .service-block h3{font-size:18px}
 .service-block p{font-size:11px;line-height:1.5}
 .service-more{font-size:10px}
 .experience-band,.zone-section,.medical-story,.how-section,.cpam-guide{padding:67px 0}
 .experience-media{height:310px}
 .experience-media>img{border-radius:4px 80px 4px 80px}
 .experience-sticker{padding:14px 17px;right:0}
 .experience-sticker strong{font-size:25px}
 .route-visual{height:325px;border-radius:70px 12px 70px 12px}
 .route-symbol{font-size:69px}
 .route-symbol small{font-size:23px}
 .route-cities{gap:6px}
 .route-cities span{font-size:8px;padding:7px 8px}
 .route-ribbon{font-size:8px}
 .medical-photo{height:310px}
 .medical-note{max-width:210px;padding:13px 15px}
 .medical-note strong{font-size:12px}
 .how-flow{grid-template-columns:1fr;gap:10px}
 .how-step{padding:21px}
 .how-step h3{margin:7px 0}
 .cpam-knowledge{padding:23px}
 .cpam-stats strong{font-size:49px}
 .strip .btns{width:100%}
 .section-micro{display:none}
 .real-photos{grid-template-columns:1fr}
}
@media(max-width:390px){
 .services-modern{grid-template-columns:1fr}
 .service-block{min-height:235px}
 .hero-premium h1{font-size:43px}
 .hero-new-actions{flex-direction:column}
 .hero-new-actions .btn{width:100%}
}

  `;
  const button=(href,label,type="primary")=>`<a class="btn ${type}" href="${href}">${label} <span aria-hidden="true">↗</span></a>`;
  const logo=()=>`<a class="logo" href="/" aria-label="TaxiDirect accueil"><span class="logo-icon"><svg viewBox="0 0 42 42" aria-hidden="true"><path d="M5 33 18 8h6l13 25" stroke="#efcc94" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M21 12v23" stroke="#fff" stroke-dasharray="4 4" stroke-width="2"/></svg></span><span>TAXI<em>DIRECT</em><small>YVELINES 78 · EURE 27</small></span></a>`;
  const header=()=>`<a class="skip" href="#main">Aller au contenu</a><div class="topstrip"><div class="wrap"><span><b>●</b> GROUPEMENT DE TAXIS CONVENTIONNÉS CPAM · 78 & 27</span><span class="hide">Mantes-la-Jolie · Les Mureaux · Vernon · A13</span></div></div><header class="header"><div class="wrap navbar">${logo()}<nav class="nav" aria-label="Menu principal"><a href="/taxi-conventionne-cpam/">Taxi CPAM</a><a href="/transport-medical/">Transports médicaux</a><a href="/remboursement-taxi-cpam/">Remboursement</a><a href="/zones-desservies/">Nos secteurs</a><a href="/notre-groupement/">À propos</a></nav><div class="phone-stack"><a class="headcall" href="${phone}">☎ ${tel}</a><a class="secondphone" href="${phone2}">${tel2}</a></div><details class="mobile-nav"><summary aria-label="Ouvrir le menu">☰</summary><nav aria-label="Navigation mobile"><a href="/">Accueil</a><a href="/taxi-conventionne-cpam/">Taxi conventionné CPAM</a><a href="/transport-medical/">Transports médicaux</a><a href="/remboursement-taxi-cpam/">Remboursement</a><a href="/taxi-aeroport-gare/">Gares & aéroports</a><a href="/zones-desservies/">Zones 78 & 27</a><a href="/notre-groupement/">Le groupement</a><a href="/reservation/">Réservation</a><a href="${phone}">☎ ${tel}</a><a href="${phone2}">☎ ${tel2}</a><a href="${whatsapp}" target="_blank" rel="noopener noreferrer">Écrire via WhatsApp</a></nav></details></div></header>`;
  const footer=()=>`<footer class="footer"><div class="wrap"><div class="foot-top">${logo()}<p>TaxiDirect réunit des artisans taxis conventionnés CPAM des Yvelines (78) et de l'Eure (27). Transports médicaux, trajets privés, gares et aéroports sur réservation, le long de l'A13.</p></div><div class="foot-cols"><div><h3>Nos services</h3><a href="/taxi-conventionne-cpam/">Taxi conventionné CPAM</a><a href="/transport-medical/">Transport médical assis</a><a href="/taxi-aeroport-gare/">Gares & aéroports</a><a href="/remboursement-taxi-cpam/">Remboursement CPAM</a></div><div><h3>Nos secteurs</h3><a href="/taxi-mantes-la-jolie/">Mantes-la-Jolie (78)</a><a href="/taxi-les-mureaux/">Les Mureaux (78)</a><a href="/taxi-vernon/">Vernon (27)</a><a href="/zones-desservies/">Toutes les communes</a></div><div><h3>Contact & réservation</h3><a href="${phone}">☎ ${tel}</a><a href="${phone2}">☎ ${tel2}</a><a href="mailto:${email}">${email}</a><a href="${whatsapp}" target="_blank" rel="noopener noreferrer">◉ WhatsApp</a><a href="/reservation/">Préparer un trajet</a></div></div><div class="foot-bottom"><span>© 2026 TaxiDirect · Yvelines 78 & Eure 27</span><div><a href="/notre-groupement/">Notre groupement</a><a href="/mentions-legales/">Mentions légales</a><a href="/confidentialite/">Confidentialité</a></div></div><p class="foot-disclaimer">Taxi conventionné CPAM : transport assis distinct du VSL et de l'ambulance. Remboursement soumis à la prescription et aux droits de l'assuré. Toute demande de course reste à confirmer.</p></div></footer><div class="bottom-mobile"><a href="${phone}">☎ Appeler</a><a href="${whatsapp}" target="_blank" rel="noopener noreferrer">◉ WhatsApp</a><a href="/reservation/">↗ Réserver</a></div>`;
  const strip=()=>`<section class="strip"><div class="wrap strip-grid"><div><span class="eyebrow">CONTACT TAXIDIRECT</span><h2>Un trajet à organiser ?<br><span class="serif">On est à votre écoute.</span></h2><p>Un rendez-vous médical, une gare, un aéroport ? Dites-nous votre ville de départ, la destination et la date souhaitée.</p></div><div class="btns">${button(phone,"☎ "+tel,"darkbtn")}${button(whatsapp,"◉ WhatsApp","lightbtn")}${button("/reservation/","Préparer la demande","lightbtn")}</div></div></section>`;
  const intro=(ey,h,desc)=>`<div class="section-head"><span class="eyebrow">${ey}</span><h2>${h}</h2><p>${desc}</p></div>`;
  const card=(sym,h,p,url)=>`<a class="card" href="${url}"><span class="card-icon" aria-hidden="true">${sym}</span><h3>${h}</h3><p>${p}</p><span class="card-link">EN SAVOIR PLUS ↗</span></a>`;
  const faq=(n=questions.length)=>`<div class="faqlist">${questions.slice(0,n).map(([q,a])=>`<details class="faqitem"><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
  const sources=`<p class="article-sources">Informations officielles : <a target="_blank" rel="noopener noreferrer" href="${ameli}">ameli.fr — frais de transport</a> · <a target="_blank" rel="noopener noreferrer" href="${accord}">accord préalable</a>.</p>`;
  const urgency=`<div class="notice"><strong>Attention :</strong> le taxi conventionné est un transport assis et non un service d'urgence. En cas d'urgence médicale, appelez le <strong>15</strong> ou le <strong>112</strong>.</div>`;
  const info=(ey,h,desc,content,aside)=>`<section class="innerhero"><div class="wrap"><div class="crumb"><a href="/">Accueil</a> / ${ey}</div><span class="kicker">${ey}</span><h1>${h}</h1><p>${desc}</p><div class="actions">${button(phone,"☎ "+tel)}${button("/reservation/","Demander un trajet","outline")}</div></div></section><section class="section"><div class="wrap inner-layout"><article class="inner-content">${content}</article><aside class="side"><span class="eyebrow">NOUS CONTACTER</span><h3>${aside}</h3><p>Un trajet à organiser ? Indiquez le départ, la destination et votre date de rendez-vous.</p><a href="${phone}">☎ ${tel}</a></aside></div></section>${strip()}`;
  const mins=(items)=>`<div class="mini-grid">${items.map(([n,h,p])=>`<div class="mini"><b>${n}</b><h3>${h}</h3><p>${p}</p></div>`).join("")}</div>`;
  function homepage(){
    return `<section class="hero hero-premium" aria-label="TaxiDirect, taxi conventionné CPAM en Yvelines et dans l'Eure">
      <div class="hero-orbit orbit-one" aria-hidden="true"></div><div class="hero-orbit orbit-two" aria-hidden="true"></div>
      <div class="wrap hero-new-grid">
        <div class="hero-new-content">
          <span class="hero-eyebrow"><i class="hero-dot"></i> GROUPEMENT D'ARTISANS TAXIS · 78 & 27</span>
          <h1>Vos trajets<br><span class="hero-highlight">essentiels.</span><br><span class="hero-font-outline">Notre métier.</span></h1>
          <p class="hero-lead">Taxi conventionné CPAM dans les Yvelines et l'Eure. De <strong>Mantes-la-Jolie</strong> aux <strong>Mureaux</strong> et à <strong>Vernon</strong>, un groupement de chauffeurs pour les rendez-vous médicaux, les gares et les aéroports.</p>
          <div class="hero-new-actions">${button("/reservation/","Réserver un trajet","primary")}${button(phone,"☎ "+tel,"outline")}</div>
          <div class="hero-meta"><span><b class="little-check">✓</b> Taxi conventionné CPAM</span><span><b class="little-check">✓</b> Axe A13 & vallée de la Seine</span></div>
        </div>
        <div class="hero-new-media">
          <div class="hero-photo-edge"><img src="${photo}" alt="TaxiDirect : taxi en ville au crépuscule, visuel du site officiel" width="940" height="627" loading="eager" fetchpriority="high" decoding="async"></div>
          <div class="hero-media-label"><span class="label-line">LA MOBILITÉ EN CONFIANCE</span><strong>TaxiDirect.</strong><span>Yvelines 78 <i></i> Eure 27</span></div>
          <div class="hero-round-stamp"><b>78</b><span>YVELINES<br>+ EURE 27</span></div>
        </div>
      </div>
      <div class="hero-bottom-info wrap"><span>01 / MANTES-LA-JOLIE</span><span>02 / LES MUREAUX</span><span>03 / VERNON</span><a href="/zones-desservies/">TOUTES NOS COMMUNES <span aria-hidden="true">↗</span></a></div>
    </section>
    <section class="service-overview section" id="services"><div class="wrap">
      <div class="section-topline"><span class="eyebrow">01 — NOS SERVICES</span><span class="section-micro">UN DÉPLACEMENT, UNE SOLUTION</span></div>
      <div class="headline-flex"><h2>Bien plus qu'un trajet.<br><span class="serif">Votre sérénité.</span></h2><p>TaxiDirect propose quatre catégories de véhicules, pour vos soins, vos déplacements personnels ou vos voyages. Chaque demande est étudiée selon la disponibilité.</p></div>
      <div class="services-modern">
        <a href="/taxi-conventionne-cpam/" class="service-block service-special"><span class="service-index">01 / TRANSPORT MÉDICAL</span><div class="service-emblem">✚</div><h3>Taxi conventionné<br>CPAM</h3><p>Votre trajet médical prescrit dans le cadre de la convention avec l'Assurance Maladie.</p><span class="service-more">Découvrir le service ↗</span></a>
        <a href="/taxi-aeroport-gare/" class="service-block"><span class="service-index">02 / DÉPLACEMENTS</span><span class="service-emblem">↗</span><h3>Taxi<br>classique</h3><p>Gares, aéroports et rendez-vous personnels ou professionnels.</p><span class="service-more">En savoir plus ↗</span></a>
        <a href="/reservation/" class="service-block"><span class="service-index">03 / GROUPES</span><span class="service-emblem">▦</span><h3>Van</h3><p>Un véhicule adapté à la composition de votre groupe, selon disponibilité.</p><span class="service-more">Demander un trajet ↗</span></a>
        <a href="/reservation/" class="service-block"><span class="service-index">04 / CONFORT</span><span class="service-emblem">✦</span><h3>Berline<br>prestige</h3><p>Pour ceux qui souhaitent un déplacement soigné et confortable.</p><span class="service-more">Demander un trajet ↗</span></a>
      </div>
    </div></section>
    <section class="experience-band section"><div class="wrap experience-grid">
      <div class="experience-media"><img src="${driverPhoto}" alt="Chauffeur professionnel et passager à bord d'un véhicule TaxiDirect, photographie du site officiel" width="995" height="660" loading="lazy" decoding="async"><div class="experience-sticker"><span>NOTRE PRIORITÉ</span><strong>Votre<br>sérénité.</strong></div></div>
      <div class="experience-copy"><span class="eyebrow">02 — L'ESPRIT TAXIDIRECT</span><h2>Un savoir-faire.<br><span class="serif">Une présence locale.</span></h2><p>Des artisans taxis conventionnés CPAM, présents autour de Mantes-la-Jolie, des Mureaux et de Vernon, avec des itinéraires le long de l'A13 et vers les hôpitaux parisiens.</p><div class="promise-list"><div><span>01</span><div><b>Des professionnels du taxi</b><p>Chauffeurs expérimentés, réglementation taxi et taximètres en règle.</p></div></div><div><span>02</span><div><b>Des trajets organisés</b><p>Consultations, soins et hospitalisations, à l'aller comme au retour.</p></div></div><div><span>03</span><div><b>Un contact direct</b><p>Deux numéros de téléphone et WhatsApp pour préparer votre course.</p></div></div></div>${button("/notre-groupement/","Découvrir notre groupement","darkbtn")}</div>
    </div></section>
    <section class="zone-section section dark" id="zones"><div class="wrap">
      <div class="section-topline"><span class="eyebrow">03 — NOS SECTEURS</span><span class="section-micro">VALLÉE DE SEINE · AXE A13</span></div>
      <div class="zone-new-grid"><div><h2>Votre région.<br><span class="serif">Notre terrain.</span></h2><p>De l'ouest des Yvelines à la Normandie, TaxiDirect dessert les communes de la vallée de la Seine et assure des trajets vers Paris, les hôpitaux, les gares et les aéroports.</p><div class="zone-list"><a href="/taxi-mantes-la-jolie/"><span><small>YVELINES · 78</small>Mantes-la-Jolie</span><b>↗</b></a><a href="/taxi-les-mureaux/"><span><small>YVELINES · 78</small>Les Mureaux</span><b>↗</b></a><a href="/taxi-vernon/"><span><small>EURE · 27</small>Vernon</span><b>↗</b></a></div><a href="/zones-desservies/" class="zone-all">Explorer toutes les communes <span>↗</span></a></div><div class="route-visual"><div class="route-lines"></div><span class="route-small">AXE A13</span><div class="route-symbol"><span>78</span><small>⇄</small><span>27</span></div><div class="route-cities"><span>MANTES</span><span>LES MUREAUX</span><span>VERNON</span></div><div class="route-ribbon">D'UNE RIVE À L'AUTRE, UN SEUL CONTACT.</div></div></div>
    </div></section>
    <section class="medical-story section"><div class="wrap medical-layout"><div><span class="eyebrow">04 — TRANSPORTS MÉDICAUX</span><h2>Vos rendez-vous<br><span class="serif">méritent toute notre attention.</span></h2><p>Consultation, dialyse, chimiothérapie, radiothérapie, rééducation ou hospitalisation : un taxi conventionné peut faciliter votre transport lorsqu'il est médicalement justifié et prescrit.</p><div class="medical-tags"><span>Hôpitaux de l'AP-HP</span><span>Cliniques</span><span>Centres spécialisés</span><span>Aller-retour</span></div>${button("/transport-medical/","Découvrir le transport médical","darkbtn")}</div><div class="medical-photo"><img src="${cardPhoto}" alt="Chauffeur de taxi professionnel présentant sa carte professionnelle, photographie du site officiel" width="995" height="660" loading="lazy" decoding="async"><div class="medical-note"><span>À SAVOIR</span><strong>La prescription médicale détermine le mode de transport adapté.</strong></div></div></div></section>
    <section class="how-section section pale"><div class="wrap"><div class="section-topline"><span class="eyebrow">05 — COMMENT RÉSERVER</span><span class="section-micro">SIMPLE · CLAIR · DIRECT</span></div>${intro("VOTRE DEMANDE","Trois étapes.<br><span class='serif'>Et on prend la route.</span>","La réservation doit toujours être confirmée avec notre groupement selon le trajet et la disponibilité.")}
      <div class="how-flow"><div class="how-step"><span>01</span><h3>Choisissez le trajet</h3><p>Transport conventionné, taxi classique, van ou berline prestige.</p></div><div class="how-step"><span>02</span><h3>Donnez vos informations</h3><p>Départ, destination, date et horaire souhaité.</p></div><div class="how-step"><span>03</span><h3>Confirmez avec nous</h3><p>Téléphone, WhatsApp ou formulaire : nous étudions la demande.</p></div></div>
      <div class="reservation-actions">${button("/reservation/","Préparer une réservation","darkbtn")}${button(whatsapp,"Écrire sur WhatsApp","primary")}</div>
    </div></section>
    <section class="cpam-guide section"><div class="wrap cpam-grid"><div><span class="eyebrow">06 — VOS DROITS CPAM</span><h2>Les bonnes informations.<br><span class="serif">Sans mauvaises surprises.</span></h2><p>Le remboursement des frais de transport en taxi conventionné dépend de la prescription, de vos droits et de la réglementation. Le taux général est de 55 % de la base conventionnelle, ou 100 % dans certaines situations.</p>${button("/remboursement-taxi-cpam/","Comprendre le remboursement","darkbtn")}</div><div class="cpam-knowledge"><div class="cpam-stats"><div><strong>55<small>%</small></strong><span>taux général*</span></div><div><strong>100<small>%</small></strong><span>dans certains cas*</span></div></div><p>*Sous conditions de l'Assurance Maladie ; des franchises peuvent s'appliquer. Le tiers payant n'est pas automatique.</p><a href="${ameli}" target="_blank" rel="noopener noreferrer">Consulter les règles officielles sur ameli.fr ↗</a></div></div></section>
    <section class="faq-section section"><div class="wrap faqgrid"><div><span class="eyebrow">07 — QUESTIONS FRÉQUENTES</span><h2>Le bon trajet<br><span class="serif">commence par une réponse.</span></h2><p>Prescription médicale, taux de remboursement, ALD, transports partagés : les réponses essentielles sont ici.</p>${button("/faq-taxi-conventionne/","Toutes les questions","darkbtn")}</div>${faq(5)}</div></section>
    ${strip()}`;
  }
  function bodyFor(path){
    if(path==="/zones-desservies/")return info("SECTEURS TAXI 78 & 27","De Mantes à Vernon,<br><span class='serif'>sur l'axe A13.</span>","Taxis conventionnés dans les Yvelines et l'Eure : les principales communes de la vallée de la Seine, sur réservation.",`<h2>Taxis conventionnés dans les Yvelines (78)</h2><p>TaxiDirect intervient principalement à <strong>Mantes-la-Jolie, Les Mureaux, Mantes-la-Ville, Limay, Magnanville, Buchelay, Gargenville, Porcheville, Rosny-sur-Seine, Bonnières-sur-Seine, Aubergenville, Écquevilly, Flins-sur-Seine, Verneuil-sur-Seine, Vernouillet, Juziers, Épône, Chapet, Meulan-en-Yvelines, Hardricourt, Issou, Bennecourt et Mézières-sur-Seine</strong>.</p><p>D'autres communes de la vallée de la Seine peuvent être étudiées selon le point de départ et la disponibilité du chauffeur, dont Fresneuse, La Falaise, Guerville, Mousseaux-sur-Seine et Follainville-Dennemont.</p><div class="local-links"><a href="/taxi-mantes-la-jolie/">Mantes-la-Jolie 78200 ↗</a><a href="/taxi-les-mureaux/">Les Mureaux 78130 ↗</a></div><h2>Taxis conventionnés dans l'Eure (27)</h2><p>Le groupement est également présent dans le secteur de <strong>Vernon</strong>, avec les communes de <strong>Vernonnet, Saint-Marcel, Gasny, Port-Mort, Tilly, Saint-Pierre-d'Autils et Ajou</strong>.</p><p>Les trajets concernent notamment les hôpitaux et centres spécialisés, dont les établissements parisiens de l'AP-HP, ainsi que les gares et aéroports.</p><div class="local-links"><a href="/taxi-vernon/">Vernon 27200 ↗</a></div><h2>Depuis une autre commune ?</h2><p>Vous ne voyez pas votre ville ? Contactez TaxiDirect en indiquant le départ, la destination et la date. Nous confirmerons la possibilité du trajet.</p>`,"Votre commune de départ ?");
    if(path==="/notre-groupement/")return info("QUI SOMMES-NOUS ?","TaxiDirect, un groupement<br><span class='serif'>d'artisans taxis.</span>","Des chauffeurs taxis conventionnés CPAM au service des voyageurs de Mantes-la-Jolie, des Mureaux, de Vernon et des communes de l'A13.",`<h2>Des artisans taxis des Yvelines et de l'Eure</h2><p><strong>TaxiDirect</strong> est un groupement d'artisans taxis conventionnés CPAM, actif dans les Yvelines (78) et l'Eure (27). Il couvre principalement Mantes-la-Jolie, Les Mureaux et Vernon, ainsi que des communes de la vallée de la Seine.</p><h2>Le respect de la réglementation des taxis</h2><p>Le site officiel présente des chauffeurs professionnels, des <strong>taximètres en règle</strong> et des <strong>tarifs encadrés</strong>. Pour les transports conventionnés, les droits de prise en charge sont ceux définis par l'Assurance Maladie.</p><div class="real-photos"><figure><img loading="lazy" decoding="async" src="${driverPhoto}" alt="Chauffeur professionnel à bord, avec un passager"><figcaption>Un service pensé pour la sérénité des voyageurs.</figcaption></figure><figure><img loading="lazy" decoding="async" src="${meterPhoto}" alt="Taximètre d'un véhicule taxi"><figcaption>Des courses soumises à la réglementation taxi.</figcaption></figure></div><h2>Quatre catégories de véhicules</h2><p>Taxi conventionné CPAM, taxi classique, van et berline prestige : quatre catégories sont présentées sur le site officiel. Le choix dépend de votre trajet et des disponibilités.</p><h2>Vers Paris, les hôpitaux, les gares et les aéroports</h2><p>Pour les transports médicaux prescrits, TaxiDirect organise les demandes vers les hôpitaux de Paris, cliniques et centres spécialisés. Le groupement propose aussi des trajets privés vers les gares parisiennes, Orly et Roissy-CDG.</p>`,"Parlons de votre trajet ?");
    if(path==="/")return homepage();
    if(path==="/taxi-conventionne-cpam/")return info("TAXI CONVENTIONNÉ CPAM","Un taxi conventionné<br><span class='serif'>pour les trajets essentiels.</span>","Taxi conventionné dans les Yvelines, pour les déplacements médicaux prescrits, selon disponibilité.",`<h2>À quoi sert un taxi conventionné CPAM ?</h2><p>Un taxi conventionné est un mode de transport assis professionnalisé. Il peut être pris en charge par l'Assurance Maladie lorsque les conditions médicales et administratives sont réunies et que le mode de transport est prescrit.</p>${mins([["01","Prescription médicale","Le médecin détermine le transport adapté."],["02","Justificatifs","Carte Vitale et pièces selon vos droits."],["03","Confirmation","Contactez-nous pour étudier le trajet."]])}<h2>Déplacements concernés</h2><p>Les demandes peuvent concerner des consultations, examens, soins réguliers ou trajets liés à une hospitalisation. Le simple fait de se rendre à l'hôpital ne donne pas automatiquement droit à un remboursement.</p><h2>Accord préalable</h2><p>Certains transports de plus de 150 kilomètres à l'aller ou certains transports en série exigent un accord préalable. Les règles sont détaillées par l'Assurance Maladie.</p>${urgency}${sources}`,"Préparons votre trajet");
    if(path==="/transport-medical/")return info("TRANSPORT MÉDICAL ASSIS","Vers vos soins,<br><span class='serif'>un trajet bien préparé.</span>","Transport assis pour consultations et déplacements programmés vers les établissements de santé.",`<h2>Pour vos rendez-vous médicaux</h2><p>Consultation spécialisée, examen, traitements réguliers ou entrée et sortie d'hospitalisation : vous pouvez présenter votre besoin de trajet, sous réserve des modalités médicales et de la disponibilité.</p>${mins([["01","Consultations","Rendez-vous médicaux et bilans programmés."],["02","Soins réguliers","Trajets récurrents, lorsque prescrits."],["03","Hospitalisations","Aller et retour selon indications médicales."]])}<h2>Établissements du secteur</h2><p>Les habitants du 78 se rendent notamment au Centre hospitalier intercommunal de Meulan–Les Mureaux, à l'hôpital François-Quesnay de Mantes-la-Jolie et au centre hospitalier intercommunal de Poissy–Saint-Germain-en-Laye.</p><h2>Transport assis, VSL ou ambulance ?</h2><p>Ces modes de transport sont distincts. Seul le professionnel de santé détermine le mode adapté à votre état. Un taxi conventionné ne remplace pas une ambulance.</p>${urgency}`,"Planifier les horaires");
    if(path==="/remboursement-taxi-cpam/")return info("PRISE EN CHARGE CPAM","Remboursement et tiers payant :<br><span class='serif'>ce qu'il faut savoir.</span>","Une synthèse claire des informations officielles sur le transport conventionné.",`<h2>Quel taux de remboursement ?</h2><p>L'Assurance Maladie rembourse en règle générale les transports en taxi conventionné à <strong>55 %</strong> de la base conventionnelle, dans la limite des dépenses engagées. Une prise en charge à <strong>100 %</strong> peut s'appliquer dans certaines situations définies par la réglementation.</p><div class="stat-grid"><div class="stat"><strong>55 %</strong><span>Taux général de prise en charge</span></div><div class="stat"><strong>100 %</strong><span>Dans certains cas réglementaires</span></div></div><h2>Prescription et accord préalable</h2><p>La prescription médicale doit en règle générale être établie avant le transport. Certains déplacements longue distance ou en série nécessitent aussi l'accord préalable de la caisse.</p><h2>Le tiers payant</h2><p>La dispense d'avance des frais dépend des droits, de la situation de l'assuré et des règles applicables. Le transport partagé peut être proposé pour le transport assis ; dans certaines situations son refus peut entraîner la fin du tiers payant.</p><h2>Franchise médicale et coût de la course</h2><p>Une franchise médicale peut être déduite des remboursements, avec des exceptions. Pour les trajets privés, gares ou aéroports, les tarifs dépendent du parcours et de la réglementation des taxis : demandez les modalités précises de la course.</p><div class="notice">Les informations fournies ne remplacent pas la confirmation de vos droits par votre caisse d'assurance maladie. Le montant de la franchise médicale applicable aux transports conventionnés est de 4 € par trajet, avec des plafonds et des exonérations prévus par les textes.</div><p class="article-sources">Sources : <a href="${cpam}" target="_blank" rel="noopener noreferrer">ameli — taux de remboursement</a> · <a href="${ameli}" target="_blank" rel="noopener noreferrer">conditions de transport</a>.</p>`,"Une question pratique ?");
    if(path==="/taxi-aeroport-gare/")return info("GARES · AÉROPORTS","Vos déplacements privés,<br><span class='serif'>sans détours.</span>","Transferts vers Paris, les gares franciliennes, Orly et Roissy-CDG au départ des Yvelines.",`<h2>Transferts vers les aéroports</h2><p>Indiquez votre ville de départ, l'aéroport souhaité et l'heure de votre vol. Nous pouvons étudier les trajets vers Roissy–Charles-de-Gaulle, Paris–Orly et les destinations proches, selon disponibilité.</p>${mins([["CDG","Roissy–CDG","Transferts sur réservation."],["ORY","Paris–Orly","Départ ou retour sur demande."],["GARE","Gares de Paris","Correspondances et déplacements."]])}<h2>Gares et déplacements professionnels</h2><p>Vous pouvez demander un trajet vers une gare de Paris ou un rendez-vous d'affaires. Pour une demande précise, communiquez le nombre de passagers, les bagages, l'heure et l'itinéraire.</p><h2>Tarifs</h2><p>Les prix dépendent des règles applicables aux taxis, des horaires et de l'itinéraire. Aucun prix fixe non vérifié n'est annoncé ici.</p>`,"Un train ou un vol ?");
    if(locations[path]){
      const [city,zip,hospital,near,region]=locations[path];
      return info(`TAXI ${city.toUpperCase()} · ${zip}`,`Taxi conventionné<br><span class='serif'>${city} (${zip}).</span>`,`Transport médical assis et taxi privé dans ${region}, sur réservation et selon disponibilité.`,`<h2>Un taxi conventionné à ${city}</h2><p>Dans ${region}, un rendez-vous médical peut nécessiter un déplacement vers un centre de soins, en Normandie ou en Île-de-France. TaxiDirect étudie les demandes de trajets au départ ou à destination de <strong>${city}</strong>.</p><h2>Vers les établissements de soins</h2><p>Parmi les destinations de soins du secteur figure le <strong>${hospital}</strong>. Les trajets vers des établissements parisiens peuvent également être étudiés. Les autres destinations sont à préciser lors de la demande, en fonction de l'adresse, de l'horaire et de la disponibilité.</p><h2>Communes voisines</h2><p>Les demandes depuis <strong>${near}</strong> peuvent également être étudiées, sans promesse de disponibilité automatique.</p>${mins([["01","Un départ précis",`Adresse de départ à ${city} ou alentours.`],["02","Votre destination","Lieu et horaire du rendez-vous."],["03","Vos documents","Prescription et justificatifs CPAM, si applicable."]])}<h2>Prescription et prise en charge</h2><p>Le médecin prescrit le mode de transport adapté. La prise en charge est soumise aux conditions de l'Assurance Maladie et peut nécessiter des justificatifs ou un accord préalable.</p>${sources}` ,`Votre trajet à ${city}`);
    }
    if(path==="/guide-bon-de-transport/")return info("GUIDE PRATIQUE CPAM","Votre bon de transport,<br><span class='serif'>étape par étape.</span>","Les documents à préparer avant un trajet en taxi conventionné.",`<h2>1. La prescription médicale</h2><p>Dans la plupart des situations, votre médecin établit la prescription médicale de transport <strong>avant le déplacement</strong> et détermine le mode adapté. Certaines convocations peuvent tenir lieu de prescription.</p><h2>2. L'accord préalable, si nécessaire</h2><p>Pour certains trajets de plus de 150 kilomètres aller, certains transports en série et d'autres situations particulières, l'Assurance Maladie peut exiger un accord préalable.</p><h2>3. Votre carte Vitale</h2><p>Gardez une carte Vitale à jour et les justificatifs de droits correspondant à votre situation, notamment pour le tiers payant.</p><h2>4. Les détails du rendez-vous</h2><p>Lors de la prise de contact, indiquez la date, l'heure, le lieu de départ et la destination. Pour l'aller-retour, précisez les deux horaires.</p><div class="notice">Ne transmettez aucun diagnostic, ordonnance photographiée ou dossier médical confidentiel via le formulaire de contact du site.</div>${sources}`,"Un rendez-vous à venir ?");
    if(path==="/faq-taxi-conventionne/")return `<section class="innerhero"><div class="wrap"><div class="crumb"><a href="/">Accueil</a> / FAQ</div><span class="kicker">VOS QUESTIONS</span><h1>Le taxi conventionné,<br><span class="serif">en toute clarté.</span></h1><p>Des réponses fondées sur les règles de l'Assurance Maladie, pour préparer votre transport.</p></div></section><section class="section"><div class="wrap" style="max-width:830px">${faq()}${sources}</div></section>${strip()}`;
    if(path==="/reservation/")return `<section class="innerhero"><div class="wrap"><div class="crumb"><a href="/">Accueil</a> / Demander un trajet</div><span class="kicker">CONTACT DIRECT</span><h1>Votre trajet commence<br><span class="serif">ici.</span></h1><p>Contactez-nous par téléphone ou préparez votre demande par email. Toute course doit être confirmée directement.</p></div></section><section class="section"><div class="wrap book-layout"><div class="book"><span class="eyebrow">DEMANDE DE TRAJET</span><h2>Décrivez votre déplacement.</h2><p>Vous pouvez appeler, écrire sur WhatsApp, remplir une demande par email, ou utiliser le formulaire de réservation du site officiel.</p><div class="booking-direct"><a href="${official}/#reservation" target="_blank" rel="noopener noreferrer">Réserver en ligne sur le site actuel ↗</a><a href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp · ${tel2} ↗</a><a href="${phone2}">Appeler le ${tel2}</a></div><form id="requestform"><div class="fields"><label>Nom complet<input name="nom" maxlength="80" required autocomplete="name" placeholder="Prénom et nom"></label><label>Téléphone<input name="telephone" type="tel" maxlength="30" required autocomplete="tel" placeholder="06…"></label><label>Départ<input name="depart" maxlength="150" required placeholder="Ville ou adresse"></label><label>Destination<input name="destination" maxlength="150" required placeholder="Établissement ou adresse"></label><label>Date souhaitée<input name="date" type="date" required></label><label>Heure souhaitée<input name="heure" type="time" required></label></div><label>Type de trajet<select name="type"><option>Transport médical assis</option><option>Taxi privé</option><option>Gare / aéroport</option></select></label><label class="consent"><input type="checkbox" required> Je comprends que l'ouverture de ma messagerie ne constitue pas une réservation confirmée.</label><button class="btn primary" type="submit">Préparer mon email ↗</button><p class="note">N'envoyez pas de diagnostic ni d'informations médicales sensibles dans ce formulaire.</p></form></div><aside class="contact-card"><span class="kicker">PARLONS DE VOTRE TRAJET</span><h3>Un contact simple, sans intermédiaire.</h3><a href="${phone}">☎ ${tel}</a><p>Communiquez votre départ, votre destination et la date. La disponibilité et les modalités restent à confirmer.</p></aside></div></section><script>(function(){var f=document.getElementById('requestform');if(!f)return;f.addEventListener('submit',function(e){e.preventDefault();if(!f.reportValidity())return;var d=new FormData(f),lines=['Bonjour,','Je souhaite organiser un trajet.','', 'Nom : '+d.get('nom'),'Téléphone : '+d.get('telephone'),'Départ : '+d.get('depart'),'Destination : '+d.get('destination'),'Date : '+d.get('date'),'Heure : '+d.get('heure'),'Type : '+d.get('type'),'','Merci de me confirmer la disponibilité.'];location.href='mailto:${email}?subject='+encodeURIComponent('Demande de trajet TaxiDirect')+'&body='+encodeURIComponent(lines.join('\\n'));});})();</script>`;
    if(path==="/mentions-legales/")return `<section class="innerhero"><div class="wrap"><h1>Mentions légales</h1><p>Informations relatives au site TaxiDirect.</p></div></section><section class="section"><div class="wrap readable"><h2>Éditeur</h2><p>Nom commercial : <strong>${name}</strong><br>Téléphones : ${tel} et ${tel2}<br>Email : <a href="mailto:${email}">${email}</a></p><p>La raison sociale, le numéro SIREN/SIRET, l'adresse de l'établissement et le nom du responsable de publication sont à compléter à partir des informations professionnelles vérifiées avant la publication officielle.</p><h2>Hébergement de l'aperçu</h2><p>Cloudflare, Inc. — cloudflare.com.</p><h2>Informations</h2><p>Les textes consacrés à l'Assurance Maladie sont indicatifs. Les informations officielles publiées par la CPAM prévalent.</p></div></section>`;
    if(path==="/confidentialite/")return `<section class="innerhero"><div class="wrap"><h1>Confidentialité</h1><p>Des échanges limités à l'essentiel.</p></div></section><section class="section"><div class="wrap readable"><h2>Version d'aperçu</h2><p>Cette version du site n'utilise ni cookies publicitaires ni outils de suivi marketing. Le formulaire de demande prépare un email sur l'appareil du visiteur ; aucune demande n'est enregistrée sur le serveur du site.</p><h2>Envoi des messages</h2><p>L'utilisateur choisit d'envoyer ou non le message depuis son logiciel de messagerie. Les données reçues par email sont traitées pour répondre à sa demande. N'envoyez pas de données médicales sensibles.</p><h2>Hébergement</h2><p>L'hébergeur Cloudflare peut traiter les données techniques nécessaires à la fourniture des pages. Cette politique doit être revue et complétée avant publication définitive.</p><h2>Contact</h2><p>Pour toute question : <a href="mailto:${email}">${email}</a>.</p></div></section>`;
    return `<section class="innerhero"><div class="wrap"><span class="kicker">ERREUR 404</span><h1>Page introuvable.</h1><p>Retournez à l'accueil ou contactez-nous directement.</p>${button("/","Retour à l'accueil")}</div></section>`;
  }
  function graph(p,canonical){
    const orgId=official+"/#organization";
    const org={"@type":"Organization","@id":orgId,"name":name,"url":official,"telephone":"+33619959734","email":email,"contactPoint":[{"@type":"ContactPoint","contactType":"reservations","telephone":"+33619959734","availableLanguage":"fr"},{"@type":"ContactPoint","contactType":"reservations","telephone":"+33601225822","availableLanguage":"fr"}],"areaServed":[{"@type":"AdministrativeArea","name":"Yvelines (78)"},{"@type":"AdministrativeArea","name":"Eure (27)"},{"@type":"City","name":"Mantes-la-Jolie"},{"@type":"City","name":"Les Mureaux"},{"@type":"City","name":"Vernon"}]};
    const arr=[org,{"@type":"WebSite","@id":official+"/#website","name":name,"url":official,"inLanguage":"fr-FR","publisher":{"@id":orgId}},{"@type":"WebPage","name":p[1],"url":canonical,"description":p[2],"inLanguage":"fr-FR","isPartOf":{"@id":official+"/#website"}}];
    if(p[0]!=="/")arr.push({"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Accueil","item":official+"/"},{"@type":"ListItem","position":2,"name":p[1],"item":canonical}]});
    if(p[0].includes("taxi-")||p[0].includes("transport-medical"))arr.push({"@type":"Service","serviceType":"Transport en taxi sur réservation","name":p[1],"provider":{"@id":orgId},"areaServed":[{"@type":"AdministrativeArea","name":"Yvelines"},{"@type":"AdministrativeArea","name":"Eure"}]});
    if(p[0]==="/")arr.push({"@type":"TaxiService","name":name,"description":"Groupement d'artisans taxis conventionnés CPAM des Yvelines et de l'Eure. Mantes-la-Jolie, Les Mureaux, Vernon et axe A13.","provider":{"@id":orgId},"areaServed":[{"@type":"City","name":"Mantes-la-Jolie"},{"@type":"City","name":"Les Mureaux"},{"@type":"City","name":"Vernon"}]});
    return JSON.stringify({"@context":"https://schema.org","@graph":arr}).replace(/</g,"\\u003c");
  }
  function render(path,host){
    const p=pages.find(x=>x[0]===path), preview=host.endsWith(".pages.dev")||host.endsWith(".workers.dev")||host==="localhost", found=!!p;
    const title=found?p[1]:"Page introuvable | TaxiDirect",desc=found?p[2]:"Page indisponible",canonical=official+path;
    return `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0c192c"><meta name="robots" content="${preview||!found?"noindex,nofollow":"index,follow,max-image-preview:large"}"><title>${title}</title><meta name="description" content="${desc}">${!preview&&found?`<link rel="canonical" href="${canonical}">`:""}<meta property="og:type" content="website"><meta property="og:locale" content="fr_FR"><meta property="og:site_name" content="${name}"><meta property="og:title" content="${title}"><meta property="og:description" content="${desc}"><meta property="og:url" content="${preview?"https://"+host+path:canonical}"><meta property="og:image" content="${official}/assets/og-image.jpg"><meta property="og:image:alt" content="Taxi conventionné TaxiDirect au crépuscule"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${desc}"><meta name="twitter:image" content="${official}/assets/og-image.jpg"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://www.taxidirect78conventionne.fr" crossorigin>${path==="/"?`<link rel="preload" as="image" href="${photo}" fetchpriority="high">`:""}<style>${css}</style>${!preview&&found?`<script type="application/ld+json">${graph(p,canonical)}</script>`:""}</head><body>${header()}<main id="main">${bodyFor(path)}</main>${footer()}</body></html>`;
  }
  const favicon=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#0d2337"/><path d="M11 49 27 12h10l16 37" fill="none" stroke="#ebc58c" stroke-width="6" stroke-linecap="round"/><path d="M32 20v27" stroke="white" stroke-width="3" stroke-dasharray="4 6"/></svg>`;
  return {pages,render,async fetch(request){
    const u=new URL(request.url),pathname=u.pathname,preview=u.hostname.endsWith(".pages.dev")||u.hostname.endsWith(".workers.dev");
    if(request.method!=="GET"&&request.method!=="HEAD")return new Response("Method not allowed",{status:405,headers:{allow:"GET, HEAD"}});
    if(pathname==="/robots.txt")return new Response(preview?"User-agent: *\nDisallow: /\n":"User-agent: *\nAllow: /\nSitemap: "+official+"/sitemap.xml\n",{headers:{"content-type":"text/plain;charset=utf-8"}});
    if(pathname==="/sitemap.xml")return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.filter(p=>!p[0].includes("mentions")&&!p[0].includes("confidentialite")).map(p=>`<url><loc>${official+p[0]}</loc><lastmod>2026-11-08</lastmod></url>`).join("")+'</urlset>',{headers:{"content-type":"application/xml;charset=utf-8","x-robots-tag":preview?"noindex":"index"}});
    if(pathname==="/favicon.svg")return new Response(favicon,{headers:{"content-type":"image/svg+xml;charset=utf-8"}});
    if(pathname==="/health")return new Response(JSON.stringify({status:"ok",pages:pages.length}),{headers:{"content-type":"application/json"}});
    const clean=pathname==="/"?"/":pathname.endsWith("/")?pathname:pathname+"/";
    if(clean==="/taxi-poissy/")return Response.redirect(u.origin+"/zones-desservies/",301);
    if(pages.some(p=>p[0]===clean)){
      if(clean!==pathname)return Response.redirect(u.origin+clean,301);
      return new Response(render(clean,u.hostname),{headers:{"content-type":"text/html;charset=utf-8","x-robots-tag":preview?"noindex,nofollow":"index,follow"}});
    }
    return new Response(render(pathname,u.hostname),{status:404,headers:{"content-type":"text/html;charset=utf-8","x-robots-tag":"noindex,nofollow"}});
  }};
})();export default {fetch:site.fetch};