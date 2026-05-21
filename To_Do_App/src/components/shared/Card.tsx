import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="bg-cyan-950 text-white px-2 py-2 font-bold text-xl">
      {children}
    </div>
  );
}

export default Card;