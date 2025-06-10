import {
  Checkbox,
  createStyles,
  Flex,
  ScrollArea,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

type CategoryFilterProps = {
  categories: string[];
  filterCategory: (category: string) => void;
  activeCategory: string;
};

export default function CategoryFilter({
  categories,
  filterCategory,
  activeCategory,
}: CategoryFilterProps) {
  const { width } = useViewportSize();

  return (
    <>
      <ScrollArea type="never" style={{ width: width - 32 }}>
        <div>
          <Flex wrap="nowrap" columnGap={8}>
            <StyledCheckbox
              filterCategory={filterCategory}
              category={"All"}
              checked={activeCategory === ""}
            />
            {categories.map((category) => (
              <StyledCheckbox
                key={category}
                filterCategory={filterCategory}
                category={category}
                checked={category === activeCategory}
              />
            ))}
          </Flex>
        </div>
      </ScrollArea>
    </>
  );
}

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    width: "max-content",
    transition: "background-color 150ms ease, border-color 150ms ease",
    border: `1px solid ${
      checked ? theme.colors.primary[1] : theme.colors.primary[1]
    }`,
    borderRadius: theme.radius.sm,
    padding: "8px 16px",
    backgroundColor: checked
      ? theme.colors.primary[0]
      : theme.colors.primary[0],
  },

  body: {
    flex: 1,
  },
}));

interface StyledCheckboxProps {
  checked: boolean;
  category: string;
  defaultChecked?: boolean;
  filterCategory: (category: string) => void;
}

export function StyledCheckbox({
  checked,
  defaultChecked,
  filterCategory,
  category,
  className,
  ...others
}: StyledCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof StyledCheckboxProps>) {
  const { classes, cx } = useStyles({ checked: checked });

  return (
    <UnstyledButton
      {...others}
      onClick={() => {
        filterCategory(category);
      }}
      className={cx(classes.button, className)}
    >
      <Checkbox
        checked={checked}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ 
          input: { cursor: "pointer" },
          icon: { display: "none"}
         }}
        hidden
        pos="absolute"
      />

      <div className={classes.body}>
        <Text weight={500} c="primary" size="sm" sx={{ lineHeight: 1 }}>
          {category}
        </Text>
      </div>
    </UnstyledButton>
  );
}
