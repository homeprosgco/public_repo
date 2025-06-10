import { Text } from "@mantine/core";

type BodyMediumProps = {
  title: string;
  color?: string;
  weight?: number;
};

export default function BodyMedium({
  title,
  color = "primary.4",
  weight = 300
}: BodyMediumProps) {
  return (
    <Text color={color} fw={weight} fz={14}>
      {title} 
    </Text>
  );
}
