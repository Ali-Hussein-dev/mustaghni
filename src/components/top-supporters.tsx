import { BrandsCount } from "@/app/components/brands-count";
import Image from "next/image";

const data = [
  {
    name: "Nestle",
    img: "/supporter-companies/Nestle.png",
    // brands: 5,
  },
  {
    name: "Coca Cola",
    img: "/supporter-companies/coca-cola.png",
    // brands: 5,
  },
  {
    name: "Pepsico",
    img: "/supporter-companies/pepsico.png",
    // brands: 5,
  },
  {
    name: "Kraft",
    img: "/supporter-companies/kraft.png",
    // brands: 5,
  },
  {
    name: "MARS",
    img: "/supporter-companies/mars.png",
    // brands: 5,
  },
  {
    name: "Unilever",
    img: "/supporter-companies/unilever.png",
    // brands: 5,
  },
  {
    name: "Johnson & Johnson",
    img: "/supporter-companies/johnson&johnson.png",
    // brands: 5,
  },
  {
    name: "Procter & Gamble",
    img: "/supporter-companies/p&g.png",
    // brands: 5,
  },
  {
    name: "Kellogg",
    img: "/supporter-companies/kellogg.png",
    // brands: 5,
  },
  {
    name: "General Mills",
    img: "/supporter-companies/gm.png",
    // brands: 5,
  },
  {
    name: "Mondelez International",
    img: "/supporter-companies/moneleza.png",
    // brands: 10,
  },
  {
    name: "JAB Holding Company",
    img: "/supporter-companies/jab.png",
    // brands: 10,
  },
];
//======================================
export const TopSupporters = () => {
  return (
    <div className="pt-10 md:pt-24">
      <div className="mb-4">
        <h2 className="mb-1 text-center text-2xl font-bold">
          Top Supporting Corporations
        </h2>
        <BrandsCount />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6">
        {data.map((o, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-xl border border-gray-300 bg-gray-100 py-4 text-stone-700"
          >
            <div className="relative aspect-square w-[70px]">
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
            <div className="px-4 pt-2 flex-col-start">
              <div className="text-sm font-semibold sm:text-lg">{o.name}</div>
              {/* <div className="font-light">{o.brands} brands</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
