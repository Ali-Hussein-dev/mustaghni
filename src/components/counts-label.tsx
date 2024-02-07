"use client";
import { formatNumber } from "@/utils/format-number";
import { useQuery } from "@tanstack/react-query";
import { MdNumbers } from "react-icons/md";

const getCounts = () => fetch("api/searches-count").then((res) => res.json());

export const CountsLabel = ({
  labels: { brands },
}: {
  labels: { searches: string; brands: string };
}) => {
  const { data } = useQuery<{ searches: number; brands: number }>({
    queryKey: ["counts"],
    queryFn: getCounts,
  });
  return data ? (
    <div className="mb-2 gap-3 rounded-sm bg-black/90 px-2 py-1 text-gray-100 flex-row-start">
      <MdNumbers className="text-red-500" size="17" />
      {/* <span hidden={!data.searches} className="text-center text-lg">
        {formatNumber(data?.searches)} {searches}
      </span> */}
      <span hidden={!data.brands} className="text-center text-lg">
        {formatNumber(data?.brands)} {brands}
      </span>
      <MdNumbers className="text-red-500" size="17" />
    </div>
  ) : null;
};
