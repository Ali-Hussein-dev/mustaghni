"use client";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { type Company } from "@/components/company-card";

export const useSearch = () => {
  const [input, setInput] = React.useState("");
  const {
    data: companies,
    isLoading,
    refetch,
  } = useQuery<Company[]>({
    queryKey: ["brands-search"],
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
    },
    [refetch],
  );
  return {
    input,
    setInput,
    onSubmit,
    companies,
    isLoading,
  };
};
