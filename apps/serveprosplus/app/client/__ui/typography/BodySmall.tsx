import { Text } from "@mantine/core";

type BodySmallProps = {
  title: string;
  color?: string;
  weight?: number;
};

export default function BodySmall({
  title,
  color = "primary.4",
  weight = 300
}: BodySmallProps) {
  return (
    <Text color={color} fw={weight} fz={11}>
      {title} 
    </Text>
  );
}
