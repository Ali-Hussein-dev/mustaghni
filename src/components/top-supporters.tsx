import { BrandsCount } from "@/app/components/brands-count";
import { Paper } from "@mantine/core";
import Image from "next/image";

const data = [
  {
    name: "Nestle",
    img: "/supporter-companies/Nestle.png",
    description:
      "is a Swiss multinational food and drink processing conglomerate corporation headquartered in Vevey, Vaud, Switzerland",
    // brands: 5,
  },
  {
    name: "Coca Cola",
    img: "/supporter-companies/coca-cola.png",
    description:
      "is an American multinational corporation founded in 1892. The company also manufactures, sells, and markets other non-alcoholic beverage concentrates and syrups, and alcoholic beverages.",
    // brands: 5,
  },
  {
    name: "Pepsico",
    img: "/supporter-companies/pepsico.png",
    description:
      "is an American multinational food, snack, and beverage corporation headquartered in Harrison, New York. PepsiCo's business encompasses all aspects of the food and beverage market.",
    // brands: 5,
  },
  {
    name: "Axel Springer",
    img: "/supporter-companies/Axel-Springer.png",
    description:
      "is a German digital publishing house which is the largest in Europe, with numerous multimedia news brands, such as Bild, Die Welt, and Fakt.",
    // brands: 5,
  },
  {
    name: "Kraft",
    img: "/supporter-companies/kraft.png",
    description:
      "is an American food manufacturing and processing conglomerate, split from Kraft Foods Inc.",
    // brands: 5,
  },
  {
    name: "MARS",
    img: "/supporter-companies/mars.png",
    description:
      "is an American multinational manufacturer of confectionery, pet food, and other food products and a provider of animal care services. The company is entirely owned by the Mars family",
    // brands: 5,
  },
  {
    name: "Unilever",
    img: "/supporter-companies/unilever.png",
    description:
      "is a British multinational fast-moving consumer goods company founded on 2 September 1929.",
    // brands: 5,
  },
  {
    name: "Johnson & Johnson",
    img: "/supporter-companies/johnson&johnson.png",
    description:
      "J&J is an American multinational, pharmaceutical, and medical technologies corporation headquartered in New Jersey.",
    // brands: 5,
  },
  {
    name: "Procter & Gamble",
    img: "/supporter-companies/p&g.png",
    description:
      "is an American multinational consumer goods corporation headquartered in Cincinnati, Ohio, founded in 1837.",
    // brands: 5,
  },
  {
    name: "Kellogg's",
    img: "/supporter-companies/kellogg.png",
    description:
      "is an American multinational food manufacturing company headquartered in Chicago, Illinois, United States",
    // brands: 5,
  },
  {
    name: "General Mills",
    img: "/supporter-companies/gm.png",
    description:
      "is an American multinational manufacturer and marketer of branded processed consumer foods sold through retail stores.",
    // brands: 5,
  },
  {
    name: "Mondelez International",
    img: "/supporter-companies/moneleza.png",
    description:
      "is an American multinational confectionery, food, holding, beverage and snack food company based in Chicago",
    // brands: 10,
  },
  {
    name: "JAB Holding Company",
    img: "/supporter-companies/jab.png",
    description: "is a German conglomerate, headquartered in Luxembourg",
    // brands: 10,
  },
];
//======================================
export const TopSupporters = () => {
  return (
    <div className="pt-10 md:pt-24">
      <div className="mb-4">
        <h2 className="mb-1 text-center text-2xl font-bold">
          Black List Corporations
        </h2>
        <BrandsCount />
      </div>
      <div className="grid max-w-3xl grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2">
        {data.map((o, i) => (
          <Paper
            key={i}
            withBorder
            px="md"
            pb="md"
            pt="lg"
            radius="lg"
            className="text-stone-700 flex-col-center"
          >
            <div className="relative aspect-square w-[110px]">
              <Image
                fill
                alt={o.name}
                src={o.img}
                className="h-full w-full rounded object-contain"
                quality={60}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkMGKQBAAAuQBND/XDIQAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="mx-auto text-center">
              {/* <h3 className="text-sm font-semibold md:text-lg">{o.name}</h3> */}
              <p className="font-light">
                {o.name} {o.description}
              </p>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};
