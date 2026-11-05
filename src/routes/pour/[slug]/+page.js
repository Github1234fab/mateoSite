import { error } from '@sveltejs/kit';
import { getMetierBySlug } from '#lib/data/metiers.js';

export function load({ params }) {
  const metier = getMetierBySlug(params.slug);

  if (!metier) {
    throw error(404, {
      message: "Cette profession n'a pas encore de guide dédié."
    });
  }

  return { metier };
}
