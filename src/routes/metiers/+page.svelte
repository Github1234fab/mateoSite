<script>
  let { data } = $props();
  let searchQuery = $state('');

  let filteredMetiers = $derived(
    data.metiers.filter(m => 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
</script>

<svelte:head>
  <title>Tous nos guides comptables par Métier & Activité | Matéo</title>
  <meta name="description" content="Explorez nos guides pratiques et solutions comptables adaptées à votre profession : consultants, artisans, photographes, graphistes, coachs et associations." />
  <link rel="canonical" href="https://mateo.fr/metiers" />
</svelte:head>

<section class="pseo-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="Fil d'Ariane">
      <a href="/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <span class="breadcrumb-current">Métiers</span>
    </nav>

    <div class="hero-badge-wrap">
      <span class="badge badge-beta">Guides Pratiques Métiers</span>
    </div>

    <h1 class="hero-title pseo-hero-title">
      La comptabilité expliquée selon votre métier
    </h1>

    <p class="pseo-tagline">
      Chaque profession a ses charges types, ses seuils URSSAF et ses particularités de TVA. Trouvez le guide adapté à votre activité.
    </p>

    <div class="tester-input-group search-input-wrap">
      <input 
        type="search" 
        bind:value={searchQuery}
        placeholder="Rechercher votre métier (ex: consultant, artisan...)"
        class="tester-input search-input-light"
      />
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    {#if filteredMetiers.length === 0}
      <div class="text-center">
        <p>Aucun guide ne correspond à votre recherche pour le moment.</p>
      </div>
    {:else}
      <div class="grid-3">
        {#each filteredMetiers as m}
          <article class="card">
            <span class="badge card-tag">{m.category}</span>
            <h2 class="card-title card-title-md">{m.name}</h2>
            <p class="card-desc">{m.tagline}</p>
            <a href="/pour/{m.slug}" class="card-link">
              <span>Voir le guide et les règles {m.name}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>
