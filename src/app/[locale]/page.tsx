import * as React from "react";
import { Hero } from "@/components/Hero";
import { EvaluationCriteria } from "@/components/which-brands";
import { EffectiveBoycotting } from "@/components/how-to-boycott";
import { Discord } from "@/components/discord";
import { FAQs } from "@/components/FAQs";
import { unstable_setRequestLocale } from "next-intl/server";
import { EasyAccess } from "@/components/easy-access";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";

export const revalidate = 3600; // 1 hour
type Props = {
  params: { locale: string };
};
export default function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main className="center mx-auto h-full w-full max-w-4xl grow px-2 py-10 lg:px-0">
        <Hero />
        <EvaluationCriteria />
        <EasyAccess />
        <EffectiveBoycotting />
        <FAQs />
        <Discord />
        {/* <TopSupporters /> */}
      </main>
    </NextIntlClientProvider>
  );
}
