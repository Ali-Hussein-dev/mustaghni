import { BackButton } from "@/components/back-button";
import { CompanyCard } from "@/components/company-card";
import { Title } from "@mantine/core";
import { getByCorp } from "@sanity/lib/get-companies";

type Props = {
  params: {
    corp: string;
  };
};
export const revalidate = 30;

export function generateMetadata({ params }: Props) {
  const name = params.corp.replace(/%20/g, " ");
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
    .replace(/%26/g, "&") // for procter & gamble
    .toLowerCase();
  const brands = await getByCorp(corp);

  return (
    <>
      <div className="mx-auto w-full max-w-4xl grow px-2 pt-16 md:px-4">
        <nav className="h-10 w-full border-0 border-b border-solid border-gray-300 flex-row-between">
          <BackButton />
          <Title c="gray" order={1} className="text-center text-2xl font-bold">
            {brands[0]?.ownedBy}
          </Title>
        </nav>
        {/* <div className="relative">
          <div className="absolute top-0 h-56 w-full border-0 border-t border-solid border-slate-300 bg-gradient-to-b from-slate-50 to-transparent"></div>
        </div> */}
        {corp}
        <div>
          <div className="pt-4">Total brands: {brands.length}</div>
          <div className="grid gap-3 pb-6 pt-3 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {brands.map((brand) => (
              <CompanyCard key={brand.title} {...brand} ownedBy={undefined} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CorpPage;
