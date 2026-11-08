<script>
  import '../styles/main.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Tito — La gestion, sans jargon</title>
  <meta name="description" content="La compta expliquée et réglée en 3 gestes simples. Tu glisses ton CSV, Tito range tes opérations, t'indique tes obligations et sort tes pièces en 1 clic." />
</svelte:head>

<!-- HEADER GLOBAL ÉPURÉ : ZÉRO USINE À GAZ -->
<header class="site-header">
  <div class="container header-inner">
    <a href="/" class="brand-link" aria-label="Retour à l'accueil Tito">
      <img src="/logo-tito.png" alt="Logo Tito" class="brand-logo" />
      <span class="brand-name">Ti<span class="brand-name-accent">t</span>o</span>
    </a>

    <nav class="nav-links" aria-label="Navigation principale">
      <a href="/#les-3-gestes" class="nav-link">Les 3 gestes</a>
      <a href="/#solutions" class="nav-link">Selon votre statut</a>
      <a href="/metiers" class="nav-link">Obligations par métier</a>
      <a href="/#tarif" class="nav-link">Tarif unique</a>
    </nav>

    <div class="header-actions">
      <a href="https://app.tito.fr" class="btn btn-ghost" target="_blank" rel="noopener">Connexion</a>
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
          <!-- <img src="/logo-tito.png" alt="Logo Tito" class="brand-logo" /> -->
          <span class="brand-name footer-brand-name">Ti<span class="brand-name-accent">t</span>o</span>
        </a>
        <p class="footer-desc">
          La compta sans jargon, en 3 gestes simples. Consacrez 98 % de votre temps à votre métier, Tito s'occupe des 2 % restants., Tito s'occupe des 2 % restants.
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
        <a href="/mentions-legales" class="footer-link">Mentions légales</a>
        <a href="/confidentialite" class="footer-link">Politique de confidentialité</a>
      </div>
    </div>
  </div>
</footer>
