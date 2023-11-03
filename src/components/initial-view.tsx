const content = [
  "Refrain from using their products",
  "Motivate others to abbandon their products",
  "Unfollow their accounts, report, and abstain from interacting with their content on social media",
  "Provide a one-star rating for their apps",
];
export const InitialView = () => {
  return (
    <div className="w-full ">
      <h2 className="mb-4 text-center font-bold">How to Boycott</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {content.map((o, i) => (
          <div key={i} className="rounded bg-gray-100 px-4 py-6 text-gray-700">
            {o}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
