import PCard from "@/components/p-card";

const content = {
  title: "Maximizing the Impact of Boycott",
  description: "Make it effective and widely adopted",
  list: [
    {
      title: "Stop buying their products",
      p: "Refrain from using their products",
    },
    {
      title: "Promte others to take action",
      p: "Motivate others to abbandon their products",
    },
    {
      title: "Be active on social media",
      p: "Unfollow their accounts, report their posts, and abstain from interacting with their content on social media",
    },
    {
      title: "Lower their applications rating",
      p: "Rate their apps with one star and leave a review showing their bias",
    },
  ],
};
export const HowToBoycott = () => {
  return (
    <div className="mx-auto w-full max-w-3xl pb-6 pt-20 text-gray-700">
      <div className="mb-4 ">
        <h2 className="text-center text-2xl font-extrabold">{content.title}</h2>
        <p className="text-center">{content.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {content.list.map((o, i) => (
          <PCard key={i}>
            <h3 className="text-xl font-medium">{o.title}</h3>
            <p className="">{o.p}</p>
          </PCard>
        ))}
      </div>
    </div>
  );
};
