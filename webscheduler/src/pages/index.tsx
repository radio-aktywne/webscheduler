import Layout from "../components/Layout";
import Panel from "../components/Panel";
import Head from "next/head";
import { Box, Loader } from "@mantine/core";
import { useLabels } from "../contexts/labels";
import Center from "../components/Center";
import useTasks from "../hooks/tasks";
import TaskSummary from "../components/TaskSummary";
import Error from "../components/Error";

export default function Index() {
  const labels = useLabels();
  const { tasks, loading, error } = useTasks();

  const sortedTasks =
    tasks &&
    [...tasks].sort((a, b) => {
      return (
        Number(a.isRunning) - Number(b.isRunning) ||
        a.name.localeCompare(b.name)
      );
    });

  return (
    <Box>
      <Head>
        <title>{labels.index.title}</title>
      </Head>
      <Layout>
        {loading ? (
          <Center>
            <Loader />
          </Center>
        ) : error ? (
          <Error title={labels.index.error} message={error} />
        ) : (
          sortedTasks.map((task) => (
            <Panel>
              <TaskSummary task={task} />
            </Panel>
          ))
        )}
      </Layout>
    </Box>
  );
}
