import * as React from "react";
import Image from "next/image";
import { CountsLabel } from "@/components/counts-label";
import { SearchWrapper } from "./search-wrapper";
import { Skeleton } from "@mantine/core";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("home");

  return (
    <div
      className="animate-in mx-auto flex w-full max-w-4xl flex-col 
      justify-start gap-4 pt-20"
    >
      <div className="space-y-4">
        <div className="w-full flex-col-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width="270"
            height="100"
            className="mb-3"
            priority
            quality={75}
          />
          <p className="mx-auto mb-2 mt-0 max-w-lg px-1 text-center text-xl font-semibold text-gray-600">
            {t("subtitle")}
          </p>
          <div className="gap-3 flex-row-center">
            <React.Suspense fallback={<Skeleton w="340px" h="40px" />}>
              <CountsLabel
                labels={{ brands: t("brands"), searches: t("searches") }}
              />
            </React.Suspense>
          </div>
        </div>
      </div>
      <React.Suspense
        fallback={<div className="w-full flex-row-center">Loading...</div>}
      >
        <SearchWrapper />
      </React.Suspense>
    </div>
  );
};
