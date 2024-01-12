import { Button, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import { FaDiscord } from "react-icons/fa6";

//======================================
export const Discord = () => {
  const t = useTranslations("home");
  return (
    <div className="w-full pt-20">
      <div className="mx-auto w-full max-w-2xl rounded-3xl bg-gradient-to-tr from-violet-600 to-pink-600 p-[1px]">
        <div className="w-full gap-4 rounded-3xl bg-white py-10 flex-col-center">
          <div className="flex-col-center">
            <FaDiscord size="70" className="text-violet-500" />
            <Text size="lg" className="max-w-sm px-3 text-center">
              {t("discord.description")}
            </Text>
          </div>
          <a href="https://discord.gg/Esqs7f3J">
            <Button fw="bold" radius="xl" size="lg">
              {t("discord.button")}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
