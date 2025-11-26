import type { ReactNode } from "react";

interface MobileContainerProps {
  children: ReactNode;
}

const MobileContainer = ({ children }: MobileContainerProps) => {
  return (
    <>
      <div className="bg-primary h-dvh flex items-center justify-center overflow-hidden font-main">
        <div className="max-w-[440px] max-h-[960px] h-full w-full shadow-lg rounded-xl border-l border-t border-white/30 overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
};

export default MobileContainer;
