import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../site.config';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: site.name,
    description: site.description,
    site: context.site!,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `/blog/${p.id}/` })),
  });
}
