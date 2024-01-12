import { unstable_setRequestLocale } from "next-intl/server";

//======================================
const Blocked = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <div className="center min-h-screen">
      <h1>This site can’t be reached</h1>
    </div>
  );
};
export default Blocked;
