import { BackButton } from "./back-button";
import * as React from "react";

//======================================
interface CompanyLayoutProps {
  children: React.ReactNode;
  title?: React.ReactNode;
}

const CompanyLayout: React.FC<CompanyLayoutProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-4xl grow pt-10">
      <div className="px-4">
        <nav className="h-10 w-full border-0 border-b border-solid border-gray-300 flex-row-between">
          <BackButton />
          {title}
        </nav>
        {children}
      </div>
    </div>
  );
};
export default CompanyLayout;
