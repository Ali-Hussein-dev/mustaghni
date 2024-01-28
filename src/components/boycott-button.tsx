"use client";
import { useBoycottedBrands } from "@/hooks/use-boycotted-brands";
import { Button, Skeleton } from "@mantine/core";
import { type CompanyProps } from "./company-card";
import { CiBookmarkCheck, CiBookmarkPlus } from "react-icons/ci";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

export const BoycottButton = ({ brand }: { brand: CompanyProps }) => {
  const { addBrand, brands, removeBrand } = useBoycottedBrands();
  const isBoycotted = brands.some((b) => b._id === brand._id);
  const t = useTranslations("home");

  return (
    <div className="isolate z-10 mx-auto -translate-y-5 flex-row-center">
      <Button
        type="button"
        radius="xxl"
        onClick={isBoycotted ? () => removeBrand(brand) : () => addBrand(brand)}
        className="duration-300"
        color="green"
        w="150px"
        bg={isBoycotted ? "green" : "white"}
        variant={isBoycotted ? "filled" : "outline"}
        leftSection={
          isBoycotted ? (
            <CiBookmarkCheck size="20" />
          ) : (
            <CiBookmarkPlus size="20" />
          )
        }
      >
        {isBoycotted ? t("companyCard.boycotted") : t("companyCard.boycott")}
      </Button>
    </div>
  );
};

export const BoycottBtn = dynamic(
  () => import("./boycott-button").then((c) => c.BoycottButton),
  {
    ssr: false,
    loading: () => (
      <div className="isolate z-10 mx-auto -translate-y-5 flex-row-center">
        <Skeleton radius="full" h="36" w="150" />
      </div>
    ),
  },
);
