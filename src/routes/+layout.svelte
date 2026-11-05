<script>
  import '../styles/main.css';

  let { children } = $props();
  let solutionsOpen = $state(false);

  function toggleSolutions() {
    solutionsOpen = !solutionsOpen;
  }

  function closeSolutions() {
    solutionsOpen = false;
  }
</script>

<svelte:head>
  <title>Matéo — Le logiciel de gestion et compta pour Indépendants, Libéraux, TPE et Associations</title>
  <meta name="description" content="Matéo simplifie la comptabilité des micro-entreprises, professions libérales et médicales, TPE et associations. Livre de recettes conforme, suivi des adhésions, météo de trésorerie et catégorisation intelligente." />
</svelte:head>

<!-- HEADER GLOBAL -->
<header class="site-header">
  <div class="container header-inner">
    <a href="/" class="brand-link" aria-label="Retour à l'accueil Matéo">
      <img src="/logo-mateo.png" alt="Logo Matéo" class="brand-logo" />
      <span class="brand-name">Mat<span class="brand-name-accent">é</span>o</span>
    </a>

    <nav class="nav-links" aria-label="Navigation principale">
      <!-- DROPDOWN SOLUTIONS -->
      <div 
        class="nav-dropdown"
        role="none"
        onmouseenter={() => (solutionsOpen = true)}
        onmouseleave={() => (solutionsOpen = false)}
      >
        <button 
          type="button"
          class="nav-dropdown-trigger" 
          aria-expanded={solutionsOpen}
          aria-haspopup="true"
          onclick={toggleSolutions}
        >
          <span>Solutions</span>
          <svg class="dropdown-chevron {solutionsOpen ? 'chevron-rotated' : ''}" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        <div class="nav-dropdown-menu {solutionsOpen ? 'is-open' : ''}">
          <div class="dropdown-grid">
            <a href="/solutions/micro-entreprise" class="dropdown-item" onclick={closeSolutions}>
              <div>
                <div class="dropdown-item-title">Micro-entreprise</div>
                <div class="dropdown-item-desc">Livre des recettes DGFiP & seuils TVA</div>
              </div>
            </a>

            <a href="/solutions/professions-liberales" class="dropdown-item" onclick={closeSolutions}>
              <div>
                <div class="dropdown-item-title">Professions Libérales & Santé</div>
                <div class="dropdown-item-desc">Rapprochement CPAM, honoraires & 2035</div>
              </div>
            </a>

            <a href="/solutions/association" class="dropdown-item" onclick={closeSolutions}>
              <div>
                <div class="dropdown-item-title">Associations Loi 1901</div>
                <div class="dropdown-item-desc">Cotisations, reçus CERFA & AG</div>
              </div>
            </a>

            <a href="/solutions/tpe" class="dropdown-item" onclick={closeSolutions}>
              <div>
                <div class="dropdown-item-title">TPE & Artisans</div>
                <div class="dropdown-item-desc">Météo trésorerie & export bilan</div>
              </div>
            </a>
          </div>

          <div class="dropdown-footer">
            <a href="/metiers" class="dropdown-footer-link" onclick={closeSolutions}>
              <span>Tous les guides par métier (Infirmière, Kiné, Artisan, Avocat...)</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
        </div>
      </div>

      <a href="/#solutions" class="nav-link">Comment ça marche</a>
      <a href="/tarifs" class="nav-link">Tarifs</a>
    </nav>

    <div class="header-actions">
      <a href="https://app.mateo.fr" class="btn btn-ghost" target="_blank" rel="noopener">Connexion</a>
      <a href="/#essai-gratuit" class="btn btn-primary btn-header-cta">Essayer gratuitement</a>
    </div>
  </div>
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
          <!-- <img src="/logo-mateo.png" alt="Logo Matéo" class="brand-logo" /> -->
          <span class="brand-name footer-brand-name">Mat<span class="brand-name-accent">é</span>o</span>
        </a>
        <p class="footer-desc">
          Le copilote de gestion financière sans jargon pour indépendants, professions libérales, artisans, TPE et associations Loi 1901.
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
        <h3 class="footer-col-title">Matéo</h3>
        <ul class="footer-links">
          <li><a href="/a-propos" class="footer-link">Notre vision</a></li>
          <li><a href="/tarifs" class="footer-link">Tarifs transparents</a></li>
          <li><a href="/securite-donnees" class="footer-link">Sécurité & Confidentialité</a></li>
          <li><a href="/contact" class="footer-link">Contact</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div>© 2026 Matéo. Tous droits réservés. Conçu en France pour les entrepreneurs, libéraux et bénévoles.</div>
      <div class="footer-legal-links">
        <a href="/mentions-legales" class="footer-link">Mentions légales</a>
        <a href="/confidentialite" class="footer-link">Politique de confidentialité</a>
      </div>
    </div>
  </div>
</footer>
