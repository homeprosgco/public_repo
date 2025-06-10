import { useState } from "react";
import { Calendar } from "@mantine/dates";
import { Box, createStyles, Flex, useMantineTheme } from "@mantine/core";
import toDate from "date-fns/toDate";
import isToday from "date-fns/isToday";
import endOfMonth from "date-fns/endOfMonth";
import isSameDay from "date-fns/isSameDay";

const useStyles = createStyles((theme) => ({
  weekend: {
    color: `${theme.colors.neutral[4]} !important`,
  },
  today: {
    color: "yellow !important",
    backgroundColor: "transparent !important",
    border: "1px solide yellow",
    fontWeight: 500,
  },
}));

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export default function BookingsCalendar() {
  const [value, setValue] = useState(toDate(Date.now()));
  const [month, onMonthChange] = useState(new Date());
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const { danger, primary, accent, yellow, success } = theme.colors;
  const color = [danger, primary, accent, yellow, success];
  const appointments = Array.from({ length: 8 }).map((_) =>
    randomDate(value, endOfMonth(value))
  );

  console.log(appointments);

  return (
    <Calendar
      firstDayOfWeek="sunday"
      month={month}
      onMonthChange={onMonthChange}
      value={value}
      onChange={() => setValue}
      allowLevelChange={false}
      hideOutsideDates
      fullWidth
      renderDay={(date) => {
        const day = date.getDate();
        const today = isToday(date);
        const todaysAppointments = appointments.filter(
          (appointmentDate: Date) => isSameDay(appointmentDate, date)
        );
        return (
          <Box pos="relative">
            {day}
            <Box pos="absolute" left={12} bottom={4} maw={32}>
              <Flex columnGap={2} align="center" wrap="nowrap">
                {todaysAppointments.length
                  ? todaysAppointments.map((appt, i) => {
                      const colorIndex = Math.floor(
                        Math.random() * color.length
                      );
                      const appointmentColor = color[colorIndex][4];
                      return (
                        <Box
                          w={4}
                          h={4}
                          sx={{
                            borderRadius: 20,
                            backgroundColor: appointmentColor,
                          }}
                          key={i}
                        />
                      );
                    })
                  : null}
              </Flex>
            </Box>
          </Box>
        );
      }}
      styles={(theme) => ({
        calendarBase: {
          backgroundColor: theme.colors.secondary[8],
          paddingBottom: 24,
        },
        calendarHeaderLevel: {
          color: theme.white,
        },
        calendarHeaderControl: {
          "&:hover": {
            backgroundColor: "transparent !important"
          }
        },
        day: {
          color: theme.white,
          "&:hover": {
            color: theme.colors.secondary[8],
          },
        },
        cell: {
          position: "relative",
        },
      })}
      dayClassName={(date, modifiers) =>
        cx({
          [classes.weekend]: modifiers.weekend,
          [classes.today]: modifiers.selected,
        })
      }
    />
  );
}
