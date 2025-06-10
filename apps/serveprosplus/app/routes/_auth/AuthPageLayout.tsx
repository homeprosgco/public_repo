import {
  Anchor,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Group,
  Stack,
} from "@mantine/core";
import { TextInput } from "@mantine/core";
import { FaSignInAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { Link } from "@remix-run/react";
import {
  BodyLarge,
  TitleLarge,
  BodyMedium,
  BodySmall,
} from "~/client/__ui/typography";
import { useAuthFormContext } from "./auth-form-context";
import { AuthLayoutProps } from "./auth";

export default function AuthPageLayout({
  formHeader,
  formText,
  accountActionText,
  accountQuestionText,
  btnText,
  createAccount,
  signInAccount,
  handleGoogleSignIn,
  linkTo,
  children,
}: AuthLayoutProps) {
  const form = useAuthFormContext();

  return (
    <Flex h="100vh" justify="center" pt={48}>
      <Stack spacing={48} miw={330} maw={400} w="100%" pb={24}>
        <Box ta="center">
          <Stack>
            <BodyLarge title="SERVE PROS PLUS" weight={700} color="primary" />
            <Center>{/* <ServeProsPlusLogoDark /> */}</Center>

            <Stack spacing={0}>
              <TitleLarge title={formHeader} weight={700} />
              <BodyMedium title={formText} />
            </Stack>
          </Stack>
        </Box>
        <Stack spacing="xl">
          {children}
          <Group position="center" spacing={4}>
            <BodySmall title={accountQuestionText} />
            <Anchor component={Link} to={linkTo}>
              <BodySmall
                title={accountActionText}
                color="accent"
                weight={400}
              />
            </Anchor>
          </Group>
        </Stack>
      </Stack>
    </Flex>
  );
}
