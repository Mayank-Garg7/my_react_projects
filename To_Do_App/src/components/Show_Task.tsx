import type { Task } from "../context/Context_Work";
import Card from "./shared/Card";
import { FaTimes, FaUserEdit } from "react-icons/fa";

type ShowTaskProps = {
  item: Task;
};

function Show_Task({ item }: ShowTaskProps) {
  return (
    <Card>
      <p>{item.text}</p>
      <FaTimes className="absolute right-3 top-3 text-red-600"/>
      <FaUserEdit className="absolute right-10 top-3 text-green-600"/>
      <span>Status: {item.status}</span>

    </Card>
  );
}

export default Show_Task;
