import { Text } from "@mantine/core";

type LabelSmallProps = {
  title: string;
  color?: string;
};

export default function LabelSmall({
  title,
  color = "primary",
}: LabelSmallProps) {
  return (
    <Text color={color} fw={600} fz={11}>
      {title}
    </Text>
  );
}
