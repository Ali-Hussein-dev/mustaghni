import PCard from "@/app/components/p-card";

const content = {
  title: "Which Brands To Boycott?",
  description: "The level of supporting israel varies from brand to brand.",
  list: [
    {
      title: "Israeli brands",
      description: "Such as Fiverr, Wix, Monday.com, ...etc",
    },
    {
      title: "When brands explicitly support israel",
      description: "Such as Zara, Facebook, Starbucks ..etc",
    },
    {
      title: "When brands are owned by companies that supports israel",
      description:
        "Such as all brands owned by Pepsico, Nestle, Kraft, Unilever, ...etc",
    },
    {
      title: "When brands have business deals with israel",
      description: "Such as McDonald, HP technology, Amazon, ...etc",
    },
  ],
};
//======================================
export const WhichBrands = () => {
  return (
    <div className="w-full pt-10 text-gray-700">
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
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="font-light">{item.description}</p>
              </PCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
