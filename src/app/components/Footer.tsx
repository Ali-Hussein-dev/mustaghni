import { FaTiktok } from "react-icons/fa6";

export const Footer = () => (
  <footer className="h-14 w-full border-t border-neutral-300 text-gray-800 flex-row-center">
    <div className="max-w-3xl gap-4 flex-row-center ">
      {[
        // { href: "https://x.com", icon: <FaXTwitter size="20" /> },
        {
          href: "https://www.tiktok.com/@alih5221",
          icon: <FaTiktok size="20" />,
        },
        // { href: "https://tiktok.com", icon: <FaInstagram size="20" /> },
      ].map((o, i) => (
        <a className="" key={i} href={o.href} target="_black" rel="noreferrer">
          {o.icon}
        </a>
      ))}
    </div>
  </footer>
);
