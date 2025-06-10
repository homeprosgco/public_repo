import {
  Flex,
  Stack,
  TextInput,
  Text,
  SimpleGrid,
  createStyles,
  Checkbox,
  UnstyledButton,
} from "@mantine/core";
import { ProjectTimeline } from "@prisma/client";
import { useEffect, useState } from "react";
import { useBookingFormContext } from "./booking-form-context";

export default function BookingProjectTimeline() {
  const form = useBookingFormContext();
  const [projectTimeline, setProjectTimeline] = useState<ProjectTimeline>(
    ProjectTimeline.One_Week
  );

  const timelines = [
    {
      description: "Looking for quotes at the moment",
      title: "Timing is Flexible",
      timeline: ProjectTimeline.Flexible,
    },
    {
      description: "Open to providers available this week",
      title: "Within 1 week",
      timeline: ProjectTimeline.One_Week,
    },
    {
      description: "Looking to get insights on prices",
      title: "1-2 Weeks",
      timeline: ProjectTimeline.One_Two_Weeks,
    },
    {
      description: "Not ready, but making plans",
      title: "More than 2 Weeks",
      timeline: ProjectTimeline.Two_Weeks_Or_More,
    },
    {
      description: "Looking for a provider to fit my schedule",
      title: "Custom Date and Time",
      timeline: ProjectTimeline.Custom_Appointment,
    },
  ];

  function updateProjectTimeline(timeline: ProjectTimeline) {
    setProjectTimeline(timeline);
    console.log(projectTimeline)
    form.setFieldValue("hiringTimeline", timeline);
  }

  useEffect(() => {
    const hiringTimeline = form.values.hiringTimeline || projectTimeline;
    updateProjectTimeline(hiringTimeline);
  }, [projectTimeline]);

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Project Timeline
          </Text>
          <Text fw={400} c="neutral.5" ta="left" fz={16}>
            What is the timeline for this project?
          </Text>
        </Stack>
        <Stack>
          <StyledCheckboxes
            data={timelines}
            checkedValue={projectTimeline}
            onChange={(timeline) => updateProjectTimeline(timeline)}
          />
        </Stack>
      </Flex>
    </>
  );
}

type StyledCheckboxesProps = {
  data: { description: string; title: string; timeline: ProjectTimeline }[];
  checkedValue: ProjectTimeline;
  onChange: (timeline: ProjectTimeline) => void;
};

export function StyledCheckboxes({
  data,
  checkedValue,
  onChange,
}: StyledCheckboxesProps) {
  const items = data.map((item) => (
    <StyledCheckbox
      checked={item.timeline === checkedValue}
      onChange={(timeline) => onChange(timeline)}
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
  onChange: (timeline: ProjectTimeline) => void;
  title: string;
  description: string;
  defaultChecked?: boolean;
  timeline: ProjectTimeline;
}

export function StyledCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  timeline,
  className,
  ...others
}: StyledCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof StyledCheckboxProps>) {
  const { classes, cx } = useStyles({ checked: checked });

  return (
    <UnstyledButton
      {...others}
      onClick={() => onChange(timeline)}
      className={cx(classes.button, className)}
    >
      <Checkbox
        checked={checked}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: "pointer" } }}
      />

      <div className={classes.body}>
        <Text color="dimmed" size="xs" sx={{ lineHeight: 1 }} mb={5}>
          {description}
        </Text>
        <Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
          {title}
        </Text>
      </div>
    </UnstyledButton>
  );
}
