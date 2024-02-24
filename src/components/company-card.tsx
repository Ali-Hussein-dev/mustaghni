import { ActionIcon, Avatar, Paper, Skeleton, Text } from "@mantine/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { type TypedObject } from "sanity";
import { ImageContainer } from "./img-container";
import { BoycottBtn } from "./boycott-button";

export type Company = {
  title: string;
  logo: string;
  ownedBy?: string;
  ownerCompanyURL?: string;
  tags: string[];
  _id: string;
  evidence?: TypedObject[];
  alternatives?: TypedObject[];
  withBoycottBtn?: boolean;
};

export type CompanyProps = Pick<
  Company,
  "title" | "logo" | "ownedBy" | "ownerCompanyURL" | "_id" | "withBoycottBtn"
> & {
  locale: string;
};
export const CompanyCard = (props: CompanyProps) => {
  const {
    title,
    logo,
    ownedBy = "",
    ownerCompanyURL,
    _id,
    locale,
    withBoycottBtn = true,
  } = props;

  return (
    <div>
      <Link href={`/${locale}/brands/${_id}`} className="group no-underline">
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
              <Avatar size="lg" radius="xl">
                {title[0]}
              </Avatar>
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
      {withBoycottBtn && <BoycottBtn brand={props} />}
    </div>
  );
};

export const DyanmicCompanyCard = dynamic(
  () => import("./company-card").then((r) => r.CompanyCard),
  {
    ssr: false,
    loading: () => <Skeleton radius="xxl" h="150px" w="100%" />,
  },
);

export const ComapnyCardMini = (props: CompanyProps) => {
  const { title, logo, _id, locale } = props;

  return (
    <Link
      href={`/${locale}/brands/${_id}`}
      className="group block no-underline"
    >
      <Paper
        radius="lg"
        className="h-full gap-1 px-2 py-1 shadow duration-500 flex-row-between hover:shadow-lg active:md:scale-95"
        dir="ltr"
      >
        <div className="w-full grow gap-2 flex-row-start">
          {logo ? (
            <ImageContainer
              width="50"
              height="50"
              sizes={"(min-width: 240px) 240px, 240px"}
              src={logo}
              alt={`${title} logo`}
              cn="rounded-2xl"
            />
          ) : (
            <Avatar size="md" radius="md">
              {title[0]}
            </Avatar>
          )}
          <div className="grow flex-col-start">
            <Text c="dark" className="font-semibold" lineClamp={1}>
              {title}
            </Text>
          </div>
          <ActionIcon variant="transparent" radius="md" size="lg">
            <FaChevronRight className="text-gray-400 group-hover:text-sky-500" />
          </ActionIcon>
        </div>
      </Paper>
    </Link>
  );
};
