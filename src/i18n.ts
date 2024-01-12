/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'ar'];

export default getRequestConfig(async (args) => {
    const { locale } = args;
    console.log("---RUN I18N---")
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();
    const home = await import(`../locales/${locale}/home.json`);
    return {
        messages: { home: home.default }
    };
});