"use client";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useFilterByTags = () => {
  const [selected, setSelected] = React.useState<string[]>([]);
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
  });
  const { refetch, isFetching } = res;
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await refetch();
    const params = new URLSearchParams();
    params.append("query", selected.join("|"));
    router.push(`?${params.toString()}`);
  };
  return { onSubmit, selected, setSelected, isFetching };
};
