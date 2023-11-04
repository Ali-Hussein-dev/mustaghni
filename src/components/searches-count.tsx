import { useQuery } from "@tanstack/react-query";

const getCounts = () => fetch("api/searches-count").then((res) => res.json());
export const SearchesCount = () => {
  const { data } = useQuery({ queryKey: ["searches"], queryFn: getCounts });

  return <p className="text-center">{data?.counts} searches</p>;
};
