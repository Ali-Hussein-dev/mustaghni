import PCard from "@/components/p-card";
import { Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

//======================================
export const EvaluationCriteria = () => {
  const t = useTranslations("home");
  const keys = ["a", "b", "c"] as const;
  return (
    <div className="w-full pt-24 text-gray-700 md:pt-48">
      <div className="mx-auto w-full">
        <div className="mb-4 w-full flex-col-center">
          <h2 className="text-center text-3xl font-extrabold">
            {t("evaluationCriteria.title")}
          </h2>
          <Text className="text-center">
            {t("evaluationCriteria.description")}
          </Text>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {keys.map((key, i) => {
            const level = +t(`evaluationCriteria.list.${key}.level`);
            return (
              <div key={i} className={i === 0 ? "md:col-span-2" : ""}>
                <PCard>
                  <div className="flex  justify-between gap-2">
                    <div className="w-full">
                      <Text className="text-lg font-medium">
                        {t(`evaluationCriteria.list.${key}.description`)}
                      </Text>
                    </div>
                    <div className="rounded-full">
                      <span
                        className={twMerge(
                          "center h-9 w-9 rounded-full text-lg font-medium text-white",
                          level == 1
                            ? "bg-red-600"
                            : level == 2
                            ? "bg-orange-600"
                            : "bg-yellow-600",
                        )}
                      >
                        {level}
                      </span>
                    </div>
                  </div>
                </PCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
