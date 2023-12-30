import CompanyLayout from "@/components/company-layout";
import { Anchor, Badge, Paper, Text, Title } from "@mantine/core";
import { getBrand, getBrandName } from "@sanity/lib/get-companies";
import { type Metadata } from "next";
import Image from "next/image";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await getBrandName(params.slug);
  const name = res.title ?? "";
  return {
    title: `${name} | Mustaghni`,
    description: `Brands list owned by ${name}`,
  };
}

//======================================
const BrandPage = async ({ params }: Props) => {
  const _id = params.slug.replace(/%20/g, " ");
  const brand = await getBrand(_id);
  return (
    <CompanyLayout title="📝 WIP Page is incomplete!">
      <div className="space-y-4 py-4">
        <Paper
          className="gap-3 px-3 pb-3 pt-4 shadow flex-row-start"
          radius="lg"
          withBorder
        >
          {brand.logo ? (
            <Image
              src={brand.logo}
              alt="logo"
              width="100"
              height="100"
              className="rounded-3xl border border-solid border-gray-200 object-cover"
              quality={60}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fvdXPQAIcAMvy5dPawAAAABJRU5ErkJggg=="
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
                <Anchor
                  href={brand.ownerCompanyURL}
                  variant="gradient"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {brand.ownedBy}
                </Anchor>
              </div>
            )}
          </div>
        </Paper>
        <Paper className="gap-3 px-3 pb-3 pt-4 shadow" withBorder radius="lg">
          <div className="mb-2 gap-3 flex-row-start">
            <HiDocumentMagnifyingGlass size="24" className="text-red-800" />
            <Title order={2} c="gray" className="font-bold">
              Proof
            </Title>
          </div>
          {brand?.tags && brand.tags.includes("israel") && (
            <Text>The brand is based on israel!</Text>
          )}
          {brand.ownedBy && (
            <Text className="font-medium">
              The brand is ownd by <strong>{brand.ownedBy}</strong> which
              supports the israeli occupation
            </Text>
          )}
          {!brand.ownedBy && !brand.tags && (
            <Text className="font-medium">
              Please be patient we are adding evidence for every brand
            </Text>
          )}
        </Paper>
      </div>
    </CompanyLayout>
  );
};
export default BrandPage;
