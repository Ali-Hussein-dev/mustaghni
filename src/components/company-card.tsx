import { ActionIcon, Paper, Text } from "@mantine/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { type TypedObject } from "sanity";
import { ImageContainer } from "./img-container";

export type Company = {
  title: string;
  logo: string;
  ownedBy?: string;
  ownerCompanyURL?: string;
  tags: string[];
  _id: string;
  evidence?: TypedObject[];
  alternatives?: TypedObject[];
};

type Props = Pick<
  Company,
  "title" | "logo" | "ownedBy" | "ownerCompanyURL" | "_id"
> & {
  locale: string;
};
export const CompanyCard = ({
  title,
  logo,
  ownedBy = "",
  ownerCompanyURL,
  _id,
  locale,
}: Props) => {
  return (
    <Link href={`${locale}/brands/${_id}`} className="group no-underline">
      <Paper
        radius="lg"
        className="h-full gap-1 px-2 py-1 shadow duration-500 flex-row-between hover:shadow-lg active:md:scale-95"
        dir="ltr"
      >
        <div className="w-full grow gap-2 flex-row-start">
          {logo ? (
            <ImageContainer
              width="70"
              height="70"
              sizes={"(min-width: 240px) 240px, 240px"}
              src={logo}
              alt={`${title} logo`}
              cn="rounded-2xl"
            />
          ) : (
            <div className="center h-[67px] w-[67px] overflow-hidden rounded-2xl bg-red-100 text-lg font-bold text-red-800">
              {title[0]}
            </div>
          )}
          <div className="grow flex-col-start">
            <Text c="dark" className="font-semibold" lineClamp={1}>
              {title}
            </Text>

            {ownerCompanyURL ? (
              <span className="text-sm">
                <a
                  href={ownerCompanyURL}
                  className="text-sky-500 no-underline hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ownedBy}
                </a>
              </span>
            ) : (
              <span hidden={!ownedBy} className="text-sm">
                {ownedBy}
              </span>
            )}
          </div>
          <ActionIcon variant="transparent" radius="md" size="lg">
            <FaChevronRight className="text-gray-400 group-hover:text-sky-500" />
          </ActionIcon>
        </div>
      </Paper>
    </Link>
  );
};

export const DyanmicCompanyCard = dynamic(
  () => import("./company-card").then((r) => r.CompanyCard),
  {
    ssr: false,
    loading: () => (
      <div className="h-20 w-full animate-pulse rounded-xl bg-gray-50 shadow" />
    ),
  },
);
