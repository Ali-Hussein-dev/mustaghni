import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwind-custom-utilities"),
    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    preflight: false,
  }
} satisfies Config;
