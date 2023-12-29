import { type Company, DyanmicCompanyCard } from "./company-card";

export const CompaniesList = ({
  companies,
}: {
  companies?: Company[] | { msg: string };
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
      {companies.length === 0 && (
        <div className="w-full px-5 font-semibold">
          <p className="rounded-sm bg-red-50 py-5 text-center text-xl text-red-800">
            Not found in our database!
          </p>
        </div>
      )}
      <div className="px-1 md:px-4">
        {companies.length > 0 && (
          <p className="m-0 p-0 pb-1 font-medium text-gray-500">
            Results: {companies.length}
          </p>
        )}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {companies?.map((o, i) => (
            <DyanmicCompanyCard
              key={i}
              title={o.title}
              logo={o?.logo}
              ownedBy={o.ownedBy}
              ownerCompanyURL={o.ownerCompanyURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
