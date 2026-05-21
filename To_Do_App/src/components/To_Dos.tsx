import { useWorkContext } from "../hooks/useWorkContext";
import Show_Task from "./Show_Task";
import ToDos_Form from "./ToDos_Form";
import type {Task} from '../context/Context_Work'


function To_Dos() {
  const {work} = useWorkContext()
  return (
    <div className="min-h-screen bg-cyan-900 text-white p-20">
      <ToDos_Form />
      {work.map((item: Task) => (
        <Show_Task item={item} key={item.id} />
      ))}
    </div>
  );
}

export default To_Dos;