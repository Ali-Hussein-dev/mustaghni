import { Header } from "./Header";
import { BackButton } from "./back-button";
import * as React from "react";

//======================================
interface CompanyLayoutProps {
  children: React.ReactNode;
  title?: React.ReactNode;
}

const CompanyLayout: React.FC<CompanyLayoutProps> = ({ title, children }) => {
  return (
    <div className="animate-in w-full max-w-4xl grow">
      <Header />
      <div className="px-3 pb-4 pt-10 md:px-2 lg:px-0">
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
