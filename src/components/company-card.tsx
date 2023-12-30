import { ActionIcon, Button, Paper, Text } from "@mantine/core";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export type Company = {
  title: string;
  logo: string;
  ownedBy?: string;
  ownerCompanyURL?: string;
  tags: string[];
  _id: string;
};
type Props = Pick<
  Company,
  "title" | "logo" | "ownedBy" | "ownerCompanyURL" | "_id"
>;
export const CompanyCard = ({
  title,
  logo,
  ownedBy = "",
  ownerCompanyURL,
  _id,
}: Props) => {
  return (
    <Link href={`brands/${_id}`} className="no-underline">
      <Paper
        radius="lg"
        className="gap-1 px-3 py-4 shadow duration-500 flex-row-between hover:shadow-lg active:scale-90"
      >
        <div className="w-full grow gap-2 flex-row-start">
          {logo ? (
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-solid border-gray-300">
              <Image
                fill
                sizes={"(min-width: 240px) 240px, 240px"}
                src={logo}
                alt={`${title} logo`}
                quality={60}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fvdXPQAIcAMvy5dPawAAAABJRU5ErkJggg=="
                className="h-full w-full grow object-cover"
              />
            </div>
          ) : (
            <div className="center h-14 w-14 overflow-hidden rounded-2xl bg-red-100 text-lg font-bold text-red-800">
              {title[0]}
            </div>
          )}
          <div className="grow flex-col-start">
            <Text c="dark" className="font-semibold">
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
                Owned by {ownedBy}
              </span>
            )}
          </div>
          <ActionIcon variant="transparent" radius="md" size="lg">
            <FaChevronRight />
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
