import { ActionIcon } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SelectLanguage = ({ locale }: { locale: string }) => {
  const reverseLocale = locale === "en" ? "ar" : "en";
  return (
    <Link href={`/${reverseLocale}`}>
      <ActionIcon
        color="dark"
        size="lg"
        classNames={{ root: "w-9 h-9" }}
        radius="xl"
      >
        {reverseLocale}
      </ActionIcon>
    </Link>
  );
};
