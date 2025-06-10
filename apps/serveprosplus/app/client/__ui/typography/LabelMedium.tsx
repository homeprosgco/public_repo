import { Text } from "@mantine/core";

type LabelMediumProps = {
  title: string;
  color?: string;
};

export default function LabelMedium({
  title,
  color = "primary",
}: LabelMediumProps) {
  return (
    <Text color={color} fw={300} fz={12}>
      {title}
    </Text>
  );
}
