import PCard from "@/components/p-card";
import { Text } from "@mantine/core";
import { useTranslations } from "next-intl";

export const EffectiveBoycott = () => {
  const t = useTranslations("home");
  const keys = ["a", "b", "c", "d"] as const;
  return (
    <div className="mx-auto w-full pb-6 pt-20 text-gray-700">
      <div className="mb-6">
        <h2 className="text-center text-3xl font-extrabold">
          {t("effectiveBoycotting.title")}
        </h2>
        <Text className="text-center font-medium">
          {t("effectiveBoycotting.description")}
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {keys.map((k, i) => (
          <PCard key={i}>
            <h3 className="text-xl font-medium">
              {t(`effectiveBoycotting.list.${k}.title`)}
            </h3>
            <p className="">{t(`effectiveBoycotting.list.${k}.p`)}</p>
          </PCard>
        ))}
      </div>
    </div>
  );
};
