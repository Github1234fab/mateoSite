export const METIERS = [
  {
    slug: "consultant",
    name: "Consultant & Freelance BNC",
    category: "Prestations intellectuelles",
    persona: "micro",
    heroTitle: "Le logiciel de compta taillé pour les consultants & indépendants BNC",
    tagline: "Pilotez vos honoraires, sécurisez vos déclarations URSSAF et anticipez vos seuils sans perdre une heure de facturation.",
    seoTitle: "Logiciel Compta pour Consultant & Freelance BNC | Matéo",
    metaDescription: "Gérez votre activité de consultant en micro-entreprise ou société avec Matéo : livre de recettes conforme, anticipation du seuil de TVA et suivi de trésorerie.",
    painPoints: [
      {
        title: "Le cauchemar du seuil de TVA (39 100 €)",
        desc: "Franchir le seuil sans s'en rendre compte oblige à régulariser des mois de TVA rétroactivement. Matéo vous alerte dès que vous approchez de la limite."
      },
      {
        title: "Des honoraires irréguliers",
        desc: "Entre les missions payées à 30 ou 60 jours, la visibilité est floue. La Météo Trésorerie de Matéo vous montre exactement ce qui reste disponible."
      },
      {
        title: "La phobie du contrôle fiscal",
        desc: "Les consultants ont l'obligation légale de tenir un livre des recettes chronologique non modifiable. Matéo l'édite automatiquement à chaque relevé."
      }
    ],
    typicalExpenses: [
      "Abonnements logiciels (Notion, Google Workspace, Slack, IA)",
      "Espaces de coworking et déplacements clients",
      "Matériel informatique et abonnements téléphoniques",
      "Formations professionnelles et assurances RC Pro"
    ],
    urssafTips: {
      regime: "Professions libérales / Prestations de services BNC",
      tauxCotisations: "21,1 % (ou 21,2 % selon CIPAV/SSI)",
      seuilFranchiseTVA: "39 100 € (seuil majoré à 41 200 €)",
      plafondCA: "77 700 € / an"
    },
    faq: [
      {
        q: "Comment Matéo catégorise mes factures d'honoraires ?",
        a: "Dès que vous importez votre relevé bancaire, Matéo reconnaît les virements de vos clients et les affecte directement en recettes professionnelles (compte 706) dans votre livre officiel."
      },
      {
        q: "Dois-je déclarer la TVA si je facture des clients à l'étranger ?",
        a: "Matéo gère les spécificités des prestations intracommunautaires et export (autoliquidation de TVA) avec les mentions légales obligatoires."
      }
    ]
  },
  {
    slug: "artisan-batiment",
    name: "Artisan du Bâtiment & Travaux",
    category: "Artisanat & Métiers manuels",
    persona: "micro",
    heroTitle: "La compta simple pour artisans : maçons, électriciens, peintres et plombiers",
    tagline: "Moins de temps le soir sur vos devis et factures, plus de temps sur vos chantiers.",
    seoTitle: "Comptabilité Artisan du Bâtiment en Micro-entreprise | Matéo",
    metaDescription: "Logiciel de gestion et comptabilité pour artisans du bâtiment. Enregistrement automatique des encaissements chantiers, suivi des achats matériaux et livre officiel.",
    painPoints: [
      {
        title: "Achats fréquents de matériaux",
        desc: "Entre Point.P, Rexel ou Leroy Merlin, les factures s'accumulent dans la camionnette. Matéo regroupe et pointe chaque dépense automatiquement."
      },
      {
        title: "Acomptes et soldes de chantiers",
        desc: "Suivre qui a réglé l'acompte de 30 % et qui doit encore le solde devient un jeu d'enfant grâce au suivi des règlements Matéo."
      },
      {
        title: "TVA à taux multiples (10 %, 5,5 %, 20 %)",
        desc: "Les travaux de rénovation et d'amélioration énergétique exigent des taux spécifiques. Matéo garde la traçabilité claire de vos ventilations."
      }
    ],
    typicalExpenses: [
      "Achats de matériaux, consommables et quincaillerie",
      "Carburant, péages et entretien de l'utilitaire",
      "Assurance décennale et responsabilité civile artisanale",
      "Location et amortissement d'outillage électroportatif"
    ],
    urssafTips: {
      regime: "Activités artisanales & mixtes (fourniture + pose)",
      tauxCotisations: "12,3 % sur la vente de matériaux, 21,2 % sur la pose",
      seuilFranchiseTVA: "101 000 € (matériaux) / 39 100 € (pose)",
      plafondCA: "188 700 € (ventes) / 77 700 € (services)"
    },
    faq: [
      {
        q: "Puis-je séparer la fourniture de matériaux et la main d'œuvre ?",
        a: "Oui, Matéo permet de scinder vos encaissements mixtes pour appliquer exactement le bon taux de cotisation URSSAF sur chaque part."
      },
      {
        q: "Comment archiver les factures de matériaux en cas de contrôle ?",
        a: "Vous pouvez associer vos justificatifs scannés directement aux lignes bancaires correspondantes dans le radar des pièces justificatives."
      }
    ]
  },
  {
    slug: "photographe",
    name: "Photographe & Vidéaste",
    category: "Création & Image",
    persona: "micro",
    heroTitle: "Gérez vos séances, mariages et droits d'auteur sans stress comptable",
    tagline: "Un outil fluide et visuel pour suivre vos acomptes shooting, vos ventes de tirages et vos investissements matériel.",
    seoTitle: "Logiciel de Comptabilité pour Photographe et Vidéaste | Matéo",
    metaDescription: "Simplifiez la comptabilité de votre activité photo et vidéo avec Matéo : suivi des acomptes mariages, facturation des cessions de droits et livre des recettes.",
    painPoints: [
      {
        title: "Gestion des acomptes à plusieurs mois d'intervalle",
        desc: "Un mariage réservé en janvier pour août avec solde en septembre ? Matéo fait le lien chronologique entre vos encaissements et vos contrats."
      },
      {
        title: "Distinction prestations et droits d'auteur",
        desc: "Prestation de prise de vue d'un côté, cession de droits patrimoniaux de l'autre : Matéo classe chaque flux sur le bon compte de recettes."
      },
      {
        title: "Renouvellement lourd du parc matériel",
        desc: "Boîtiers, optiques, éclairages : la Météo Trésorerie vous permet de savoir quand investir sans mettre en danger vos finances."
      }
    ],
    typicalExpenses: [
      "Objectifs, boîtiers, trépieds et cartes mémoire",
      "Licences Adobe Creative Cloud, galeries en ligne (Pic-Time, Lumys)",
      "Déplacements pour reportages et mariages",
      "Tirages d'art et emballages packaging clients"
    ],
    urssafTips: {
      regime: "Artisan photographe ou Profession libérale BNC",
      tauxCotisations: "21,2 % (Micro-BNC) ou affiliation AGESSA/MDA pour les auteurs",
      seuilFranchiseTVA: "39 100 € (prestations) / 47 700 € (œuvres d'art)",
      plafondCA: "77 700 € / an"
    },
    faq: [
      {
        q: "Puis-je gérer les paiements en plusieurs fois pour les mariages ?",
        a: "Absolument. Matéo associe plusieurs virements échelonnés à un même client pour un suivi parfait du reste à recouvrer."
      },
      {
        q: "Matéo est-il adapté aux photographes assujettis à la TVA ?",
        a: "Oui, Matéo sépare instantanément le HT de la TVA collectée pour que votre déclaration trimestrielle soit remplie en 2 minutes."
      }
    ]
  },
  {
    slug: "graphiste",
    name: "Graphiste, Illustrateur & Webdesigner",
    category: "Design & Digital",
    persona: "micro",
    heroTitle: "La compta limpide pour graphistes, directeurs artistiques et UI/UX designers",
    tagline: "Fini l'angoisse des déclarations administratives. Concentrez-vous sur vos créations visuelles.",
    seoTitle: "Comptabilité Graphiste & Webdesigner Freelance | Matéo",
    metaDescription: "Logiciel de comptabilité adapté aux graphistes indépendants : catégorisation automatique des abonnements créatifs, suivi des virements clients et livre officiel.",
    painPoints: [
      {
        title: "Multiplication des petits abonnements SaaS",
        desc: "Figma, Adobe, Fontstand, Envato, Canva... Matéo regroupe et catégorise automatiquement vos charges numériques récurrentes."
      },
      {
        title: "Facturation mixte (Création + Cession de droits)",
        desc: "Suivez précisément la ventilation de vos honoraires de conception et de vos droits d'exploitation pour une conformité fiscale irréprochable."
      },
      {
        title: "Décalages de trésorerie entre deux projets",
        desc: "La météo de trésorerie Matéo vous indique en un coup d'œil votre coussin de sécurité pour traverser les périodes creuses sereinement."
      }
    ],
    typicalExpenses: [
      "Abonnements Figma, Creative Cloud, typographies professionnelles",
      "Écrans calibrés, tablettes graphiques et matériel Apple",
      "Hébergement web et noms de domaine de votre portfolio",
      "Assurance RC Pro des métiers du numérique"
    ],
    urssafTips: {
      regime: "Profession libérale non réglementée (BNC) ou Maison des Artistes",
      tauxCotisations: "21,1 % (Micro-BNC classique)",
      seuilFranchiseTVA: "39 100 € (prestations générales)",
      plafondCA: "77 700 € / an"
    },
    faq: [
      {
        q: "Puis-je suivre mes factures clients réglées par virement et Stripe ?",
        a: "Oui, Matéo intègre les exports de vos comptes bancaires pro et passerelles de paiement avec réconciliation instantanée."
      },
      {
        q: "Le livre des recettes est-il accepté lors d'un contrôle fiscal ?",
        a: "Oui, le livre des recettes généré par Matéo respecte rigoureusement l'article R. 123-205 du Code de commerce et les directives de la DGFiP."
      }
    ]
  },
  {
    slug: "coach-formateur",
    name: "Coach, Formateur & Thérapeute",
    category: "Accompagnement & Conseil",
    persona: "micro",
    heroTitle: "Gérez vos séances et sessions de formation en toute simplicité",
    tagline: "Suivi des règlements individuels, attestations et obligations comptables sans perte de temps.",
    seoTitle: "Logiciel Compta pour Coach, Formateur et Thérapeute | Matéo",
    metaDescription: "Solution de comptabilité simplifiée pour coachs, formateurs indépendants et praticiens bien-être. Livre de recettes conforme, suivi des règlements et météo financière.",
    painPoints: [
      {
        title: "Multiplication des petits encaissements clients",
        desc: "Des dizaines de séances par mois réglées par virement, chèque ou carte bancaire : Matéo pointe chaque règlement sans oubli."
      },
      {
        title: "L'exonération de TVA des organismes de formation",
        desc: "Si vous bénéficiez de l'attestation d'exonération de TVA délivrée par la DREETS, Matéo sécurise vos mentions et vos seuils."
      },
      {
        title: "Anticipation des cotisations URSSAF",
        desc: "Sachez au centime près ce que vous devrez reverser à l'URSSAF lors de votre prochaine déclaration mensuelle ou trimestrielle."
      }
    ],
    typicalExpenses: [
      "Location ponctuelle de salles de formation ou cabinets partagés",
      "Outils de visioconférence et plateformes LMS (Zoom, Teachable)",
      "Supervision professionnelle et certifications continues",
      "Outils d'évaluation et supports pédagogiques"
    ],
    urssafTips: {
      regime: "Professions libérales (BNC) / Formation professionnelle",
      tauxCotisations: "21,1 % à 21,2 %",
      seuilFranchiseTVA: "39 100 € (ou exonération totale sous conditions DREETS)",
      plafondCA: "77 700 € / an"
    },
    faq: [
      {
        q: "Comment gérer les règlements en espèces ou chèques de mes patients/clients ?",
        a: "Matéo permet d'enregistrer manuellement vos règlements physiques en quelques secondes pour qu'ils figurent chronologiquement dans votre livre officiel."
      },
      {
        q: "Puis-je exporter un récapitulatif pour mon bilan pédagogique et financier (BPF) ?",
        a: "Oui, Matéo génère un récapitulatif précis de vos volumes d'encaissements par type d'action de formation."
      }
    ]
  },
  {
    slug: "club-sportif",
    name: "Club Sportif Associatif",
    category: "Associations Loi 1901",
    persona: "asso",
    heroTitle: "La trésorerie sans casse-tête pour les trésoriers de clubs de sport",
    tagline: "Cotisations adhérents, buvettes, licences et tournois : gardez des comptes impeccables pour votre prochaine assemblée générale.",
    seoTitle: "Gestion Comptable et Adhésions Club Sportif Association | Matéo",
    metaDescription: "Logiciel de gestion financière pour clubs de sport associatifs : encaissement des licences, suivi des adhésions, buvette, et rapport financier pour l'AG.",
    painPoints: [
      {
        title: "Le rush des rentrées de septembre",
        desc: "Des centaines de règlements de licences qui arrivent par virement, Pass'Sport, chèques ou espèces : Matéo pointe tout sans double saisie."
      },
      {
        title: "La gestion des paiements fractionnés (3x sans frais)",
        desc: "Les familles paient souvent en plusieurs mensualités. Matéo suit le reste dû de chaque licencié avec un état des impayés en direct."
      },
      {
        title: "Le rapport financier de l'Assemblée Générale",
        desc: "Présenter des comptes clairs et rassurants aux adhérents et à la mairie sans y passer ses nuits : Matéo édite votre bilan d'exercice instantanément."
      }
    ],
    typicalExpenses: [
      "Reversements de licences aux fédérations sportives",
      "Achat de maillots, ballons et matériel d'entraînement",
      "Frais de déplacement en compétition et arbitrage",
      "Achats de denrées pour la buvette du club"
    ],
    urssafTips: {
      regime: "Association Loi 1901 non lucrative",
      tauxCotisations: "Exonération d'impôts commerciaux sous condition de gestion désintéressée",
      seuilFranchiseTVA: "Franchise spécifique des activités lucratives accessoires (78 596 €)",
      plafondCA: "Illimité dans le cadre des activités statutaires"
    },
    faq: [
      {
        q: "Comment traiter les aides de l'État comme le Pass'Sport ?",
        a: "Matéo vous permet d'enregistrer la part payée par la famille et la part compensée par le dispositif public avec un lettrage parfait."
      },
      {
        q: "Puis-je délivrer une attestation de paiement pour le comité d'entreprise des parents ?",
        a: "Oui, Matéo génère automatiquement des attestations de paiement nominatives pour chaque licencié en 1 clic."
      }
    ]
  }
];

export function getMetierBySlug(slug) {
  return METIERS.find(m => m.slug === slug);
}
// Nouveaux métiers ajoutés (Santé & Droit)
METIERS.push(
  {
    slug: "infirmiere-liberale",
    name: "Infirmier(ère) Libéral(e) (IDEL)",
    category: "Santé & Paramédical",
    persona: "liberal",
    heroTitle: "La compta simple pour infirmiers et infirmières libérales",
    tagline: "Tournées, télétransmission CPAM, rétrocessions de remplacement et déduction kilométrique : gagnez du temps sur votre administratif.",
    seoTitle: "Logiciel Comptabilité Infirmière Libérale (IDEL) BNC | Matéo",
    metaDescription: "Solution comptable pour IDEL et infirmiers libéraux : rapprochement des virements CPAM, gestion des remplacements et préparation déclaration 2035.",
    painPoints: [
      {
        title: "La jungle des virements de télétransmission",
        desc: "Dizaines de petits virements CPAM et mutuelles chaque semaine : Matéo les rapproche automatiquement avec vos bordereaux de télétransmission."
      },
      {
        title: "Les rétrocessions aux remplaçants",
        desc: "Calculer les pourcentages de rétrocession (généralement 10 à 20 %) et éditer les attestations annuelles sans prise de tête."
      },
      {
        title: "La lourdeur des frais de tournée (véhicule)",
        desc: "Barème kilométrique officiel ou frais réels ? Matéo calcule l'option la plus avantageuse pour vos impôts."
      }
    ],
    typicalExpenses: [
      "Carburant, assurance et entretien du véhicule de tournée",
      "Cotisations CARPIMKO et URSSAF santé",
      "Abonnement logiciel de télétransmission (Albus, Agathe, Vega)",
      "Petit matériel médical, compresses, gants et DASRI"
    ],
    urssafTips: {
      regime: "Profession libérale conventionnée (BNC régime contrôlé)",
      tauxCotisations: "Régime des Praticiens et Auxiliaires Médicaux Conventionnés (PAMC)",
      seuilFranchiseTVA: "Exonération totale de TVA sur les actes de soins (Art. 261 CGI)",
      plafondCA: "77 700 € (Micro-BNC) ou illimité en déclaration contrôlée n° 2035"
    },
    faq: [
      {
        q: "Les actes de soins infirmiers sont-ils soumis à la TVA ?",
        a: "Non. En application de l'article 261-4-1° du CGI, les soins dispensés par les infirmiers libéraux sont totalement exonérés de TVA."
      },
      {
        q: "Comment déclarer les rétrocessions versées à mon remplaçant ?",
        a: "Matéo les déduit directement de vos recettes brutes sur la ligne dédiée des rétrocessions d'honoraires pour ne cotiser que sur votre gain net."
      }
    ]
  },
  {
    slug: "kinesitherapeute",
    name: "Masseur-Kinésithérapeute",
    category: "Santé & Paramédical",
    persona: "liberal",
    heroTitle: "Pilotez la comptabilité de votre cabinet de kinésithérapie",
    tagline: "Rétrocessions collaborateurs, tiers-payant, investissements plateau technique et caisse CARPIMKO : vos comptes au clair.",
    seoTitle: "Comptabilité Kinésithérapeute en Cabinet & Domicile | Matéo",
    metaDescription: "Logiciel de gestion et comptabilité pour kinésithérapeutes : suivi des rétrocessions cabinet, télétransmission CPAM et optimisation des frais professionnels.",
    painPoints: [
      {
        title: "Les contrats de collaboration & rétrocessions",
        desc: "Que vous soyez titulaire ou collaborateur, Matéo suit chaque mois les pourcentages convenus et édite les justificatifs comptables."
      },
      {
        title: "Investissement dans le plateau technique",
        desc: "Tables électriques, ondes de choc, cryothérapie : Matéo suit vos échéances de leasing et vos plans d'amortissement matériel."
      },
      {
        title: "Anticipation des régularisations CARPIMKO",
        desc: "Évitez le choc des régularisations de cotisations à N+2 grâce aux prévisions de trésorerie Matéo."
      }
    ],
    typicalExpenses: [
      "Loyer du cabinet, charges locatives et ménage",
      "Leasing ou achat d'appareils de rééducation",
      "Cotisations CARPIMKO, URSSAF et Ordre des Masseurs-Kinésithérapeutes",
      "Crèmes de massage, consommables d'hygiène et draps d'examen"
    ],
    urssafTips: {
      regime: "Profession de santé conventionnée (BNC)",
      tauxCotisations: "Régime PAMC (cotisations d'assurance maladie prises en charge en partie par la CPAM)",
      seuilFranchiseTVA: "Exonération de TVA sur les actes thérapeutiques prescrits",
      plafondCA: "Déclaration contrôlée n° 2035 conseillée pour déduire les frais réels du cabinet"
    },
    faq: [
      {
        q: "Les activités de bien-être ou ostéopathie sans ordonnance sont-elles exonérées de TVA ?",
        a: "Attention : seuls les actes à visée thérapeutique inscrits à la NGAP sont exonérés. Matéo vous permet de séparer les actes conventionnés des actes hors nomenclature."
      },
      {
        q: "Comment sont gérées les redevances de collaboration ?",
        a: "Pour le titulaire, la redevance est une recette accessoire. Pour le collaborateur, c'est une charge déductible. Matéo applique automatiquement le bon traitement selon votre statut."
      }
    ]
  },
  {
    slug: "avocat",
    name: "Avocat & Profession Juridique",
    category: "Droit & Juridique",
    persona: "liberal",
    heroTitle: "La compta conforme aux règles ordinales pour avocats",
    tagline: "Honoraires de résultat, provisions, rétrocessions de collaboration, TVA et caisse CNBF : une rigueur sans faille.",
    seoTitle: "Logiciel de Comptabilité pour Avocat & Collaborateur Libéral | Matéo",
    metaDescription: "Gérez votre cabinet d'avocat ou votre exercice individuel : suivi des honoraires CARPA, rétrocessions de collaboration, TVA et déclaration 2035.",
    painPoints: [
      {
        title: "Le suivi de la TVA à 20 % sur encaissements",
        desc: "Contrairement au médical, les avocats collectent la TVA. Matéo calcule la TVA exacte sur vos encaissements réels et non sur facturation."
      },
      {
        title: "Les maniements de fonds et comptes CARPA",
        desc: "Distinguer les fonds séquestres transitant par la CARPA de vos honoraires effectifs pour une comptabilité irréprochable."
      },
      {
        title: "La rétrocession des collaborateurs libéraux",
        desc: "Suivez le forfait minimum garanti fixé par l'Ordre et ventilez les dépassements en toute transparence."
      }
    ],
    typicalExpenses: [
      "Cotisations Barreau, CNBF et Ordre des Avocats",
      "Abonnements bases juridiques (Dalloz, LexisNexis, Doctrine)",
      "Loyer du cabinet, domiciliation ou sous-location de bureaux",
      "Frais de robe, toge et déplacements aux audiences"
    ],
    urssafTips: {
      regime: "Profession libérale réglementée (BNC)",
      tauxCotisations: "Cotisations URSSAF + Caisse Nationale des Barreaux Français (CNBF)",
      seuilFranchiseTVA: "39 100 € (ou assujettissement obligatoire selon régime choisi)",
      plafondCA: "Régime déclaration contrôlée 2035 très majoritaire"
    },
    faq: [
      {
        q: "Comment comptabiliser les provisions sur honoraires versées par un client ?",
        a: "En BNC, toute somme encaissée constitue une recette de l'exercice au jour du paiement. Matéo l'intègre immédiatement dans votre livre de recettes."
      },
      {
        q: "Puis-je déduire l'achat de ma robe d'avocat et son entretien ?",
        a: "Oui, la robe est un vêtement professionnel spécifique intégralement déductible en frais professionnels."
      }
    ]
  }
);
