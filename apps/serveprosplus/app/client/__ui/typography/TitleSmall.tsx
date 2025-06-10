import { Title } from "@mantine/core";

type TitleSmallProps = {
  title: string;
  color?: string;
};

export default function TitleSmall({ title, color = "accent" }: TitleSmallProps) {
  return <Title order={5} size="h6" color={color} >{title}</Title>;
}
