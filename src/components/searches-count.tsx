import { formatNumber } from "@/utils/format-number";
import { useQuery } from "@tanstack/react-query";

const getCounts = () => fetch("api/searches-count").then((res) => res.json());

export const SearchesCount = () => {
  const { data } = useQuery<{ searches: number }>({
    queryKey: ["counts"],
    queryFn: getCounts,
  });
  return data ? (
    <p className="mb-3 px-1 pt-0 text-center text-lg">
      {formatNumber(data?.searches, 5)} searches completed
    </p>
  ) : null;
};
