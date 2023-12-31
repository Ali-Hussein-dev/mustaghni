import * as React from "react";
import { Hero } from "../components/Hero";
import { TopSupporters } from "@/components/top-supporters";
import { WhichBrands } from "@/components/which-brands";
import { HowToBoycott } from "@/components/how-to-boycott";

export const revalidate = 3600; // 1 hour

export default function HomePage() {
  return (
    <main className="center mx-auto h-full w-full max-w-4xl grow px-2 py-10 ">
      <Hero />
      <WhichBrands />
      <HowToBoycott />
      <TopSupporters />
    </main>
  );
}
