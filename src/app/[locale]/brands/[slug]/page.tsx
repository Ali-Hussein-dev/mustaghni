import CompanyLayout from "@/components/company-layout";
import { ImageContainer } from "@/components/img-container";
import { Anchor, Badge, Divider, Paper, Text, Title } from "@mantine/core";
import { PortableText } from "@portabletext/react";
import { getBrand, getBrandName } from "@sanity/lib/get-companies";
import { type Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { BsFillGridFill } from "react-icons/bs";

type Props = { params: { slug: string; locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await getBrandName(params.slug);
  const name = res.title ?? "";
  return {
    title: `${name} - Mustaghni`,
    description: name,
  };
}

//======================================
const BrandPage = async ({ params }: Props) => {
  const { locale, slug } = params;
  unstable_setRequestLocale(locale);
  const _id = slug.replace(/%20/g, " ");
  const brand = await getBrand(_id);
  const isBasedOnIsrael = brand?.tags?.includes("israel");
  const hasEvidence = !!brand?.evidence;
  const isOwnedByCorp = !!brand?.ownedBy;
  return (
    <CompanyLayout>
      <div className="space-y-5 py-4">
        <Paper
          className="flex flex-col items-center justify-center gap-3 px-3 pb-3 pt-4 shadow-lg md:flex-row md:justify-start"
          radius="lg"
          withBorder
          dir="ltr"
        >
          {brand.logo ? (
            <ImageContainer
              src={brand.logo}
              alt="logo"
              width="90"
              height="90"
            />
          ) : (
            <div></div>
          )}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Title c="gray" order={2}>
              {brand.title}
            </Title>
            {Array.isArray(brand.tags) && (
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                {brand.tags.sort().map((str, i) => (
                  <Badge key={i} size="md" color="gray" radius="sm">
                    {str}
                  </Badge>
                ))}
              </div>
            )}
            {brand.ownedBy && (
              <div className="">
                Owned by:{" "}
                <Anchor
                  href={`/${locale}/corps/${brand.ownedBy}`}
                  variant="gradient"
                >
                  {brand.ownedBy}
                </Anchor>
              </div>
            )}
          </div>
        </Paper>
        <Paper className="px-3 py-4" withBorder radius="lg" dir="ltr">
          <div className="mb-2 gap-2 flex-row-start">
            {/* <HiDocumentMagnifyingGlass size="24" className="text-red-800" /> */}
            <Image
              width="24"
              height="24"
              src="/proof.png"
              alt="proof"
              quality={65}
            />
            <Title order={3} c="gray" className="font-bold">
              Proof
            </Title>
          </div>
          {/* Boycott by israel ort */}
          {isBasedOnIsrael && <Text>The brand is based on israel!</Text>}
          {/* Boycott by owner */}
          {isOwnedByCorp && (
            <Text className="mb-1">
              The brand is ownd by <strong>{brand.ownedBy}</strong> which
              supports the israeli occupation see more details{" "}
              <Anchor href={`/${brand.ownedBy}`} variant="gradient">
                here
              </Anchor>{" "}
            </Text>
          )}

          {/* Boycott by evidence */}
          {hasEvidence && (
            <div className="prose prose-gray max-w-full">
              <PortableText value={brand.evidence!} />
            </div>
          )}
          {/* No evidence is provideed */}
          {!isOwnedByCorp && !isBasedOnIsrael && !hasEvidence && (
            <Text className="font-medium">
              Please be patient we are adding evidence for every brand
            </Text>
          )}
          {/* ALTERNATIVES */}
          {brand.alternatives && (
            <>
              <Divider my="md" color="#e5e7eb" />
              <div className="mb-2 gap-3 flex-row-start">
                <BsFillGridFill size="20" className="text-green-400" />
                <Title order={3} c="gray" className="font-bold">
                  Alternatives
                </Title>
              </div>
              <div className="prose prose-gray max-w-full ">
                <PortableText value={brand.alternatives} />
              </div>
            </>
          )}
        </Paper>
      </div>
    </CompanyLayout>
  );
};
export default BrandPage;
