import NextIntl from 'next-intl/plugin';
// const withNextIntl = require('next-intl/plugin')();
const withNextIntl = NextIntl("./src/i18n.ts");
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js",
});
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const NextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "cdn.sanity.io",
            port: ""
        }]
    },
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    async redirects() {
        return [
            {
                source: '/d/:path*',
                destination: 'https://discord.gg/3N64cTz8rK',
                permanent: true,
            },
        ]
    },
};


const config = withNextIntl(withSerwist(NextConfig));

export default config;
