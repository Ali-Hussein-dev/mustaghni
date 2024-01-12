import { DyanmicCompanyCard } from "@/components/company-card";
import CompanyLayout from "@/components/company-layout";
import { Paper, Text, Title } from "@mantine/core";
import { PortableText } from "@portabletext/react";
import { getByCorp } from "@sanity/lib/get-companies";
import { getCorp } from "@sanity/lib/get-corps";
import { twMerge } from "tailwind-merge";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { ImageContainer } from "@/components/img-container";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    slug: string;
    locale: string;
  };
};
export const revalidate = 30;

export function generateMetadata({ params }: Props) {
  const name = params.slug.replace(/%20/g, " ").replace(/%C3%A9/g, "é");
  return {
    title: `${name} | Mustaghni`,
    description: name,
  };
}
//======================================
const CorpPage = async ({ params }: Props) => {
  const { locale, slug } = params;
  unstable_setRequestLocale(locale);
  // get brands by corp
  const corpName = slug
    .replace(/%20/g, " ")
    .replace(/%C3%A9/g, "é")
    .replace(/%26/g, "&") // for procter & gamble
    .toLowerCase();
  const brands = await getByCorp(corpName);
  const corpData = await getCorp(corpName);

  return corpData ? (
    <CompanyLayout>
      <div className="space-y-4 py-4">
        <Paper
          withBorder
          className="flex flex-col items-center justify-center gap-3 rounded-lg p-4 pt-5 md:flex-row md:items-start"
          dir="ltr"
        >
          <ImageContainer
            width="130"
            height="130"
            src={corpData.logo}
            alt={corpData.title}
          />
          <div>
            <Title order={2} className="text-center md:text-left">
              {corpData.title}
            </Title>
            <Text className="text-center md:text-left">
              {corpData.description}
            </Text>
          </div>
        </Paper>
        <Paper
          withBorder
          className={twMerge(
            "prose prose-gray max-w-full rounded-xl p-4",
            "prose-blockquote:m-0 prose-blockquote:border-0 prose-blockquote:border-l-4 prose-blockquote:border-solid ",
          )}
          dir="ltr"
        >
          <Title order={3} size="lg" fw="bold">
            <HiDocumentMagnifyingGlass
              size="24"
              className="mr-1 text-red-800"
            />
            Proof
          </Title>
          {corpData.content ? (
            <PortableText value={corpData.content} />
          ) : (
            <Text>
              Please be patient we are adding evidence for every corporation
            </Text>
          )}
        </Paper>
        <Paper withBorder className="rounded-xl bg-gray-50 p-4" dir="ltr">
          <Title order={3}>Total brands: {brands.length}</Title>
          <div className="grid gap-3 py-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {brands.map((brand) => (
              <DyanmicCompanyCard
                key={brand.title}
                {...brand}
                ownedBy={undefined}
                locale={locale}
              />
            ))}
          </div>
        </Paper>
      </div>
    </CompanyLayout>
  ) : null;
};

export default CorpPage;
