import { Stack, TextInput, ActionIcon, Button, Divider, Group, Anchor, Text } from "@mantine/core";
import { Link } from "@remix-run/react";
import { BsEyeSlash } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInAccountProps } from "./auth";
import { useAuthFormContext } from "./auth-form-context";

export default function SignInForm({signInAccount, handleGoogleSignIn}: SignInAccountProps) {

  const form = useAuthFormContext();
  
  return (
    <>
      <Stack spacing={12}>
        <Stack spacing={16}>
          <TextInput
            placeholder="Email"
            label="Email"
            {...form.getInputProps("email")}
          />
          <TextInput
            placeholder="Password"
            label="Password"
            type="password"
            rightSection={
              <ActionIcon c="neutral.2" pos="relative" right={20}>
                <BsEyeSlash size={20} />
              </ActionIcon>
            }
            {...form.getInputProps("password")}
          />
        </Stack>
        <Button
          h={16}
          p={0}
          maw={96}
          fz={12}
          fw={400}
          c="neutral.5"
          variant="subtle"
          styles={(theme) => ({
            root: {
              "&:hover": {
                backgroundColor: theme.white,
              },
            },
          })}
        >
          Forgot password
        </Button>
      </Stack>

      <Button
        bg="secondary.8"
        leftIcon={<FaSignInAlt size={16} />}
        mt={24}
        onClick={signInAccount}
        styles={(theme) => ({
          root: {
            "&:hover": {
              backgroundColor: theme.fn.darken(
                `${theme.colors.secondary[8]}`,
                0.2
              ),
            },
          },
        })}
      >
        Sign In
      </Button>
      <Stack spacing={24}>
        <Divider my="xs" label="or" labelPosition="center" />
        <Button
          onClick={handleGoogleSignIn}
          color="primary.6"
          variant="subtle"
          leftIcon={<FcGoogle size={20} />}
          styles={(theme) => ({
            root: {
              boxShadow: theme.shadows.sm,
              borderRadius: theme.radius.xs,
            },
          })}
        >
          Sign in with Google
        </Button>
        <Group position="center" spacing={4} mt={16}>
          <Text c="neutral.5">Don't have an account?</Text>
          <Anchor
            component={Link}
            to="/create-account"
            sx={{ "&:hover": { textDecoration: "none" } }}
          >
            <Text fw={500} c="accent">
              Create an account
            </Text>
          </Anchor>
        </Group>
      </Stack>
    </>
  );
}
