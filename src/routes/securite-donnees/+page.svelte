<script>
  // Page Sécurité & Confidentialité Tito
</script>

<svelte:head>
  <title>Sécurité & Confidentialité des Données | Tito</title>
  <meta name="description" content="Découvrez nos engagements en matière de sécurité : hébergement des données en Union Européenne (RGPD), chiffrement AES-256, zéro stockage d'identifiants bancaires et remise d'archive ZIP légale." />
  <link rel="canonical" href="https://tito-gestion.com/securite-donnees" />
</svelte:head>

<!-- HERO SÉCURITÉ -->
<section class="pseo-hero">
  <div class="container">
    <div class="hero-badge-wrap">
      <span class="badge badge-pill">Confiance & Souveraineté</span>
    </div>

    <h1 class="hero-title pseo-hero-title">
      Vos données financières sont sacrées.<br />
      <span style="color: var(--color-primary);">Elles restent sous votre contrôle exclusif.</span>
    </h1>

    <p class="pseo-tagline">
      Chez Tito, la sécurité n'est pas une option marketing. C'est l'architecture même de notre logiciel : zéro mot de passe bancaire demandé, hébergement européen et portabilité garantie.
    </p>
  </div>
</section>

<!-- LES 5 PILIERS DE SÉCURITÉ TITO -->
<section class="section" style="padding-top: 10px;">
  <div class="container" style="max-width: 960px;">
    
    <div class="grid-2" style="margin-bottom: 60px;">
      
      <div class="card" style="padding: 32px;">
        <div class="card-icon-box card-icon-cyan">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h3 class="card-title">Zéro mot de passe bancaire stocké</h3>
        <p class="card-desc">
          Tito ne vous demandera jamais vos identifiants ou mots de passe bancaires. Grâce à l'import de fichier CSV, vous restez le seul maître de la passerelle entre votre banque et votre logiciel. Zéro risque d'intrusion dans vos comptes.
        </p>
      </div>

      <div class="card" style="padding: 32px;">
        <div class="card-icon-box card-icon-cyan">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
        </div>
        <h3 class="card-title">Hébergement des données en Union Européenne</h3>
        <p class="card-desc">
          Les données et bases de données de Tito sont hébergées au sein de l'Union Européenne (serveurs Google Cloud / Firebase situés en Europe de l'Ouest). Les transferts techniques vers nos sous-traitants sont strictement encadrés par les règles du RGPD (Clauses Contractuelles Types / Data Privacy Framework).
        </p>
      </div>

      <div class="card" style="padding: 32px;">
        <div class="card-icon-box card-icon-cyan">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3 class="card-title">Chiffrement de niveau bancaire</h3>
        <p class="card-desc">
          Toutes les transmissions entre votre navigateur et nos serveurs sont protégées par le protocole HTTPS / TLS 1.3 avec chiffrement 256 bits. Les données au repos bénéficient d'un chiffrement AES-256 avec rotation des clés.
        </p>
      </div>

      <div class="card" style="padding: 32px;">
        <div class="card-icon-box card-icon-cyan">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 class="card-title">Archive ZIP complète remise à la résiliation</h3>
        <p class="card-desc">
          Pour votre conservation légale de 10 ans (Code de commerce), Tito remet à l'Utilisateur lors de la clôture de son abonnement une archive universelle ZIP regroupant l'ensemble de ses registres (FEC, Livre des recettes, Grand-Livre). Les données sont ensuite définitivement purgées de nos serveurs conformément à notre politique de sobriété numérique et de confidentialité (Article 8 des CGU).
        </p>
      </div>

    </div>

    <!-- NOTRE ENGAGEMENT ÉTHIQUE -->
    <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.06) 0%, rgba(16, 185, 129, 0.06) 100%); border: 1.5px solid rgba(37, 99, 235, 0.2); border-radius: var(--radius-lg); padding: 36px 40px; margin-bottom: 60px;">
      <h3 style="font-size: 1.3rem; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 14px;">
        Pas de publicité. Aucune revente de données. Jamais.
      </h3>
      <p style="font-size: 0.98rem; color: var(--color-text-main); line-height: 1.7; margin: 0 0 16px 0;">
        De nombreux logiciels de gestion gratuits se rémunèrent en revendant vos données de trésorerie, vos habitudes de dépenses ou en vous démarchant avec des offres de crédits et d'assurances partenaires non sollicitées.
      </p>
      <p style="font-size: 0.98rem; color: var(--color-text-main); line-height: 1.7; margin: 0; font-weight: 600;">
        Le modèle économique de Tito est sain : nous vivons uniquement des abonnements annuels payés par nos utilisateurs. Vous êtes notre client, vous n'êtes pas le produit.
      </p>
    </div>

    <!-- SÉCURITÉ PAIEMENT STRIPE -->
    <div class="card" style="padding: 32px; display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
      <div style="background: #635bff; color: #ffffff; padding: 12px 18px; border-radius: 8px; font-weight: 900; font-size: 1.2rem; letter-spacing: -0.02em;">
        stripe
      </div>
      <div style="flex: 1; min-width: 260px;">
        <h4 style="margin: 0 0 6px 0; font-size: 1.05rem; font-weight: 800; color: #0f172a;">Paiements sécurisés par Stripe</h4>
        <p style="margin: 0; color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.5;">
          Vos transactions et abonnements sont gérés par Stripe, leader mondial du paiement en ligne certifié PCI-DSS niveau 1 (le niveau d'exigence le plus élevé de l'industrie financière). Tito n'a jamais accès à vos numéros de carte bancaire.
        </p>
      </div>
    </div>

  </div>
</section>

