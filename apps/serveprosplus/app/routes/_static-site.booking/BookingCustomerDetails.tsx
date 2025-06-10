import { Flex, Stack, TextInput, Text } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { User } from "@prisma/client";
import { useEffect } from "react";
import { useBookingFormContext } from "./booking-form-context";

type BookingCustomerDetailsProps = {
  user: User | null;
};

export default function BookingCustomerDetails({
  user,
}: BookingCustomerDetailsProps) {
  const form = useBookingFormContext();

  useEffect(() => {
    if (user) {
      form.setValues({
        ...form.values,
        customerName: user.fullname,
        email: user.email,
        serviceAddress: user.primaryAddress,
      });
    }
  }, []);

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Your booking is almost complete
          </Text>
          <Text c="neutral.5" ta="left" fz={16}>
            Provide us your contact informaiton for any questions we may have in
            regards to connecting you with our service providers?
          </Text>
        </Stack>
        <Stack>
          <TextInput
            placeholder="Full name"
            label="Full name"
            withAsterisk
            {...form.getInputProps("customerName")}
          />
          <TextInput
            placeholder="Daytime Telephone"
            label="Phone"
            withAsterisk
            description="We use your number in the case of any additional information we may need to help better find the right professional."
            {...form.getInputProps("contactTelephone")}
          />
          <TextInput
            placeholder="Email"
            label="Email"
            withAsterisk
            description="We use an email address to send a confirmation and provide customers withour an account quotes."
            {...form.getInputProps("email")}
          />
        </Stack>
      </Flex>
    </>
  );
}
