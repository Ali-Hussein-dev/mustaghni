// import { getDocsClount } from "../../sanity/lib/get-docu-count";

const content = [
  "Refrain from using their products",
  "Motivate others to abbandon their products",
  "Unfollow their accounts, report, and abstain from interacting with their content on social media",
  "Rate their apps with one star and leave a review showing their bias",
];
export const InitialView = () => {
  return (
    <div className="w-full text-gray-700">
      <h2 className="mb-4 text-center text-2xl font-extrabold">
        How to Boycott?
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {content.map((o, i) => (
          <div key={i} className="rounded border px-4 py-6 font-medium ">
            {o}
          </div>
        ))}
      </div>
    </div>
  );
};
