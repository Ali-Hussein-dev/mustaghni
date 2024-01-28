"use client";
import { useBoycottedBrands } from "@/hooks/use-boycotted-brands";
import { Button, Skeleton } from "@mantine/core";
import { type CompanyProps } from "./company-card";
import { CiBookmarkCheck, CiBookmarkPlus } from "react-icons/ci";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useMutation } from "@tanstack/react-query";

export const BoycottButton = ({ brand }: { brand: CompanyProps }) => {
  const { addBrand, brands, removeBrand } = useBoycottedBrands();
  const isBoycotted = brands.some((b) => b._id === brand._id);
  const t = useTranslations("home");

  const { mutate, isPending } = useMutation({
    mutationKey: ["boycott"],
    mutationFn: ({ property }: { property: "dec" | "inc" }) =>
      fetch("/api/company", {
        method: "PATCH",
        body: JSON.stringify({
          _id: brand._id,
          property,
        }),
        headers: { "Content-Type": "application/json" },
      }),
  });
  const handleClick = () => {
    if (isBoycotted) {
      removeBrand(brand);
      mutate({ property: "dec" });
    } else {
      addBrand(brand);
      mutate({ property: "inc" });
    }
  };

  return (
    <div className="isolate z-10 mx-auto -translate-y-5 flex-row-center">
      <Button
        radius="xxl"
        onClick={handleClick}
        className="duration-300"
        color="green"
        w="150px"
        bg={isBoycotted ? "green" : "white"}
        variant={isBoycotted ? "filled" : "outline"}
        loading={isPending}
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
