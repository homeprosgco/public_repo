import { Text } from "@mantine/core";

type BodyLargeProps = {
  title: string;
  color?: string;
  weight?: number;
};

export default function BodyLarge({
  title,
  color = "primary.4",
  weight = 300,
}: BodyLargeProps) {
  return (
    <Text color={color} fw={weight} fz={16}>
      {title}
    </Text>
  );
}
