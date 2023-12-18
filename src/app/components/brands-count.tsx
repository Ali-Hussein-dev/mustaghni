import { getDocsCount } from "../../../sanity/lib/get-docu-count";
import * as React from "react";
//======================================
export const BrandsCount = async () => {
  const counts = await getDocsCount("company");
  return (
    <p className="mb-1 text-center text-gray-600">
      {counts % 10 === 0 ? counts : "+" + (counts - (counts % 10))} brands
      support israel
    </p>
  );
};
