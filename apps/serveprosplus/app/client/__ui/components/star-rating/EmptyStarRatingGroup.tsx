import { Group } from "@mantine/core";
import EmptyStarRating from "./EmptyStarRating";

type EmptyStarRatingGroupProps = {
  size?: number;
};

export default function EmptyStarRatingGroup({
  size = 12,
}: EmptyStarRatingGroupProps) {
  return (
    <>
      <Group spacing={2}>
        {Array.from({ length: 5 }).map((_, i) => {
          return <EmptyStarRating key={i} size={size} />;
        })}
      </Group>
    </>
  );
}
