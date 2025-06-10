import { Title } from "@mantine/core";

type TitleLargeProps = {
  title: string;
  color?: string;
  weight?: number
};

export default function TitleLarge({ title, color = "primary", weight = 500 }: TitleLargeProps) {
  return <Title order={3} size="h4" color={color} fw={weight}>{title}</Title>;
}
