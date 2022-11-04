import React from "react";
import { useLabels } from "../contexts/labels";
import Link from "./Link";
import { Text } from "@mantine/core";

export type GoBackProps = {};

export default function GoBack({}: GoBackProps) {
  const labels = useLabels();

  return (
    <Link href="/" passHref>
      <Text size="xs" align="center" variant="link">
        {labels.goBack}
      </Text>
    </Link>
  );
}
