const content = [
  "Refrain from using their products",
  "Motivate others to abbandon their products",
  "Unfollow their accounts, report, and abstain from interacting with their content on social media",
  "Rate their apps with one star and leave a review showing their bias",
];
export const InitialView = () => {
  return (
    <div className="w-full ">
      <h2 className="mb-1 text-center font-bold">How to Boycott</h2>
      <p className="mb-4 text-center text-gray-600">
        +250 companies and brands support israel
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {content.map((o, i) => (
          <div
            key={i}
            className="rounded border border-gray-300 bg-gray-100 px-4 py-6 text-gray-700"
          >
            {o}
          </div>
        ))}
      </div>
    </div>
  );
};
