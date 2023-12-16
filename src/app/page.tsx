import * as React from "react";
import { Hero } from "./components/Hero";
import { TopSupporters } from "@/components/top-supporters";
import { WhichBrands } from "@/components/which-brands";
import { InitialView } from "@/components/initial-view";

export default function HomePage() {
  return (
    <main className="center container mx-auto h-full w-full grow px-2 py-10 ">
      <Hero />
      <InitialView />
      <WhichBrands />
      <TopSupporters />
    </main>
  );
}
