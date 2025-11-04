import type { MetadataRoute } from "next"
import { RouteResolver, createClient } from "@/lib/optimizely-cms"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN ?? process.env.SITE_DOMAIN ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? 'localhost'
    const scheme = domain && (domain.startsWith("localhost") || domain.endsWith(".local")) ? 'http' : 'https'
    const host = domain ? new URL(`${scheme}://${domain}`) : undefined

    const client = createClient()
    const resolver = new RouteResolver(client)

    try {
        const routes = await resolver.getRoutes();

        if (routes.length === 0) {
            console.warn('No routes found for sitemap generation');
            // Return at least the homepage
            return [{
                url: new URL('/', host ?? 'http://localhost').href,
                lastModified: new Date(),
            }];
        }

        return routes.map(r => ({
            url: new URL(r.url.pathname, host ?? r.url).href,
            lastModified: r.changed ?? new Date(),
        }))
    } catch (error) {
        console.error('Error generating sitemap:', error);
        // Return at least the homepage as fallback
        return [{
            url: new URL('/', host ?? 'http://localhost').href,
            lastModified: new Date(),
        }];
    }
}

export const revalidate = 21600 // Revalidate at a minimum every 6 hours