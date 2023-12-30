"use client";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { type Company } from "@/components/company-card";
import { useRouter } from "next/navigation";

export const useSearch = () => {
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();
  const {
    data: companies,
    isFetching,
    refetch,
  } = useQuery<Company[]>({
    queryKey: ["brands", input],
    queryFn: () =>
      fetch(`/api/search?name=${input}`, {
        method: "GET",
      }).then((res) => res.json()),
    enabled: false,
  });
  const onSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      void refetch();
      // queryClient.setQueryData(["brands", input], companies);
      // update url seach params
      const params = new URLSearchParams();
      params.append("query", input);
      router.push(`?${params.toString()}`, { scroll: false });
      inputRef.current?.blur();
    },
    [refetch, input, router],
  );
  return {
    input,
    setInput,
    onSubmit,
    companies,
    isLoading: isFetching,
    inputRef,
  };
};
