import { emischedulerApi, Task } from "../lib/api";
import Json from "./Json";
import { Button, Group } from "@mantine/core";
import { useLabels } from "../contexts/labels";

export type TaskControlsProps = {
  task: Task;
};

export default function TaskControls({ task }: TaskControlsProps) {
  const labels = useLabels();

  const handleEnable = async () =>
    await emischedulerApi.enableTask({ taskName: task.name });

  const handleDisable = async () =>
    await emischedulerApi.disableTask({ taskName: task.name });

  const handleRun = async () =>
    await emischedulerApi.runTask({ taskName: task.name });

  const handleTerminate = async () =>
    await emischedulerApi.terminateTask({ taskName: task.name });

  return (
    <Group grow>
      <Button disabled={!task.disabled} onClick={handleEnable}>
        {labels.task.buttons.enable}
      </Button>
      <Button disabled={task.disabled} onClick={handleDisable}>
        {labels.task.buttons.disable}
      </Button>
      <Button
        disabled={task.disabled || task.isRunning || task.forceRun}
        onClick={handleRun}
      >
        {labels.task.buttons.run}
      </Button>
      <Button
        disabled={task.disabled || !task.isRunning || task.forceTermination}
        onClick={handleTerminate}
      >
        {labels.task.buttons.terminate}
      </Button>
    </Group>
  );
}
