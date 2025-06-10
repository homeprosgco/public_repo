import { MdStar } from "react-icons/md";

type StarRatingProps = {
  size?: number;
};

export default function StarRating({ size = 16 }: StarRatingProps) {
  return (
    <>
      <MdStar color="#FFB013" size={size} />
    </>
  );
}
