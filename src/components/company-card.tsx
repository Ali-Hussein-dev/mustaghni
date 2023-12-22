import dynamic from "next/dynamic";
import Image from "next/image";

export type Company = {
  title: string;
  logo: string;
  ownedBy?: string;
  ownerCompanyURL?: string;
  tags: string[];
};
type Props = Pick<Company, "title" | "logo" | "ownedBy" | "ownerCompanyURL">;
export const CompanyCard = ({
  title,
  logo,
  ownedBy = "",
  ownerCompanyURL,
}: Props) => {
  return (
    <div className="rounded-sm border border-gray-200 bg-gray-100/60 px-3 py-4 ">
      <div className="gap-2 flex-row-start">
        {logo ? (
          <div className="relative h-11 w-11 overflow-hidden rounded-full">
            <Image
              fill
              sizes={"(max-width: 210px) 200px, 210px"}
              src={logo}
              alt={`${title} logo`}
              quality={60}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fvdXPQAIcAMvy5dPawAAAABJRU5ErkJggg=="
              // className="object-contain"
            />
          </div>
        ) : (
          <div className="center h-10 w-10 overflow-hidden rounded-full bg-red-300 text-lg font-semibold text-red-800">
            {title[0]}
          </div>
        )}
        <div className=" flex-col-start">
          <span className="font-semibold text-gray-700">{title}</span>

          {ownerCompanyURL ? (
            <span className="text-sm ">
              Owned by:{" "}
              <a
                href={ownerCompanyURL}
                className="text-sky-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ownedBy}
              </a>
            </span>
          ) : (
            <span hidden={!ownedBy} className="text-sm text-gray-600">
              Owned by {ownedBy}
            </span>
          )}
        </div>
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
