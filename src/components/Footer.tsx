import { FaTiktok } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => (
  <div className="flex h-24 w-full flex-col justify-end bg-gradient-to-t from-gray-300/70 to-transparent md:h-36">
    <footer className="h-14 w-full text-gray-800 flex-row-center">
      <div className="w-full max-w-4xl gap-4 border-0 border-t border-solid border-neutral-400 px-1 py-2 flex-row-between">
        <div className="gap-1 flex-row-start">
          @{new Date().getFullYear()}{" "}
          <span className="font-bold">Mustaghni</span>
          <Link
            href="/about"
            className="ml-4 text-gray-800 no-underline hover:underline"
          >
            What is Mustaghni?
          </Link>
        </div>
        {[
          // { href: "https://x.com", icon: <FaXTwitter size="20" /> },
          {
            href: "https://www.tiktok.com/@mustaghni_app",
            icon: <FaTiktok size="20" />,
          },
          // { href: "https://tiktok.com", icon: <FaInstagram size="20" /> },
        ].map((o, i) => (
          <a
            className=""
            key={i}
            href={o.href}
            target="_black"
            rel="noreferrer"
          >
            {o.icon}
          </a>
        ))}
      </div>
    </footer>
  </div>
);
