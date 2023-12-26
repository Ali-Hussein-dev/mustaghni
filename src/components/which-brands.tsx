import PCard from "@/components/p-card";
import { twMerge } from "tailwind-merge";
const content = {
  title: "Evaluating Brands for Boycott",
  description: "The level of support for israel differs among brands.",
  list: [
    {
      title:
        "Israeli brands and the brands shamelessly supporting israeli occupation",
      description: "Such as Fiverr, Wix, Zara, ...etc",
      level: 1,
    },
    {
      title:
        "Brands owned by giant corporations that support israeli occupation",
      description: "All brands owned by Pepsico, Nestle, Coca Cola ...etc",
      level: 2,
    },
    {
      title: "Brands have business agreements with israel",
      description: "All brands consumed by israel people",
      level: 3,
    },
  ],
};
//======================================
export const WhichBrands = () => {
  return (
    <div className="w-full pt-10 text-gray-700 md:pt-28">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-4 w-full flex-col-center">
          <h2 className="text-center text-2xl font-extrabold">
            {content.title}
          </h2>
          <p className="text-center">{content.description}</p>
        </div>
        <div className="space-y-4">
          {content.list.map((item, index) => (
            <div key={index}>
              <PCard>
                <div className="gap-2 flex-row-between">
                  <div className="">
                    <h3 className="w-[98%] text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="font-light">{item.description}</p>
                  </div>
                  <div className="rounded-full">
                    <span
                      className={twMerge(
                        "center h-9 w-9 rounded-full text-lg font-medium text-white",
                        item.level === 1
                          ? "bg-red-600"
                          : item.level === 2
                          ? "bg-orange-600"
                          : "bg-yellow-600",
                      )}
                    >
                      {item.level}
                    </span>
                  </div>
                </div>
              </PCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
