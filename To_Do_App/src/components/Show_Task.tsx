import type { Task } from "../context/Context_Work";
import Card from "./shared/Card";
import { FaTimes, FaUserEdit } from "react-icons/fa";

type ShowTaskProps = {
  item: Task;
};

function Show_Task({ item }: ShowTaskProps) {
  const handleStatusChange = (status: string) => {
    console.log(status);
  }
  return (
    <Card>
      <p>{item.text}</p>
      <FaTimes className="absolute right-3 top-3 text-red-600"/>
      <FaUserEdit className="absolute right-10 top-3 text-green-600"/>
      <span>Status: {item.status}</span>
      <select 
      className="absolute right-3 text-black"
      value={item.status}
      onChange={(e) => handleStatusChange(e.target.value)}
      >
        <option value="status">status</option>
        <option value="pending">pending</option>
        <option value="completed">completed</option>
      </select>
    </Card>
  );
}

export default Show_Task;