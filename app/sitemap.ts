import { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = site.nav.map((n) => ({
    url: `${site.url}${n.href === '/' ? '' : n.href}`,
    lastModified: new Date(),
  }));
  return [{ url: site.url, lastModified: new Date() }, ...routes];
}
