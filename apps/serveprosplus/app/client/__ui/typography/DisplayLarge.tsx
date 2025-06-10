import { Title } from "@mantine/core";

type DisplayLargeProps = {
  title: string;
};

export default function DisplayLarge({ title }: DisplayLargeProps) {
  return (
    <Title order={1} color="primary" fz={{ base: 36, sm: 45, lg: 57 }}>
      {title}
    </Title>
  );
}
