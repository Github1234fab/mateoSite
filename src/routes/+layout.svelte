<script>
  import '../styles/main.css';

  let { children } = $props();
  let mobileMenuOpen = $state(false);

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<svelte:head>
  <title>Tito — La gestion, sans jargon</title>
  <meta name="description" content="La compta expliquée et réglée en 3 gestes simples. Tu glisses ton CSV, Tito range tes opérations, t'indique tes obligations et sort tes pièces en 1 clic." />
</svelte:head>

<!-- HEADER GLOBAL ÉPURÉ : ZÉRO USINE À GAZ -->
<header class="site-header">
  <div class="container header-inner">
    <a href="/" class="brand-link" aria-label="Retour à l'accueil Tito" onclick={closeMobileMenu}>
      <img src="/logo-tito.png" alt="Logo Tito" class="brand-logo" />
      <span class="brand-name">Ti<span class="brand-name-accent">t</span>o</span>
    </a>

    <nav class="nav-links" aria-label="Navigation principale">
      <a href="/#les-3-gestes" class="nav-link">En 3 actions</a>
      <a href="/#solutions" class="nav-link">Selon votre statut</a>
      <a href="/metiers" class="nav-link">Obligations par métier</a>
      <a href="/#tarif" class="nav-link">Tarif unique</a>
    </nav>

    <div class="header-actions">
      <a href="https://app.tito-gestion.com/?mode=login" class="btn btn-secondary header-login-btn" target="_blank" rel="noopener" onclick={closeMobileMenu}>
        <svg class="header-login-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        <span class="login-label-full">Se connecter</span>
        <span class="login-label-short">Connexion</span>
      </a>
      <a href="https://app.tito-gestion.com/?mode=register" class="btn btn-primary btn-header-cta" target="_blank" rel="noopener" onclick={closeMobileMenu}>
        <span class="cta-label-full">Essayer gratuitement</span>
        <span class="cta-label-short">Essayer</span>
      </a>
      <button
        type="button"
        class="mobile-menu-toggle"
        aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={mobileMenuOpen}
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
      >
        {#if mobileMenuOpen}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        {:else}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        {/if}
      </button>
    </div>
  </div>

  {#if mobileMenuOpen}
    <nav class="mobile-nav-drawer" aria-label="Navigation mobile">
      <a href="/#les-3-gestes" class="mobile-nav-link" onclick={closeMobileMenu}>En 3 actions</a>
      <a href="/#solutions" class="mobile-nav-link" onclick={closeMobileMenu}>Selon votre statut</a>
      <a href="/metiers" class="mobile-nav-link" onclick={closeMobileMenu}>Obligations par métier</a>
      <a href="/tarifs" class="mobile-nav-link" onclick={closeMobileMenu}>Tarif unique (69,90 €/an)</a>
      <div class="mobile-nav-actions">
        <a href="https://app.tito-gestion.com/?mode=login" class="btn btn-secondary" target="_blank" rel="noopener" onclick={closeMobileMenu}>Se connecter</a>
        <a href="https://app.tito-gestion.com/?mode=register" class="btn btn-primary" target="_blank" rel="noopener" onclick={closeMobileMenu}>Essayer gratuitement</a>
      </div>
    </nav>
  {/if}
</header>

<!-- CONTENU PAGE -->
<main>
  {@render children()}
</main>

<!-- FOOTER GLOBAL -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="/" class="brand-link footer-brand">
          <!-- <img src="/logo-tito.png" alt="Logo Tito" class="brand-logo" /> -->
          <span class="brand-name footer-brand-name">Ti<span class="brand-name-accent">t</span>o</span>
        </a>
        <p class="footer-desc">
          La compta sans jargon, en 3 actions simples. Consacrez 98 % de votre temps à votre métier, Tito s'occupe des 2 % restants.
        </p>
      
      </div>

      <div>
        <h3 class="footer-col-title">Solutions</h3>
        <ul class="footer-links">
          <li><a href="/solutions/micro-entreprise" class="footer-link">Micro-entreprises</a></li>
          <li><a href="/solutions/association" class="footer-link">Associations Loi 1901</a></li>
          <li><a href="/solutions/professions-liberales" class="footer-link">Professions Libérales</a></li>
          <li><a href="/solutions/tpe" class="footer-link">TPE, Commerçants & Artisans</a></li>
          <li><a href="/metiers" class="footer-link">Tous les guides par métier</a></li>
        </ul>
      </div>

      <div>
        <h3 class="footer-col-title">Fonctionnalités</h3>
        <ul class="footer-links">
          <li><a href="/fonctionnalites/livre-recettes" class="footer-link">Livre des recettes automatique</a></li>
          <li><a href="/fonctionnalites/meteo-tresorerie" class="footer-link">Météo de trésorerie</a></li>
          <li><a href="/fonctionnalites/import-bancaire" class="footer-link">Import CSV bancaire</a></li>
          <li><a href="/fonctionnalites/recus-fiscaux" class="footer-link">Reçus fiscaux CERFA (Dons)</a></li>
        </ul>
      </div>

      <div>
        <h3 class="footer-col-title">Tito</h3>
        <ul class="footer-links">
          <li><a href="https://app.tito-gestion.com/?mode=login" class="footer-link footer-login-link" target="_blank" rel="noopener">Se connecter</a></li>
          <li><a href="/a-propos" class="footer-link">Notre vision</a></li>
          <li><a href="/tarifs" class="footer-link">Tarifs transparents</a></li>
          <li><a href="/securite-donnees" class="footer-link">Sécurité & Confidentialité</a></li>
          <li><a href="/contact" class="footer-link">Contact</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div>© 2026 Tito. Tous droits réservés. Conçu en France pour les entrepreneurs, libéraux et bénévoles.</div>
      <div class="footer-legal-links">
        <a href="/cgu" class="footer-link">CGU</a>
        <a href="/mentions-legales" class="footer-link">Mentions légales</a>
        <a href="/confidentialite" class="footer-link">Politique de confidentialité</a>
      </div>
    </div>
  </div>
</footer>
