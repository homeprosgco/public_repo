import {
  UnstyledButton,
  Checkbox,
  Text,
  SimpleGrid,
  createStyles,
  Flex,
  Title,
  Stack,
  Button,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import { BookingTimeSlot, PreferredBookingDate } from "@prisma/client";
import format from "date-fns/format";
import isEqual from "date-fns/isEqual";
import { useState } from "react";
import { TimeSlot } from "./type/TimeSlot";

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: 52,
    transition: "background-color 150ms ease, border-color 150ms ease",
    border: `1px solid ${
      checked
        ? theme.fn.variant({ variant: "outline", color: theme.primaryColor })
            .border
        : theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .background
      : theme.colorScheme === "dark"
      ? theme.colors.dark[8]
      : theme.white,
  },
}));

type BookingTimeSlotsProps = {
  timeSlots: TimeSlot[];
  onTimeSlotSelected: (
    timeSlot: TimeSlot,
    onChange: (checked: boolean) => void
  ) => void;
  date: Date;
  onScheduleTimesConfirmed: (date: Date) => void;
  bookingAppointments: Pick<
    PreferredBookingDate,
    "appointmentDate" | "timeSlots"
  >[];
  selectedTimeSlots: TimeSlot[];
  onCancelBooking(): void;
};

interface ImageCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  timeSlot: TimeSlot;
  onTimeSlotSelected: (
    timeSlot: TimeSlot,
    onChange: (checked: boolean) => void
  ) => void;
}

export function AppointmentBookingTimeSlots({
  timeSlots,
  onTimeSlotSelected,
  date,
  onScheduleTimesConfirmed,
  bookingAppointments,
  selectedTimeSlots,
  onCancelBooking
}: BookingTimeSlotsProps) {
  let appointmentDate = bookingAppointments.filter((appt) =>
    isEqual(appt.appointmentDate, date)
  );
  return (
    <>
      <Stack spacing={16}>
        <Stack spacing={0}>
          <Title c="primary" order={6}>
            Schedule Date:{" "}
          </Title>
          <Title c="neutral.8" order={5}>
            {format(date, "EEEE MMMM do")}
          </Title>
        </Stack>

        <SimpleGrid cols={1}>
          {timeSlots.map((timeSlot, i) => {
            let isSelectedTimeSlot = false;

            if (bookingAppointments.length > 0) {
              console.log("booking appointments");
              const bookingAppt = bookingAppointments.find((appt) =>
                isEqual(appt.appointmentDate, date)
              );
              if (bookingAppt) {
                isSelectedTimeSlot = bookingAppt?.timeSlots.includes(
                  timeSlot.bookingTimeslot
                );
              }
            }

            return (
              <ImageCheckbox
                timeSlot={timeSlot}
                onTimeSlotSelected={onTimeSlotSelected}
                key={timeSlot.timeOfDay}
                defaultChecked={isSelectedTimeSlot}
              />
            );
          })}
        </SimpleGrid>

        {(selectedTimeSlots.length === 0) ? (
          <Button variant="outline" color='danger.4' onClick={onCancelBooking}>
            Cancel Scheduling
          </Button>
        ) : (
          <Button
            disabled={!(selectedTimeSlots.length > 0)}
            onClick={() => onScheduleTimesConfirmed(date)}
          >
            Confirm Time Schedule
          </Button>
        )}
      </Stack>
    </>
  );
}

export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  timeSlot,
  onTimeSlotSelected,
  className,
  ...others
}: ImageCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ImageCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const { classes, cx } = useStyles({ checked: value });

  return (
    <UnstyledButton
      {...others}
      onClick={() => onTimeSlotSelected(timeSlot, handleChange)}
      className={cx(classes.button, className)}
    >
      <Flex
        direction={{ base: "row", sm: "column" }}
        justify={{ base: "space-between", sm: "normal" }}
        rowGap={8}
        columnGap={16}
      >
        <Text weight={500} size="sm" c="primary" sx={{ lineHeight: 1 }}>
          {timeSlot.timeOfDay}
        </Text>
        <Text weight={400} size="sm" c="neutral.5" sx={{ lineHeight: 1 }}>
          {timeSlot.timeSlot}
        </Text>
      </Flex>

      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: "pointer" } }}
        opacity={0}
        pos="absolute"
      />
    </UnstyledButton>
  );
}
