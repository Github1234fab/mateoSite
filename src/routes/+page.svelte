<script>

  const pillars = [
    {
      title: "Micro-Entreprises",
      tag: "Auto-entrepreneurs",
      icon: "⚡",
      iconClass: "pillar-icon-cyan",
      btnClass: "btn-card-cta-cyan",
      ctaLabel: "Voir l'espace Micro-Entreprise",
      desc: "Livre des recettes chronologique certifié DGFiP, suivi du chiffre d'affaires en direct et alertes en amont sur vos seuils de franchise de TVA.",
      link: "/solutions/micro-entreprise",
      bulletPoints: ["Livre officiel des recettes DGFiP", "Alertes seuils URSSAF & TVA", "Calcul du net disponible estimé"]
    },
    {
      title: "Professions Libérales & Santé",
      tag: "Santé, Droit & BNC",
      icon: "🩺",
      iconClass: "pillar-icon-blue",
      btnClass: "btn-card-cta",
      ctaLabel: "Voir l'espace Libéral & Santé",
      desc: "Kinés, infirmiers IDEL, médecins, psychologues et avocats : suivez vos honoraires, vos rétrocessions et préparez votre 2035 sans stress.",
      link: "/solutions/professions-liberales",
      bulletPoints: ["Rapprochement CPAM & Tiers-Payant", "Déduction des rétrocessions", "Exonération de TVA médicale"]
    },
    {
      title: "Associations Loi 1901",
      tag: "Bénévoles & Dirigeants",
      icon: "🤝",
      iconClass: "pillar-icon-purple",
      btnClass: "btn-card-cta",
      ctaLabel: "Voir l'espace Associations",
      desc: "Gérez vos cotisations, adhérents et dons sans tableur complexe. Édition automatique des reçus fiscaux CERFA officiels pour vos donateurs.",
      link: "/solutions/association",
      bulletPoints: ["Suivi adhérents & cotisations", "Génération automatique reçus CERFA", "Rapport financier pour l'AG"]
    },
    {
      title: "TPE & Artisans",
      tag: "Petites entreprises",
      icon: "📊",
      iconClass: "pillar-icon-emerald",
      btnClass: "btn-card-cta",
      ctaLabel: "Voir l'espace TPE & Artisans",
      desc: "Pilotez sereinement votre trésorerie avec la Météo financière, le radar des échéances et la détection immédiate des factures manquantes.",
      link: "/solutions/tpe",
      bulletPoints: ["Météo de trésorerie prévisionnelle", "Radar des échéances fournisseurs & TVA", "Export pré-comptable pour l'expert"]
    }
  ];

  const popularMetiers = [
    { name: "Infirmier(ère) Libéral(e) IDEL", slug: "infirmiere-liberale" },
    { name: "Masseur-Kinésithérapeute", slug: "kinesitherapeute" },
    { name: "Avocat & Conseil Juridique", slug: "avocat" },
    { name: "Consultant & Freelance BNC", slug: "consultant" },
    { name: "Artisan du Bâtiment", slug: "artisan-batiment" },
    { name: "Photographe & Vidéaste", slug: "photographe" },
    { name: "Graphiste & Designer", slug: "graphiste" },
    { name: "Coach & Formateur", slug: "coach-formateur" },
    { name: "Club Sportif Associatif", slug: "club-sportif" }
  ];
</script>

<svelte:head>
  <title>Matéo — La gestion sans jargon, pour ceux qui travaillent avec passion</title>
  <meta name="description" content="Matéo est le logiciel de gestion financière ultra-simple qui prépare tout pour votre expert-comptable et divise vos frais de tenue de comptes annuelle." />
  <link rel="canonical" href="https://mateo.fr" />
</svelte:head>

<!-- HERO SUR FOND BLEU IMPACTANT -->
<section class="hero-section-blue">
  <div class="container">
    <div class="hero-badge-wrap">
      <span class="badge badge-beta">1 mois d'essai offert • Sans carte bancaire</span>
    </div>

    <h1 class="hero-title hero-title-blue">
      La gestion sans jargon, pour ceux qui <span class="hero-highlight">travaillent avec passion.</span>
    </h1>

    <p class="hero-subtitle-blue">
      Un logiciel ultra-simple, lisible et pédagogique. Matéo ne remplace pas un expert-comptable : il prépare tout pour lui et réduit drastiquement vos frais de comptabilité.
    </p>

    <div class="hero-cta-group">
      <a href="#essai-gratuit" class="btn btn-primary btn-lg">Essayer Matéo gratuitement</a>
      <a href="#solutions" class="btn btn-outline-white btn-lg">Voir selon votre activité &darr;</a>
    </div>

    <p class="hero-guarantee-note">
      1 mois offert • Sans carte bancaire • Prise en main en 3 minutes
    </p>

    <div class="hero-trust-list-blue">
      <div class="hero-trust-item-blue">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Divise vos frais de comptabilité annuelle</span>
      </div>
      <div class="hero-trust-item-blue">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Compatible toutes banques françaises (CSV)</span>
      </div>
      <div class="hero-trust-item-blue">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Conforme normes URSSAF, BNC & Loi 1901</span>
      </div>
    </div>

    <!-- PREUVE VISUELLE : MOCKUP FLAT DE L'INTERFACE MATÉO -->
    <div class="hero-mockup-wrapper">
      <div class="hero-mockup-frame">
        <!-- Barre de fenêtre Mac -->
        <div class="mockup-window-header">
          <div class="mockup-window-dots">
            <span class="mockup-dot mockup-dot-red"></span>
            <span class="mockup-dot mockup-dot-yellow"></span>
            <span class="mockup-dot mockup-dot-green"></span>
          </div>
          <div class="mockup-window-title">Matéo — Pilotage Financier & Pointage Bancaire</div>
          <div class="mockup-window-status">
            <span class="mockup-status-pulse"></span>
            <span>Flux bancaire synchronisé</span>
          </div>
        </div>

        <!-- Barre navigation & KPIs -->
        <div class="mockup-app-bar">
          <div class="mockup-nav-pills">
            <div class="mockup-pill-tab mockup-pill-tab-active">
              <span>Pointage des flux</span>
              <span class="mockup-tab-count">3</span>
            </div>
            <div class="mockup-pill-tab">Météo Trésorerie</div>
            <div class="mockup-pill-tab">Livre des recettes DGFiP</div>
          </div>

          <div class="mockup-kpi-group">
            <div class="mockup-kpi-badge">
              <span>☀️ Météo : Serein (3 mois de visibilité)</span>
            </div>
            <div class="mockup-balance">
              Solde bancaire : <strong>8 420,50 €</strong>
            </div>
          </div>
        </div>

        <!-- Tableau des lignes bancaires classées en vert -->
        <div class="mockup-feed-table">
          <!-- Ligne 1 : Recette encaissée -->
          <div class="mockup-feed-row">
            <div class="mockup-row-left">
              <span class="mockup-row-date">Hier</span>
              <div>
                <div class="mockup-row-label">Virement reçu — Facture #2026-042 (Client SARL Duval)</div>
                <div class="mockup-row-meta">Crédit bancaire • Rapprochement automatique</div>
              </div>
            </div>
            <div class="mockup-row-right">
              <span class="mockup-amount-positive">+ 1 450,00 €</span>
              <span class="mockup-classification-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Recette / Honoraires BNC</span>
              </span>
              <span class="mockup-file-tag">Facture liée ✓</span>
            </div>
          </div>

          <!-- Ligne 2 : Dépense outillage / matières -->
          <div class="mockup-feed-row">
            <div class="mockup-row-left">
              <span class="mockup-row-date">03 Nov</span>
              <div>
                <div class="mockup-row-label">Castorama Pro — Outillage atelier & consommables</div>
                <div class="mockup-row-meta">Débit CB • TVA 20% déduite : 35,75 €</div>
              </div>
            </div>
            <div class="mockup-row-right">
              <span class="mockup-amount-negative">- 214,50 €</span>
              <span class="mockup-classification-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Achats Matériel</span>
              </span>
              <span class="mockup-file-tag">Ticket rattaché ✓</span>
            </div>
          </div>

          <!-- Ligne 3 : Déclaration URSSAF -->
          <div class="mockup-feed-row">
            <div class="mockup-row-left">
              <span class="mockup-row-date">28 Oct</span>
              <div>
                <div class="mockup-row-label">Prélèvement URSSAF — Cotisations sociales T3</div>
                <div class="mockup-row-meta">Prélèvement SEPA • Déduction fiscale certifiée</div>
              </div>
            </div>
            <div class="mockup-row-right">
              <span class="mockup-amount-negative">- 340,00 €</span>
              <span class="mockup-classification-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Charges sociales</span>
              </span>
              <span class="mockup-file-tag">Conforme DGFiP</span>
            </div>
          </div>
        </div>

        <!-- Footer du mockup -->
        <div class="mockup-footer-bar">
          <div>
            ⚡ <strong>Pointage instantané</strong> : Glissez votre relevé bancaire, Matéo ventile tout en français courant.
          </div>
          <div class="mockup-footer-highlight">
            <span>Dossier annuel prêt pour votre expert</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ARGUMENT PHARE : RÉDUIRE LES FRAIS COMPTABLES -->
<section class="expert-box-section">
  <div class="container">
    <div class="expert-pitch-card">
      <div>
        <span class="badge badge-pill">Le bon sens financier</span>
        <h2 class="expert-pitch-title">Ne payez plus votre comptable pour de la simple saisie</h2>
        <p class="expert-pitch-desc">
          Passer des heures à saisir des lignes de relevé bancaire à 150 € ou 250 € par mois est une aberration. Matéo classe vos flux bancaires automatiquement chaque semaine.
        </p>
        <div class="expert-quote-highlight">
          « Vous ne payez l'expert-comptable qu'en une seule fois pour son vrai conseil et votre bilan officiel. Plus besoin de forfait mensuel coûteux pour la simple tenue de vos comptes. »
        </div>
      </div>

      <div class="expert-benefits-list">
        <div class="expert-benefit-item">
          <div class="benefit-check-icon">✓</div>
          <div>
            <div class="benefit-text-title">3 minutes par semaine</div>
            <div class="benefit-text-desc">Vous glissez votre relevé de compte, Matéo pointe et ventile chaque recette et dépense.</div>
          </div>
        </div>

        <div class="expert-benefit-item">
          <div class="benefit-check-icon">✓</div>
          <div>
            <div class="benefit-text-title">Dossier nickel pour le bilan</div>
            <div class="benefit-text-desc">En fin d'exercice, toutes les pièces justificatives sont rattachées et lettrées pour votre expert.</div>
          </div>
        </div>

        <div class="expert-benefit-item">
          <div class="benefit-check-icon">✓</div>
          <div>
            <div class="benefit-text-title">Zéro jargon rébarbatif</div>
            <div class="benefit-text-desc">Des termes limpides que vous comprenez immédiatement, sans formation comptable requise.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 3E BLOC : LES 4 PILIERS AVEC FOND BLEU PUNCHY ET VRAIS BOUTONS CTA -->
<section class="section-pillars-blue" id="solutions">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-beta">Écosystème Matéo</span>
      <h2 class="section-pillars-title">Un logiciel taillé pour chaque métier et chaque statut</h2>
      <p class="section-pillars-sub">
        Fini les interfaces fourre-tout. Matéo active uniquement les fonctions et règles fiscales qui correspondent à votre profil.
      </p>
    </div>

    <div class="grid-4">
      {#each pillars as pillar}
        <article class="pillar-card-dark">
          <span class="badge pillar-card-tag">
            {pillar.tag}
          </span>

          <h3 class="pillar-card-title">{pillar.title}</h3>
          <p class="pillar-card-desc">{pillar.desc}</p>
          
          <div class="pillar-bullet-list">
            {#each pillar.bulletPoints as point}
              <div class="pillar-bullet-item">
                <span class="pillar-check-icon">✓</span>
                <span>{point}</span>
              </div>
            {/each}
          </div>

          <a href={pillar.link} class="btn {pillar.btnClass}">
            <span>{pillar.ctaLabel}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- SECTION METIERS (MAILLAGE DIRECT SUR LA HOME) -->
<section class="section" id="metiers-section">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-pill">Guides dédiés par profession</span>
      <h2 class="section-title">Trouvez votre guide métier personnalisé</h2>
      <p class="section-subtitle">
        Seuils URSSAF, exonérations de TVA, charges déductibles typiques : découvrez comment Matéo s'adapte à votre quotidien.
      </p>
    </div>

    <div class="metiers-showcase-box">
      <div class="metiers-tags-wrap">
        {#each popularMetiers as m}
          <a href="/pour/{m.slug}" class="btn btn-secondary btn-pill">
            <span>{m.name}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        {/each}
      </div>

      <div class="text-center">
        <a href="/metiers" class="btn btn-primary btn-lg center-link">
          <span>Explorer l'annuaire complet de tous les métiers &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- BANNIÈRE ESSAI GRATUIT / CTA -->
<section class="section section-alt" id="essai-gratuit">
  <div class="container">
    <div class="trial-custom-card">
      <span class="trial-custom-badge">ESSAI SANS ENGAGEMENT</span>

      <h2 class="trial-custom-title">
        Découvrez la gestion sans jargon avec Matéo<br />
        Bénéficiez de 30 jours d’essai gratuit, sans carte bancaire.
      </h2>

      <p class="trial-custom-subtitle">
        Prenez le contrôle de votre trésorerie en 3 minutes par semaine.
      </p>

      <div class="trial-custom-grid">
        <!-- Colonne 1 : Accès immédiat -->
        <div class="trial-custom-col">
          <div class="trial-custom-icon-wrap trial-icon-bg-cyan">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="13" r="8"/>
              <line x1="12" y1="2" x2="12" y2="5"/>
              <polygon points="12.5 8 9.5 13.5 12 13.5 11.5 18 14.5 12.5 12 12.5 12.5 8" fill="rgba(34, 211, 238, 0.25)"/>
            </svg>
          </div>
          <div class="trial-custom-col-title">Accès immédiat</div>
          <p class="trial-custom-col-desc">
            Commencez dès maintenant. Vos données sont prêtes à être importées sans effort.
          </p>
        </div>

        <!-- Colonne 2 : Accompagnement bienveillant -->
        <div class="trial-custom-col">
          <div class="trial-custom-icon-wrap trial-icon-bg-mint">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 8h5a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 12 3H7a2.5 2.5 0 0 0-2.5 2.5v3l2.5-1.5"/>
              <path d="M12 7h4a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H14l-2 1.5V11"/>
              <path d="M3 18c2-1 4-1 6.5-1h4c2 0 3.5 1 5.5 2"/>
              <path d="M16 16c1.5-.5 3-.5 4.5 0"/>
            </svg>
          </div>
          <div class="trial-custom-col-title">Accompagnement bienveillant</div>
          <p class="trial-custom-col-desc">
            Des petits conseils et un support humain pour vous guider, sans vous harceler.
          </p>
        </div>

        <!-- Colonne 3 : Liberté totale -->
        <div class="trial-custom-col">
          <div class="trial-custom-icon-wrap trial-icon-bg-amber">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="3"/>
              <path d="M7 11V7a5 5 0 0 1 10 0"/>
              <circle cx="12" cy="16.5" r="1.5" fill="#fbbf24"/>
              <path d="M12 18v2"/>
            </svg>
          </div>
          <div class="trial-custom-col-title">Liberté totale</div>
          <p class="trial-custom-col-desc">
            Zéro prélèvement surprise. C'est vous qui décidez de la suite, tout simplement.
          </p>
        </div>
      </div>

      <div class="trial-custom-action-wrap">
        <a href="https://app.mateo.fr" class="trial-custom-cta-btn" target="_blank" rel="noopener">
          Créer mon compte et essayer Matéo &rarr;
        </a>
      </div>

      <div class="trial-custom-trust-row">
        <span>Sans carte bancaire</span>
        <span class="trial-custom-dot">•</span>
        <span>Essai de 30 jours sans engagement</span>
        <span class="trial-custom-dot">•</span>
        <span>Configuration en 30 secondes</span>
      </div>
    </div>
  </div>
</section>
