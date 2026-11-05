import { error } from '@sveltejs/kit';
import { getSolutionBySlug } from '#lib/data/solutions.js';
import { METIERS } from '#lib/data/metiers.js';

export function load({ params }) {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    throw error(404, {
      message: "Solution non trouvée."
    });
  }

  // Cocon sémantique : sélection des métiers rattachés à cette solution
  let relatedMetiers = [];
  if (params.slug === 'micro-entreprise') {
    relatedMetiers = METIERS.filter(m => m.persona === 'micro');
  } else if (params.slug === 'professions-liberales') {
    relatedMetiers = METIERS.filter(m => m.persona === 'liberal' || m.category.includes('Santé') || m.category.includes('Droit'));
  } else if (params.slug === 'association') {
    relatedMetiers = METIERS.filter(m => m.persona === 'asso');
  } else if (params.slug === 'tpe') {
    relatedMetiers = METIERS.filter(m => m.slug.includes('artisan') || m.persona === 'tpe' || m.category.includes('Artisanat'));
  }

  return { solution, relatedMetiers };
}
