import { useEffect, useState } from "react";
import Tasks from "../Data/Tasks.json";
import ToDos_Form from "./ToDos_Form";

type Task = {
  id: number;
  text: string;
};

function To_Dos() {
  const [work, setWork] = useState<Task[]>(() => {
    const data = localStorage.getItem("Work_to_do");

    return data ? ( JSON.parse(data) as Task[] ) : Tasks;
  });

  useEffect(() => {
    localStorage.setItem("Work_to_do", JSON.stringify(work));
  }, [work]);

  return (
    <div className="min-h-screen bg-cyan-900 text-white p-20">
      <ToDos_Form />

    </div>
  );
}

export default To_Dos;