"use client";
import { Accordion, Title } from "@mantine/core";
import { useTranslations } from "next-intl";

//======================================
export const FAQs = () => {
  const t = useTranslations("home");
  const faqs = ["q1", "q2", "q3"].map((q) => ({
    q: t(`FAQs.${q}.q`),
    a: t(`FAQs.${q}.a`),
  }));
  return (
    <div className="w-full pt-24 text-gray-700">
      <Title order={2} className="mb-4 text-center text-2xl font-extrabold">
        {t("FAQs.title")}
      </Title>

      <Accordion
        variant="filled"
        w="100%"
        radius="lg"
        transitionDuration={270}
        classNames={{
          root: "max-w-3xl mx-auto",
          control: "!font-bold text-lg font-semibold shadow",
          panel: "text-lg pt-3",
        }}
        defaultValue={faqs[0]?.q}
      >
        {faqs.map((item, i) => (
          <Accordion.Item key={i} value={item.q}>
            <Accordion.Control c="blue" bg="white">
              {item.q}
            </Accordion.Control>
            <Accordion.Panel>{item.a}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
