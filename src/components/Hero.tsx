import * as React from "react";
import Image from "next/image";
import { SearchWrapper } from "./search-wrapper";
import { useLocale, useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <div
      className="animate-in mx-auto flex min-h-[calc(75vh-5rem)] w-full max-w-4xl 
      flex-col justify-center gap-4"
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
          {/* <div className="gap-3 flex-row-center">
            <React.Suspense fallback={<Skeleton w="340px" h="40px" />}>
              <CountsLabel
                labels={{ brands: t("brands"), searches: t("searches") }}
              />
            </React.Suspense>
          </div> */}
        </div>
      </div>
      <React.Suspense>
        <SearchWrapper
          labels={{
            placeholder: t("searchbar.placeholder"),
            cancel: t("searchbar.cancel"),
            noResults: t("searchbar.noResults"),
            filter: t("searchbar.filter"),
            filterBy: t("searchbar.filterBy"),
            filterPlaceholder: t("searchbar.filterPlaceholder"),
          }}
          locale={locale}
        />
      </React.Suspense>
    </div>
  );
};
