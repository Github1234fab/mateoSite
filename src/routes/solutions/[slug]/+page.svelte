<script>
  let { data } = $props();
  let solution = $derived(data.solution);
  let relatedMetiers = $derived(data.relatedMetiers || []);
</script>

<svelte:head>
  <title>{solution.seoTitle}</title>
  <meta name="description" content={solution.metaDescription} />
  <link rel="canonical" href="https://tito.fr/solutions/{solution.slug}" />
  <meta property="og:title" content={solution.seoTitle} />
  <meta property="og:description" content={solution.metaDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://tito.fr/solutions/{solution.slug}" />
</svelte:head>

<!-- HERO SOLUTION -->
<section class="pseo-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="Fil d'Ariane">
      <a href="/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <span class="breadcrumb-link">Solutions</span>
      <span>/</span>
      <span class="breadcrumb-current">{solution.badge}</span>
    </nav>

    <div class="hero-badge-wrap">
      <span class="badge badge-pill">{solution.badge}</span>
    </div>

    <h1 class="hero-title pseo-hero-title">
      {solution.title}
    </h1>

    <p class="pseo-tagline">
      {solution.subtitle}
    </p>

    <div class="pseo-action-row">
      <a href="/#essai-gratuit" class="btn btn-primary btn-lg">Essayer Tito gratuitement</a>
      <a href="#benefices" class="btn btn-secondary btn-lg">Découvrir les fonctionnalités</a>
    </div>
  </div>
</section>

<!-- BENEFICES CLES -->
<section class="section" id="benefices">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-beta">Avantages Clés</span>
      <h2 class="section-title">Ce que Tito change dans votre quotidien</h2>
      <p class="section-subtitle">
        Des outils créés pour supprimer la charge mentale administrative.
      </p>
    </div>

    <div class="grid-3">
      {#each solution.keyBenefits as b}
        <article class="card">
          <div class="card-icon-box card-icon-cyan">
            ✓
          </div>
          <h3 class="card-title">{b.title}</h3>
          <p class="card-desc">{b.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- COCON SÉMANTIQUE : LES MÉTIERS RATTACHÉS À CE STATUT -->
{#if relatedMetiers.length > 0}
  <section class="section section-alt">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-pill">Guides dédiés</span>
        <h2 class="section-title">Les métiers qui utilisent cet espace</h2>
        <p class="section-subtitle">
          Retrouvez les règles fiscales, seuils URSSAF et dépenses types de votre profession.
        </p>
      </div>

      <div class="grid-3">
        {#each relatedMetiers as m}
          <article class="card">
            <span class="badge card-tag">{m.category}</span>
            <h3 class="card-title card-title-md">{m.name}</h3>
            <p class="card-desc">{m.tagline}</p>
            <a href="/pour/{m.slug}" class="card-link">
              <span>Voir le guide {m.name}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </article>
        {/each}
      </div>
    </div>
  </section>
{/if}

<!-- LISTE DES FONCTIONNALITES -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-pill">Boîte à outils</span>
      <h2 class="section-title">Inclus dans votre espace {solution.badge}</h2>
      <p class="section-subtitle">
        Tout est pensé pour que vous n'ayez besoin d'aucun autre tableur.
      </p>
    </div>

    <div class="expense-list">
      {#each solution.features as feat}
        <div class="expense-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>{feat}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- BANNIERE ESSAI GRATUIT -->
<section class="section section-alt">
  <div class="container">
    <div class="cta-banner">
      <h2>Prêt à passer sur Tito pour votre structure ?</h2>
      <p>
        Profitez d'un mois d'essai gratuit, sécurisé et sans engagement. Aucune carte bancaire requise.
      </p>
      <div class="hero-cta-group">
        <a href="/#essai-gratuit" class="btn btn-primary btn-lg">Essayer Tito gratuitement</a>
      </div>
    </div>
  </div>
</section>
