import { type Company, DyanmicCompanyCard } from "./company-card";
import { InitialView } from "./initial-view";

export const CompaniesList = ({ companies }: { companies?: Company[] }) => {
  return !companies ? (
    <InitialView />
  ) : (
    <div>
      {companies.length === 0 && (
        <div className="w-full bg-gray-100 py-4 font-semibold flex-row-center">
          not found
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 px-1 md:grid-cols-2 md:px-4">
        {companies?.map((o, i) => (
          <DyanmicCompanyCard key={i} title={o.title} logo={o?.logo} />
        ))}
      </div>
    </div>
  );
};
