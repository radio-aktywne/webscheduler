import { Center, Stack, Title, Text } from "@mantine/core";

export type ErrorProps = {
  title: string;
  message: string;
};

export default function Error({ title, message }: ErrorProps) {
  return (
    <Center>
      <Stack>
        <Title align="center">{title}</Title>
        <Text align="center">{message}</Text>
      </Stack>
    </Center>
  );
}
