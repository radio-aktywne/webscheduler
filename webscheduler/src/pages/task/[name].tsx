import { useRouter } from "next/router";
import { Box, Loader, Stack } from "@mantine/core";
import Head from "next/head";
import Layout from "../../components/Layout";
import Center from "../../components/Center";
import Panel from "../../components/Panel";
import { useLabels } from "../../contexts/labels";
import useTask from "../../hooks/task";
import Error from "../../components/Error";
import TaskDetail from "../../components/TaskDetail";
import TaskControls from "../../components/TaskControls";
import GoBack from "../../components/GoBack";

export default function Task() {
  const labels = useLabels();

  const router = useRouter();
  const { name } = router.query;

  const { task, loading, error } = useTask(name as string);

  return (
    <Box>
      <Head>
        <title>{labels.task.title(name as string)}</title>
      </Head>
      <Layout>
        {loading ? (
          <Center>
            <Loader />
          </Center>
        ) : error ? (
          <Error title={labels.task.error} message={error} />
        ) : (
          <Stack>
            <Panel>
              <TaskDetail task={task} />
            </Panel>
            <Panel>
              <TaskControls task={task} />
            </Panel>
            <GoBack />
          </Stack>
        )}
      </Layout>
    </Box>
  );
}
