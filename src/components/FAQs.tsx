"use client";
import { Accordion, Title } from "@mantine/core";

//======================================
export const FAQs = ({
  list,
  title,
}: {
  title: string;
  list: { q: string; a: string }[];
}) => {
  return (
    <div className="w-full pt-24 text-gray-700">
      <Title order={2} className="mb-4 text-center text-2xl font-extrabold">
        {title}
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
        {list.map((item, i) => (
          <Accordion.Item key={i} value={item.q}>
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
