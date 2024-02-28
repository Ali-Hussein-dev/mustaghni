import { Text } from "@mantine/core";
import { FaWindows, FaAppStore, FaApple } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { useTranslations } from "next-intl";

//======================================
export const EasyAccess = () => {
  const t = useTranslations("home");
  return (
    <div className="h-full w-full rounded-[1.7rem] bg-gradient-to-tr from-green-600/70 via-black/70 to-red-700/70 p-[2px] md:max-w-2xl">
      <div className="mx-auto w-full rounded-[1.6rem] bg-white pb-8 pt-10">
        <div className="mx-auto max-w-fit text-gray-700">
          <h2 className="text-center text-3xl font-extrabold text-gray-700">
            {t("easyAccess.title")}
          </h2>
          <Text ta="center">{t("easyAccess.description")}</Text>
        </div>
        <div className="gap-8 pt-6 flex-row-center">
          <DiAndroid size="56" className="text-gray-700" />
          <FaAppStore size="56" className="text-gray-700" />
          <FaWindows size="56" className="text-gray-700" />
          <FaApple size="56" className="text-gray-700" />
        </div>
      </div>
    </div>
  );
};
