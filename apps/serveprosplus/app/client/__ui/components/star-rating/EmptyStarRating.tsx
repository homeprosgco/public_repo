import { Box } from "@mantine/core";
import { MdOutlineStarOutline } from "react-icons/md";

type StarRatingProps = {
  size?: number;
};

export default function EmptyStarRating({ size = 16 }: StarRatingProps) {
  return (
    <>
      <Box component={MdOutlineStarOutline} c="neutral.5" size={size} />
    </>
  );
}
