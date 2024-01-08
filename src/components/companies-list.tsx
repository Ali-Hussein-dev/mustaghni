import { ActionIcon, Badge } from "@mantine/core";
import { type Company, DyanmicCompanyCard } from "./company-card";
import { FaShareAlt } from "react-icons/fa";

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
      radius="lg"
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
  if (!companies) return null;
  if ("msg" in companies) {
    return (
      <p className="mx-4 rounded-sm border border-solid px-4 py-3 text-center text-xl font-medium text-red-600">
        {companies.msg}
      </p>
    );
  }
  return (
    <div>
      {companies.length === 0 ? (
        <div className="w-full px-5 font-semibold">
          <p className="rounded-xl border border-solid border-red-700 py-5 text-center text-xl font-medium text-red-900">
            Not found in database!
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-solid border-gray-200 pb-5 text-gray-700">
          <div className="mb-4 gap-1 bg-gray-50 px-2 py-2 flex-row-between md:px-5">
            <div className="w-full grow gap-3 font-medium flex-row-start">
              Filtered by
              {tags.length > 0 ? (
                tags.map((tag) => (
                  <Badge key={tag} variant="light" color="green">
                    {tag}
                  </Badge>
                ))
              ) : (
                <Badge> NAME</Badge>
              )}
            </div>
            {/* <Text className="m-0 w-full p-0 text-right font-medium">
              Found: {companies.length}
            </Text> */}
            <ShareButton />
          </div>

          <div className="grid grid-cols-1 gap-3 px-2 md:grid-cols-2 md:px-4">
            {companies?.map((o, i) => <DyanmicCompanyCard key={i} {...o} />)}
          </div>
        </div>
      )}
    </div>
  );
};
