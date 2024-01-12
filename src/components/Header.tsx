import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

//======================================
export const Header = () => {
  const locale = useLocale();
  return (
    <header className="h-14">
      <div className="mx-auto h-full max-w-5xl px-2 flex-row-between md:px-0">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={110}
            height={25}
            alt="logo"
            className=""
          />
        </Link>
        <nav className="">
          <Link
            href={`/${locale}/about`}
            className="font-medium text-gray-800 no-underline duration-300 hover:font-bold"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};
