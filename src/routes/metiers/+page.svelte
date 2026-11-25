<script>
  /** @type {{ data: { metiers: any[] } }} */
  let { data } = $props();
  let searchQuery = $state('');

  let filteredMetiers = $derived(
    (data.metiers || []).filter((/** @type {any} */ m) => 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.statusLabel && m.statusLabel.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );
</script>

<svelte:head>
  <title>Fiches Métiers : Obligations, Charges, Frais & Seuils | Tito</title>
  <meta name="description" content="Consultez les règles comptables factuelles de votre profession : obligations légales, charges URSSAF/caisses, frais déductibles, seuils de TVA et références officielles." />
  <link rel="canonical" href="https://tito-gestion.com/metiers" />
</svelte:head>

<section class="metier-hero-dark">
  <div class="container">
    <nav class="breadcrumb breadcrumb-dark" aria-label="Fil d'Ariane">
      <a href="/" class="breadcrumb-link-dark">Accueil</a>
      <span>/</span>
      <span class="breadcrumb-current-dark">Fiches métiers</span>
    </nav>

    <div class="metier-hero-badges">
      <span class="badge badge-beta">GUIDES FACTUELS • ZÉRO LANGUE DE BOIS</span>
    </div>

    <h1 class="hero-title metier-hero-title">
      Quoi déclarer, combien payer et quels frais déduire selon votre métier ?
    </h1>

    <p class="metier-hero-tagline">
      Obligations de clôture, formulaires Cerfa/2035, cotisations, seuils de TVA et textes de loi : choisissez votre profession pour voir vos règles exactes.
    </p>

    <!-- <div class="metiers-search-bar-dark">
      <input 
        type="search" 
        bind:value={searchQuery}
        placeholder="Rechercher votre métier (ex : consultant, kiné, infirmière, artisan, club...)"
        class="tester-input"
      />
    </div> -->
  </div>
</section>

<section class="section metier-section-light">
  <div class="container">
    {#if filteredMetiers.length === 0}
      <div class="text-center">
        <p>Aucun guide ne correspond à votre recherche pour le moment.</p>
      </div>
    {:else}
      <div class="grid-3">
        {#each filteredMetiers as m}
          <article class="obligation-card metier-directory-card">
            <div class="obligation-card-top">
              <span class="badge badge-pill">{m.category}</span>
              {#if m.statusLabel}
                <span class="obligation-freq-badge">{m.statusLabel}</span>
              {/if}
            </div>

            <h2 class="obligation-title">{m.name}</h2>
            <p class="card-desc">{m.tagline}</p>

            <div class="metier-card-mini-kpis">
              <div>
                <span>Charges :</span>
                <strong>{m.urssafTips.tauxCotisations}</strong>
              </div>
              <div>
                <span>Seuil TVA :</span>
                <strong>{m.urssafTips.seuilFranchiseTVA}</strong>
              </div>
            </div>

            <a href="/pour/{m.slug}" class="btn btn-primary metier-card-btn">
              <span>Voir la fiche {m.name}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>
