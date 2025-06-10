import { Flex, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { StyledCheckboxes } from "~/client/__ui/components/form";
import { useBookingFormContext } from "./booking-form-context";

export default function BookingTimeOfDay() {
  const form = useBookingFormContext();
  const [authorizedOwner, setTimeOfDay] = useState("No");

  const mockdata = [
    { description: "Sun and sea", title: "Early Morning (7am - 9am)" },
    { description: "Sightseeing", title: "Morning (9am - 12pm)" },
    { description: "Snow and ice", title: "Afternoon (12pm - 3pm)" },
    { description: "Snow and ice", title: "LateAfternoon (3pm - 6pm)" },
    { description: "Snow and ice", title: "Anytime" },
  ];

  function updateTimeOfDay(title: string) {
    setTimeOfDay(title);
    form.setFieldValue("authorizedOwner", title);
  }

  useEffect(() => {
    updateTimeOfDay(authorizedOwner);
    console.log(form.values);
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
            onChange={(title) => updateTimeOfDay(title)}
          />
        </Stack>
      </Flex>
    </>
  );
}
