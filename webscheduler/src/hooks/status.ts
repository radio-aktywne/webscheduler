import { useEffect, useState } from "react";
import { emischedulerApi } from "../lib/api";
import { useInterval } from "@mantine/hooks";
import { AxiosError } from "axios";

export default function useStatus() {
  const [status, setStatus] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const interval = useInterval(() => {
    emischedulerApi
      .status()
      .then((task) => {
        setStatus(task.data.alive);
        setLoading(false);
      })
      .catch((err: AxiosError<any>) => {
        setError(err.response?.data?.detail || err.message);
        setLoading(false);
      });
  }, 1000);

  useEffect(() => {
    interval.start();
    return () => interval.stop();
  }, []);

  return { status, loading, error };
}
