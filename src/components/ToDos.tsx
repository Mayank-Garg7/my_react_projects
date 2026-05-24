import { useWorkContext } from "../hooks/useWorkContext";
import ShowTask from "./ShowTask";
import ToDosForm from "./ToDosForm";
import type {Task} from '../context/TodoContext'


function To_Dos() {
  const {work} = useWorkContext()
  return (
    <div className="min-h-screen bg-cyan-900 text-white p-20">
      <ToDosForm />
      {work.map((item: Task) => (
        <ShowTask item={item} key={item.id} />
      ))}
    </div>
  );
}

export default To_Dos;