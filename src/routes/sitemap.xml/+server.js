import { METIERS } from '#lib/data/metiers.js';
import { FONCTIONNALITES } from '#lib/data/fonctionnalites.js';

export async function GET() {
  const baseUrl = 'https://tito-gestion.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/solutions/micro-entreprise', priority: '0.9', changefreq: 'weekly' },
    { url: '/solutions/professions-liberales', priority: '0.9', changefreq: 'weekly' },
    { url: '/solutions/association', priority: '0.9', changefreq: 'weekly' },
    { url: '/solutions/tpe', priority: '0.9', changefreq: 'weekly' },
    { url: '/solutions/sci-familiale', priority: '0.8', changefreq: 'monthly' },
    { url: '/solutions/copropriete-benevole', priority: '0.8', changefreq: 'monthly' },
    { url: '/metiers', priority: '0.8', changefreq: 'daily' },
    { url: '/tarifs', priority: '0.9', changefreq: 'monthly' },
    { url: '/a-propos', priority: '0.7', changefreq: 'monthly' },
    { url: '/securite-donnees', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/cgu', priority: '0.5', changefreq: 'monthly' },
    { url: '/mentions-legales', priority: '0.5', changefreq: 'monthly' },
    { url: '/confidentialite', priority: '0.5', changefreq: 'monthly' }
  ];

  const fonctionnalitePages = Object.keys(FONCTIONNALITES).map(slug => ({
    url: `/fonctionnalites/${slug}`,
    priority: '0.85',
    changefreq: 'monthly'
  }));

  const metierPages = METIERS.map(m => ({
    url: `/pour/${m.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  const allPages = [...staticPages, ...fonctionnalitePages, ...metierPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
}
