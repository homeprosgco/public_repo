import StarRating from "./StarRating";

type StarRatingGroupProps = {
  size?: number;
};

export default function StarRatingGroup({ size = 12 }: StarRatingGroupProps) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => {
        return <StarRating key={i} size={size} />;
      })}
    </>
  );
}
