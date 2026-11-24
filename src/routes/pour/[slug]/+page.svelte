<script>
  let { data } = $props();
  let metier = $derived(data.metier);

  let parentSolution = $derived.by(() => {
    if (metier.persona === 'liberal' || metier.category.includes('Santé') || metier.category.includes('Droit')) {
      return { url: '/solutions/professions-liberales', name: 'Professions Libérales & BNC' };
    }
    if (metier.persona === 'asso') {
      return { url: '/solutions/association', name: 'Associations Loi 1901' };
    }
    return { url: '/solutions/micro-entreprise', name: 'Micro-entreprises & Indépendants' };
  });

  /** @type {boolean} */
  let oneClickValidated = $state(false);

  // Helpers pour l'élision et la grammaire française
  function formatDeMetier(name) {
    if (!name) return '';
    const clean = name.trim();
    const firstChar = clean.charAt(0).toLowerCase();
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y', 'é', 'è', 'ê', 'h'];
    const formatted = clean.charAt(0).toLowerCase() + clean.slice(1);
    if (voyelles.includes(firstChar)) {
      return `d'${formatted}`;
    }
    return `de ${formatted}`;
  }

  function formatPourMetier(name) {
    if (!name) return '';
    const clean = name.trim();
    const lower = clean.toLowerCase();
    const formatted = clean.charAt(0).toLowerCase() + clean.slice(1);
    if (lower.startsWith('infirmier')) {
      return `pour un(e) ${formatted}`;
    }
    return `pour un ${formatted}`;
  }
</script>

<svelte:head>
  <title>{metier.seoTitle}</title>
  <meta name="description" content={metier.metaDescription} />
  <link rel="canonical" href="https://tito-gestion.com/pour/{metier.slug}" />
  <meta property="og:title" content={metier.seoTitle} />
  <meta property="og:description" content={metier.metaDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://tito-gestion.com/pour/{metier.slug}" />

  <!-- Schema.org JSON-LD (Breadcrumb & FAQ) -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://tito-gestion.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Métiers",
        "item": "https://tito-gestion.com/metiers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "${metier.name}",
        "item": "https://tito-gestion.com/pour/${metier.slug}"
      }
    ]
  }
  </script>`}

  {#if metier.faq && metier.faq.length > 0}
    {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": ${JSON.stringify(
        metier.faq.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      )}
    }
    </script>`}
  {/if}
</svelte:head>

<!-- 1. HERO BLEU MARINE DYNAMIQUE + SYNTHÈSE FLASH DIRIGEANT -->
<section class="metier-hero-dark">
  <div class="container">
    <nav class="breadcrumb breadcrumb-dark" aria-label="Fil d'Ariane">
      <a href="/" class="breadcrumb-link-dark">Accueil</a>
      <span>/</span>
      <a href="/metiers" class="breadcrumb-link-dark">Fiches métiers</a>
      <span>/</span>
      <span class="breadcrumb-current-dark">{metier.name}</span>
    </nav>

    <div class="metier-hero-badges">
      <span class="badge badge-beta">{metier.category}</span>
      {#if metier.statusLabel}
        <span class="metier-status-pill">{metier.statusLabel}</span>
      {/if}
    </div>

    <h1 class="hero-title metier-hero-title">
      {metier.heroTitle}
    </h1>

    <p class="metier-hero-tagline">
      {metier.tagline}
    </p>

    <!-- Sommaire d'accès direct en pilules -->
    <nav class="metier-quick-nav" aria-label="Accès rapide aux sections">
      <a href="#obligations" class="hero-trust-item-blue">1. Vos obligations</a>
      <a href="#charges" class="hero-trust-item-blue">2. Charges & Périodicité</a>
      <a href="#frais-et-seuils" class="hero-trust-item-blue">3. Frais & Seuils</a>
      <a href="#references-officielles" class="hero-trust-item-blue">4. Textes officiels</a>
      <a href="#faq-metier" class="hero-trust-item-blue">5. Questions fréquentes</a>
    </nav>

    <!-- Grille des 4 repères factuels immédiats -->
    <div class="metier-kpi-strip">
      <div class="metier-kpi-card">
        <span class="metier-kpi-label">Régime & Cadre</span>
        <strong class="metier-kpi-val">{metier.urssafTips.regime}</strong>
      </div>
      <div class="metier-kpi-card">
        <span class="metier-kpi-label">Cotisations & Charges</span>
        <strong class="metier-kpi-val">{metier.urssafTips.tauxCotisations}</strong>
      </div>
      <div class="metier-kpi-card">
        <span class="metier-kpi-label">Seuil Franchise TVA</span>
        <strong class="metier-kpi-val">{metier.urssafTips.seuilFranchiseTVA}</strong>
      </div>
      <div class="metier-kpi-card">
        <span class="metier-kpi-label">Plafond / Déclaration</span>
        <strong class="metier-kpi-val">{metier.urssafTips.plafondCA}</strong>
      </div>
    </div>
  </div>
</section>

<!-- 2. BLOC OBLIGATIONS (FOND CLAIR) : QUOI, QUAND, POURQUOI, ET COMMENT TITO LE GÈRE -->
<section class="section metier-section-light" id="obligations">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-pill">1 • VOS OBLIGATIONS LÉGALES</span>
      <h2 class="section-title-center">Qu'est-ce que vous devez produire, quand et pourquoi ?</h2>
      <p class="section-subtitle">
        Sans jargon ni détour : voici les livrables exacts exigés par l'administration {formatPourMetier(metier.name)}, et comment Tito les automatise.
      </p>
    </div>

    <div class="grid-3">
      {#each metier.obligations as ob, i}
        <article class="obligation-card">
          <div class="obligation-card-top">
            <span class="obligation-step-num">Obligation {i + 1}</span>
            <span class="obligation-freq-badge">{ob.frequency}</span>
          </div>

          <h3 class="obligation-title">{ob.what}</h3>

          <div class="obligation-block">
            <span class="obligation-block-label">Pourquoi on vous le demande :</span>
            <p class="obligation-block-text">{ob.why}</p>
          </div>

          <div class="obligation-tito-box">
            <span class="obligation-tito-tag">⚡ Ce que Tito règle en 1 clic</span>
            <p class="obligation-tito-text">{ob.titoAction}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- 3. BLOC CHARGES & DÉMO PILULES TITO (FOND BLEU MARINE) -->
<section class="section-pillars-blue" id="charges">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-beta">2 • GESTION DES CHARGES & TRÉSORERIE</span>
      <h2 class="section-pillars-title">Combien payer, à quelle période et comment anticiper ?</h2>
      <p class="section-pillars-sub">
        Un dirigeant a besoin de chiffres clairs pour ne jamais être pris au dépourvu par un appel de cotisations ou une régularisation.
      </p>
    </div>

    <div class="grid-3 charges-cards-grid">
      <article class="pillar-card-dark">
        <span class="badge pillar-card-tag">COMBIEN ?</span>
        <h3 class="pillar-card-title">Le poids réel des charges</h3>
        <p class="pillar-card-desc">{metier.chargesGuide.howMuch}</p>
      </article>

      <article class="pillar-card-dark">
        <span class="badge pillar-card-tag">QUAND ?</span>
        <h3 class="pillar-card-title">Calendrier & Périodicité</h3>
        <p class="pillar-card-desc">{metier.chargesGuide.whenToPay}</p>
      </article>

      <article class="pillar-card-dark">
        <span class="badge pillar-card-tag">COMMENT ANTICIPER ?</span>
        <h3 class="pillar-card-title">La règle de sécurité</h3>
        <p class="pillar-card-desc">{metier.chargesGuide.howToAnticipate}</p>
      </article>
    </div>

    <!-- DÉMO CONCRÈTE DES PILULES TITO POUR CE MÉTIER -->
    {#if metier.titoDemoRows && metier.titoDemoRows.length > 0}
      <div class="metier-live-demo-wrap">
        <div class="metier-demo-header-text">
          <span class="badge badge-beta">Pédagogie Tito en direct</span>
          <h3>Voici comment Tito classe vos opérations et vous explique chaque règle</h3>
          <p>Pas de compte comptable obscur : Tito attribue automatiquement ce qu'il connaît et vous pose une question en 1 clic lorsqu'il faut trancher.</p>
        </div>

        <div class="hero-mockup-frame">
          <div class="mockup-window-header">
            <div class="mockup-window-dots">
              <span class="mockup-dot mockup-dot-red"></span>
              <span class="mockup-dot mockup-dot-yellow"></span>
              <span class="mockup-dot mockup-dot-green"></span>
            </div>
            <div class="mockup-window-title">Tito — Espace {metier.name}</div>
            <div class="mockup-window-status">
              <span class="mockup-status-pulse"></span>
              <span>Explications activées</span>
            </div>
          </div>

          <div class="mockup-feed-table">
            {#each metier.titoDemoRows as row}
              <div class="mockup-feed-row {row.oneClickLabel ? 'mockup-row-question' : ''}">
                <div class="mockup-row-left">
                  <span class="mockup-row-date">{row.date}</span>
                  <div>
                    <div class="mockup-row-label">{row.label}</div>
                    <div class="mockup-row-meta {row.oneClickLabel ? 'mockup-meta-highlight' : ''}">
                      {row.explanation}
                    </div>
                  </div>
                </div>
                <div class="mockup-row-right">
                  <span class={row.isPositive ? 'mockup-amount-positive' : 'mockup-amount-negative'}>
                    {row.amount}
                  </span>
                  {#if row.autoBadge}
                    <span class="mockup-classification-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{row.autoBadge}</span>
                    </span>
                  {:else if row.oneClickLabel}
                    <button
                      type="button"
                      class="mockup-oneclick-btn {oneClickValidated ? 'is-validated' : ''}"
                      onclick={() => (oneClickValidated = !oneClickValidated)}
                    >
                      {oneClickValidated ? '✓ Classé et mémorisé par Tito' : row.oneClickLabel}
                    </button>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- 4. BLOC FRAIS & SEUILS (FOND CLAIR) -->
<section class="section metier-section-light" id="frais-et-seuils">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-pill">3 • FRAIS PROFESSIONNELS & SEUILS LÉGAUX</span>
      <h2 class="section-title-center">Vos frais récurrents et les plafonds à ne pas dépasser</h2>
      <p class="section-subtitle">
        Tout ce que Tito surveille en arrière-plan pour éviter la moindre erreur fiscale.
      </p>
    </div>

    <div class="metier-dual-grid">
      <!-- Colonne gauche : Frais & Défis -->
      <div class="metier-frais-box">
        <div class="metier-box-header">
          <span class="badge badge-pill">Dépenses & Frais du métier</span>
          <h3>Les charges que Tito pointe automatiquement</h3>
          <p>Dès qu'elles apparaissent sur votre CSV bancaire, Tito les reconnaît et vérifie leur déductibilité :</p>
        </div>

        <div class="metier-expense-stack">
          {#each metier.typicalExpenses as expense}
            <div class="metier-expense-row">
              <span class="pillar-check-icon">✓</span>
              <span>{expense}</span>
            </div>
          {/each}
        </div>

        <div class="metier-pain-mini-list">
          <h4>Points de vigilance spécifiques ({metier.name}) :</h4>
          {#each metier.painPoints as pain}
            <div class="metier-pain-mini-item">
              <strong>• {pain.title} :</strong> {pain.desc}
            </div>
          {/each}
        </div>
      </div>

      <!-- Colonne droite : Seuils TVA & Plafonds -->
      <div class="metier-seuils-box">
        <div class="metier-box-header">
          <span class="badge badge-beta">Radar des Seuils 2026</span>
          <h3>Les limites légales à surveiller</h3>
          <p>Tito affiche une jauge en temps réel par rapport à ces deux plafonds officiels :</p>
        </div>

        <div class="seuil-alert-card">
          <div class="seuil-alert-top">
            <span class="seuil-tag">SEUIL DE FRANCHISE TVA</span>
            <strong class="seuil-amount">{metier.thresholds.tvaBase}</strong>
          </div>
          <div class="seuil-sub-limit">
            Seuil majoré (tolérance) : <strong>{metier.thresholds.tvaMajore}</strong>
          </div>
          <p class="seuil-consequence">
            <strong>Ce que ça implique :</strong> {metier.thresholds.tvaConsequence}
          </p>
        </div>

        <div class="seuil-alert-card">
          <div class="seuil-alert-top">
            <span class="seuil-tag">PLAFOND DE RÉGIME / CA</span>
            <strong class="seuil-amount">{metier.thresholds.caPlafond}</strong>
          </div>
          <p class="seuil-consequence">
            <strong>Ce que ça implique :</strong> {metier.thresholds.caConsequence}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 5. BLOC RÉFÉRENCES OFFICIELLES & CONFIANCE (FOND BLEU NUIT) -->
<section class="section metier-references-section" id="references-officielles">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-beta">4 • SOURCES LÉGALES & RÉFÉRENCES OFFICIELLES</span>
      <h2 class="section-pillars-title">Des règles issues des textes officiels, jamais d'un chapeau.</h2>
      <p class="section-pillars-sub">
        Chaque explication et chaque export de Tito s'appuient strictement sur les articles en vigueur du Code général des impôts, du Code de commerce et des caisses sociales.
      </p>
    </div>

    <div class="grid-3">
      {#each metier.officialReferences as ref}
        <article class="reference-card-dark">
          <div class="reference-source-tag">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>{ref.source}</span>
          </div>
          <h3 class="reference-code-title">{ref.code}</h3>
          <p class="reference-detail-text">{ref.detail}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- 6. FAQ MÉTIER (FOND BLANC) -->
{#if metier.faq && metier.faq.length > 0}
  <section class="section metier-section-light" id="faq-metier">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-pill">5 • QUESTIONS FRÉQUENTES</span>
        <h2 class="section-title-center">Les réponses factuelles pour {metier.name}</h2>
      </div>

      <div class="faq-grid">
        {#each metier.faq as item}
          <div class="faq-card">
            <h3 class="faq-q">{item.q}</h3>
            <p class="faq-a">{item.a}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}

<!-- 7. CTA FINAL BLEU MARINE (TARIF UNIQUE 69,90 €/AN) -->
<section class="section trial-section-dark">
  <div class="container">
    <div class="trial-custom-card">
      <span class="trial-custom-badge">1ER RELEVÉ OFFERT (60 ÉCRITURES) • TARIF UNIQUE DÈS 5,82 €/MOIS</span>

      <h2 class="trial-custom-title">
        Pilotez votre activité {formatDeMetier(metier.name)} en 2 minutes par semaine.
      </h2>

      <p class="trial-custom-subtitle">
        Vous importez votre CSV, Tito classe, vous explique chaque règle et génère vos documents officiels en 1 clic.
      </p>

      <div class="trial-custom-action-wrap">
        <a href="https://app.tito-gestion.com" class="trial-custom-cta-btn" target="_blank" rel="noopener">
          Essayer Tito gratuitement pour {metier.name} &rarr;
        </a>
      </div>

      <div class="trial-custom-trust-row">
        <span>Sans carte bancaire</span>
        <span class="trial-custom-dot">•</span>
        <span>Tarif unique 69,90 €/an (5,82 €/mois)</span>
        <span class="trial-custom-dot">•</span>
        <a href={parentSolution.url} class="metier-parent-link">Voir aussi l'espace {parentSolution.name} &rarr;</a>
      </div>
    </div>
  </div>
</section>
