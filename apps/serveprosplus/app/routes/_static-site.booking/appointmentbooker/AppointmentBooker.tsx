import { Box, Flex, Group, Modal, Stack, Text } from "@mantine/core";
import { eachDayOfInterval, format, isEqual } from "date-fns";
import add from "date-fns/add";
import { useEffect, useState } from "react";
import { AppointmentBookingDates } from "./AppointmentBookingDates";
import { AppointmentBookingTimeSlots } from "./AppointmentBookingTimeSlots";
import { TimeSlot } from "./type/TimeSlot";
import { useListState, useMediaQuery } from "@mantine/hooks";
import startOfDay from "date-fns/startOfDay";
import { BookingTimeSlot, PreferredBookingDate } from "@prisma/client";
import {
  BookingFormType,
  useBookingFormContext,
} from "../booking-form-context";

type BookingAppointmentProps = {
  timeSlot: TimeSlot;
  appointmentDate: Date;
};

type AppointmentBookerProps = {
  form: BookingFormType;
};

export default function AppointmentBooker() {
  const [timeSlots, timeSlotsHandlers] = useListState<TimeSlot>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(
    startOfDay(new Date(Date.now()))
  );
  const [bookingAppointments, bookingAppointmentsHandlers] = useListState<
    Pick<PreferredBookingDate, "appointmentDate" | "timeSlots">
  >([]);
  const [opened, setOpened] = useState(false);
  const [openMaxDaysLimit, setOpenMaxDaysLimit] = useState(false);

  const form = useBookingFormContext();

  useEffect(() => {
    console.log("Appts: ", bookingAppointments);
  }, [bookingAppointments]);

  useEffect(() => {
    console.log("TimeSlots: ", timeSlots);
  }, [timeSlots]);

  useEffect(() => {
    console.log("Selected Date: ", selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    const preferredBookingDates = form.values.preferredBookingDates;
    if (preferredBookingDates && preferredBookingDates.length > 0) {
      bookingAppointmentsHandlers.setState([...preferredBookingDates]);
      console.log(bookingAppointments)
    }
  }, []);

  function hasAppointmentDate(date: Date) {
    const a = bookingAppointments.find(appt => {
      console.log("apDate: ", appt.appointmentDate)
      console.log("apSelDate: ", date)
      return isEqual(appt.appointmentDate, date)
    });
    console.log(a);
    return !!a;
  }

  function onDateSelected(date: Date, onChange: (checked: boolean) => void) {
    setSelectedDate(date);
    console.log("hasDate: ", hasAppointmentDate(date))
    if (hasAppointmentDate(date)) {
      const appointmentDate = bookingAppointments.find((appt) =>
        isEqual(appt.appointmentDate, date)
      );
      console.log(appointmentDate)
      appointmentDate?.timeSlots.forEach((slot) => {
        _timeSlots.forEach((_slot) => {
          if (slot === _slot.bookingTimeslot) {
            addTimeSlot(_slot);
          }
        });
      });
    }
    if (bookingAppointments.length === 3) {
      setOpenMaxDaysLimit(true);
    } else {
      setOpened(true);
    }
  }

  function addTimeSlot(timeslot: TimeSlot) {
    timeSlotsHandlers.append(timeslot);
  }

  function removeTimeSlot(timeslot: TimeSlot) {
    const filterTimeSlots = timeSlots.filter(
      (slot) => slot.timeOfDay !== timeslot.timeOfDay
    );
    timeSlotsHandlers.setState(filterTimeSlots);
  }

  function onTimeSlotSelected(
    timeSlot: TimeSlot,
    onChange: (checked: boolean) => void
  ) {
    const hasTimeSlot = timeSlots
      .map((slot) => slot.timeOfDay)
      .includes(timeSlot.timeOfDay);

    onChange(!hasTimeSlot);

    if (hasTimeSlot) {
      removeTimeSlot(timeSlot);
    } else {
      addTimeSlot(timeSlot);
    }
  }

  function onScheduleTimesConfirmed(date: Date) {
    const selectedTimeSlots = timeSlots.map((slot) => slot.bookingTimeslot);
    if (!hasAppointmentDate(date)) {
      bookingAppointmentsHandlers.append({
        appointmentDate: date,
        timeSlots: selectedTimeSlots,
      });
      form.insertListItem("preferredBookingDates", {
        appointmentDate: date,
        timeSlots: selectedTimeSlots,
      });
      console.log(form.values);
    } else if (hasAppointmentDate(date)) {
      const bookingAppointmentIndex = bookingAppointments.findIndex((appt) =>
        isEqual(appt.appointmentDate, date)
      );
      bookingAppointmentsHandlers.setItemProp(
        bookingAppointmentIndex,
        "timeSlots",
        selectedTimeSlots
      );
      console.log(bookingAppointments);
      form.setFieldValue(`preferredBookingDates.${bookingAppointmentIndex}.timeSlots`, selectedTimeSlots);
      console.log(form.values);
      // form.insertListItem(
      //   "preferredBookingDates",
      //   { timeSlots: selectedTimeSlots },
      //   bookingAppointmentIndex
      // );
    }

    setSelectedDate(date);
    timeSlotsHandlers.setState([]);
    setOpened(false);
  }

  const dayIntervals = eachDayOfInterval({
    start: new Date(Date.now()),
    end: add(new Date(Date.now()), { days: 7 }),
  });

  const _timeSlots: TimeSlot[] = [
    {
      timeOfDay: "Early Morning",
      timeSlot: "(7am - 9am)",
      bookingTimeslot: BookingTimeSlot.Early_Morning,
    },
    {
      timeOfDay: "Morning",
      timeSlot: "(9am - 12pm)",
      bookingTimeslot: BookingTimeSlot.Morning,
    },
    {
      timeOfDay: "Afternoon",
      timeSlot: "(12pm - 3pm)",
      bookingTimeslot: BookingTimeSlot.Afternoon,
    },
    {
      timeOfDay: "Late Afternoon",
      timeSlot: "(3pm - 6pm)",
      bookingTimeslot: BookingTimeSlot.Late_Afternoon,
    },
  ];

  function onModalClose() {
    if (timeSlots.length === 0 && hasAppointmentDate(selectedDate)) {
      const bookingAppointmentIndex = bookingAppointments.findIndex((appt) =>
        isEqual(appt.appointmentDate, selectedDate)
      );
      bookingAppointmentsHandlers.remove(bookingAppointmentIndex);
      form.removeListItem("preferredBookingDates", bookingAppointmentIndex);
    }
    setOpened(false);
  }

  function onCancelBooking() {
    if (hasAppointmentDate(selectedDate)) {
      const bookingAppointmentIndex = bookingAppointments.findIndex((appt) =>
        isEqual(appt.appointmentDate, selectedDate)
      );
      bookingAppointmentsHandlers.remove(bookingAppointmentIndex);
      form.removeListItem("preferredBookingDates", bookingAppointmentIndex);
    }
    setOpened(false);
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={onModalClose}
        title="Choose which time schedules work for you."
        closeOnClickOutside={false}
      >
        {/* Modal content */}
        <AppointmentBookingTimeSlots
          date={selectedDate}
          timeSlots={_timeSlots}
          onTimeSlotSelected={onTimeSlotSelected}
          onScheduleTimesConfirmed={onScheduleTimesConfirmed}
          bookingAppointments={bookingAppointments}
          selectedTimeSlots={timeSlots}
          onCancelBooking={onCancelBooking}
        />
      </Modal>
      <Modal
        opened={openMaxDaysLimit}
        onClose={onModalClose}
        title="You've reached the amount of maximum scheduling days."
      >
        <Flex
          direction="column"
          align="center"
          sx={{ flex: "1 0 auto" }}
          w="100%"
          mah={400}
          rowGap={64}
        >
          <Box>{/* <Image width={112} src={successicon} /> */}</Box>

          <Stack align="center" maw={250} spacing={32}>
            <Stack spacing={4} align="center">
              <Text
                c="neutral.8"
                lh={1.1}
                ta="center"
                maw={160}
                fw={700}
                fz={18}
              >
                Sorry! We only allow up to 3 scheduling days
              </Text>
              <Text ta="center" c="neutral.6">
                Try removing one of your scheduling days to choose the options
                that works best for you.
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Modal>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Schedule a booking time
          </Text>
          <Text fw={400} c="neutral.5" ta="left" fz={16}>
            Choose up to three days and time schedules that works for your
            schedule?
          </Text>
        </Stack>
        <Stack pos="relative">
          <AppointmentBookingDates
            onDateSelected={onDateSelected}
            dayIntervals={dayIntervals}
            selectedDate={selectedDate}
            bookingAppointments={bookingAppointments}
          />
        </Stack>
      </Flex>
    </>
  );
}
