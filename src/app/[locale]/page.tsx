import * as React from "react";
import { Hero } from "@/components/Hero";
import { TopSupporters } from "@/components/top-supporters";
import { EvaluationCriteria } from "@/components/which-brands";
import { EffectiveBoycotting } from "@/components/how-to-boycott";
import { Discord } from "@/components/discord";
import { FAQs } from "@/components/FAQs";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export const revalidate = 3600; // 1 hour
type Props = {
  params: { locale: string };
};
export default function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("home");
  const faqs = ["q1", "q2", "q3"].map((q) => ({
    q: t(`FAQs.${q}.q`),
    a: t(`FAQs.${q}.a`),
  }));
  return (
    <main className="center mx-auto h-full w-full max-w-4xl grow px-2 py-10 lg:px-0">
      <Hero />
      <EvaluationCriteria />
      <Discord />
      <EffectiveBoycotting />
      <FAQs list={faqs} title={t("FAQs.title")} />
      <TopSupporters />
    </main>
  );
}
