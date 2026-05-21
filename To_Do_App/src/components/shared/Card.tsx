import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="bg-cyan-950 text-white px-2 py-2 font-bold text-xl w-2/4 justify-self-center-safe rounded-lg">
      {children}
    </div>
  );
}

export default Card;