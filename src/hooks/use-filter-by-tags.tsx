"use client";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

export const useFilterByTags = () => {
  const searchParams = useSearchParams();
  const fQuery =
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    searchParams.get("fQuery")?.replace(/%7C/g, "|").split("|") || [];

  const [selected, setSelected] = React.useState<string[]>(fQuery);
  const router = useRouter();
  const res = useQuery({
    queryKey: ["brands", selected.join("|")],
    queryFn: () =>
      fetch(
        `api/filter/?tags=${selected.join("|")}`,
        // `api/filter/?${selected
        //   .map((tag) => `tags=${encodeURIComponent(tag)}`)
        //   .join("&")}`,
      ).then((res) => res.json()),
    enabled: false,
    // enabled: fQuery.length > 0,
  });
  const { refetch, isFetching } = res;
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.delete("query");
    await refetch();
    params.append("fQuery", selected.join("|"));
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return { onSubmit, selected, setSelected, isFetching };
};
