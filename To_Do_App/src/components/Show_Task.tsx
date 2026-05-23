import type { Task } from "../context/Context_Work";
import Card from "./shared/Card";
import { FaTimes, FaUserEdit } from "react-icons/fa";

type ShowTaskProps = {
  item: Task;
  updateTaskStatus: (
    id: number,
    status: "pending" | "completed"
  ) => void;
};

function Show_Task({
  item,
  updateTaskStatus,
}: ShowTaskProps) {

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    updateTaskStatus(
      item.id,
      e.target.value as "pending" | "completed"
    );
  };

  return (
    <Card>
      <p>{item.text}</p>

      <FaTimes className="absolute right-3 top-3 text-red-600" />

      <FaUserEdit className="absolute right-10 top-3 text-green-600" />

      <span
        className={
          item.status === "completed"
            ? "text-green-600"
            : "text-yellow-500"
        }
      >
        Status: {item.status}
      </span>

      <select
        className="absolute right-3 text-black"
        value={item.status}
        onChange={handleStatusChange}
      >
        <option value="pending">pending</option>
        <option value="completed">completed</option>
      </select>
    </Card>
  );
}

export default Show_Task;
