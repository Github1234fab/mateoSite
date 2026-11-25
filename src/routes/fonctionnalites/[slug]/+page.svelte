<script>
  let { data } = $props();
  let f = $derived(data.fonctionnalite);
</script>

<svelte:head>
  <title>{f.seoTitle}</title>
  <meta name="description" content={f.metaDescription} />
  <link rel="canonical" href="https://tito-gestion.com/fonctionnalites/{f.slug}" />
  <meta property="og:title" content={f.seoTitle} />
  <meta property="og:description" content={f.metaDescription} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://tito-gestion.com/fonctionnalites/{f.slug}" />
</svelte:head>

<!-- HERO FONCTIONNALITÉ -->
<section class="pseo-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="Fil d'Ariane">
      <a href="/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <span class="breadcrumb-link">Fonctionnalités</span>
      <span>/</span>
      <span class="breadcrumb-current">{f.badge}</span>
    </nav>

    <div class="hero-badge-wrap">
      <span class="badge badge-pill">{f.badge}</span>
    </div>

    <h1 class="hero-title pseo-hero-title">
      {f.title}
    </h1>

    <p class="pseo-tagline">
      {f.subtitle}
    </p>

    <div class="pseo-action-row">
      <a href="https://app.tito-gestion.com" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Essayer gratuitement (60 écritures offertes)</a>
      <a href="#apercu" class="btn btn-secondary btn-lg">Voir un exemple en direct</a>
    </div>
  </div>
</section>

<!-- CONTRASTE : PROBLÈME VS RÉPONSE TITO -->
<section class="section" style="padding-top: 40px; padding-bottom: 40px;">
  <div class="container" style="max-width: 900px;">
    <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 28px 32px; display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <span style="background: rgba(239, 68, 68, 0.15); color: #dc2626; font-size: 1.2rem; font-weight: 800; border-radius: 50%; width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">✕</span>
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #dc2626; margin: 0 0 6px 0;">Le casse-tête classique</h4>
          <p style="margin: 0; color: var(--color-text-muted); font-size: 0.98rem; line-height: 1.6;">{f.problemQuote}</p>
        </div>
      </div>
      <div style="height: 1px; background: var(--color-border);"></div>
      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <span style="background: rgba(37, 99, 235, 0.15); color: var(--color-primary); font-size: 1.2rem; font-weight: 800; border-radius: 50%; width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</span>
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary); margin: 0 0 6px 0;">La méthode Tito, en 3 gestes</h4>
          <p style="margin: 0; color: var(--color-text-main); font-size: 0.98rem; line-height: 1.6; font-weight: 500;">Glissez votre relevé, Tito automatise l'ordonnancement sans vous poser de questions piégées, et vous éditez des pièces irréprochables en 1 clic.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LES 3 ÉTAPES -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-beta">Processus</span>
      <h2 class="section-title">Comment ça marche ?</h2>
      <p class="section-subtitle">Trois étapes simples et instantanées, sans aucun paramétrage fastidieux.</p>
    </div>

    <div class="grid-3">
      {#each f.keySteps as step}
        <article class="card" style="position: relative; overflow: hidden;">
          <div style="position: absolute; top: 16px; right: 20px; font-size: 2.8rem; font-weight: 900; opacity: 0.07; color: var(--color-primary);">
            {step.num}
          </div>
          <div class="card-icon-box card-icon-cyan" style="font-weight: 800; font-size: 1.1rem;">
            {step.num}
          </div>
          <h3 class="card-title" style="margin-top: 12px;">{step.title}</h3>
          <p class="card-desc">{step.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- APERÇU VISUEL RÉALISTE EN DIRECT -->
<section class="section section-alt" id="apercu">
  <div class="container" style="max-width: 960px;">
    <div class="section-header">
      <span class="badge badge-pill">Rendu en Direct</span>
      <h2 class="section-title">Limpide, carré, sans fioritures</h2>
      <p class="section-subtitle">Voici exactement ce que Tito produit pour votre activité, prêt pour l'expert ou le fisc.</p>
    </div>

    <!-- WIDGET VISUEL INTERACTIF -->
    <div style="background: #0f172a; border-radius: 16px; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 20px 40px rgba(0,0,0,0.3); overflow: hidden; color: #f8fafc;">
      <!-- Barre d'en-tête du logiciel -->
      <div style="background: #1e293b; padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #ef4444; display: inline-block;"></span>
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981; display: inline-block;"></span>
          <span style="font-size: 0.8rem; color: #94a3b8; margin-left: 10px; font-weight: 600;">Tito Gestion • {f.title}</span>
        </div>
        <span style="background: rgba(37, 99, 235, 0.2); color: #60a5fa; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 6px; border: 1px solid rgba(59, 130, 246, 0.3);">
          Registre Synchronisé
        </span>
      </div>

      <!-- Corps du tableau de simulation -->
      <div style="padding: 24px; overflow-x: auto;">
        {#if f.slug === 'livre-recettes'}
          <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
            <thead>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.12); color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em;">
                <th style="padding: 10px 12px;">Date</th>
                <th style="padding: 10px 12px;">Réf. Facture</th>
                <th style="padding: 10px 12px;">Client</th>
                <th style="padding: 10px 12px;">Nature</th>
                <th style="padding: 10px 12px;">Règlement</th>
                <th style="padding: 10px 12px; text-align: right;">Montant Encaissé</th>
              </tr>
            </thead>
            <tbody>
              {#each f.previewData as row}
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                  <td style="padding: 12px; color: #cbd5e1;">{row.date}</td>
                  <td style="padding: 12px; font-family: monospace; color: #38bdf8;">{row.ref}</td>
                  <td style="padding: 12px; font-weight: 600; color: #f8fafc;">{row.client}</td>
                  <td style="padding: 12px; color: #94a3b8;">{row.desc}</td>
                  <td style="padding: 12px;"><span style="background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">{row.mode}</span></td>
                  <td style="padding: 12px; text-align: right; font-weight: 700; color: #4ade80;">{row.montant}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        {:else if f.slug === 'meteo-tresorerie'}
          <div style="display: flex; flex-direction: column; gap: 14px; max-width: 600px; margin: 0 auto;">
            {#each f.previewData as row}
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px 18px; border-radius: 10px; background: {row.type === 'highlight' ? 'linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(16,185,129,0.2) 100%)' : 'rgba(255,255,255,0.04)'}; border: 1px solid {row.type === 'highlight' ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.06)'};">
                <span style="font-weight: {row.type === 'highlight' ? '800' : '500'}; color: {row.type === 'highlight' ? '#ffffff' : '#cbd5e1'}; font-size: {row.type === 'highlight' ? '0.98rem' : '0.92rem'};">
                  {row.item}
                </span>
                <span style="font-family: monospace; font-size: 1.05rem; font-weight: 800; color: {row.type === 'minus' ? '#f87171' : row.type === 'highlight' ? '#4ade80' : '#38bdf8'};">
                  {row.value}
                </span>
              </div>
            {/each}
          </div>
        {:else if f.slug === 'import-bancaire'}
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 16px;">
            {#each f.previewData as card}
              <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px; text-align: center;">
                <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: #94a3b8; margin-bottom: 8px;">{card.banque}</div>
                <div style="font-size: 1.1rem; font-weight: 800; color: #f8fafc; margin-bottom: 6px;">{card.action}</div>
                <div style="font-size: 0.88rem; color: #38bdf8; font-weight: 600;">{card.duree}</div>
              </div>
            {/each}
          </div>
        {:else if f.slug === 'recus-fiscaux'}
          <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
            <thead>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.12); color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em;">
                <th style="padding: 10px 12px;">Numéro Reçu</th>
                <th style="padding: 10px 12px;">Donateur</th>
                <th style="padding: 10px 12px;">Date</th>
                <th style="padding: 10px 12px;">Montant du Don</th>
                <th style="padding: 10px 12px; text-align: right;">Déduction Fiscale</th>
              </tr>
            </thead>
            <tbody>
              {#each f.previewData as row}
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                  <td style="padding: 12px; font-family: monospace; color: #38bdf8;">{row.cerfa}</td>
                  <td style="padding: 12px; font-weight: 600; color: #f8fafc;">{row.donateur}</td>
                  <td style="padding: 12px; color: #cbd5e1;">{row.date}</td>
                  <td style="padding: 12px; font-weight: 700; color: #ffffff;">{row.montant}</td>
                  <td style="padding: 12px; text-align: right; font-weight: 700; color: #4ade80;">{row.reduction}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        {/if}
      </div>

      <div style="background: rgba(0,0,0,0.2); padding: 12px 24px; font-size: 0.82rem; color: #94a3b8; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <span>✓ Données vérifiées • Export 1 clic PDF & CSV</span>
        <span>Conforme aux normes de l'administration fiscale</span>
      </div>
    </div>
  </div>
</section>

<!-- BENEFICES ET ATOUTS CLES -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-beta">Avantages</span>
      <h2 class="section-title">
        {f.slug === 'recus-fiscaux' ? 'Pourquoi les associations choisissent Tito' : 'Pourquoi les indépendants choisissent Tito'}
      </h2>
      <p class="section-subtitle">Chaque fonctionnalité est pensée pour vous faire gagner des heures de saisie.</p>
    </div>

    <div class="grid-2">
      {#each f.highlights as h}
        <article class="card">
          <div class="card-icon-box card-icon-cyan">
            ✓
          </div>
          <h3 class="card-title">{h.title}</h3>
          <p class="card-desc">{h.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- AVERTISSEMENT LEGAL ET CONFORMITÉ -->
<section class="section" style="padding-top: 20px; padding-bottom: 40px;">
  <div class="container" style="max-width: 900px;">
    <div style="background: rgba(37, 99, 235, 0.05); border: 1.5px solid rgba(37, 99, 235, 0.2); border-radius: var(--radius-lg); padding: 24px 28px;">
      <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--color-primary); margin: 0 0 8px 0; display: flex; align-items: center; gap: 8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Conformité réglementaire & Sécurité juridique
      </h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.65;">
        {f.legalNotice}
      </p>
    </div>
  </div>
</section>

<!-- FAQ SPECIFIQUE -->
<section class="section section-alt">
  <div class="container" style="max-width: 860px;">
    <div class="section-header">
      <span class="badge badge-pill">Questions Fréquentes</span>
      <h2 class="section-title">Tout ce que vous devez savoir</h2>
    </div>

    <div style="display: flex; flex-direction: column; gap: 20px;">
      {#each f.faqs as faq}
        <div class="card" style="padding: 24px;">
          <h3 style="font-size: 1.05rem; font-weight: 800; margin: 0 0 10px 0; color: var(--color-text-main);">
            {faq.q}
          </h3>
          <p style="margin: 0; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.65;">
            {faq.a}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="section-cta" style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: #ffffff; padding: 80px 0; text-align: center;">
  <div class="container" style="max-width: 720px;">
    <span class="badge badge-beta" style="background: rgba(255,255,255,0.15); color: #ffffff; margin-bottom: 20px;">
      Essai Immédiat Sans Carte Bancaire
    </span>
    <h2 style="font-size: 2.3rem; font-weight: 900; margin-bottom: 16px; color: #ffffff;">
      Prêt à tester la simplicité Tito ?
    </h2>
    <p style="font-size: 1.1rem; color: #cbd5e1; margin-bottom: 32px; line-height: 1.6;">
      Profitez de 60 écritures gratuites pour importer votre relevé et constater le gain de temps par vous-même.
    </p>
    <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
      <a href="https://app.tito-gestion.com" class="btn btn-primary btn-lg" style="background: #ffffff; color: #1e3a8a;" target="_blank" rel="noopener">
        Démarrer l'essai gratuit →
      </a>
      <a href="/tarifs" class="btn btn-outline-white btn-lg">
        Consulter notre tarif unique (69,90 € / an)
      </a>
    </div>
  </div>
</section>

