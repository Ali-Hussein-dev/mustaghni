//======================================
const PCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full rounded-[1.7rem] bg-gradient-to-tr from-green-600/70 via-black/70 to-red-700/70 p-[2px] pb-[7px]">
      <div className="h-full rounded-3xl bg-white/[0.95] px-5 pb-4 pt-7 shadow-lg backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
};
export default PCard;
