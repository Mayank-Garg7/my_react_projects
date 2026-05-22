import type { Task } from "../context/Context_Work";
import Card from "./shared/Card";

type ShowTaskProps = {
  item: Task;
};

function Show_Task({ item }: ShowTaskProps) {
  return (
    <Card>
      <p>{item.text}</p>
    </Card>
  );
}

export default Show_Task;