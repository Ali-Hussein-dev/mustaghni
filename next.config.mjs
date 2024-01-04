/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "cdn.sanity.io",
            port: ""
        }]
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    async redirects() {
        return [
            {
                source: '/d/:path*',
                destination: 'https://discord.gg/Esqs7f3J',
                permanent: true,
            },
        ]
    },
};

export default config;
