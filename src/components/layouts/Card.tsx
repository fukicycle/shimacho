import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  isLoading: boolean;
}

const Card = ({ children, isLoading }: CardProps) => {
  return (
    <>
      <div className="fade-in p-4 rounded-2xl shadow-lg border-l border-t border-white/30 h-fit w-full backdrop-blur-sm">
        {isLoading ? (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <span className="min-h-10 min-w-10 size-10 animate-pulse bg-secondary/30 rounded-full"></span>
              <div className="flex flex-col gap-2 h-full items-center w-full">
                <span className="w-full min-h-4 animate-pulse bg-secondary/30 rounded-full"></span>
                <span className="w-full min-h-4 animate-pulse bg-secondary/30 rounded-full"></span>
              </div>
            </div>
            <span className="w-full min-h-4 animate-pulse bg-secondary/30 rounded-full"></span>
            <span className="w-full min-h-4 animate-pulse bg-secondary/30 rounded-full"></span>
          </div>
        ) : (
          <div className="fade-in">{children}</div>
        )}
      </div>
    </>
  );
};
export default Card;
