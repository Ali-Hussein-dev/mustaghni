"use client";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

export const useFilterByTags = () => {
  const searchParams = useSearchParams();
  const fQuery = searchParams.get("fQuery")?.replace(/%7C/g, "|") ?? "";

  const [selected, setSelected] = React.useState<string[]>(fQuery.split("|"));
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
    // enabled: false,
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
