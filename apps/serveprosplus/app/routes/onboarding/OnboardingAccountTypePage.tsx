import { Flex, Stack, Text } from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import icons from "~/_images/demo/onboarding";
import {
  UnstyledButton,
  Checkbox,
  Image,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import { useOnboardingFormContext } from "./onboarding-form-context";
import { AccountType } from "@prisma/client";
import { removeUnderscore } from "../_static-site.company-account/service-provider-prospects/utils/ServiceCategoriesSelectOptions";
import { useEffect, useState } from "react";
import BookingCheckboxText from "../_static-site.booking/component/BookingCheckBoxText";

const mockdata: {
  description: string;
  title: string;
  accountType: AccountType;
}[] = [
  {
    description: "Local Resident",
    title: "Homeowner",
    accountType: AccountType.Homeowner,
  },
  {
    description: "Unit Maintenance",
    title: removeUnderscore(AccountType.Property_Manager),
    accountType: AccountType.Property_Manager,
  },
  {
    description: "Team Expansiong",
    title: "Realtor",
    accountType: AccountType.Realtor,
  },
  {
    description: "Join our team",
    title: removeUnderscore(AccountType.Service_Provider),
    accountType: AccountType.Service_Provider,
  },
];

export default function OnboardingAccountTypePage() {
  const form = useOnboardingFormContext();
  const [accountType, setAccountType] = useState<AccountType>(
    AccountType.Homeowner
  );

  function updateAccountType(accountType: AccountType) {
    setAccountType(accountType);
    form.setFieldValue("accountType", accountType);
  }

  useEffect(() => {
    updateAccountType(accountType);
  }, [accountType]);

  return (
    <>
      <Flex direction="column" rowGap={24}>
        <Stack align="center">
          <Text c="neutral.7" fw={700} fz={20}>
            How would you like to proceed?
          </Text>
        </Stack>
        <Stack>
          <StyledCheckboxes
            data={mockdata}
            checkedValue={accountType}
            onChange={(accountType) => updateAccountType(accountType)}
          />
        </Stack>
      </Flex>
    </>
  );
}

type StyledCheckboxesProps = {
  data: { description: string; title: string; accountType: AccountType }[];
  checkedValue: AccountType;
  onChange: (accountType: AccountType) => void;
};

export function StyledCheckboxes({
  data,
  checkedValue,
  onChange,
}: StyledCheckboxesProps) {
  const items = data.map((item) => (
    <StyledCheckbox
      checked={item.accountType === checkedValue}
      onChange={(accountType) => onChange(accountType)}
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
  onChange: (accountType: AccountType) => void;
  title: string;
  description: string;
  defaultChecked?: boolean;
  accountType: AccountType;
}

export function StyledCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  accountType,
  className,
  ...others
}: StyledCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof StyledCheckboxProps>) {
  const { classes, cx } = useStyles({ checked: checked });

  return (
    <UnstyledButton
      {...others}
      onClick={() => onChange(accountType)}
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