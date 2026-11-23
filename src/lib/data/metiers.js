export const METIERS = [
  {
    slug: "consultant",
    name: "Consultant & Freelance BNC",
    category: "Prestations intellectuelles",
    persona: "micro",
    statusLabel: "Micro-BNC • EI • SASU / EURL",
    heroTitle: "Consultant & Freelance BNC : vos obligations, charges et seuils au clair",
    tagline: "Quoi déclarer, combien provisionner, quels frais passer et quand clôturer : toutes les règles factuelles de votre activité, automatisées en 1 clic par Tito.",
    seoTitle: "Comptabilité Consultant & Freelance BNC : Obligations, Charges, Seuils | Tito",
    metaDescription: "Guide factuel et logiciel comptable pour consultant et freelance BNC : livre des recettes, déclaration 2035 ou Urssaf, seuils de TVA, frais déductibles et références officielles.",
    painPoints: [
      {
        title: "Le piège du seuil de TVA (37 500 € / 41 250 €)",
        desc: "Dépasser le seuil majoré oblige à facturer la TVA dès le jour du dépassement. Tito calcule votre marge restante à chaque encaissement."
      },
      {
        title: "Des honoraires encaissés à 30 ou 60 jours",
        desc: "En BNC ou micro, seule la date d'encaissement réel sur le compte bancaire fait foi fiscalement — jamais la date de facturation."
      },
      {
        title: "Tenue obligatoire des registres horodatés",
        desc: "Même en micro-entreprise, un tableau Excel modifiable est rejeté en cas de contrôle : vos recettes doivent être figées chronologiquement."
      }
    ],
    obligations: [
      {
        what: "Livre des recettes chronologique (ou Livre-Journal BNC)",
        frequency: "Au fil des encaissements",
        why: "Exigé par l'administration fiscale pour prouver l'origine, la date, le client et le mode de règlement de chaque honoraire encaissé.",
        titoAction: "Généré et horodaté automatiquement dès l'import de votre CSV bancaire."
      },
      {
        what: "Déclaration du chiffre d'affaires URSSAF (ou liasse Cerfa 2035)",
        frequency: "Mensuelle / Trimestrielle (Micro) ou Annuelle en mai (Réel BNC)",
        why: "Sert à calculer vos cotisations sociales définitives et votre base imposable à l'impôt sur le revenu (formulaire 2042-C-PRO).",
        titoAction: "Tito totalise le montant exact à copier-coller et prépare votre liasse 2035 ou FEC."
      },
      {
        what: "Clôture annuelle & conservation des pièces (10 ans)",
        frequency: "Clôture au 31 décembre",
        why: "Obligation légale de figer les écritures de l'exercice écoulé et d'archiver chaque facture client ou fournisseur associée.",
        titoAction: "Clôture de l'exercice en 1 clic avec export PDF/FEC scellé."
      }
    ],
    chargesGuide: {
      howMuch: "En Micro-BNC : 23,1 % à 24,6 % du CA encaissé (+ 2,2 % si versement libératoire IR). En BNC Réel (2035) : ~40 % à 45 % sur le bénéfice net (après déduction de tous vos frais).",
      whenToPay: "Micro : chaque mois ou trimestre (même à 0 €). BNC Réel : acomptes mensuels URSSAF/CIPAV avec régularisation à N+1 après dépôt de la 2035.",
      howToAnticipate: "Règle d'or : mettez de côté 25 % (en Micro) ou 45 % du net (au Réel) dès qu'un virement client arrive. Tito déduit cette provision en direct pour afficher votre vrai reste en poche."
    },
    titoDemoRows: [
      {
        date: "Hier",
        label: "VIR SEPA — Mission Conseil Stratégie SAS",
        explanation: "Tito a reconnu un honoraire client : ajouté au Livre des recettes (compte 706) et décompté de votre plafond TVA.",
        amount: "+ 3 200,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "05 Nov",
        label: "PRLV URSSAF — Cotisations Indépendant",
        explanation: "Tito vous explique : cotisation sociale obligatoire rattachée automatiquement à vos charges sociales de l'exercice.",
        amount: "- 740,00 €",
        isPositive: false,
        autoBadge: "Attribution automatique"
      },
      {
        date: "02 Nov",
        label: "CB SNCF VOYAGEURS — PARIS LYON",
        explanation: "💡 Tito a un doute : billet de train pour un rendez-vous client ? En un clic, Tito l'affecte en frais de déplacement pro.",
        amount: "- 114,00 €",
        isPositive: false,
        oneClickLabel: "✓ Oui, déplacement pro"
      }
    ],
    typicalExpenses: [
      "Abonnements logiciels (Notion, Google Workspace, Slack, IA, CRM)",
      "Espaces de coworking, location de bureau et déplacements clients (SNCF, indemnités km)",
      "Matériel informatique (amortissement > 500 € HT ou passage direct en charge < 500 € HT)",
      "Formations professionnelles, RC Pro, mutuelle Madelin et frais bancaires"
    ],
    thresholds: {
      tvaBase: "37 500 € / an",
      tvaMajore: "41 250 € / an",
      tvaConsequence: "Sous 37 500 € : franchise en base (0 % TVA). Entre 37 500 € et 41 250 € : TVA au 1er janvier N+1. Au-delà de 41 250 € : TVA obligatoire dès le jour du dépassement.",
      caPlafond: "77 700 € / an (Micro-BNC)",
      caConsequence: "En cas de dépassement du plafond 2 années consécutives, bascule automatique au régime de la Déclaration Contrôlée (2035) au 1er janvier suivant."
    },
    urssafTips: {
      regime: "Prestations de services BNC (Micro-BNC ou Déclaration contrôlée 2035)",
      tauxCotisations: "23,1 % à 24,6 % du CA (Micro) ou ~42 % du bénéfice net (2035)",
      seuilFranchiseTVA: "37 500 € (seuil majoré à 41 250 €)",
      plafondCA: "77 700 € / an en Micro-BNC (illimité en 2035)"
    },
    officialReferences: [
      {
        code: "Art. L123-28 & R123-205 du Code de commerce",
        source: "Légifrance / DGFiP",
        detail: "Obligation de tenue chronologique non modifiable du livre des recettes."
      },
      {
        code: "Art. 293 B du Code Général des Impôts (CGI)",
        source: "BOFiP-Impôts",
        detail: "Seuils de la franchise en base de TVA pour les prestations de services."
      },
      {
        code: "Formulaires Cerfa n° 2035-SD & n° 2042-C-PRO",
        source: "impots.gouv.fr",
        detail: "Nomenclature officielle des recettes et dépenses des bénéfices non commerciaux (BNC)."
      }
    ],
    faq: [
      {
        q: "En Micro-BNC, ai-je le droit de déduire mes frais réels (train, ordinateur) ?",
        a: "Non : en Micro-BNC, l'administration applique un abattement forfaitaire automatique de 34 % sur votre chiffre d'affaires. Si vos frais réels dépassent 34 % de votre CA, vous avez intérêt à passer au régime réel (2035) ou en société — Tito vous montre immédiatement le comparatif."
      },
      {
        q: "Comment Tito catégorise mes factures d'honoraires ?",
        a: "Dès que vous importez votre relevé bancaire, Tito reconnaît les virements de vos clients et les affecte directement en recettes professionnelles (compte 706) dans votre livre officiel."
      },
      {
        q: "Dois-je déclarer la TVA si je facture des clients à l'étranger ?",
        a: "Pour un client professionnel dans l'UE, c'est l'autoliquidation de TVA (déclaration DES dès le 1er euro). Tito vous explique la mention exacte à faire figurer."
      }
    ]
  },
  {
    slug: "artisan-batiment",
    name: "Artisan du Bâtiment & Travaux",
    category: "Artisanat & Métiers manuels",
    persona: "micro",
    statusLabel: "Micro-BIC • EI Artisan • EURL / SARL",
    heroTitle: "Artisan du Bâtiment : obligations, achats matériaux, taux et seuils",
    tagline: "Ventilation matériaux / main-d'œuvre, registre des achats, TVA travaux (5,5 %, 10 %, 20 %) et cotisations : l'essentiel factuel sans jargon.",
    seoTitle: "Comptabilité Artisan du Bâtiment : Obligations, Charges & Seuils | Tito",
    metaDescription: "Tout ce qu'un artisan du bâtiment doit savoir et déclarer : séparation vente matériaux et pose, registre des achats, seuils TVA et suivi automatisé Tito.",
    painPoints: [
      {
        title: "Double taux URSSAF : Matériaux (12,3 %) vs Pose (21,2 %)",
        desc: "Ne pas séparer la fourniture de matériaux et la main-d'œuvre vous fait payer 21,2 % sur la totalité de la facture au lieu de 12,3 % sur la marchandise."
      },
      {
        title: "Obligation du Registre des Achats",
        desc: "Dès qu'il y a vente ou fourniture de matériaux, la loi impose un second livre obligatoire en plus du livre des recettes : le Registre des Achats."
      },
      {
        title: "TVA travaux multi-taux (5,5 %, 10 %, 20 %)",
        desc: "Rénovation énergétique, locaux de plus de 2 ans ou neuf : chaque taux doit être ventilé proprement avec les attestations clients."
      }
    ],
    obligations: [
      {
        what: "Livre des recettes + Registre des achats obligatoire",
        frequency: "Au fil de l'eau (chronologique)",
        why: "Pour toute activité fournissant des matériaux, l'administration exige à la fois le suivi des encaissements chantiers et le registre horodaté des factures fournisseurs.",
        titoAction: "Tito tient les 2 registres officiels simultanément à partir de votre relevé CSV."
      },
      {
        what: "Ventilation du CA Vente (BIC) / Prestation de pose",
        frequency: "Mensuelle ou Trimestrielle (URSSAF)",
        why: "Permet d'appliquer l'abattement fiscal de 71 % (et cotisations à 12,3 %) sur les matériaux, et 50 % (cotisations à 21,2 %) sur la main-d'œuvre.",
        titoAction: "Tito sépare automatiquement les deux lignes à déclarer sur autoentrepreneur.urssaf.fr."
      },
      {
        what: "Déclaration de TVA (CA3 / CA12) & Clôture annuelle",
        frequency: "Mensuelle / Trimestrielle ou Annuelle",
        why: "Justifier la TVA collectée sur les chantiers (5,5 %, 10 %, 20 %) et récupérer la TVA déductible sur vos achats chez vos fournisseurs.",
        titoAction: "Calcul instantané de la TVA nette à reverser et export FEC pour l'expert-comptable."
      }
    ],
    chargesGuide: {
      howMuch: "En Micro-BIC : 12,3 % sur la vente de matériaux équipés + 21,2 % sur la main-d'œuvre (+ 0,2 % à 0,3 % CMA). En société / réel : ~45 % sur la rémunération nette après déduction intégrale des matériaux et du camion.",
      whenToPay: "Chaque fin de mois ou chaque trimestre civil sur les sommes réellement encaissées (acomptes compris).",
      howToAnticipate: "Attention aux acomptes de début de chantier : ne dépensez pas la part URSSAF et TVA d'un acompte de 30 %. Tito isole immédiatement la trésorerie réservée aux taxes."
    },
    titoDemoRows: [
      {
        date: "Hier",
        label: "VIR SEPA — Acompte 30% Chantier Rénovation",
        explanation: "Tito a reconnu un encaissement chantier et l'a inscrit dans votre Livre des recettes.",
        amount: "+ 2 850,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "04 Nov",
        label: "CB POINT.P MATÉRIAUX — FACT 4892",
        explanation: "Tito vous explique : achat fournisseur bâtiment classé automatiquement dans votre Registre des achats (TVA 20 % récupérable).",
        amount: "- 642,80 €",
        isPositive: false,
        autoBadge: "Attribution automatique"
      },
      {
        date: "02 Nov",
        label: "CB TOTALENERGIES STATION — 95,00 €",
        explanation: "💡 Tito a un doute : plein de carburant pour l'utilitaire de chantier ? Cliquez pour le passer en frais de véhicule pro.",
        amount: "- 95,00 €",
        isPositive: false,
        oneClickLabel: "✓ Oui, carburant utilitaire"
      }
    ],
    typicalExpenses: [
      "Achats de matériaux et négoce (Point.P, Rexel, Cedeo, Leroy Merlin, Würth)",
      "Carburant, péages, crédit-bail et entretien du véhicule utilitaire",
      "Assurance Décennale obligatoire et RC Professionnelle",
      "Outillage électroportatif, EPI (vêtements de sécurité) et sous-traitance"
    ],
    thresholds: {
      tvaBase: "85 000 € (ventes) / 37 500 € (pose)",
      tvaMajore: "93 500 € (ventes) / 41 250 € (pose)",
      tvaConsequence: "En activité mixte, votre CA global ne doit pas dépasser 85 000 € ET la part main-d'œuvre ne doit pas dépasser 37 500 € pour rester en franchise de TVA.",
      caPlafond: "188 700 € (global) dont 77 700 € max en pose",
      caConsequence: "Au-delà de ces plafonds en micro, passage au régime réel simplifié (souvent plus avantageux dès que les achats de matériaux sont importants)."
    },
    urssafTips: {
      regime: "Artisanat BIC (Activité mixte : fourniture + main-d'œuvre)",
      tauxCotisations: "12,3 % sur les matériaux / 21,2 % sur la main-d'œuvre",
      seuilFranchiseTVA: "85 000 € global (dont 37 500 € max de prestations)",
      plafondCA: "188 700 € global (dont 77 700 € max de prestations)"
    },
    officialReferences: [
      {
        code: "Art. L123-28 du Code de commerce",
        source: "Légifrance",
        detail: "Obligation de tenir un Livre des recettes ET un Registre des achats pour les activités de vente/fourniture."
      },
      {
        code: "Art. 279-0 bis du CGI (Cerfa n° 13948)",
        source: "DGFiP / impots.gouv.fr",
        detail: "Taux réduits de TVA à 10 % et 5,5 % sur les travaux dans les logements de plus de 2 ans."
      },
      {
        code: "Art. L241-1 du Code des assurances (Loi Spinetta)",
        source: "Code des assurances",
        detail: "Obligation de mentionner l'assurance décennale sur chaque devis et facture."
      }
    ],
    faq: [
      {
        q: "À quel moment dois-je passer en société ou au réel quand j'achète beaucoup de matériaux ?",
        a: "En micro-entreprise, vous payez 12,3 % de cotisations sur les matériaux même si vous faites zéro marge dessus. Dès que vos achats de matériaux + frais de camion dépassent l'abattement forfaitaire, le régime réel ou la société devient beaucoup plus rentable."
      },
      {
        q: "Puis-je séparer la fourniture de matériaux et la main-d'œuvre dans Tito ?",
        a: "Oui, Tito vous permet de ventiler vos encaissements mixtes pour ne jamais surpayer vos cotisations URSSAF."
      }
    ]
  },
  {
    slug: "photographe",
    name: "Photographe & Vidéaste",
    category: "Création & Image",
    persona: "micro",
    statusLabel: "Artisan BIC • Libéral BNC • Artiste-Auteur",
    heroTitle: "Photographe & Vidéaste : obligations, acomptes, droits d'auteur et seuils",
    tagline: "Prestations de prise de vue, mariages, cessions de droits et amortissement du parc matériel : les règles exactes expliquées simplement.",
    seoTitle: "Comptabilité Photographe & Vidéaste : Obligations, Charges & Seuils | Tito",
    metaDescription: "Tout savoir sur la comptabilité de photographe et vidéaste : acomptes mariages, distinction prestation et cession de droits, seuils TVA et automatisation Tito.",
    painPoints: [
      {
        title: "Acomptes encaissés plusieurs mois avant la prestation",
        desc: "En comptabilité de trésorerie, l'acompte d'un mariage payé en janvier est imposable en janvier, même si le reportage a lieu en août."
      },
      {
        title: "Distinction Prestation technique vs Droits d'auteur",
        desc: "Reportage social (mariage, corporate) et cession de droits patrimoniaux ne relèvent pas des mêmes taux ni des mêmes lignes déclaratives."
      },
      {
        title: "Coût élevé des boîtiers, optiques et licences",
        desc: "Savoir si votre matériel photo doit passer en charge immédiate (< 500 € HT) ou en immobilisation amortie sur 3 ans."
      }
    ],
    obligations: [
      {
        what: "Livre des recettes chronologique (Acomptes + Soldes)",
        frequency: "À chaque encaissement",
        why: "Chaque acompte et chaque solde doivent apparaître à leur date réelle de paiement bancaire avec le numéro de facture correspondant.",
        titoAction: "Tito rattache automatiquement l'acompte et le solde à votre prestation."
      },
      {
        what: "Déclaration URSSAF (CMA / BNC ou Artiste-Auteur)",
        frequency: "Mensuelle ou Trimestrielle",
        why: "Calculer les cotisations sociales selon la nature exacte de l'encaissement (prestation artisanale, service ou cession de droits).",
        titoAction: "Récapitulatif prêt à déclarer avec séparation des flux."
      },
      {
        what: "Suivi des immobilisations & Clôture d'exercice",
        frequency: "Annuelle (au 31/12)",
        why: "Au régime réel, justifier l'amortissement de vos boîtiers, objectifs et ordinateurs ainsi que vos frais de déplacement reportage.",
        titoAction: "Export du Grand-Livre, du fichier FEC et de la synthèse 2035 en 1 clic."
      }
    ],
    chargesGuide: {
      howMuch: "En Micro : 21,2 % (prestation de service artisanale/BNC) ou 12,3 % (vente de tirages physiques). En Artiste-Auteur : ~16,2 % sur les cessions de droits.",
      whenToPay: "À la fin du mois ou du trimestre où l'acompte ou le solde a été crédité sur votre compte bancaire.",
      howToAnticipate: "Sur une saison de mariages concentrée entre mai et septembre, Tito lisse votre visibilité pour provisionner vos charges d'hiver."
    },
    titoDemoRows: [
      {
        date: "Hier",
        label: "VIR SEPA — Acompte 40% Reportage Mariage",
        explanation: "Tito a reconnu un acompte client et l'a enregistré en recette de prestation à la date d'encaissement.",
        amount: "+ 960,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "04 Nov",
        label: "CB ADOBE SYSTEMS — CREATIVE CLOUD",
        explanation: "Tito vous explique : abonnement logiciel métier classé automatiquement en charges d'exploitation.",
        amount: "- 67,01 €",
        isPositive: false,
        autoBadge: "Attribution automatique"
      },
      {
        date: "01 Nov",
        label: "CB DIGIT-PHOTO — OBJECTIF 35MM F/1.4",
        explanation: "💡 Tito vous explique : matériel > 500 € HT. Voulez-vous l'inscrire en matériel professionnel à amortir ?",
        amount: "- 1 390,00 €",
        isPositive: false,
        oneClickLabel: "✓ Oui, matériel photo pro"
      }
    ],
    typicalExpenses: [
      "Boîtiers, objectifs, cartes SD, disques SSD et éclairages studio",
      "Abonnements Adobe Creative Cloud, galeries clients en ligne (Lumys, Pic-Time)",
      "Frais de déplacement sur les lieux de shooting et hébergement",
      "Impressions laboratoire, albums photo et assurance matériel tous risques"
    ],
    thresholds: {
      tvaBase: "37 500 € (prestations) / 50 000 € (artistes-auteurs)",
      tvaMajore: "41 250 € (prestations)",
      tvaConsequence: "Dès le franchissement du seuil, vos devis pour particuliers (mariages) doivent inclure la TVA : anticipez-le avec le radar Tito pour ajuster vos tarifs.",
      caPlafond: "77 700 € / an (prestations)",
      caConsequence: "Au-delà de 77 700 €, passage au régime réel permettant de déduire vos achats de boîtiers et d'optiques."
    },
    urssafTips: {
      regime: "Artisan photographe (BIC/CMA), Libéral BNC ou Artiste-Auteur",
      tauxCotisations: "21,2 % (prestations) / 12,3 % (vente de tirages)",
      seuilFranchiseTVA: "37 500 € (seuil majoré à 41 250 €)",
      plafondCA: "77 700 € / an (prestations)"
    },
    officialReferences: [
      {
        code: "Art. 256 & 269 du CGI",
        source: "Code Général des Impôts",
        detail: "Exigibilité de la TVA et de l'impôt dès l'encaissement des acomptes sur prestations."
      },
      {
        code: "Art. 278 septies du CGI",
        source: "BOFiP-Impôts",
        detail: "Taux réduit de TVA à 10 % applicable aux cessions de droits d'auteur et œuvres d'art originales."
      },
      {
        code: "Art. R123-205 du Code de commerce",
        source: "Légifrance",
        detail: "Tenue obligatoire du livre des recettes chronologique."
      }
    ],
    faq: [
      {
        q: "Quand dois-je déclarer un acompte reçu en novembre pour un mariage en juin prochain ?",
        a: "En micro-entreprise comme en BNC, c'est la date d'encaissement sur le compte bancaire qui compte : un acompte encaissé en novembre doit être déclaré sur la période de novembre."
      },
      {
        q: "À partir de quel montant un objectif ou un boîtier doit-il être amorti ?",
        a: "Au régime réel, tout équipement unitaire supérieur à 500 € HT doit être immobilisé et amorti (généralement sur 3 ans pour le matériel photo et informatique)."
      }
    ]
  },
  {
    slug: "graphiste",
    name: "Graphiste, Illustrateur & Webdesigner",
    category: "Design & Digital",
    persona: "micro",
    statusLabel: "Micro-BNC • Artiste-Auteur • SASU",
    heroTitle: "Graphiste & Webdesigner : obligations, abonnements SaaS et cessions de droits",
    tagline: "Identité visuelle, UI/UX, illustrations et abonnements logiciels : tout ce que vous devez déclarer, déduire et clôturer sans jargon.",
    seoTitle: "Comptabilité Graphiste & Webdesigner : Obligations, Charges & Seuils | Tito",
    metaDescription: "Guide comptable factuel pour graphistes, illustrateurs et webdesigners : livre des recettes, abonnements logiciels à l'étranger, seuils TVA et automatisation Tito.",
    painPoints: [
      {
        title: "Factures de logiciels étrangers (Figma, Adobe, Midjourney, Webflow)",
        desc: "Acheter des abonnements SaaS hors de France implique des règles d'autoliquidation de TVA intracommunautaire souvent méconnues."
      },
      {
        title: "Ventilation Création graphique vs Droits d'exploitation",
        desc: "Bien distinguer l'exécution technique (BNC) de la cession de droits d'auteur sur une création originale."
      },
      {
        title: "Régularité des déclarations URSSAF",
        desc: "Même un mois sans encaissement client oblige à valider une déclaration à 0 € sous peine de pénalité forfaitaire."
      }
    ],
    obligations: [
      {
        what: "Livre des recettes chronologique (ou comptabilité BNC)",
        frequency: "Continue (à chaque paiement client)",
        why: "Tracer chaque acompte et solde reçu par virement ou Stripe avec la référence de la facture correspondante.",
        titoAction: "Tito réconcilie vos virements et paiements Stripe en 1 clic."
      },
      {
        what: "Déclaration URSSAF & Déclaration annuelle 2042-C-PRO / 2035",
        frequency: "Mensuelle / Trimestrielle + Mai",
        why: "Déclarer vos recettes encaissées à l'URSSAF et reporter le montant exact sur votre déclaration d'impôt sur le revenu.",
        titoAction: "Synthèse annuelle prête à reporter sans risque d'erreur de calcul."
      },
      {
        what: "Clôture de l'exercice & Archivage des pièces",
        frequency: "Annuelle (au 31/12)",
        why: "Verrouiller vos registres annuels et conserver les justificatifs de vos achats de polices, licences et matériel.",
        titoAction: "Export PDF et FEC normé en 1 clic."
      }
    ],
    chargesGuide: {
      howMuch: "Micro-BNC : ~23,1 % du CA encaissé. Artiste-Auteur : ~16,2 % (+ 1,1 % contribution diffuseur). BNC Réel / Société : cotisations calculées uniquement après déduction de votre matériel et de vos licences.",
      whenToPay: "Chaque fin de mois ou chaque trimestre sur le portail URSSAF.",
      howToAnticipate: "Tito calcule à chaque virement client la part exacte de cotisations sociales et le montant net que vous pouvez vous verser."
    },
    titoDemoRows: [
      {
        date: "Hier",
        label: "VIR SEPA — Identité Visuelle & Charte UI",
        explanation: "Tito a reconnu un règlement client et l'a affecté à vos recettes de prestations BNC.",
        amount: "+ 2 100,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "03 Nov",
        label: "CB FIGMA INC — ABONNEMENT PRO",
        explanation: "Tito vous explique : licence logicielle professionnelle rattachée automatiquement à vos frais d'outils numériques.",
        amount: "- 18,00 €",
        isPositive: false,
        autoBadge: "Attribution automatique"
      },
      {
        date: "01 Nov",
        label: "CB APPLE STORE — IPAD PRO + PENCIL",
        explanation: "💡 Tito a un doute : équipement de création (> 500 € HT) ? Cliquez pour l'inscrire en matériel professionnel.",
        amount: "- 1 249,00 €",
        isPositive: false,
        oneClickLabel: "✓ Oui, matériel de création"
      }
    ],
    typicalExpenses: [
      "Licences Adobe Creative Cloud, Figma, Webflow, Framer, banques d'images et typographies",
      "Ordinateur Mac, écran calibré, tablette graphique (amortissement sur 3 ans)",
      "Hébergement web, nom de domaine et outils de gestion",
      "Coworking, quote-part d'usage du domicile (eau, électricité, internet) et RC Pro"
    ],
    thresholds: {
      tvaBase: "37 500 € / an",
      tvaMajore: "41 250 € / an",
      tvaConsequence: "Si vos clients sont des entreprises (B2B) qui récupèrent la TVA, passer à la TVA ne change pas votre prix HT et vous permet de récupérer 20 % sur votre matériel Apple et vos logiciels.",
      caPlafond: "77 700 € / an (Micro-BNC)",
      caConsequence: "Au-delà de 77 700 €, bascule au régime de la déclaration contrôlée 2035."
    },
    urssafTips: {
      regime: "Profession libérale BNC ou Artiste-Auteur",
      tauxCotisations: "23,1 % (Micro-BNC) ou ~16,2 % (Artiste-Auteur)",
      seuilFranchiseTVA: "37 500 € (seuil majoré à 41 250 €)",
      plafondCA: "77 700 € / an"
    },
    officialReferences: [
      {
        code: "Art. 102 ter du CGI",
        source: "Code Général des Impôts",
        detail: "Régime déclaratif spécial (Micro-BNC) et abattement forfaitaire de 34 %."
      },
      {
        code: "Art. L382-1 du Code de la sécurité sociale",
        source: "Légifrance / Urssaf",
        detail: "Régime social des artistes-auteurs d'œuvres graphiques et plastiques."
      },
      {
        code: "Art. 283-2 du CGI",
        source: "BOFiP-Impôts",
        detail: "Règles de TVA sur les achats de logiciels et services numériques établis hors de France."
      }
    ],
    faq: [
      {
        q: "Comment déclarer un paiement client reçu via Stripe avec une commission prélevée ?",
        a: "Règle impérative : vous devez toujours déclarer le montant BRUT facturé au client (avant commission Stripe) dans votre chiffre d'affaires, et enregistrer la commission Stripe en frais bancaires."
      },
      {
        q: "Le livre des recettes généré par Tito est-il conforme en cas de contrôle ?",
        a: "Oui, il respecte intégralement l'article R123-205 du Code de commerce avec numérotation et horodatage chronologique."
      }
    ]
  },
  {
    slug: "coach-formateur",
    name: "Coach, Formateur & Thérapeute",
    category: "Accompagnement & Conseil",
    persona: "micro",
    statusLabel: "Micro-BNC • Libéral 2035 • Organisme NDA",
    heroTitle: "Coach, Formateur & Praticien : obligations, NDA, BPF et seuils",
    tagline: "Séances individuelles, formations exonérées de TVA (DREETS), Bilan Pédagogique et Financier : tout ce qu'il faut faire et quand le faire.",
    seoTitle: "Comptabilité Coach, Formateur & Thérapeute : Obligations, BPF & Seuils | Tito",
    metaDescription: "Guide comptable complet pour coachs, formateurs indépendants et thérapeutes : livre des recettes, exonération TVA formation (Cerfa 3511), BPF et automatisation Tito.",
    painPoints: [
      {
        title: "Distinction Coaching (soumis à TVA) vs Formation (exonérée DREETS)",
        desc: "Un organisme de formation disposant d'un NDA et du formulaire Cerfa 3511 est exonéré de TVA sur la formation, mais pas sur le conseil."
      },
      {
        title: "Le Bilan Pédagogique et Financier (BPF) annuel",
        desc: "Chaque année avant fin mai, tout formateur détenant un NDA doit télédéclarer son BPF (Cerfa 10443) sous peine de caducité de son numéro."
      },
      {
        title: "Multiplicité des règlements (CB, virement, chèque, espèces)",
        desc: "Pour les praticiens et coachs recevant des particuliers, chaque séance encaissée doit figurer dans le livre chronologique."
      }
    ],
    obligations: [
      {
        what: "Livre des recettes ventilé par type d'activité",
        frequency: "À chaque encaissement",
        why: "Séparer clairement les séances d'accompagnement/coaching et les actions de formation professionnelle continue.",
        titoAction: "Tito catégorise vos encaissements et isole vos flux de formation en 1 clic."
      },
      {
        what: "Bilan Pédagogique et Financier (BPF — Cerfa n° 10443)",
        frequency: "Annuelle (avant le 31 mai sur MAF)",
        why: "Obligatoire pour conserver votre Numéro de Déclaration d'Activité (NDA) auprès de la DREETS et votre certification Qualiopi.",
        titoAction: "Tito totalise automatiquement vos produits de formation par origine des fonds."
      },
      {
        what: "Déclarations URSSAF & Clôture comptable (2035 ou Micro)",
        frequency: "Mensuelle / Trimestrielle + Annuelle",
        why: "Acquitter vos cotisations sociales et produire votre bilan fiscal de fin d'année.",
        titoAction: "Génération instantanée de la synthèse URSSAF, du Grand-Livre et de la 2035."
      }
    ],
    chargesGuide: {
      howMuch: "En Micro-BNC : 23,1 % à 24,6 % du CA encaissé. En BNC Réel (2035) : ~42 % sur le bénéfice net une fois déduits la location de cabinet/salle, vos formations et vos déplacements.",
      whenToPay: "Déclaration mensuelle ou trimestrielle URSSAF ; dépôt de la 2035 et du BPF au printemps.",
      howToAnticipate: "Si vous bénéficiez de l'exonération de TVA DREETS (Cerfa 3511), attention : vous ne récupérez pas non plus la TVA sur vos achats liés à la formation."
    },
    titoDemoRows: [
      {
        date: "Hier",
        label: "VIR SEPA — OPCO Atlas Action Formation",
        explanation: "Tito a reconnu un règlement OPCO : affecté en produits de formation professionnelle (exonéré TVA Art. 261-4-4°a) pour votre BPF.",
        amount: "+ 1 800,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "04 Nov",
        label: "VIR SEPA — Séance Coaching Individuel",
        explanation: "Tito a classé ce règlement dans vos recettes d'accompagnement et mis à jour votre Livre des recettes.",
        amount: "+ 120,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "02 Nov",
        label: "CB LOCATION SALLE SEMINAIRE — 240,00 €",
        explanation: "💡 Tito a un doute : location de salle pour une session de formation ? Cliquez pour le passer en frais pédagogiques.",
        amount: "- 240,00 €",
        isPositive: false,
        oneClickLabel: "✓ Oui, location salle pro"
      }
    ],
    typicalExpenses: [
      "Location de cabinet, bureaux partagés ou salles de séminaire",
      "Plateformes LMS, visioconférence (Zoom, Teams) et supports pédagogiques",
      "Audit de certification Qualiopi, supervision et formation continue du praticien",
      "Déplacements clients, hébergement et assurance RC Pro"
    ],
    thresholds: {
      tvaBase: "37 500 € / an (hors exonération DREETS)",
      tvaMajore: "41 250 € / an",
      tvaConsequence: "Avec l'attestation Cerfa n° 3511-SD délivrée par la DREETS, vos prestations de formation professionnelle restent exonérées de TVA même au-delà de 37 500 €.",
      caPlafond: "77 700 € / an (Micro-BNC)",
      caConsequence: "Au-delà de 77 700 € de CA annuel, passage au régime de la Déclaration Contrôlée (2035) ou en société."
    },
    urssafTips: {
      regime: "Profession libérale BNC & Organisme de formation",
      tauxCotisations: "23,1 % à 24,6 % (Micro-BNC) ou ~42 % du net (2035)",
      seuilFranchiseTVA: "37 500 € (ou exonération totale sur la formation via Cerfa 3511)",
      plafondCA: "77 700 € / an (Micro-BNC)"
    },
    officialReferences: [
      {
        code: "Art. 261-4-4° a du CGI & Cerfa n° 3511-SD",
        source: "DGFiP / DREETS",
        detail: "Exonération de TVA spécifique aux prestations de formation professionnelle continue."
      },
      {
        code: "Art. L6352-6 & R6352-22 du Code du travail (Cerfa n° 10443)",
        source: "Code du travail / Mon Activité Formation",
        detail: "Obligation comptable de séparation des flux et dépôt annuel du Bilan Pédagogique et Financier (BPF)."
      }
    ],
    faq: [
      {
        q: "Comment gérer les règlements en espèces ou chèques de mes clients particuliers ?",
        a: "Vous les saisissez en quelques secondes ou Tito pointe votre remise de chèques bancaire pour qu'ils figurent chronologiquement dans votre livre des recettes."
      },
      {
        q: "Tito m'aide-t-il à remplir mon Bilan Pédagogique et Financier (BPF) ?",
        a: "Oui : Tito distingue vos encaissements de formation (OPCO, entreprises, CPF, particuliers) de vos autres prestations pour vous donner les totaux exacts à reporter sur MAF."
      }
    ]
  },
  {
    slug: "club-sportif",
    name: "Club Sportif & Association Loi 1901",
    category: "Associations Loi 1901",
    persona: "asso",
    statusLabel: "Association Loi 1901 • Club affilié",
    heroTitle: "Club Sportif & Association : cotisations, reçus Cerfa, subventions et AG",
    tagline: "Ce qu'un trésorier ou président doit tenir à jour : registre des cotisations, reçus fiscaux de dons, Cerfa de subventions et bilan d'Assemblée Générale.",
    seoTitle: "Comptabilité Club Sportif & Association 1901 : Obligations, Cerfa & AG | Tito",
    metaDescription: "Guide pratique pour trésoriers de clubs sportifs et associations : registre des adhésions, reçus fiscaux Cerfa 11580, subventions Cerfa 15059 et rapport financier d'AG.",
    painPoints: [
      {
        title: "Passation de trésorerie sur des fichiers Excel illisibles",
        desc: "Quand le bureau change, personne ne comprend le tableur du trésorier précédent. Tito standardise et explique chaque ligne."
      },
      {
        title: "Justificatifs de subventions municipales (Cerfa 15059)",
        desc: "Les mairies et départements exigent un compte-rendu financier précis de l'emploi des subventions attribuées."
      },
      {
        title: "Édition conforme des reçus fiscaux de dons (Cerfa 11580)",
        desc: "Un reçu fiscal non numéroté ou mal libellé expose l'association à une amende égale à 25 % des sommes mentionnées (Art. 1740 A du CGI)."
      }
    ],
    obligations: [
      {
        what: "Livre-journal Recettes / Dépenses & Rapport Financier d'AG",
        frequency: "Toute la saison + Clôture annuelle d'AG",
        why: "Obligation statutaire de présenter et faire approuver des comptes sincères par l'Assemblée Générale des adhérents.",
        titoAction: "Tito génère le bilan financier clair et pédagogique prêt à projeter en AG."
      },
      {
        what: "Registre séquentiel des Reçus Fiscaux de dons (Cerfa n° 11580*05)",
        frequency: "À chaque don ou abandon de frais de bénévole",
        why: "Permet aux donateurs et bénévoles (frais kilométriques non remboursés) de bénéficier de 66 % de réduction d'impôt en toute légalité.",
        titoAction: "Édition et numérotation séquentielle automatique des reçus Cerfa en 1 clic."
      },
      {
        what: "Compte-rendu financier de subvention (Cerfa n° 15059*02)",
        frequency: "Dans les 6 mois suivant la fin de l'exercice",
        why: "Obligatoire pour toute association ayant reçu une subvention publique affectée (Mairie, Département, ANS).",
        titoAction: "Isoler les dépenses rattachées à la subvention pour remplir le Cerfa en 2 minutes."
      }
    ],
    chargesGuide: {
      howMuch: "0 € d'impôt sur les sociétés et 0 € de TVA tant que la gestion est désintéressée et que les recettes lucratives accessoires (buvette, sponsoring) restent sous 78 596 € / an.",
      whenToPay: "Reversement des licences aux fédérations en début de saison ; approbation des comptes lors de l'AG annuelle (souvent en fin de saison sportive au 30 juin ou 31 août).",
      howToAnticipate: "Distinguez toujours dans votre trésorerie la part des cotisations qui doit être reversée à la fédération (FFBB, FFF, FFT...) du budget réel restant pour le club."
    },
    titoDemoRows: [
      {
        date: "Hier",
        label: "VIR SEPA — Subvention Annuelle Mairie",
        explanation: "Tito a reconnu une subvention publique : classée en compte 74 (Subventions d'exploitation) pour votre bilan d'AG.",
        amount: "+ 3 500,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "04 Nov",
        label: "REMISE CHEQUES — 18 Cotisations Adhérents",
        explanation: "Tito vous explique : encaissement rattaché aux cotisations statutaires des membres (exonéré d'impôt).",
        amount: "+ 2 160,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "02 Nov",
        label: "VIR REÇU — Don Mécénat Entreprise Locale",
        explanation: "💡 Tito vous accompagne : s'agit-il d'un don ouvrant droit à reçu fiscal ? Cliquez pour générer le Cerfa n° 11580.",
        amount: "+ 500,00 €",
        isPositive: true,
        oneClickLabel: "✓ Oui, générer le Cerfa de don"
      }
    ],
    typicalExpenses: [
      "Reversements des parts licences et affiliations aux fédérations sportives",
      "Achat de maillots, ballons, chasubles et matériel pédagogique",
      "Frais d'arbitrage, engagements en compétition et déplacements d'équipes",
      "Achats de boissons et denrées pour la buvette et les tournois du club"
    ],
    thresholds: {
      tvaBase: "78 596 € / an (franchise des activités lucratives accessoires)",
      tvaMajore: "N/A (exonération totale sur les activités statutaires non lucratives)",
      tvaConsequence: "Vos cotisations, dons et subventions sont 100 % exonérés. Vos recettes accessoires (buvette, sponsoring, entrées payantes) sont exonérées jusqu'à 78 596 € par an.",
      caPlafond: "153 000 € de dons/subventions (seuil du Plan Comptable Associatif complet)",
      caConsequence: "Sous 153 000 € de subventions publiques, une comptabilité de trésorerie Recettes/Dépenses claire suffit légalement."
    },
    urssafTips: {
      regime: "Association Loi 1901 à but non lucratif",
      tauxCotisations: "0 % d'impôts commerciaux (gestion désintéressée)",
      seuilFranchiseTVA: "78 596 € / an sur les recettes lucratives accessoires (buvettes, sponsors)",
      plafondCA: "Aucun plafond sur les cotisations et subventions"
    },
    officialReferences: [
      {
        code: "Art. 200 & 238 bis du CGI (Cerfa n° 11580*05)",
        source: "DGFiP / impots.gouv.fr",
        detail: "Régime des reçus fiscaux au titre des dons et de l'abandon de frais par les bénévoles."
      },
      {
        code: "Art. 261-7-1° du CGI",
        source: "BOFiP-Impôts",
        detail: "Franchise des impôts commerciaux (TVA, IS, CET) pour les activités lucratives accessoires des associations."
      },
      {
        code: "Arrêté du 11 octobre 2006 (Cerfa n° 15059*02)",
        source: "Service-Public.fr",
        detail: "Compte-rendu financier obligatoire d'utilisation des subventions publiques."
      }
    ],
    faq: [
      {
        q: "Un bénévole qui utilise sa voiture pour les déplacements du club peut-il avoir un reçu fiscal ?",
        a: "Oui ! S'il renonce expressément au remboursement de ses frais kilométriques (calculés au barème officiel) au profit du club, Tito édite le reçu fiscal Cerfa correspondant."
      },
      {
        q: "Puis-je choisir un exercice comptable du 1er septembre au 31 août (saison sportive) ?",
        a: "Absolument. Dans Tito, vous calezs vos dates d'exercice sur votre saison sportive pour que votre clôture tombe juste avant votre Assemblée Générale."
      }
    ]
  },
  {
    slug: "infirmiere-liberale",
    name: "Infirmier(ère) Libéral(e) (IDEL)",
    category: "Santé & Paramédical",
    persona: "liberal",
    statusLabel: "Libéral Conventionné PAMC • BNC 2035",
    heroTitle: "Infirmière Libérale (IDEL) : 2035, CPAM, rétrocessions et frais kilométriques",
    tagline: "Télétransmission CPAM/mutuelles, rétrocessions de remplacement, caisse CARPIMKO et barème véhicule : tout ce que vous devez déclarer et déduire sans erreur.",
    seoTitle: "Comptabilité Infirmière Libérale (IDEL) : 2035, Charges CARPIMKO & Frais | Tito",
    metaDescription: "Guide comptable factuel pour IDEL : livre-journal BNC, déclaration 2035, rétrocessions remplaçants, cotisations CARPIMKO/URSSAF et barème kilométrique avec Tito.",
    painPoints: [
      {
        title: "Des dizaines de virements CPAM et mutuelles chaque semaine",
        desc: "Pointer les lots de télétransmission SESAM-Vitale ligne par ligne prend des heures le dimanche soir si ce n'est pas automatisé."
      },
      {
        title: "Traitement fiscal des rétrocessions aux remplaçants (DAS2)",
        desc: "Les sommes reversées à votre remplaçant viennent en déduction de vos recettes brutes et doivent être déclarées si elles dépassent 2 400 € / an par remplaçant."
      },
      {
        title: "Optimisation des frais de tournée (Barème km vs Frais réels)",
        desc: "Le poste véhicule est votre 1re charge déductible : choisir entre le barème forfaitaire de l'administration et les frais réels change votre impôt de plusieurs milliers d'euros."
      }
    ],
    obligations: [
      {
        what: "Livre-Journal des Recettes et Dépenses BNC",
        frequency: "Continue (mensuelle)",
        why: "Obligatoire au régime de la déclaration contrôlée pour justifier chaque recette de soins et chaque dépense professionnelle.",
        titoAction: "Tito reconnaît automatiquement les virements CPAM/mutuelles et les classe en honoraires."
      },
      {
        what: "Déclaration Contrôlée Cerfa n° 2035-SD",
        frequency: "Annuelle (début mai)",
        why: "Détermine votre bénéfice net imposable (Recettes - Rétrocessions - Frais déductibles) transmis aux impôts, à l'URSSAF et à la CARPIMKO.",
        titoAction: "Préparation sans erreur de toutes les lignes de votre liasse 2035 et export FEC."
      },
      {
        what: "Déclaration des honoraires rétrocédés (DAS2)",
        frequency: "Annuelle (avec la 2035)",
        why: "Obligation légale de déclarer les honoraires rétrocédés à un confrère ou remplaçant dès qu'ils excèdent 2 400 € TTC sur l'année.",
        titoAction: "Tito suit le cumul par remplaçant et génère le récapitulatif annuel en 1 clic."
      }
    ],
    chargesGuide: {
      howMuch: "Sous le régime PAMC (Praticiens et Auxiliaires Médicaux Conventionnés), la CPAM prend en charge la majeure partie de votre cotisation maladie (taux personnel réduit à 0,10 % sur les revenus conventionnés). Comptez environ 32 % à 38 % du bénéfice net au total (URSSAF + CARPIMKO).",
      whenToPay: "Prélèvements mensuels ou trimestriels URSSAF et CARPIMKO, avec régularisation après la déclaration sociale (DS PAMC) intégrée à l'impôt en mai.",
      howToAnticipate: "Provisionnez 35 % de vos encaissements nets de rétrocessions : Tito vous indique en temps réel votre trésorerie réellement disponible."
    },
    titoDemoRows: [
      {
        date: "Hier",
        label: "VIR CPAM — LOT TELETRANSMISSION 048",
        explanation: "Tito a reconnu un règlement d'actes de soins CPAM (exonéré de TVA Art. 261-4-1° CGI) et l'a affecté au poste Honoraires (ligne AA de la 2035).",
        amount: "+ 1 640,50 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "05 Nov",
        label: "PRLV CARPIMKO — COTISATION RETRAITE",
        explanation: "Tito vous explique : cotisation obligatoire CARPIMKO classée dans vos charges sociales déductibles (ligne BT de la 2035).",
        amount: "- 580,00 €",
        isPositive: false,
        autoBadge: "Attribution automatique"
      },
      {
        date: "02 Nov",
        label: "VIR SEPA — Rétrocession Remplaçante Octobre",
        explanation: "💡 Tito vous accompagne : s'agit-il d'une rétrocession d'honoraires versée à un(e) remplaçant(e) ? Cliquez pour la déduire de vos recettes brutes.",
        amount: "- 1 120,00 €",
        isPositive: false,
        oneClickLabel: "✓ Oui, rétrocession remplaçant"
      }
    ],
    typicalExpenses: [
      "Véhicule de tournée (indemnités kilométriques au barème officiel ou leasing/carburant/entretien)",
      "Cotisations obligatoires URSSAF, CARPIMKO, Ordre National des Infirmiers et contrats Madelin/PER",
      "Logiciel de télétransmission et lecteur SESAM-Vitale (Vega, Agathe, Albus, Simply Vitale)",
      "Petit matériel médical, gants, gel hydroalcoolique, DASRI, blanchissage (forfait linge) et redevance cabinet"
    ],
    thresholds: {
      tvaBase: "Exonération totale de TVA sur les soins (Art. 261-4-1° du CGI)",
      tvaMajore: "37 500 € uniquement sur d'éventuelles activités non thérapeutiques",
      tvaConsequence: "Vos actes de soins infirmiers inscrits à la NGAP sont 100 % exonérés de TVA quel que soit votre chiffre d'affaires.",
      caPlafond: "77 700 € (seuil Micro-BNC) — Illimité en Déclaration Contrôlée 2035",
      caConsequence: "En tournée IDEL, vos frais réels (voiture + CARPIMKO + cabinet) dépassent presque toujours l'abattement de 34 % du micro : la déclaration 2035 est le régime de référence."
    },
    urssafTips: {
      regime: "Profession de santé conventionnée PAMC (Déclaration contrôlée 2035)",
      tauxCotisations: "Régime PAMC avantageux (participation CPAM) + Caisse CARPIMKO",
      seuilFranchiseTVA: "Exonération totale de TVA sur les actes de soins (Art. 261-4-1° CGI)",
      plafondCA: "Illimité en déclaration contrôlée n° 2035 (seuil Micro-BNC à 77 700 €)"
    },
    officialReferences: [
      {
        code: "Art. 261-4-1° du Code Général des Impôts",
        source: "Légifrance / BOFiP",
        detail: "Exonération légale de TVA sur les soins dispensés aux personnes par les infirmiers."
      },
      {
        code: "Formulaire Cerfa n° 2035-SD & Barème Kilométrique",
        source: "DGFiP / impots.gouv.fr",
        detail: "Règles de déduction des frais de véhicule, rétrocessions (ligne AF) et frais de blanchissage."
      },
      {
        code: "Art. L646-1 et suivants du Code de la sécurité sociale",
        source: "URSSAF / CARPIMKO",
        detail: "Régime social des Praticiens et Auxiliaires Médicaux Conventionnés (PAMC)."
      }
    ],
    faq: [
      {
        q: "Puis-je déduire un forfait pour le lavage de mes blouses à domicile ?",
        a: "Oui ! L'administration fiscale tolère la déduction des frais de blanchissage à domicile des blouses professionnelles, évalués par référence aux tarifs des pressings locaux avec trace mensuelle dans votre comptabilité."
      },
      {
        q: "Comment Tito gère-t-il les rétrocessions quand je suis remplaçant(e) ou titulaire ?",
        a: "Si vous êtes titulaire, Tito déduit la rétrocession versée (ligne AF de la 2035). Si vous êtes remplaçant(e), Tito l'enregistre directement dans vos honoraires encaissés."
      }
    ]
  },
  {
    slug: "kinesitherapeute",
    name: "Masseur-Kinésithérapeute",
    category: "Santé & Paramédical",
    persona: "liberal",
    statusLabel: "Libéral PAMC • BNC 2035 • SCM / SELARL",
    heroTitle: "Masseur-Kinésithérapeute : 2035, redevances cabinet, CARPIMKO et plateau technique",
    tagline: "Redevances de collaboration, télétransmission CPAM, leasing matériel et actes hors nomenclature : gérez votre cabinet au cordeau.",
    seoTitle: "Comptabilité Kinésithérapeute : 2035, Collaboration, CARPIMKO & TVA | Tito",
    metaDescription: "Tout savoir sur la comptabilité de kinésithérapeute : déclaration 2035, redevances collaborateur/titulaire, amortissement plateau technique, CARPIMKO et seuil TVA hors nomenclature.",
    painPoints: [
      {
        title: "Traitement croisé des redevances de collaboration",
        desc: "Pour l'assistant-collaborateur, la redevance versée au cabinet est un loyer/charge déductible ; pour le titulaire, elle peut déclencher la TVA si elle dépasse le seuil."
      },
      {
        title: "Actes conventionnés (0 % TVA) vs Actes hors nomenclature (ostéo, bien-être, coaching)",
        desc: "Les actes non prescrits à visée esthétique ou bien-être entrent dans le champ de la TVA au-delà de 37 500 € par an."
      },
      {
        title: "Leasing et amortissement du plateau technique",
        desc: "Ondes de choc, tables électriques, pressothérapie : suivre les loyers de crédit-bail ou les dotations aux amortissements sur la 2035."
      }
    ],
    obligations: [
      {
        what: "Livre-Journal BNC & Ventilation des recettes (Soins vs Hors nomenclature)",
        frequency: "Continue",
        why: "Justifier l'exonération de TVA sur les actes thérapeutiques prescrits et isoler d'éventuelles redevances ou séances hors NGAP.",
        titoAction: "Tito catégorise automatiquement vos virements CPAM, mutuelles et redevances."
      },
      {
        what: "Liasse fiscale Cerfa n° 2035-SD",
        frequency: "Annuelle (en mai)",
        why: "Calculer votre bénéfice imposable après déduction du loyer du cabinet, des redevances, du matériel et des frais de véhicule (visites à domicile).",
        titoAction: "Pré-remplissage complet des rubriques 2035 et export FEC en 1 clic."
      },
      {
        what: "Déclaration Sociale PAMC (URSSAF + CARPIMKO)",
        frequency: "Annuelle (via la déclaration de revenus)",
        why: "Ventiler vos revenus conventionnés et non conventionnés pour bénéficier de la prise en charge CPAM sur vos cotisations maladie.",
        titoAction: "Synthèse prête avec séparation exacte des flux conventionnés."
      }
    ],
    chargesGuide: {
      howMuch: "Régime PAMC + CARPIMKO : comptez environ 35 % du bénéfice net (après déduction de toutes les charges du cabinet et de la redevance).",
      whenToPay: "Mensualités URSSAF et appels CARPIMKO, régularisés à N+1 après dépôt de la 2035.",
      howToAnticipate: "Les 2 premières années d'exercice, les cotisations sont forfaitaires : Tito calcule votre vraie provision sur votre bénéfice réel pour éviter la régularisation surprise de 3e année."
    },
    titoDemoRows: [
      {
        date: "Hier",
        label: "VIR CPAM — TELETRANSMISSION SOINS KINE",
        explanation: "Tito a reconnu un lot CPAM (exonéré de TVA Art. 261-4-1° CGI) et l'a affecté à vos honoraires conventionnés.",
        amount: "+ 2 380,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "04 Nov",
        label: "VIR SEPA — Redevance Collaboration Cabinet",
        explanation: "Tito vous explique : redevance de collaboration déduite automatiquement en charges de location de matériel et locaux (ligne 16 / BF de la 2035).",
        amount: "- 890,00 €",
        isPositive: false,
        autoBadge: "Attribution automatique"
      },
      {
        date: "02 Nov",
        label: "PRLV LEASE MEDICAL — ONDES DE CHOC",
        explanation: "💡 Tito a un doute : loyer de leasing pour un équipement du plateau technique ? Cliquez pour le classer en crédit-bail mobilier.",
        amount: "- 265,00 €",
        isPositive: false,
        oneClickLabel: "✓ Oui, leasing matériel kiné"
      }
    ],
    typicalExpenses: [
      "Redevance de collaboration ou loyer du cabinet (et quote-part SCM)",
      "Leasing et amortissement du plateau technique (tables, électrothérapie, ultrasons)",
      "Consommables d'hygiène, draps d'examen, crèmes de massage et petit matériel",
      "Cotisations CARPIMKO, URSSAF, Ordre (CNOMK) et frais de véhicule pour visites à domicile"
    ],
    thresholds: {
      tvaBase: "37 500 € / an (uniquement sur redevances perçues + actes hors soins)",
      tvaMajore: "41 250 € / an",
      tvaConsequence: "Vos actes de rééducation prescrits sont 100 % exonérés de TVA sans plafond. En revanche, si vous êtes titulaire et percevez plus de 37 500 € de redevances de vos collaborateurs, ces redevances deviennent soumises à TVA.",
      caPlafond: "Illimité en Déclaration Contrôlée 2035 (seuil Micro-BNC à 77 700 €)",
      caConsequence: "Dès que vous versez une redevance de 20 % à 30 % + vos cotisations CARPIMKO, la déclaration 2035 au réel est indispensable."
    },
    urssafTips: {
      regime: "Profession de santé conventionnée PAMC (BNC 2035)",
      tauxCotisations: "Régime PAMC + Caisse de retraite CARPIMKO",
      seuilFranchiseTVA: "Exonération sur les soins / 37 500 € sur redevances & hors nomenclature",
      plafondCA: "Déclaration contrôlée 2035 recommandée dès la 1re année"
    },
    officialReferences: [
      {
        code: "Art. 261-4-1° du CGI & BOI-TVA-CHAMP-30-10-20-10",
        source: "BOFiP-Impôts",
        detail: "Exonération des actes de masso-kinésithérapie et régime TVA des redevances de collaboration."
      },
      {
        code: "Formulaire Cerfa n° 2035-SD",
        source: "DGFiP",
        detail: "Déduction des redevances de collaboration, loyers de crédit-bail et charges de SCM."
      }
    ],
    faq: [
      {
        q: "La redevance versée par un kiné collaborateur au titulaire est-elle une rétrocession ?",
        a: "Attention, c'est une erreur fréquente : la redevance versée par le collaborateur au titulaire en contrepartie de la mise à disposition du local et du matériel n'est PAS une rétrocession d'honoraires, mais un loyer d'équipement/local (et une recette imposable à la TVA au-delà de 37 500 € pour le titulaire). Tito applique la règle exacte."
      },
      {
        q: "Comment Tito gère-t-il les appels de fonds de ma SCM ?",
        a: "Tito pointe vos versements à la SCM et intègre la ventilation annuelle issue de la déclaration 2036 dans votre 2035."
      }
    ]
  },
  {
    slug: "avocat",
    name: "Avocat & Profession Juridique",
    category: "Droit & Juridique",
    persona: "liberal",
    statusLabel: "Collaborateur Libéral • Individuel BNC • SELARL / AARPI",
    heroTitle: "Avocat & Collaborateur Libéral : 2035, TVA sur encaissements, CNBF et rétrocessions",
    tagline: "Rétrocessions de collaboration, TVA à 20 %, cotisations CNBF / Barreau et déclaration 2035 : une comptabilité carrée en quelques clics.",
    seoTitle: "Comptabilité Avocat & Collaborateur Libéral : 2035, TVA & CNBF | Tito",
    metaDescription: "Guide comptable factuel pour avocat individuel et collaborateur libéral : déclaration 2035, franchise ou TVA sur les encaissements, cotisations CNBF et Ordre.",
    painPoints: [
      {
        title: "La TVA sur les encaissements (et la franchise spécifique des avocats)",
        desc: "En BNC, la TVA n'est exigible qu'au moment de l'encaissement effectif de la provision ou de la facture d'honoraires — jamais à l'émission."
      },
      {
        title: "Distinction Fonds CARPA / Débours / Honoraires",
        desc: "Les sommes transitant en CARPA ou les débours avancés au nom du client (frais de greffe, commissaire de justice) ne sont pas du chiffre d'affaires."
      },
      {
        title: "Suivi des cotisations CNBF, URSSAF et Ordre",
        desc: "Ventiler correctement la part déductible de la CSG, les cotisations CNBF obligatoires et les contrats Madelin/PER."
      }
    ],
    obligations: [
      {
        what: "Livre-Journal BNC conforme aux règles comptables ordinales",
        frequency: "Mensuelle",
        why: "Tracer séparément les honoraires/rétrocessions encaissés, la TVA collectée/déductible et les débours payés pour le compte des clients.",
        titoAction: "Tito ventile le HT et la TVA automatiquement dès l'import de votre CSV bancaire."
      },
      {
        what: "Déclaration de TVA (CA3 ou CA12) sur les encaissements",
        frequency: "Mensuelle, Trimestrielle ou Annuelle",
        why: "Reverser la TVA collectée sur les honoraires encaissés diminuée de la TVA déductible sur vos achats professionnels.",
        titoAction: "Calcul instantané de la TVA nette de la période en 1 clic."
      },
      {
        what: "Liasse fiscale Cerfa n° 2035-SD",
        frequency: "Annuelle (début mai)",
        why: "Établir le résultat fiscal BNC transmis à la DGFiP, à l'URSSAF et à la CNBF.",
        titoAction: "Préparation complète de la 2035 et export du Fichier des Écritures Comptables (FEC)."
      }
    ],
    chargesGuide: {
      howMuch: "Cotisations sociales globales (URSSAF + CNBF + Ordre) : environ 30 % à 38 % du bénéfice net BNC (avec exonérations partielles les premières années d'inscription au Barreau).",
      whenToPay: "Appels provisionnels URSSAF et CNBF + échéances de TVA selon votre régime.",
      howToAnticipate: "Attention si vous êtes assujetti à la TVA : sur 1 200 € TTC encaissés, 200 € appartiennent immédiatement à l'État (TVA) et ~35 % du HT restant iront aux caisses et impôts. Tito affiche votre vrai net disponible hors TVA."
    },
    titoDemoRows: [
      {
        date: "Hier",
        label: "VIR SEPA — Rétrocession Cabinet Mois Octobre",
        explanation: "Tito a reconnu votre rétrocession mensuelle : ventilée automatiquement en 4 000 € HT (Honoraires) + 800 € de TVA collectée.",
        amount: "+ 4 800,00 €",
        isPositive: true,
        autoBadge: "Attribution automatique"
      },
      {
        date: "05 Nov",
        label: "PRLV CNBF — COTISATION RETRAITE BARREAU",
        explanation: "Tito vous explique : cotisation obligatoire CNBF affectée aux charges sociales déductibles de votre 2035.",
        amount: "- 410,00 €",
        isPositive: false,
        autoBadge: "Attribution automatique"
      },
      {
        date: "02 Nov",
        label: "CB DOCTRINE.FR — ABONNEMENT BASE JURIDIQUE",
        explanation: "💡 Tito vous accompagne : documentation juridique professionnelle ? Cliquez pour déduire la charge et récupérer les 20 % de TVA.",
        amount: "- 168,00 €",
        isPositive: false,
        oneClickLabel: "✓ Oui, documentation pro"
      }
    ],
    typicalExpenses: [
      "Cotisations Ordre des Avocats, CNB, CNBF et URSSAF",
      "Bases de données juridiques (Dalloz, LexisNexis, Doctrine, Lamyline) et logiciels métier (RPVA)",
      "Frais de robe, déplacements aux audiences (train, parking, indemnités km) et réceptions clients",
      "Loyer du cabinet ou sous-location, matériel informatique et contrats prévoyance/retraite Madelin"
    ],
    thresholds: {
      tvaBase: "50 000 € / an (activités réglementées d'avocat — Art. 293 B III du CGI)",
      tvaMajore: "55 000 € / an (et 37 500 € pour les activités hors mission réglementée)",
      tvaConsequence: "Les avocats bénéficient d'un seuil spécifique de franchise de TVA à 50 000 € (majoré à 55 000 €) sur leurs activités réglementées, mais beaucoup optent volontairement pour la TVA dès le début pour récupérer la TVA sur leurs frais.",
      caPlafond: "77 700 € (Micro-BNC) — Illimité en Déclaration Contrôlée 2035",
      caConsequence: "Au-delà de 77 700 € HT de rétrocessions/honoraires (soit ~6 475 € HT/mois), la déclaration contrôlée n° 2035 est obligatoire."
    },
    urssafTips: {
      regime: "Profession libérale réglementée (BNC 2035 ou Micro-BNC)",
      tauxCotisations: "URSSAF + Caisse Nationale des Barreaux Français (CNBF) + Ordre",
      seuilFranchiseTVA: "50 000 € (seuil spécifique avocats, majoré à 55 000 €)",
      plafondCA: "77 700 € en Micro-BNC / Illimité en 2035"
    },
    officialReferences: [
      {
        code: "Art. 293 B III du Code Général des Impôts",
        source: "Légifrance / BOFiP",
        detail: "Seuil spécifique de franchise en base de TVA applicable aux avocats pour leurs activités réglementées."
      },
      {
        code: "Art. 93 du CGI & Formulaire Cerfa n° 2035-SD",
        source: "DGFiP",
        detail: "Règles de détermination du bénéfice imposable BNC (recettes encaissées - dépenses payées) et traitement des débours."
      },
      {
        code: "Art. L723-1 du Code de la sécurité sociale",
        source: "CNBF",
        detail: "Affiliation obligatoire des avocats à la Caisse Nationale des Barreaux Français."
      }
    ],
    faq: [
      {
        q: "Les frais de greffe ou de commissaire de justice avancés pour un client comptent-ils dans mon chiffre d'affaires ?",
        a: "Non, s'il s'agit de vrais débours engagés au nom et pour le compte de votre client et refacturés à l'euro près : Tito les isole en compte de passage pour qu'ils ne gonflent ni votre CA ni vos cotisations."
      },
      {
        q: "Puis-je déduire l'achat et le pressing de ma robe d'avocat ?",
        a: "Oui, la robe d'audience est un vêtement de travail spécifique obligatoire : son achat et son entretien sont 100 % déductibles en frais professionnels."
      }
    ]
  }
];

export function getMetierBySlug(slug) {
  return METIERS.find(m => m.slug === slug);
}
