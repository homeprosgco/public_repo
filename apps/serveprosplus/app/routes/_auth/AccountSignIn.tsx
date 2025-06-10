import { Stack, Text } from "@mantine/core";
import { MobileAuthPageLayout, SignInAccountForm, SignInAccountProps } from "./auth";

export default function AccountSignIn({
  signInAccount,
  handleGoogleSignIn,
}: SignInAccountProps) {
  return (
    <>
      <MobileAuthPageLayout>
        <Stack spacing={0} mb={24}>
          <Text fw={700} fz={21} c="neutral.8">
            Sign In
          </Text>
          <Text c="neutral.4" fz={12}>
            Welcome back! Please enter your account details.
          </Text>
        </Stack>
        <SignInAccountForm
          signInAccount={signInAccount}
          handleGoogleSignIn={handleGoogleSignIn}
        />
      </MobileAuthPageLayout>
    </>
  );
}
