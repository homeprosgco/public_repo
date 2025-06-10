import {
  Checkbox,
  createStyles,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { PropertyType } from "@prisma/client";
import { useEffect, useState } from "react";
import { useBookingFormContext } from "./booking-form-context";
import BookingCheckboxText from "./component/BookingCheckBoxText";

const mockdata = [
  {
    description: "Single Family Home",
    title: "Home",
    propertyType: PropertyType.Single_Family_Home,
  },
  {
    description: "Multiple Floor Unit",
    title: "Condo",
    propertyType: PropertyType.Condominium,
  },
  {
    description: "Multiple Units Connected",
    title: "Townhouse",
    propertyType: PropertyType.TownHome,
  },
  {
    description: "Snow and ice",
    title: "Multi-unit building",
    propertyType: PropertyType.Multi_Unit,
  },
  {
    description: "Movable Home",
    title: "Mobile Home",
    propertyType: PropertyType.Mobile_Home,
  },
  {
    description: "Property with customer traffic",
    title: "Commercial Property",
    propertyType: PropertyType.Commercial_Building,
  },
];

export default function BookingPropertyType() {
  const form = useBookingFormContext();
  const [propertyType, setPropertyType] = useState<PropertyType>(
    PropertyType.Single_Family_Home
  );

  

  function updatePropertyDetails(propertyType: PropertyType) {
    setPropertyType(propertyType);
    form.setFieldValue("propertyType", propertyType);
  }

  useEffect(() => {
    updatePropertyDetails(propertyType);
  }, [propertyType]);

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Property Details
          </Text>
          <Text fw={400} c="neutral.5" ta="left" fz={16}>
            What type of property do you have?
          </Text>
        </Stack>
        <Stack>
          <StyledCheckboxes
            data={mockdata}
            checkedValue={propertyType}
            onChange={(propertyType) => updatePropertyDetails(propertyType)}
          />
        </Stack>
      </Flex>
    </>
  );
}

type StyledCheckboxesProps = {
  data: { description: string; title: string; propertyType: PropertyType }[];
  checkedValue: PropertyType;
  onChange: (propertyType: PropertyType) => void;
};

export function StyledCheckboxes({
  data,
  checkedValue,
  onChange,
}: StyledCheckboxesProps) {
  const items = data.map((item) => (
    <StyledCheckbox
      checked={item.propertyType === checkedValue}
      onChange={(propertyType) => onChange(propertyType)}
      {...item}
      key={item.title}
    />
  ));
  return <SimpleGrid cols={1}>{items}</SimpleGrid>;
}

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    transition: "background-color 150ms ease, border-color 150ms ease",
    border: `1px solid ${
      checked
        ? theme.fn.variant({ variant: "outline", color: theme.primaryColor })
            .border
        : theme.colors.neutral[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .background
      : theme.white,
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
}));

interface StyledCheckboxProps {
  checked: boolean;
  onChange: (propertyType: PropertyType) => void;
  title: string;
  description: string;
  defaultChecked?: boolean;
  propertyType: PropertyType;
}

export function StyledCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  propertyType,
  className,
  ...others
}: StyledCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof StyledCheckboxProps>) {
  const { classes, cx } = useStyles({ checked: checked });

  return (
    <UnstyledButton
      {...others}
      onClick={() => onChange(propertyType)}
      className={cx(classes.button, className)}
    >
      <Checkbox
        checked={checked}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: "pointer" } }}
      />

      <BookingCheckboxText title={title} description={description} />
    </UnstyledButton>
  );
}
