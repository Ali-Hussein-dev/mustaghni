"use client";
import { Accordion, Title } from "@mantine/core";
const list = [
  {
    q: "Are the boycotts against israel making an impact?",
    a: "Boycotts against Israel are having an impact, but they are just one part of the solution, not the whole solution.",
  },
  {
    q: "What are the benefits of the boycotting for local businesses and the economy?",
    a: "Boycotts can boost national economic growth, shift consumption patterns, and decrease unemployment by supporting local industries and small businesses. Additionally, boycotts can prompt businesses to negotiate, leading to policy changes and ethical behavior.",
  },
  {
    q: "There are so many brands to boycott, I can't boycott them all!",
    a: "boycott as many as you can, it doesn't have to be all or none. You can start with the brands that are easy to boycott, and then move to the harder ones. You can also boycott the brands that are more harmful than others.",
  },
];
//======================================
export const FAQs = () => {
  return (
    <div className="w-full pt-24 text-gray-700">
      <Title order={2} className="mb-3 text-center text-2xl font-extrabold">
        FAQs About Boycotts
      </Title>

      <Accordion
        variant="filled"
        w="100%"
        radius="lg"
        transitionDuration={270}
        classNames={{
          root: "max-w-3xl mx-auto",
          control: "!font-bold text-lg",
          panel: "text-lg",
        }}
        defaultValue={list[0]?.q}
      >
        {list.map((item) => (
          <Accordion.Item key={item.q} value={item.q}>
            <Accordion.Control className="font-semibold" c="blue">
              {item.q}
            </Accordion.Control>
            <Accordion.Panel>{item.a}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
