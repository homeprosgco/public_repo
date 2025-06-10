import {
  Checkbox,
  createStyles,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ProjectStatus } from "@prisma/client";
import { useEffect, useState } from "react";
import { useBookingFormContext } from "./booking-form-context";
import BookingCheckboxText from "./component/BookingCheckBoxText";

export default function BookingProjectStatus() {
  const form = useBookingFormContext();
  const [projectStatus, setProjectStatus] = useState<ProjectStatus>(
    ProjectStatus.Ready_To_Hire
  );

  const mockdata = [
    {
      description: "Interested in Hiring",
      title: "Ready to Hire",
      projectStatus: ProjectStatus.Ready_To_Hire,
    },
    {
      description: "Interested in Quotes",
      title: "Planning & Budgeting",
      projectStatus: ProjectStatus.Planning_And_Budgeting,
    },
  ];

  function updateProjectStatus(projectStatus: ProjectStatus) {
    setProjectStatus(projectStatus);
    form.setFieldValue("projectStatus", projectStatus);
  }

  useEffect(() => {
    const _projectStatus = form.values.projectStatus || projectStatus;
    updateProjectStatus(_projectStatus);
  }, [projectStatus]);

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Project Status
          </Text>
          <Text fw={400} c="neutral.5" ta="left" fz={16}>
            Choose the appropriate status for this project?
          </Text>
        </Stack>
        <Stack>
          <StyledCheckboxes
            data={mockdata}
            checkedValue={projectStatus}
            onChange={(projectStatus) => updateProjectStatus(projectStatus)}
          />
        </Stack>
      </Flex>
    </>
  );
}

type StyledCheckboxesProps = {
  data: { description: string; title: string; projectStatus: ProjectStatus }[];
  checkedValue: ProjectStatus;
  onChange: (projectStatus: ProjectStatus) => void;
};

export function StyledCheckboxes({
  data,
  checkedValue,
  onChange,
}: StyledCheckboxesProps) {
  const items = data.map((item) => (
    <StyledCheckbox
      checked={item.projectStatus === checkedValue}
      onChange={(projectStatus) => onChange(projectStatus)}
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
  onChange: (projectStatus: ProjectStatus) => void;
  title: string;
  description: string;
  defaultChecked?: boolean;
  projectStatus: ProjectStatus;
}

export function StyledCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  projectStatus,
  className,
  ...others
}: StyledCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof StyledCheckboxProps>) {
  const { classes, cx } = useStyles({ checked: checked });

  return (
    <UnstyledButton
      {...others}
      onClick={() => onChange(projectStatus)}
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
