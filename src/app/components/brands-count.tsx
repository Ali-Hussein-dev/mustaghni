import { getDocsClount } from "../../../sanity/lib/get-docu-count";

//======================================
export const BrandsCount = async () => {
  const counts = await getDocsClount("company");
  return (
    <p className="mb-1 text-center text-gray-600">
      {counts % 10 === 0 ? counts : "+" + (counts - (counts % 10))} brands
      support israel
    </p>
  );
};
