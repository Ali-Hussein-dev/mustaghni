import { formatNumber } from "@/utils/format-number";
import { getDocsCount } from "@sanity/lib/get-docu-count";
import * as React from "react";

//======================================
export const BrandsCount = async () => {
  const counts = await getDocsCount("company");
  return (
    <p className="mb-1 text-center text-gray-600">
      {formatNumber(counts, 5)} brands support israel
    </p>
  );
};
