import { Flex, Stack, TextInput, Text, SimpleGrid, createStyles, Checkbox, UnstyledButton } from "@mantine/core";
import { ProjectAuthorizedOwner } from "@prisma/client";
import { useEffect, useState } from "react";
import { useBookingFormContext } from "./booking-form-context";
import BookingCheckboxText from "./component/BookingCheckBoxText";

export default function BookingAuthorizedOwner() {
  const form = useBookingFormContext();
  const [authorizedOwner, setAuthorizedOwner] = useState<ProjectAuthorizedOwner>(ProjectAuthorizedOwner.No);

  const mockdata = [
    { description: "I am the owner", title: "Yes", isAuthorizedPerson: ProjectAuthorizedOwner.No },
    { description: "No, I am not the owner", title: "No", isAuthorizedPerson: ProjectAuthorizedOwner.Yes },
    {
      description: "I am authorized to make changes.",
      title: "No, I am authorized to make improvements",
      isAuthorizedPerson: ProjectAuthorizedOwner.Authorized
    },
  ];

  function updateAuthorizedOwner(projectAuthorizedOwner: ProjectAuthorizedOwner) {
    setAuthorizedOwner(projectAuthorizedOwner);
    form.setFieldValue("isAuthorizedPerson", projectAuthorizedOwner);
  }

  useEffect(() => {
    const _authorizedOwner = form.values.isAuthorizedPerson || authorizedOwner;
    updateAuthorizedOwner(_authorizedOwner);
  }, [authorizedOwner]);

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Property Owner
          </Text>
          <Text fw={400} c="neutral.5" ta="left" fz={16}>
            Are you currently the owner of this property?
          </Text>
        </Stack>
        <Stack>
          <StyledCheckboxes
            data={mockdata}
            checkedValue={authorizedOwner}
            onChange={(projectAuthorizedOwner) => updateAuthorizedOwner(projectAuthorizedOwner)}
          />
        </Stack>
      </Flex>
    </>
  );
}

type StyledCheckboxesProps = {
  data: { description: string; title: string; isAuthorizedPerson: ProjectAuthorizedOwner }[];
  checkedValue: ProjectAuthorizedOwner;
  onChange: (isAuthorizedPerson: ProjectAuthorizedOwner) => void;
};

export function StyledCheckboxes({
  data,
  checkedValue,
  onChange,
}: StyledCheckboxesProps) {
  const items = data.map((item) => (
    <StyledCheckbox
      checked={item.isAuthorizedPerson === checkedValue}
      onChange={(isAuthorizedPerson) => onChange(isAuthorizedPerson)}
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
}));

interface StyledCheckboxProps {
  checked: boolean;
  onChange: (isAuthorizedPerson: ProjectAuthorizedOwner) => void;
  title: string;
  description: string;
  defaultChecked?: boolean;
  isAuthorizedPerson: ProjectAuthorizedOwner;
}

export function StyledCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  isAuthorizedPerson,
  className,
  ...others
}: StyledCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof StyledCheckboxProps>) {
  const { classes, cx } = useStyles({ checked: checked });

  return (
    <UnstyledButton
      {...others}
      onClick={() => onChange(isAuthorizedPerson)}
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
