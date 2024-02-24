import { getStaticPage } from "@sanity/lib/get-static-page";
import { PortableText } from "@portabletext/react";
import { Header } from "@/components/Header";
import { unstable_setRequestLocale } from "next-intl/server";

export const revalidate = 3600; // revalidate every hour
//======================================
const AboutPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);

  const page = await getStaticPage({ slug: "about" });
  return (
    <div className="w-full grow" dir="ltr">
      <Header />
      <div className="animate-in px-2 pb-6">
        <article className="prose prose-gray mx-auto mt-4 h-full w-full max-w-4xl rounded-sm bg-stone-100 px-2 py-8 shadow-lg prose-headings:text-gray-700 prose-h1:text-xl prose-p:text-lg prose-p:font-medium md:px-6">
          <h1 className="text-center ">{page?.title}</h1>
          <PortableText value={page?.content} />
        </article>
      </div>
    </div>
  );
};

export default AboutPage;
