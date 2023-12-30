import { DyanmicCompanyCard } from "@/components/company-card";
import CompanyLayout from "@/components/company-layout";
import { Title } from "@mantine/core";
import { getByCorp } from "@sanity/lib/get-companies";

type Props = {
  params: {
    corp: string;
  };
};
export const revalidate = 30;

export function generateMetadata({ params }: Props) {
  const name = params.corp.replace(/%20/g, " ").replace(/%C3%A9/g, "é");
  return {
    title: `${name} | Mustaghni`,
    description: `Brands list owned by ${name}`,
  };
}
//======================================
const CorpPage = async ({ params }: Props) => {
  // get brands by corp
  const corp = params.corp
    .replace(/%20/g, " ")
    .replace(/%C3%A9/g, "é")
    .replace(/%26/g, "&") // for procter & gamble
    .toLowerCase();
  const brands = await getByCorp(corp);

  return (
    <CompanyLayout
      title={
        <Title c="gray" order={1} className="text-center text-2xl font-bold">
          {brands[0]?.ownedBy}
        </Title>
      }
    >
      <div>
        <p className="pt-2">Total brands: {brands.length}</p>
        <div className="grid gap-3 pb-6 pt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {brands.map((brand) => (
            <DyanmicCompanyCard
              key={brand.title}
              {...brand}
              ownedBy={undefined}
            />
          ))}
        </div>
      </div>
    </CompanyLayout>
  );
};

export default CorpPage;
