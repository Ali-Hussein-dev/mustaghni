// import { FaTiktok } from "react-icons/fa6";

export const Footer = () => (
  <footer className="h-14 w-full text-gray-800 flex-row-center">
    <div className="w-full max-w-3xl gap-1 border-t border-neutral-300 py-2 flex-row-center">
      @{new Date().getFullYear()} <span className="font-bold">Mustaghni</span>
      {/* {[
        // { href: "https://x.com", icon: <FaXTwitter size="20" /> },
        {
          href: "https://www.tiktok.com/@ali_h_dev",
          icon: <FaTiktok size="20" />,
        },
        // { href: "https://tiktok.com", icon: <FaInstagram size="20" /> },
      ].map((o, i) => (
        <a className="" key={i} href={o.href} target="_black" rel="noreferrer">
          {o.icon}
        </a>
      ))} */}
    </div>
  </footer>
);
