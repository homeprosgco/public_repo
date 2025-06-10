import { PasswordInput } from "@mantine/core";
import {
  TextInput,
  ActionIcon,
  Button,
  Divider,
  Stack,
  Anchor,
  Group,
  Text,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CreateAccountProps } from "./auth";
import { useAuthFormContext } from "./auth-form-context";

export default function CreateAccountForm({
  createAccount,
  handleGoogleSignIn,
}: CreateAccountProps) {
  const form = useAuthFormContext();

  return (
    <>
      <Stack spacing={12}>
        <Stack spacing={16}>
          <TextInput
            placeholder="Email"
            label="Email"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            placeholder="Confirm Password"
            label="Confirm Password"
            {...form.getInputProps("passwordConfirm")}
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
        type="button"
        fullWidth
        bg="secondary.8"
        leftIcon={<FaSignInAlt size={16} />}
        mt={24}
        onClick={createAccount}
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
        Create Account
      </Button>
      <Stack spacing={24}>
        <Divider my="xs" label="or" labelPosition="center" />
        <Button
          onClick={() => handleGoogleSignIn}
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
          <Text c="neutral.5">Already have an account?</Text>
          <Anchor
            component={Link}
            to="/account-signin"
            sx={{ "&:hover": { textDecoration: "none" } }}
          >
            <Text fw={500} c="accent">
              Sign in
            </Text>
          </Anchor>
        </Group>
      </Stack>
    </>
  );
}
