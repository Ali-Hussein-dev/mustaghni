import { unstable_setRequestLocale } from "next-intl/server";

//======================================
const StudioLayout = ({ children }) => {
    unstable_setRequestLocale("en");
  return children;
};
export default StudioLayout;
