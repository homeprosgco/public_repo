import { Text } from "@mantine/core";

type LabelLargeProps = {
  title: string;
  color?: string;
};

export default function LabelLarge({
  title,
  color = "primary",
}: LabelLargeProps) {
  return (
    <Text color={color} fw={600} fz={14}>
      {title}
    </Text>
  );
}
