import { Task } from "../lib/api";
import Json from "./Json";

export type TaskDetailProps = {
  task: Task;
};

export default function TaskDetail({ task }: TaskDetailProps) {
  return <Json object={task} />;
}
