import type { Task } from "../context/Context_Work";
import Card from "./shared/Card";
import {FaTimes} from "react-icons/fa"
type ShowTaskProps = {
  item: Task;
};

function Show_Task({ item }: ShowTaskProps) {
  return (
    <Card>
      <p>{item.text}</p>
      <FaTimes />
    </Card>
  );
}

export default Show_Task;