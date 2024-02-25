"use client";
import { useBoycottedBrands } from "@/hooks/use-boycotted-brands";
import { Button, type ButtonProps } from "@mantine/core";
import { type CompanyProps } from "./company-card";
import { CiBookmarkCheck, CiBookmarkPlus } from "react-icons/ci";
import dynamic from "next/dynamic";
import { useMutation } from "@tanstack/react-query";

export const BoycottButton = ({
  brand,
  labels,
  ...rest
}: {
  brand: CompanyProps;
  labels: { clicked: string; idle: string };
} & ButtonProps) => {
  const { addBrand, brands, removeBrand } = useBoycottedBrands();
  const isBoycotted = brands.some((b) => b._id === brand._id);

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
      {...rest}
    >
      {isBoycotted ? labels.clicked : labels.idle}
    </Button>
  );
};

export const BoycottBtn = dynamic(
  () => import("./boycott-button").then((c) => c.BoycottButton),
  {
    ssr: false,
  },
);
