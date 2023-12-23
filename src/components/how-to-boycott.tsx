import PCard from "@/components/p-card";

const content = [
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
];
export const HowToBoycott = () => {
  return (
    <div className="mx-auto w-full max-w-3xl pb-6 pt-24 text-gray-700">
      <div className="mb-4 ">
        <h2 className="text-center text-2xl font-extrabold">How to Boycott?</h2>
        <p className="text-center">Make it effective and widly adapted</p>
      </div>
      <div className="space-y-4">
        {content.map((o, i) => (
          <PCard key={i}>
            <h3 className="text-xl font-medium">{o.title}</h3>
            <p className="">{o.p}</p>
          </PCard>
        ))}
      </div>
    </div>
  );
};
