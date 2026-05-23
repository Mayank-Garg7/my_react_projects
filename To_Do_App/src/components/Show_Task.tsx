import { useContext } from "react";
import Context_Work, {
  type Task,
} from "../context/Context_Work";

import Card from "./shared/Card";

import {
  FaTrash,
  FaPen,
} from "react-icons/fa";

type ShowTaskProps = {
  item: Task;
};

function Show_Task({ item }: ShowTaskProps) {
  const context = useContext(Context_Work);

  if (!context) {
    throw new Error(
      "Show_Task must be used inside ContextProvider"
    );
  }

  const { updateTaskStatus } = context;

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
      <div className="flex items-start justify-between gap-4">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <p className={`text-sm md:text-base ${item.status === "completed" ? "line-through text-gray-400" : "text-white"} font-medium leading-relaxed`}>
            {item.text}
          </p>
            <select
              value={item.status}
              onChange={handleStatusChange}
              className="text-sm rounded-md px-2 py-1 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="pending">
                Pending
              </option>

              <option value="completed">
                Completed
              </option>
            </select>
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-3">

          <button
            className="
              p-2
              rounded-md
              text-gray-500
              hover:bg-green-100
              hover:text-green-600
              transition
            "
          >
            <FaPen />
          </button>

          <button
            className="
              p-2
              rounded-md
              text-gray-500
              hover:bg-red-100
              hover:text-red-600
              transition
            "
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default Show_Task;