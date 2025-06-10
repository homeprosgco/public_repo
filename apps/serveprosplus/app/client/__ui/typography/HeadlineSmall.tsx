import { Title } from "@mantine/core";

type HeadlineSmallProps = {
  title: string;
  color?: string;
};

export default function HeadlineSmall({ title, color = "primary" }: HeadlineSmallProps) {
  return <Title order={2} size="h2" color={color} >{title}</Title>;
}
