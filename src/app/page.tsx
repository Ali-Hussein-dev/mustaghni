"use client";
import { CompaniesList } from "@/components/companies-list";
import SearchBar from "./components/searchbar";
import * as React from "react";
import { useSearch } from "./hooks/use-search";
import { SearchesCount } from "@/components/searches-count";

const content = {
  title: "Sahem",
  description:
    "Support Palestinian by boycotting companies that supports isreal",
};



export default function HomePage() {
  const { input, setInput, isLoading, companies, onSubmit, inputRef } =
    useSearch();
  return (
    <main className="flex-col-start h-full min-h-screen w-full bg-gray-50 ">
      <div className="px-w container mx-auto grow px-2 py-10 text-neutral-800 md:pt-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col justify-center gap-4 ">
          <h1 className="text-center text-3xl font-bold">{content.title}</h1>
          <p className="text-center text-lg font-semibold text-gray-600">
            {content.description}
          </p>
          <form onSubmit={onSubmit}>
            <SearchBar
              isLoading={isLoading}
              input={input}
              setInput={setInput}
              inputRef={inputRef}
            />
          </form>
          <SearchesCount />
          <CompaniesList companies={companies} />
        </div>
      </div>
    </main>
  );
}
