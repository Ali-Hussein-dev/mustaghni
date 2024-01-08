"use client";
import { IoSend } from "react-icons/io5";
import { Button, MultiSelect, Paper } from "@mantine/core";
import { tags } from "@/data/tags";
import * as React from "react";
import { type useFilterByTags } from "@/hooks/use-filter-by-tags";
const allTags = [
  {
    group: "Country",
    items: ["israel"],
    // items: ["Arab", "israel", "US", "Germany"],
  },
  {
    group: "Category",
    items: tags,
  },
];

//======================================
export const Filter = ({
  onSubmit,
  selected,
  setSelected,
  isFetching,
  setFilter,
}: ReturnType<typeof useFilterByTags> & {
  setFilter: (a: boolean) => void;
}) => {
  const selectedLimit = selected?.length === 2;
  return (
    <div className="mt-2 px-3">
      <Paper className="space-y-4 rounded-xl bg-gray-50 px-3 pb-3 pt-4">
        <MultiSelect
          data={allTags}
          value={selected}
          onChange={setSelected}
          limit={selectedLimit ? 0 : undefined}
          placeholder={selectedLimit ? "" : "pick up to 2 tags"}
          size="lg"
          label="Filter By"
          searchable
        />
        <div className="gap-3 flex-row-center">
          <Button
            radius="xl"
            w="100%"
            size="md"
            variant="outline"
            type="button"
            onClick={() => setFilter(false)}
            // rightSection={<IoSend />}
          >
            Cancel
          </Button>
          <Button
            radius="xl"
            w="100%"
            size="md"
            variant="filled"
            type="submit"
            onClick={onSubmit}
            loading={isFetching}
            disabled={selected.length === 0}
            rightSection={<IoSend />}
          >
            Filter
          </Button>
        </div>
      </Paper>
    </div>
  );
};
