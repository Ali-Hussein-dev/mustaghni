"use client";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { type Company } from "@/components/company-card";
import { useRouter, useSearchParams } from "next/navigation";
import { useInputFocus } from "./use-input-focus";

export const useSearch = ({
  setSelected,
}: {
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const query = useSearchParams().get("query");
  const [input, setInput] = React.useState(query ?? "");
  const { inputRef } = useInputFocus<HTMLInputElement>();
  const router = useRouter();
  const {
    data: companies,
    isFetching,
    refetch,
  } = useQuery<Company[]>({
    queryKey: !!input ? ["brands", input] : [],
    queryFn: () =>
      fetch(`/api/search?name=${input}`, {
        method: "GET",
      }).then((res) => res.json()),
    enabled: false,
    // enabled: !!query,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });
  React.useEffect(() => {
    if (!query) return;
    setInput(query);
    void refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input) return;
      void refetch();

      // update url seach params
      const params = new URLSearchParams();
      params.append("query", input);
      router.push(`?${params.toString()}`, { scroll: false });

      // blur input, better UX for mobile users
      inputRef.current?.blur();

      // update filter state
      setSelected([]);
    },
    [refetch, input, router, inputRef, setSelected],
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
