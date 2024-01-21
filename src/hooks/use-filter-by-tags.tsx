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
    queryKey: !!selected.join("|") ? ["brands", selected.join("|")] : [],
    queryFn: () =>
      fetch(
        `api/filter/?tags=${selected.join("|")}`,
        // `api/filter/?${selected
        //   .map((tag) => `tags=${encodeURIComponent(tag)}`)
        //   .join("&")}`,
      ).then((res) => res.json()),
    enabled: false,
    // enabled: fQuery.length > 0,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });
  const { refetch, isFetching } = res;
    React.useEffect(() => {
      if (!fQuery) return;
      void refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.delete("query");
    await refetch();
    params.append("fQuery", selected.join("|"));
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return { onSubmit, selected, setSelected, isFetching: isFetching };
};
