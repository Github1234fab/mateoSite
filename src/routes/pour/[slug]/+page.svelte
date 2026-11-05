<script>
  let { data } = $props();
  let metier = $derived(data.metier);

  let parentSolution = $derived.by(() => {
    if (metier.persona === 'liberal' || metier.category.includes('Santé') || metier.category.includes('Droit')) {
      return { url: '/solutions/professions-liberales', name: 'Professions Libérales & Santé' };
    }
    if (metier.persona === 'asso') {
      return { url: '/solutions/association', name: 'Associations Loi 1901' };
    }
    return { url: '/solutions/micro-entreprise', name: 'Micro-entreprises' };
  });
</script>

<svelte:head>
  <title>{metier.seoTitle}</title>
  <meta name="description" content={metier.metaDescription} />
  <link rel="canonical" href="https://mateo.fr/pour/{metier.slug}" />
  <meta property="og:title" content={metier.seoTitle} />
  <meta property="og:description" content={metier.metaDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://mateo.fr/pour/{metier.slug}" />

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
        "item": "https://mateo.fr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Métiers",
        "item": "https://mateo.fr/metiers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "${metier.name}",
        "item": "https://mateo.fr/pour/${metier.slug}"
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

<!-- BREADCRUMB & HERO -->
<section class="pseo-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="Fil d'Ariane">
      <a href="/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="/metiers" class="breadcrumb-link">Métiers</a>
      <span>/</span>
      <span class="breadcrumb-current">{metier.name}</span>
    </nav>

    <div class="hero-badge-wrap">
      <span class="badge badge-pill">{metier.category}</span>
    </div>

    <h1 class="hero-title pseo-hero-title">
      {metier.heroTitle}
    </h1>

    <p class="pseo-tagline">
      {metier.tagline}
    </p>

    <div class="pseo-action-row">
      <a href="/#essai-gratuit" class="btn btn-primary btn-lg">Essayer Matéo pour {metier.name}</a>
      <a href={parentSolution.url} class="btn btn-secondary btn-lg">Espace {parentSolution.name}</a>
    </div>
  </div>
</section>

<!-- SECTION DÉFIS MÉTIER (PAIN POINTS) -->
<section class="section" id="points-clefs">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-beta">Vos défis au quotidien</span>
      <h2 class="section-title">Les spécificités comptables de votre profession</h2>
      <p class="section-subtitle">
        Pourquoi un logiciel de comptabilité générique ne suffit pas pour un {metier.name.toLowerCase()}.
      </p>
    </div>

    <div class="grid-3">
      {#each metier.painPoints as pain, index}
        <article class="card">
          <div class="card-icon-box card-icon-cyan">
            {index + 1}
          </div>
          <h3 class="card-title">{pain.title}</h3>
          <p class="card-desc">{pain.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- SECTION RECAP RÉGLEMENTAIRE / URSSAF / TVA -->
<section class="section section-alt">
  <div class="container">
    <div class="tips-card">
      <div class="tips-header">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <h2 class="tips-title">Repères fiscaux et sociaux pour {metier.name} (2026)</h2>
      </div>

      <div class="tips-grid">
        <div class="tips-item">
          <span class="tips-label">Régime d'activité</span>
          <span class="tips-value">{metier.urssafTips.regime}</span>
        </div>

        <div class="tips-item">
          <span class="tips-label">Taux de cotisations URSSAF</span>
          <span class="tips-value">{metier.urssafTips.tauxCotisations}</span>
        </div>

        <div class="tips-item">
          <span class="tips-label">Seuil de franchise de TVA</span>
          <span class="tips-value">{metier.urssafTips.seuilFranchiseTVA}</span>
        </div>

        <div class="tips-item">
          <span class="tips-label">Plafond de Chiffre d'Affaires</span>
          <span class="tips-value">{metier.urssafTips.plafondCA}</span>
        </div>
      </div>
    </div>

    <div class="section-header">
      <span class="badge badge-pill">Dépenses courantes</span>
      <h2 class="section-title">Les charges récurrentes pointées par Matéo</h2>
      <p class="section-subtitle">
        Matéo reconnaît automatiquement ces libellés sur votre relevé bancaire pour les ventiler sans erreur.
      </p>
    </div>

    <div class="expense-list">
      {#each metier.typicalExpenses as expense}
        <div class="expense-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>{expense}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- SECTION FAQ -->
{#if metier.faq && metier.faq.length > 0}
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-beta">Questions fréquentes</span>
        <h2 class="section-title">Foire aux questions — {metier.name}</h2>
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

<!-- CTA SECTION -->
<section class="section section-alt">
  <div class="container">
    <div class="cta-banner">
      <h2>Prêt à simplifier votre gestion de {metier.name.toLowerCase()} ?</h2>
      <p>
        Profitez de votre premier mois d'essai gratuit et sans engagement. Prenez le contrôle de votre trésorerie en 3 minutes par semaine.
      </p>
      <div class="hero-cta-group">
        <a href="/#essai-gratuit" class="btn btn-primary btn-lg">Essayer Matéo gratuitement</a>
      </div>
    </div>
  </div>
</section>
