import { FaTiktok } from "react-icons/fa6";
// import Link from "next/link";

export const Footer = () => (
  <footer className="h-14 w-full text-gray-800 flex-row-center">
    <div className="w-full max-w-3xl gap-4 border-0 border-t border-solid border-neutral-300 py-2 flex-row-center">
      <div className="gap-1 flex-row-start">
        @{new Date().getFullYear()} <span className="font-bold">Mustaghni</span>
      </div>
      {[
        // { href: "https://x.com", icon: <FaXTwitter size="20" /> },
        {
          href: "https://www.tiktok.com/@mustaghni_app",
          icon: <FaTiktok size="20" />,
        },
        // { href: "https://tiktok.com", icon: <FaInstagram size="20" /> },
      ].map((o, i) => (
        <a className="" key={i} href={o.href} target="_black" rel="noreferrer">
          {o.icon}
        </a>
      ))}
      {/* <Link href="/about" className="text-gray-800 no-underline">
        About
      </Link> */}
    </div>
  </footer>
);
