import { Header } from "@/components/Header";
import { PortableText } from "@portabletext/react";
import { getStaticPage } from "@sanity/lib/get-static-page";

//======================================
const PrivacyPolicy = async () => {
  const page = await getStaticPage({ slug: "privacy-policy" });
  return (
    <div className="">
      <Header />
      <article className="prose prose-gray max-w-4xl px-2 pt-8">
        <PortableText value={page.content} />
      </article>
    </div>
  );
};
export default PrivacyPolicy;
