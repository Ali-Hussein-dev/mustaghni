import { unstable_setRequestLocale } from "next-intl/server";
import type React from "react";

//======================================
const StudioLayout = ({ children }: { children: React.ReactNode }) => {
  unstable_setRequestLocale("en");
  return children;
};
export default StudioLayout;
