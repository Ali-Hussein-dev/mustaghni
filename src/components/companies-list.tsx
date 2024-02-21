import { ActionIcon, Badge } from "@mantine/core";
import { type Company, DyanmicCompanyCard } from "./company-card";
import { FaShareAlt } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const ShareButton = () => {
  // const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Share the result",
          url: window.location.href,
        });
        // setShareSuccess(true);
      } catch (error) {
        console.error("Something went wrong sharing the page", error);
      }
    } else {
      console.log("Web Share API is not supported in your browser");
    }
  };
  return (
    <ActionIcon
      type="button"
      onClick={handleShare}
      color="green"
      variant="light"
      radius="xxl"
      size="lg"
    >
      <FaShareAlt />
    </ActionIcon>
  );
};
export const CompaniesList = ({
  companies,
  tags,
}: {
  companies?: Company[] | { msg: string };
  tags: string[];
}) => {
  const r = useRouter();
  const locale = useLocale();
  if (!companies) return null;
  if ("msg" in companies) {
    return (
      <p className="mx-4 rounded-sm border border-solid px-4 py-3 text-center text-xl font-medium text-red-600">
        {companies.msg}
      </p>
    );
  }

  return (
    <div className="bg-gray-50">
      {companies.length === 0 ? (
        <div className="w-full px-5 font-semibold">
          <p className="rounded-xl border border-solid border-red-700 py-5 text-center text-lg font-medium text-red-900">
            Not found in database!
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-solid border-gray-200 pb-5 text-gray-700">
          <div className="mb-4 gap-1 bg-gray-100 px-2 py-2 flex-row-between md:px-5">
            <div className="w-full grow gap-3 font-medium flex-row-start">
              {tags.length > 0
                ? tags.map((tag) => (
                    <Badge key={tag} variant="light" color="green">
                      {tag}
                    </Badge>
                  ))
                : null}
            </div>
            <div className="gap-2 flex-row-end">
              <ActionIcon
                radius="xxl"
                className="font-medium"
                color="gray"
                variant="light"
                size="lg"
                disabled
              >
                {companies.length}
              </ActionIcon>
              <ShareButton />
              <ActionIcon
                radius="xxl"
                color="red"
                variant="outline"
                size="lg"
                onClick={() => r.push(`/${locale}`, { scroll: false })}
              >
                <RiDeleteBinFill />
              </ActionIcon>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 px-2 pb-2 md:grid-cols-2 md:gap-y-7 md:px-4">
            {companies?.map((o, i) => (
              <DyanmicCompanyCard key={i} {...o} locale={locale} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
