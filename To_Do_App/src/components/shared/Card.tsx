import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};
function Card({children}: CardProps) {
  return (
    <div className="rounded-lg w-3/7 bg-cyan-950 text-white px-2 py-8 font-bold text-xl justify-self-center-safe ">
      {children}
    </div>
  )
}

export default Card
