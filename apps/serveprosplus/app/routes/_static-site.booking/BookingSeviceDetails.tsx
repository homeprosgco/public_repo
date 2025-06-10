import {
  Flex,
  Stack,
  TextInput,
  Text,
  Checkbox,
  createStyles,
  SimpleGrid,
  UnstyledButton,
} from "@mantine/core";
import { ServiceDetails } from "@prisma/client";
import { useEffect, useState } from "react";
import { useBookingFormContext } from "./booking-form-context";
import BookingCheckboxText from "./component/BookingCheckBoxText";

type BookingServiceDetailsProps = {};

export default function BookingServiceDetails() {
  const form = useBookingFormContext();
  const [serviceType, setServiceType] = useState<ServiceDetails>(
    ServiceDetails.Repairs
  );

  const mockdata = [
    {
      description: "Nothing exists at the moment",
      title: "New Installation",
      serviceType: ServiceDetails.New_Installation,
    },
    {
      description: "Something is not operating properly",
      title: "Repair",
      serviceType: ServiceDetails.Repairs,
    },
    {
      description: "Remove what I currently have and install a new one",
      title: "Replacement",
      serviceType: ServiceDetails.Replacement,
    },
    {
      description: "Upkeep",
      title: "Maintenance",
      serviceType: ServiceDetails.Maintenance,
    },
    {
      description: "Assemble a product",
      title: "Assembly",
      serviceType: ServiceDetails.Assembly,
    },
  ];

  function updateServiceDetails(serviceType: ServiceDetails) {
    setServiceType(serviceType);
    form.setFieldValue("serviceType", serviceType);
  }

  useEffect(() => {
    const projectServiceType = form.values.serviceType || serviceType;
    updateServiceDetails(projectServiceType);
  }, [serviceType]);

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={28}>
            Service Details
          </Text>
          <Text fw={400} c="neutral.5" ta="left" fz={16}>
            Select the service type that best match the need for your home
            project.
          </Text>
        </Stack>
        <Stack>
          <StyledCheckboxes
            data={mockdata}
            checkedValue={serviceType}
            onChange={(serviceType) => updateServiceDetails(serviceType)}
          />
        </Stack>
      </Flex>
    </>
  );
}

type StyledCheckboxesProps = {
  data: { description: string; title: string; serviceType: ServiceDetails }[];
  checkedValue: ServiceDetails;
  onChange: (title: ServiceDetails) => void;
};

function StyledCheckboxes({
  data,
  checkedValue,
  onChange,
}: StyledCheckboxesProps) {
  const items = data.map((item) => (
    <StyledCheckbox
      checked={item.serviceType === checkedValue}
      onChange={(serviceType) => onChange(serviceType)}
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
  onChange: (serviceType: ServiceDetails) => void;
  title: string;
  description: string;
  defaultChecked?: boolean;
  serviceType: ServiceDetails;
}

function StyledCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  serviceType,
  className,
  ...others
}: StyledCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof StyledCheckboxProps>) {
  const { classes, cx } = useStyles({ checked: checked });

  return (
    <UnstyledButton
      {...others}
      onClick={() => onChange(serviceType)}
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
