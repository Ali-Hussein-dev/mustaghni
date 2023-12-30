//======================================
const PCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full rounded-3xl bg-gradient-to-tr from-green-600/70 via-black/70 to-red-700/70 p-[3px] pb-1.5">
      <div className="h-full rounded-3xl bg-white/[0.97] px-5 pb-4 pt-7 backdrop-blur-lg">
        {children}
      </div>
    </div>
  );
};
export default PCard;
