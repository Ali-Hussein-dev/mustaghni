import { formatNumber } from "@/utils/format-number";
import { useQuery } from "@tanstack/react-query";
import { MdNumbers } from "react-icons/md";

const getCounts = () => fetch("api/searches-count").then((res) => res.json());

export const CountsLabel = () => {
  const { data } = useQuery<{ searches: number; brands: number }>({
    queryKey: ["counts"],
    queryFn: getCounts,
  });
  return data ? (
    <div className="mb-2 gap-3 bg-black/90 px-2 py-1 text-gray-100 flex-row-start">
      <MdNumbers className="text-red-500" size="17" />
      <span hidden={!data.searches} className="text-center text-lg">
        {formatNumber(data?.searches, 5)} searches
      </span>
      <span hidden={!data.brands} className="text-center text-lg">
        {formatNumber(data?.brands, 5)} brands
      </span>
      <MdNumbers className="text-red-500" size="17" />
    </div>
  ) : null;
};