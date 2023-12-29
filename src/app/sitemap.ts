import { giantCorps } from "@/data/giant-corps";

export default function sitemap() {
    const giantCorpsRoutes = giantCorps.map((giantCorp) => ({
        url: `https://mustaghni.org/${encodeURIComponent(giantCorp.href)}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))
    const routes = ['', '/about'].map((route) => ({
        url: `https://mustaghni.org${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes, ...giantCorpsRoutes];
}