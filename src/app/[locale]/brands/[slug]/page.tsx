import CompanyLayout from "@/components/company-layout";
import { ImageContainer } from "@/components/img-container";
import { Anchor, Badge, Paper, Text, Title } from "@mantine/core";
import { PortableText } from "@portabletext/react";
import { getBrand, getBrandName } from "@sanity/lib/get-companies";
import { type Metadata } from "next";
import Image from "next/image";
import { PiCaretDoubleUpFill } from "react-icons/pi";

type Props = { params: { slug: string; locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await getBrandName(params.slug);
  const name = res.title ?? "";
  return {
    title: `${name} | Mustaghni`,
    description: `Brands list owned by ${name}`,
  };
}
const Isr = () => (
  <p className="!inline-block !line-through decoration-red-600">ISRAEL</p>
);
//======================================
const BrandPage = async ({ params }: Props) => {
  const _id = params.slug.replace(/%20/g, " ");
  const brand = await getBrand(_id);
  const isBasedOnIsrael = brand?.tags?.includes("israel");
  const hasEvidence = !!brand?.evidence;
  const isOwnedByCorp = !!brand?.ownedBy;
  return (
    <CompanyLayout>
      <div className="space-y-5 py-4">
        <Paper
          className="gap-3 px-3 pb-3 pt-4 shadow-lg flex-row-start"
          radius="lg"
          withBorder
          dir="ltr"
        >
          {brand.logo ? (
            <ImageContainer
              src={brand.logo}
              alt="logo"
              width="100"
              height="100"
            />
          ) : (
            <div></div>
          )}
          <div className="flex flex-col items-start gap-2">
            <Title c="gray" order={2}>
              {brand.title}
            </Title>
            <div className="flex-wrap gap-2 flex-row-start">
              {Array.isArray(brand.tags) && (
                <div className="flex-wrap gap-3 flex-row-start">
                  {brand.tags.sort().map((str, i) => (
                    <Badge
                      key={i}
                      size="md"
                      color="dark"
                      variant="dot"
                      radius="sm"
                    >
                      {str}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            {brand.ownedBy && (
              <div className="">
                Owned by:{" "}
                <Anchor href={`/corps/${brand.ownedBy}`} variant="gradient">
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
          {isBasedOnIsrael && (
            <Text>
              The brand is based on <Isr />!
            </Text>
          )}
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
        </Paper>
        {brand.alternatives && (
          <Paper withBorder className="px-3 py-4" radius="lg" dir="ltr">
            <div className="mb-2 gap-3 flex-row-start">
              <PiCaretDoubleUpFill size="24" className="text-green-400" />
              <Title order={3} c="gray" className="font-bold">
                Discover Alternatives
              </Title>
            </div>
            <div className="prose prose-gray max-w-full ">
              <PortableText value={brand.alternatives} />
            </div>
          </Paper>
        )}
      </div>
    </CompanyLayout>
  );
};
export default BrandPage;
