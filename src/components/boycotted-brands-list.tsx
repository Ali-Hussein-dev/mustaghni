"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { useBoycottedBrands } from "../hooks/use-boycotted-brands";
import { ComapnyCardMini } from "./company-card";
import { FaBookmark } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export function BoycottedBrandsList() {
  const [opened, { open, close }] = useDisclosure(false);
  const brands = useBoycottedBrands((s) => s.brands);
  const t = useTranslations("home");
  if (!brands) return null;
  return brands.length > 0 ? (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={`${t("boycottedList.title")} (${brands.length})`}
        position="right"
        size="xs"
      >
        {/* Drawer content */}
        <div className="space-y-3">
          {brands?.map((brand) => (
            <ComapnyCardMini key={brand._id} {...brand} />
          ))}
        </div>
      </Drawer>
      <div className="mx-auto w-full max-w-xs rounded-b-3xl border-0 border-x border-b border-solid border-green-200 py-1 flex-row-center md:max-w-xl">
        <Button
          onClick={open}
          radius="xl"
          leftSection={<FaBookmark />}
          variant="subtle"
          color="green"
          size="lg"
        >
          {t("boycottedList.button")}
        </Button>
      </div>
    </>
  ) : null;
}
