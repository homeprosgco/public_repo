import { Carousel } from "@mantine/carousel";
import {
  UnstyledButton,
  Checkbox,
  Text,
  createStyles,
  Stack,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import { PreferredBookingDate } from "@prisma/client";
import { isEqual } from "date-fns";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
    backgroundColor: checked ? theme.colors.secondary[8] : theme.white,
    color: checked ? theme.white : theme.colors.primary,
  },
}));

interface ImageCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  date: Date;
  onDateSelected: (date: Date, onChange: (checked: boolean) => void) => void;
}

type AppointmentDatesProps = {
  onDateSelected: (date: Date, onChange: (checked: boolean) => void) => void;
  dayIntervals: Date[];
  selectedDate: Date;
  bookingAppointments: Pick<
    PreferredBookingDate,
    "appointmentDate" | "timeSlots"
  >[];
};

export function AppointmentBookingDates({
  onDateSelected,
  dayIntervals,
  selectedDate,
  bookingAppointments,
}: AppointmentDatesProps) {
  return (
    <Carousel
      withIndicators
      height={75}
      slideSize="12.5%"
      slideGap="md"
      align="start"
      slidesToScroll={1}
      styles={{
        indicators: {
          display: "none",
        },
        controls: {
          left: "-46px",
          right: "-46px",
          top: "calc(50% - 20px)",
        },
      }}
    >
      {dayIntervals.map((date, i) => {

        let isDateSelected = false;

        if (bookingAppointments.length > 0) {
          const bookingAppt = bookingAppointments.find((appt) =>
            isEqual(appt.appointmentDate, date)
          );
          console.log("BookinAppt: ", bookingAppt)
          if(bookingAppt) {
            isDateSelected = true;
            console.log("isDateSelected: ", isDateSelected)
          }
        }

        return (
          <Carousel.Slide key={i}>
            <ImageCheckbox
              onDateSelected={onDateSelected}
              date={date}
              defaultChecked={isDateSelected}
              checked={isDateSelected}
            />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}

export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  date,
  onDateSelected,
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
      onClick={() => {
        onDateSelected(date, handleChange);
      }}
      className={cx(classes.button, className)}
    >
      <Stack align="center" spacing={4} miw={40}>
        <Text
          weight={500}
          size="sm"
          sx={(theme) => ({
            lineHeight: 1,
            color: value ? theme.white : theme.colors.primary,
          })}
        >
          {format(date, "ccc")}
        </Text>
        <Text
          weight={500}
          size="sm"
          sx={(theme) => ({
            lineHeight: 1,
            color: value ? theme.white : theme.colors.primary,
          })}
        >
          {date.getDate()}
        </Text>
      </Stack>

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
