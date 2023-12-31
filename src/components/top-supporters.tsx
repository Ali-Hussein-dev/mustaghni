import { Paper } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { getCorpsList } from "@sanity/lib/get-corps";

//======================================
export const TopSupporters = async () => {
  const corps = await getCorpsList();
  return (
    <div className="pt-10 md:pt-24">
      <div className="mb-4">
        <h2 className="mb-1 text-center text-2xl font-bold">
          Corporations Backing israel
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2">
        {corps
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((o, i) => (
            <Link
              key={i}
              href={`/${o.title}`}
              className="h-full rounded-2xl no-underline delay-100 duration-200 hover:shadow-lg"
            >
              <Paper
                withBorder
                px="md"
                pb="md"
                pt="lg"
                radius="lg"
                h="100%"
                className="text-stone-700 flex-col-center"
              >
                <div className="relative aspect-square w-[110px]">
                  <Image
                    fill
                    sizes={"(max-width: 210px) 200px, 210px"}
                    alt={o.title}
                    src={o?.logo}
                    className="h-full w-full rounded object-contain"
                    quality={60}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fvdXPQAIcAMvy5dPawAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="mx-auto text-center">
                  <p className="font-light">
                    {o.title} {o?.description}
                  </p>
                </div>
              </Paper>
            </Link>
          ))}
      </div>
    </div>
  );
};
