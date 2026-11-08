<script>
  const pillars = [
    {
      title: "Micro-entreprise",
      tag: "Auto-entrepreneur",
      desc: "Livre des recettes, registre des achats horodaté, suivi en temps réel des seuils de franchise TVA et des déclarations Urssaf.",
      ctaLabel: "Voir l'espace Micro-entreprise",
      link: "/solutions/micro-entreprise",
      btnClass: "btn-card-cta-cyan"
    },
    {
      title: "Association Loi 1901",
      tag: "Clubs & Assos",
      desc: "Registre des cotisations adhérents, justificatifs Cerfa 15059 pour subventions et génération des reçus fiscaux de dons.",
      ctaLabel: "Voir l'espace Association",
      link: "/solutions/association",
      btnClass: "btn-card-cta"
    },
    {
      title: "Société / TPE",
      tag: "SASU, EURL, SARL, SAS",
      desc: "Comptabilité d'engagement simplifiée : livre-journal, grand-livre, ventilation TVA et export FEC conforme pour l'expert-comptable.",
      ctaLabel: "Voir l'espace Société & TPE",
      link: "/solutions/tpe",
      btnClass: "btn-card-cta"
    },
    {
      title: "Profession Libérale",
      tag: "Déclaration 2035 BNC",
      desc: "Livre-journal des recettes/dépenses BNC, barème kilométrique officiel et préparation sans erreur de la liasse 2035.",
      ctaLabel: "Voir l'espace Libéral BNC",
      link: "/solutions/professions-liberales",
      btnClass: "btn-card-cta"
    },
    {
      title: "SCI Familiale",
      tag: "Impôt sur le Revenu (IR)",
      desc: "Gestion et encaissement des loyers, quittances en 1 clic, suivi des apports en compte courant d'associé et déclaration 2072.",
      ctaLabel: "Voir l'espace SCI Familiale",
      link: "/solutions/sci-familiale",
      btnClass: "btn-card-cta"
    },
    {
      title: "Copropriété Bénévole",
      tag: "Syndic Coopératif",
      desc: "Répartition par tantièmes et lots, appels de fonds trimestriels, fonds travaux ALUR et régularisation des charges annuelles.",
      ctaLabel: "Voir l'espace Copropriété",
      link: "/solutions/copropriete-benevole",
      btnClass: "btn-card-cta"
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

  const steps = [
    {
      num: "1",
      title: "Aucune configuration comptable",
      desc: "Vous choisissez votre structure juridique, Tito applique le bon plan comptable et les bons formulaires fiscaux automatiquement.",
      badge: "Simplicité"
    },
    {
      num: "2",
      title: "Des livrables officiels, pas des brouillons",
      desc: "Du fichier FEC normé au Cerfa de don, chaque document généré est immédiatement transmissible à l'administration ou à un tiers.",
      badge: "Conformité"
    },
    {
      num: "3",
      title: "Un tarif unique et transparent : 8,99 €/mois",
      desc: "Aucun supplément par structure, par lot ou par chiffre d'affaires.",
      badge: "Tarif"
    }
  ];

  const homeFaq = [
    {
      q: "Mon niveau en compta est proche de zéro. Est-ce que je vais vraiment m'en sortir ?",
      a: "Oui, c'est exactement pour toi que Tito existe. Tu n'as aucun numéro de compte comptable à connaître. Tito te parle en français courant (« Pour ton statut, voici ce qu'on te demande », « Clique ici pour ranger cette dépense ») et t'explique le pourquoi en une phrase simple."
    },
    {
      q: "Pourquoi un tarif unique à 8,99 €/mois alors que les autres ont 3 ou 4 formules ?",
      a: "Parce que tu n'as pas de temps à perdre à décrypter un tableau comparatif pour savoir si tu as droit à telle ou telle option. Chez Tito, tout est inclus pour moins de 110 € par an. Tu indiques ton statut, Tito s'adapte, et basta."
    },
    {
      q: "Est-ce que je reste 100 % dans les clous vis-à-vis de l'URSSAF, des impôts ou de mon comptable ?",
      a: "À 100 %. Derrière son interface ultra-simple, Tito applique rigoureusement les règles officielles (livre des recettes DGFiP, catégories BNC 2035, Loi 1901 et exports standards pour l'expert-comptable)."
    },
    {
      q: "Que se passe-t-il après les 30 jours d'essai gratuit ?",
      a: "Zéro piège : on ne te demande pas ta carte bancaire pour essayer. Au bout de 30 jours, si Tito te fait gagner un temps précieux, tu t'abonnes à 8,99 €/mois sans engagement. Sinon, tu récupères tes exports en 1 clic."
    }
  ];

  /** @type {number | null} */
  let openFaqIndex = $state(null);

  /** @param {number} index */
  function toggleFaq(index) {
    openFaqIndex = openFaqIndex === index ? null : index;
  }
</script>

<svelte:head>
  <title>Tito — La gestion sans jargon</title>
  <meta name="description" content="La compta démystifiée en 3 gestes simples. Donne 98 % de ton temps à ton métier et ta passion, Tito s'occupe des 2 % restants pour un tarif unique." />
  <link rel="canonical" href="https://tito.fr" />
</svelte:head>

<!-- 1. HERO (FOND BLEU MARINE) : IMPACTANT, JEUNE & DÉMYSTIFIANT -->
<section class="hero-section-blue">
  <div class="container">
    <div class="hero-badge-wrap">
      <span class="badge badge-beta">LA GESTION SANS JARGON • 100 % CONFORME</span>
    </div>

    <h1 class="hero-title hero-title-blue">
Tito <span class="hero-highlight">comprend</span>, <br> Tito  <span class="hero-highlight">apprend</span>, <br> Tito vous fait gagner du  <span class="hero-highlight">temps</span>
    </h1>

    <p class="hero-subtitle-blue">
      Micro-entreprise, association, société, profession libérale, SCI ou copropriété : Tit<span class="brand-name-accent">o</span> configure vos registres légaux et vos exports en un clic, selon vos obligations réelles.
    </p>

    <div class="hero-cta-group">
      <a href="#essai-gratuit" class="btn btn-primary btn-lg">Essayer Tito gratuitement</a>
      <a href="#les-3-gestes" class="btn btn-outline-white btn-lg">Comprendre le principe en 30 sec &darr;</a>
    </div>

    <!-- <p class="hero-guarantee-note">
      Tarif unique 8,99 €/mois • 30 jours d'essai offert • Sans carte bancaire
    </p> -->

    <div class="hero-trust-list-blue">
      <div class="hero-trust-item-blue">
        <!-- <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> -->
        <span>Micro-entreprise</span>
      </div>
      <div class="hero-trust-item-blue">
        <!-- <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> -->
        <span>Association 1901</span>
      </div>
      <div class="hero-trust-item-blue">
        <!-- <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> -->
        <span>Société / TPE</span>
      </div>
      <div class="hero-trust-item-blue">
        <!-- <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> -->
        <span>Libéral BNC</span>
      </div>
      <div class="hero-trust-item-blue">
        <!-- <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> -->
        <span>SCI Familiale</span>
      </div>
      <div class="hero-trust-item-blue">
        <!-- <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> -->
        <span>Copropriété bénévole</span>
      </div>
    </div>

    <!-- PREUVE VISUELLE : COMMENT TITO TE PARLE VRAIMENT -->
    <div class="hero-mockup-wrapper">
      <div class="hero-mockup-frame">
        <div class="mockup-window-header">
          <div class="mockup-window-dots">
            <span class="mockup-dot mockup-dot-red"></span>
            <span class="mockup-dot mockup-dot-yellow"></span>
            <span class="mockup-dot mockup-dot-green"></span>
          </div>
          <div class="mockup-window-title">Tito — Le copilote sans jargon</div>
          <div class="mockup-window-status">
            <span class="mockup-status-pulse"></span>
            <span>Les comptes sont 100% à jour</span>
          </div>
        </div>

        <!-- Bandeau guide Tito -->
        <div class="mockup-coach-banner">
          <div class="mockup-coach-left">
            <span class="mockup-coach-emoji">👋</span>
            <div>
              <strong>Statut: </strong>
              <span>Livre des recettes à jour ✓ • Seuil TVA sécurisé (reste 18 400 € de marge) ✓</span>
            </div>
          </div>
          <span class="mockup-kpi-badge"> Trésorerie sereine : 8 420 €</span>
        </div>

        <!-- Lignes bancaires -->
        <div class="mockup-feed-table">
          <!-- Ligne 1 : Rangée toute seule -->
          <div class="mockup-feed-row">
            <div class="mockup-row-left">
              <span class="mockup-row-date">Hier</span>
              <div>
                <div class="mockup-row-label">Virement reçu — Client Studio / Prestation</div>
                <div class="mockup-row-meta">Tito a reconnu ce virement et l'a ajouté aux recettes officielles.</div>
              </div>
            </div>
            <div class="mockup-row-right">
              <span class="mockup-amount-positive">+ 1 450,00 €</span>
              <span class="mockup-classification-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Attribution automatique</span>
              </span>
            </div>
          </div>

          <!-- Ligne 2 : Rangée toute seule -->
          <div class="mockup-feed-row">
            <div class="mockup-row-left">
              <span class="mockup-row-date">03 Nov</span>
              <div>
                <div class="mockup-row-label">Prélèvement URSSAF — Cotisations</div>
                <div class="mockup-row-meta">Classé automatiquement dans tes charges sociales obligatoires.</div>
              </div>
            </div>
            <div class="mockup-row-right">
              <span class="mockup-amount-negative">- 340,00 €</span>
              <span class="mockup-classification-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Attribution automatique</span>
              </span>
            </div>
          </div>

          <!-- Ligne 3 : Question 1-clic pédagogique -->
          <div class="mockup-feed-row mockup-row-question">
            <div class="mockup-row-left">
              <span class="mockup-row-date">02 Nov</span>
              <div>
                <div class="mockup-row-label">CB SNCF Voyageurs — 89,00 €</div>
                <div class="mockup-row-meta mockup-meta-highlight">
                  💡 <strong>Tito a un doute :</strong> Était-ce un déplacement pro ? 
                </div>
              </div>
            </div>
            <div class="mockup-row-right">
              <span class="mockup-amount-negative">- 89,00 €</span>
              <span class="mockup-oneclick-btn">
                ✓ Oui, déplacement pro
              </span>
            </div>
          </div>
        </div>

        <div class="mockup-footer-bar">
          
          <div class="mockup-footer-highlight">
            <span>Sortir mes pièces obligatoires en 1 clic</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 2. DÉMYSTIFICATION : LES 3 GESTES (FOND BLANC, STEPPER SANS BOÎTES) -->
<section class="how-it-works-section" id="les-3-gestes">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-pill">GESTION COMPTABLE SANS FRICTION</span>
      <h2 class="section-title-center">Une gestion rigoureuse repose sur 3 évidences.</h2>
      <p class="section-subtitle">
   La gestion financière n'a pas à être opaque ou surdimensionnée. Tito applique une méthode claire et sans détour pour piloter votre structure en toute autonomie.
      </p>
    </div>

    <div class="stepper-track" role="list">
      {#each steps as step, i}
        <div class="stepper-item" role="listitem">
          <div class="stepper-node-row">
            <div class="stepper-circle stepper-circle-{i + 1}">
              <span>{step.num}</span>
            </div>
          </div>
          <span class="stepper-time-tag">{step.badge}</span>
          <h3 class="stepper-title">{step.title}</h3>
          <p class="stepper-desc">{step.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- 3. ÉCOSYSTÈME TITO (FOND BLEU MARINE CONSERVÉ) -->
<section class="section-pillars-blue" id="solutions">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-beta">Écosystème Tito</span>
      <h2 class="section-pillars-title">Tito gère la compta de toutes les formes juridiques</h2>
      <p class="section-pillars-sub">
Tito s'adapte à toutes les formes juridiques : micro-entreprise, SASU, EURL, SARL, holding,SCI...
      </p>
    </div>

    <div class="grid-3">
      {#each pillars as pillar}
        <article class="pillar-card-dark">
          <span class="badge pillar-card-tag">
            {pillar.tag}
          </span>

          <h3 class="pillar-card-title">{pillar.title}</h3>
          <p class="pillar-card-desc">{pillar.desc}</p>

          <a href={pillar.link} class="btn {pillar.btnClass}">
            <span>{pillar.ctaLabel}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- 4. LE MANIFESTE 98% / 2% & LE TARIF UNIQUE "ET BASTA" (FOND BLANC) -->
<section class="pricing-manifesto-section" id="tarif">
  <div class="container">
    <div class="pricing-manifesto-grid">
      <!-- Colonne gauche : La philosophie 98% / 2% -->
      <div class="manifesto-left">
        <span class="badge badge-pill">Une gestion du temps maîtrisée</span>
        <h2 class="manifesto-title">
          Donnez 98 % de votre énergie à votre <span class="hero-highlight">métier</span>. Laissez Tito s'occuper des 2 % restants pour gérer votre <span class="hero-highlight">comptabilité</span>.
        </h2>
        <p class="manifesto-desc">
          Enfin un logiciel de gestion comptable clair, simple et pédagogique. Tito vous fait gagner du temps et de l'argent.
        </p>

        <div class="manifesto-points">
          <div class="manifesto-point">
            <div class="benefit-check-icon">✓</div>
            <div>
              <strong>Chaque jour Tito apprend</strong>
              <p>Au fur et à mesure, Tito constitue votre bibliothèque de libellés et d'attribution. Plus vous avancez, moins vous travaillez. </p>
            </div>
          </div>

          <div class="manifesto-point">
            <div class="benefit-check-icon">✓</div>
            <div>
              <strong>Pédagogique avant tout</strong>
              <p>L'idéal dans un logiciel de gestion, c'est de comprendre ce qu'il fait, sans aucune notion de comptabilité. </p>
            </div>
          </div>

          <div class="manifesto-point">
            <div class="benefit-check-icon">✓</div>
            <div>
              <strong>Économisez des centaines d'euros chaque année</strong>
              <p>Plus de forfait mensuel de saisie comptable : tout est déjà rangé et prêt en 1 clic.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Colonne droite : La carte Tarif Unique -->
      <div class="single-price-card">
        <span class="single-price-badge">TARIF UNIQUE</span>
        <div class="single-price-Title">Tout Tito. Sans options cachées.</div>

        <div class="single-price-amount-row">
          <span class="single-price-number">8,99 €</span>
          <span class="single-price-period">/ mois</span>
        </div>
        <div class="single-price-yearly">
          Soit ~100 € sur l'année • Rentabilisé dès la 1re semaine
        </div>

        <ul class="single-price-features">
          <li>
            <span class="pillar-check-icon">✓</span>
            <span>Import CSV illimité (100 % des banques françaises)</span>
          </li>
          <li>
            <span class="pillar-check-icon">✓</span>
            <span>Attribution automatique & validation en 1 clic</span>
          </li>
            <li>
            <span class="pillar-check-icon">✓</span>
            <span>Création de structures illimitées</span>
          </li>
          <li>
            <span class="pillar-check-icon">✓</span>
            <span>Radar des obligations & seuils selon la forme juridique</span>
          </li>
          <li>
            <span class="pillar-check-icon">✓</span>
            <span>Toutes vos pièces obligatoires (Livre DGFiP, 2035, CERFA, Bilan)</span>
          </li>
        </ul>

        <a href="https://app.tito.fr" class="btn btn-primary btn-lg single-price-cta" target="_blank" rel="noopener">
          Essayer gratuitement pendant 30 jours &rarr;
        </a>
        <div class="single-price-note">
          Sans carte bancaire • Sans engagement
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 5. SECTION METIERS : TU NE CONNAIS PAS TES OBLIGATIONS ? (FOND BLEU MARINE) -->
<section class="section metiers-home-section" id="metiers-section">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-beta">Fiches métiers sans jargon</span>
      <h2 class="section-pillars-title">Vous n'êtes pas sûr des obligations de votre forme juridique ? Consultez votre fiche métier.</h2>
      <p class="section-pillars-sub">
        Seuils URSSAF, TVA, documents officiels: consultez votre fiche métier, et découvrez comment Tito vous accompagne au quotidien.
      </p>
    </div>

    <div class="metiers-directory-list">
      {#each popularMetiers as m}
        <a href="/pour/{m.slug}" class="metier-clean-link">
          <span class="metier-clean-name">{m.name}</span>
          <span class="metier-clean-arrow" aria-hidden="true">&rarr;</span>
        </a>
      {/each}
    </div>

    <div class="text-center">
      <a href="/metiers" class="btn btn-primary btn-lg center-link">
        <span>Voir tous les métiers et leurs obligations &rarr;</span>
      </a>
    </div>
  </div>
</section>

<!-- 6. MINI-FAQ DIRECTE (FOND BLANC) -->
<section class="section home-faq-section" id="faq">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-pill">Questions fréquentes</span>
      <h2 class="section-title-center">Tito répond à vos questions</h2>
      <p class="section-subtitle">
        Retrouvez les réponses aux questions les plus fréquentes.
      </p>
    </div>

    <div class="accordion-list">
      {#each homeFaq as item, index}
        <div class="accordion-item {openFaqIndex === index ? 'is-open' : ''}">
          <button
            type="button"
            class="accordion-trigger"
            aria-expanded={openFaqIndex === index}
            onclick={() => toggleFaq(index)}
          >
            <span class="accordion-question">{item.q}</span>
            <span class="accordion-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </button>
          {#if openFaqIndex === index}
            <div class="accordion-content">
              <p>{item.a}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- 7. BANNIÈRE ESSAI GRATUIT / CTA FINAL (FOND BLEU MARINE) -->
<section class="section trial-section-dark" id="essai-gratuit">
  <div class="container">
    <div class="trial-custom-card">
      <span class="trial-custom-badge">30 JOURS D'ESSAI OFFERT • SANS CARTE BANCAIRE</span>

      <h2 class="trial-custom-title">
      Testez l'esprit libre,<br> décidez plus tard
      </h2>

      <p class="trial-custom-subtitle">
       importez, Tito range, Tito explique et vous êtes serein, toute l'année.
      </p>

      <div class="trial-custom-grid">
        <div class="trial-custom-col">
          <div class="trial-custom-icon-wrap trial-icon-bg-cyan">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="13" r="8"/>
              <line x1="12" y1="2" x2="12" y2="5"/>
              <polygon points="12.5 8 9.5 13.5 12 13.5 11.5 18 14.5 12.5 12 12.5 12.5 8" fill="rgba(34, 211, 238, 0.25)"/>
            </svg>
          </div>
          <div class="trial-custom-col-title">2 minutes Chrono</div>
          <p class="trial-custom-col-desc">
          Choisissez votre statut juridique, importez votre CSV bancaire et laissez la magie opérer en quelques secondes.
          </p>
        </div>

        <div class="trial-custom-col">
          <div class="trial-custom-icon-wrap trial-icon-bg-mint">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 8h5a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 12 3H7a2.5 2.5 0 0 0-2.5 2.5v3l2.5-1.5"/>
              <path d="M12 7h4a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H14l-2 1.5V11"/>
              <path d="M3 18c2-1 4-1 6.5-1h4c2 0 3.5 1 5.5 2"/>
              <path d="M16 16c1.5-.5 3-.5 4.5 0"/>
            </svg>
          </div>
          <div class="trial-custom-col-title">Simplicité et tranquilité</div>
          <p class="trial-custom-col-desc">
          Tito classe, range et vous comprenez tout ce qu'il fait grâce à des infosbulles.
          </p>
        </div>

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
           Vous testez 30 jours gratuitement, puis 8,99 €/mois si vous restez. Vous résiliez en un clic dès que vous le souhaitez..
          </p>
        </div>
      </div>

      <div class="trial-custom-action-wrap">
        <a href="https://app.tito.fr" class="trial-custom-cta-btn" target="_blank" rel="noopener">
          Créer mon compte et essayer Tito &rarr;
        </a>
      </div>

      <div class="trial-custom-trust-row">
        <span>Sans carte bancaire</span>
        <span class="trial-custom-dot">•</span>
        <span>Tarif unique 8,99 €/mois</span>
        <span class="trial-custom-dot">•</span>
        <span>Résiliable en 1 clic</span>
      </div>
    </div>
  </div>
</section>
