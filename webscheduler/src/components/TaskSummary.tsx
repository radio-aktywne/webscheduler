import { Task } from "../lib/api";
import { Title } from "@mantine/core";
import Link from "./Link";

export type TaskSummaryProps = {
  task: Task;
};

export default function TaskSummary({ task }: TaskSummaryProps) {
  return (
    <Link href={`/task/${task.name}`}>
      <Title order={3}>{task.name}</Title>
    </Link>
  );
}
