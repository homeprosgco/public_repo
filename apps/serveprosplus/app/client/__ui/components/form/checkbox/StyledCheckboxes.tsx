import { SimpleGrid } from "@mantine/core";
import { StyledCheckbox } from "./StyledCheckbox";

type StyledCheckboxesProps = {
  data: { description: string; title: string }[];
  checkedValue: string;
  onChange: (title: string) => void;
};

export function StyledCheckboxes({
  data,
  checkedValue,
  onChange,
}: StyledCheckboxesProps) {
  const items = data.map((item) => (
    <StyledCheckbox
      checked={item.title === checkedValue}
      onChange={(title) => onChange(title)}
      {...item}
      key={item.title}
    />
  ));
  return (
    <SimpleGrid
      cols={1}
    >
      {items}
    </SimpleGrid>
  );
}
