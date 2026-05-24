import Context_Work from "../context/Context_Work";
import { useContext } from "react";

export const useWorkContext = () => {
  const context = useContext(Context_Work);
  if (!context) throw new Error("No Provider");
  return context;
};