"use client";
import { Button, MultiSelect, Paper } from "@mantine/core";
import { tags } from "@/data/tags";
import * as React from "react";
import { type useFilterByTags } from "@/hooks/use-filter-by-tags";
import { useSearchCtx } from "@/hooks/use-search-ctx";
import { useStore } from "zustand";

const allTags = [
  {
    group: "Country",
    items: ["israel"],
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
  const store = useSearchCtx();
  const labels = useStore(store, (s) => s.labels);
  return (
    <div className="mt-2 px-3">
      <Paper
        className="space-y-4 rounded-xl bg-gray-50 px-3 pb-3 pt-4"
        withBorder
      >
        <MultiSelect
          data={allTags}
          value={selected}
          onChange={setSelected}
          limit={selectedLimit ? 0 : undefined}
          placeholder={selectedLimit ? "" : labels?.filterPlaceholder}
          size="lg"
          radius="full"
          label={labels?.filterBy}
          searchable
        />
        <div className="gap-3 flex-row-end">
          <Button
            radius="full"
            w="fit-content"
            size="md"
            variant="subtle"
            type="button"
            onClick={() => setFilter(false)}
            // rightSection={<IoSend />}
          >
            {labels?.cancel}
          </Button>
          <Button
            radius="full"
            w="fit-content"
            size="md"
            variant="filled"
            type="submit"
            onClick={onSubmit}
            loading={isFetching}
            disabled={selected.length === 0}
          >
            {labels?.filter}
          </Button>
        </div>
      </Paper>
    </div>
  );
};
