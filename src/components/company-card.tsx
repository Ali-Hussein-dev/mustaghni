import dynamic from "next/dynamic";
import Image from "next/image";

export type Company = {
  title: string;
  logo: string;
  tags: string[];
};
type Props = Pick<Company, "title" | "logo">;
export const CompanyCard = ({ title, logo }: Props) => {
  return (
    <div className="rounded-sm border border-gray-200 bg-gray-100 px-3 py-4 ">
      <div className="flex-row-start gap-2">
        {logo ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              fill
              src={logo}
              alt={`${title} logo`}
              // className="object-contain"
            />
          </div>
        ) : (
          <div className="center h-10 w-10 overflow-hidden rounded-full bg-red-300 text-lg font-semibold text-red-800">
            {title[0]}
          </div>
        )}
        <span className="font-semibold text-gray-700">{title}</span>
      </div>
    </div>
  );
};

export const DyanmicCompanyCard = dynamic(
  () => import("./company-card").then((r) => r.CompanyCard),
  {
    ssr: false,
    loading: () => <div className="h-14 w-full rounded-sm shadow" />,
  },
);
