import { Header } from "@/components/Header";
import { PortableText } from "@portabletext/react";
import { getStaticPage } from "@sanity/lib/get-static-page";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

//======================================
const PrivacyPolicy = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const page = await getStaticPage({ slug: "privacy-policy" });
  return (
    <div dir="ltr">
      <Header />
      <article className="prose prose-gray max-w-4xl px-2 pb-10 pt-8 prose-h1:text-xl">
        <PortableText value={page.content} />
      </article>
    </div>
  );
};
export default PrivacyPolicy;
