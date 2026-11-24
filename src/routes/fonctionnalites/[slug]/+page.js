import { error } from '@sveltejs/kit';
import { getFonctionnaliteBySlug } from '#lib/data/fonctionnalites.js';

export function load({ params }) {
  const fonctionnalite = getFonctionnaliteBySlug(params.slug);

  if (!fonctionnalite) {
    throw error(404, {
      message: "Fonctionnalité non trouvée."
    });
  }

  return { fonctionnalite };
}

