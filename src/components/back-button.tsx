"use client";
import { ActionIcon } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
//======================================
export const BackButton = () => {
  const router = useRouter();
  return (
    <ActionIcon radius="md" onClick={() => router.back()}>
      <FaArrowLeft className="group-hover:text-zinc-100" />
    </ActionIcon>
  );
};
