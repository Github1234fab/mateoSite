<script>
  let name = $state('');
  let email = $state('');
  let subject = $state('general');
  let message = $state('');
  let isSubmitted = $state(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Déclencheur mailto pour communication directe avec l'équipe Tito
    const mailtoSubject = encodeURIComponent(`[Contact Tito] ${subject === 'support' ? 'Support technique' : subject === 'billing' ? 'Facturation / Abonnement' : 'Question générale'} - ${name}`);
    const mailtoBody = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:contact@tito-gestion.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    isSubmitted = true;
  }
</script>

<svelte:head>
  <title>Contactez l'équipe Tito | Support & Écoute</title>
  <meta name="description" content="Une question, une suggestion ou besoin d'assistance ? Contactez l'équipe Tito basée en France. Réponse garantie sous 24h ouvrées." />
  <link rel="canonical" href="https://tito-gestion.com/contact" />
</svelte:head>

<!-- HERO CONTACT -->
<section class="pseo-hero">
  <div class="container">
    <div class="hero-badge-wrap">
      <span class="badge badge-pill">Équipe & Support</span>
    </div>

    <h1 class="hero-title pseo-hero-title">
      Une question ? Une idée ?<br />
      <span style="color: var(--color-primary);">Nous sommes à votre écoute.</span>
    </h1>

    <p class="pseo-tagline">
      L'équipe Tito est basée en France. Nous répondons personnellement à chaque message sous 24 heures ouvrées.
    </p>
  </div>
</section>

<!-- FORMULAIRE ET COORDONNEES -->
<section class="section" style="padding-top: 10px;">
  <div class="container" style="max-width: 960px;">
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 40px; align-items: flex-start; margin-bottom: 60px;">
      
      <!-- COLONNE INFOS DIRECTES -->
      <div>
        <h2 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 16px;">
          Parlons de votre projet
        </h2>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 28px;">
          Que vous soyez déjà utilisateur de Tito ou que vous cherchiez la meilleure solution pour votre micro-entreprise, profession libérale, association ou TPE, notre équipe est là pour vous guider.
        </p>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div class="card" style="padding: 20px; display: flex; align-items: flex-start; gap: 16px;">
            <div class="card-icon-box card-icon-cyan" style="width: 44px; height: 44px; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Email direct</div>
              <a href="mailto:contact@tito-gestion.com" style="font-weight: 800; font-size: 1.05rem; color: var(--color-primary); text-decoration: none;">
                contact@tito-gestion.com
              </a>
            </div>
          </div>

          <div class="card" style="padding: 20px; display: flex; align-items: flex-start; gap: 16px;">
            <div class="card-icon-box card-icon-cyan" style="width: 44px; height: 44px; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Délai de réponse</div>
              <div style="font-weight: 700; font-size: 0.95rem; color: #0f172a;">
                Moins de 24h ouvrées garanti
              </div>
              <div style="font-size: 0.82rem; color: #64748b; margin-top: 2px;">Du lundi au vendredi, 9h - 18h</div>
            </div>
          </div>

          <div class="card" style="padding: 20px; display: flex; align-items: flex-start; gap: 16px;">
            <div class="card-icon-box card-icon-cyan" style="width: 44px; height: 44px; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Localisation</div>
              <div style="font-weight: 700; font-size: 0.95rem; color: #0f172a;">
                Conçu en France 🇫🇷 • Données en UE
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FORMULAIRE DE CONTACT -->
      <div class="card" style="padding: 32px; border: 1.5px solid var(--color-border); background: #ffffff;">
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 20px;">
          Envoyez-nous un message
        </h3>

        {#if isSubmitted}
          <div style="background: rgba(16, 185, 129, 0.1); border: 1.5px solid #10b981; border-radius: 10px; padding: 24px; text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 10px;">✓</div>
            <h4 style="color: #065f46; font-size: 1.1rem; font-weight: 800; margin: 0 0 8px 0;">Message prêt à l'envoi !</h4>
            <p style="color: #047857; font-size: 0.92rem; margin: 0;">
              Votre client de messagerie s'est ouvert pour envoyer votre demande directement à <strong>contact@tito-gestion.com</strong>. Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        {:else}
          <form onsubmit={handleSubmit} style="display: flex; flex-direction: column; gap: 18px;">
            <div>
              <label for="name" style="display: block; font-size: 0.88rem; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Votre Nom ou Entreprise *</label>
              <input
                id="name"
                type="text"
                bind:value={name}
                required
                placeholder="Ex. Alexandre Martin"
                style="width: 100%; padding: 12px 14px; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-size: 0.95rem; font-family: inherit; box-sizing: border-box;"
              />
            </div>

            <div>
              <label for="email" style="display: block; font-size: 0.88rem; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Votre Adresse Email *</label>
              <input
                id="email"
                type="email"
                bind:value={email}
                required
                placeholder="Ex. alexandre@exemple.fr"
                style="width: 100%; padding: 12px 14px; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-size: 0.95rem; font-family: inherit; box-sizing: border-box;"
              />
            </div>

            <div>
              <label for="subject" style="display: block; font-size: 0.88rem; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Objet de votre message</label>
              <select
                id="subject"
                bind:value={subject}
                style="width: 100%; padding: 12px 14px; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-size: 0.95rem; font-family: inherit; background: #ffffff; box-sizing: border-box;"
              >
                <option value="general">Question générale sur Tito</option>
                <option value="support">Support technique / import bancaire</option>
                <option value="billing">Abonnement & Facturation</option>
                <option value="partnership">Partenariat ou expert-comptable</option>
              </select>
            </div>

            <div>
              <label for="message" style="display: block; font-size: 0.88rem; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Votre Message *</label>
              <textarea
                id="message"
                rows="4"
                bind:value={message}
                required
                placeholder="Expliquez-nous votre situation ou votre question..."
                style="width: 100%; padding: 12px 14px; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-size: 0.95rem; font-family: inherit; resize: vertical; box-sizing: border-box;"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg" style="margin-top: 8px;">
              Envoyer mon message →
            </button>
          </form>
        {/if}
      </div>

    </div>

  </div>
</section>

