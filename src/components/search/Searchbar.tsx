"use client";
import { PiSpinnerGapLight } from "react-icons/pi";
import { MdFilterList, MdOutlineClose } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { ActionIcon, Input, Skeleton } from "@mantine/core";
import * as React from "react";
import dynamic from "next/dynamic";
import { Filter } from "./Filter";
import { useFilterByTags } from "@/app/hooks/use-filter-by-tags";
import { IoSend } from "react-icons/io5";
import { type useSearch } from "@/app/hooks/use-search";

//======================================From-Mantine
export const Searchbar = ({
  input,
  setInput,
  isLoading,
  onSubmit,
  inputRef,
}: ReturnType<typeof useSearch>) => {
  const [filter, setFilter] = React.useState(false);
  const filterProps = useFilterByTags();
  return (
    <form onSubmit={onSubmit}>
      <Input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value?.trim())}
        placeholder="Search for brands"
        classNames={{
          input:
            "pl-[3rem] bg-gradient-to-t from-gray-50 to-transparent border border-gray-300 text-gray-600 duration-300 focus:shadow",
        }}
        rightSectionWidth="auto"
        rightSectionPointerEvents="all"
        rightSection={
          <div className="gap-3 pr-3 flex-row-end">
            {input && (
              <ActionIcon
                type="button"
                size="lg"
                radius="lg"
                variant="outline"
                onClick={() => setInput("")}
                // className="center h-9 w-9 rounded-full bg-gray-100"
              >
                <MdOutlineClose />
              </ActionIcon>
            )}
            <ActionIcon
              type="button"
              size="lg"
              radius="lg"
              variant="filled"
              onClick={() => setFilter(!filter)}
            >
              <MdFilterList size="25" />
            </ActionIcon>
            <ActionIcon
              type="submit"
              size="lg"
              radius="lg"
              variant="filled"
              disabled={!input}
            >
              <IoSend size="17" />
            </ActionIcon>
          </div>
        }
        // leftSectionWidth="auto"
        leftSection={
          isLoading ? (
            <PiSpinnerGapLight className="animate-spin" size="25" />
          ) : (
            <ImSearch size="20" className="text-gray-400" />
          )
        }
        radius="xl"
        size="xl"
      />
      {filter && <Filter {...filterProps} setFilter={setFilter} />}
    </form>
  );
};

export const MantineSearchbar = dynamic(
  () => import("./Searchbar").then((c) => c.Searchbar),
  {
    ssr: false,
    loading: () => <Skeleton w="100%" h="48px" radius="xl" />,
  },
);
