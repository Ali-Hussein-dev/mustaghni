import { getStaticPage } from "@sanity/lib/get-static-page";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="bg-gradient-to-b from-gray-300/70 to-transparent">
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-2 py-5 md:px-5">
      <Link href="/">
        <Image src="/logo.png" width={90} height={20} alt="logo" />
      </Link>
      <nav>
        <Link href="/about" className="font-medium text-gray-800 no-underline">
          About
        </Link>
      </nav>
    </header>
  </div>
);
export const metadata = {
  title: "About Mustaghni",
  description: "What is Mustaghni?",
};
//======================================
const AboutPage = async () => {
  const page = await getStaticPage({ slug: "about" });
  return (
    <div className="w-full grow">
      <Header />
      <div className="animate-in px-2 pb-6">
        <article className="prose prose-gray prose-headings:text-gray-700 prose-p:font-medium prose-p:text-lg mx-auto mt-4 h-full w-full max-w-3xl rounded-sm bg-stone-100 px-2 py-8 shadow-lg md:px-6">
          <h1 className="text-center">{page?.title}</h1>
          <PortableText value={page?.content} />
        </article>
      </div>
    </div>
  );
};

export default AboutPage;
