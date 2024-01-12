import { FaDiscord, FaTiktok } from "react-icons/fa6";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const socialLinks = [
  // { href: "https://x.com", icon: <FaXTwitter size="20" /> },
  {
    href: "https://discord.gg/Esqs7f3J",
    icon: <FaDiscord size="22" className="text-gray-600" />,
  },
  {
    href: "https://www.tiktok.com/@mustaghni_app",
    icon: <FaTiktok size="22" className="text-gray-600" />,
  },
];
export const Footer = () => {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <div className="w-full">
      <footer className="mx-auto w-full text-gray-800 flex-row-center">
        <div className="grid w-full max-w-4xl grid-cols-1 gap-2 border-0 border-t border-solid border-neutral-400 px-1 py-2 md:grid-cols-3">
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <div>
              @{new Date().getFullYear()}{" "}
              <span className="font-bold">Mustaghni</span>
            </div>
          </div>
          <div className="flex-wrap gap-2 flex-row-center">
            <Link
              href={`/${locale}/about`}
              className="text-gray-800 no-underline hover:underline"
            >
              {t("footer.links.about")}
            </Link>
            <Link
              href={`/${locale}/privacy-policy`}
              className="text-gray-800 no-underline hover:underline"
            >
              {t("footer.links.privacyPolicy")}
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            {socialLinks.map((o, i) => (
              <a key={i} href={o.href} target="_black" rel="noreferrer">
                {o.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
