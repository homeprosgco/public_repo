import { Stack, Text } from "@mantine/core";
import { CreateAccountForm, CreateAccountProps, MobileAuthPageLayout } from "./auth";

export default function AccountCreation({
  createAccount,
  handleGoogleSignIn,
}: CreateAccountProps) {
  return (
    <>
      <MobileAuthPageLayout>
        <Stack spacing={0} mb={24}>
          <Text fw={700} fz={21} c="neutral.8">
            Create New Account
          </Text>
          <Text c="neutral.4" fz={12}>
            Welcome! Please enter your new account details.
          </Text>
        </Stack>
        <CreateAccountForm
          createAccount={createAccount}
          handleGoogleSignIn={handleGoogleSignIn}
        />
      </MobileAuthPageLayout>
    </>
  );
}
