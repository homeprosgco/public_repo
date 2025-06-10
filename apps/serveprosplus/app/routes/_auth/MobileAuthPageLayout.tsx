import { Box, Card, Flex, Image, Overlay, Stack, Text } from "@mantine/core";
import accountsplash from "~/_images/demo/account-splash.jpg";
import { HiHome } from "react-icons/hi2";
import { FullScreen } from "~/client/_layouts";
import { CreateAccountProps } from "./auth";

export default function MobileAuthPageLayout({ children }: Pick<CreateAccountProps, 'children'>) {
  return (
    <>
      <FullScreen>
        <Box sx={(theme) => ({ ...theme.fn.cover(), filter: "blur(1px)" })}>
          <Overlay color="#000" />
          <Image src={accountsplash} height="100vh" fit="cover" />
        </Box>
        <Flex direction="column" h="100%" pt={32}>
          <Stack
            sx={(theme) => ({
              color: theme.white,
              zIndex: 9999,
              height: "100%",
            })}
            spacing={32}
          >
            <Stack spacing={32} px={16}>
              <Flex columnGap={8} align="center">
                <Box
                  sx={(theme) => ({
                    backgroundColor: theme.white,
                    borderRadius: 8,
                    padding: 4,
                    display: "flex",
                  })}
                >
                  <Box component={HiHome} c="secondary.8" size={24} />
                </Box>

                <Text
                  transform="uppercase"
                  fw={700}
                  fz={18}
                  sx={(theme) => ({ color: theme.white })}
                >
                  Serve Pros Plus
                </Text>
              </Flex>
            </Stack>
            <Card
              sx={{
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
                height: "100%",
              }}
            >
              <Stack sx={{ paddingTop: 24 }}>{children}</Stack>
            </Card>
          </Stack>
        </Flex>
      </FullScreen>
    </>
  );
}
