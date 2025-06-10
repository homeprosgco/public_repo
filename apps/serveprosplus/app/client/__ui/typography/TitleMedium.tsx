import { Title } from "@mantine/core";

type TitleMediumProps = {
  title: string;
  color?: string;
};

export default function TitleMedium({ title, color = "primary" }: TitleMediumProps) {
  return <Title order={4} size="h4" color={color} >{title}</Title>;
}
