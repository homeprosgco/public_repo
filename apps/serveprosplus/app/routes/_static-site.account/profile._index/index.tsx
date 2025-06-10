import {
  Anchor,
  Box,
  Button,
  Card,
  Flex,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import accountImg from "~/_images/demo/avatar5.jpeg";
import { RxCaretRight, RxQuestionMarkCircled } from "react-icons/rx";
import { BsShare, BsChatText } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "@remix-run/react";
import { useAccountLogout } from "~/routes/_auth/hooks";
import { IoSettingsOutline } from "react-icons/io5";

export default function AccountProfile() {
  const [handleLogout] = useAccountLogout();

  const accountPages: { icon: IconType; link: string; pageName: string }[] = [
    {
      link: "settings",
      icon: IoSettingsOutline,
      pageName: "Settings",
    },
    {
      link: "change-password",
      icon: RiLockPasswordLine,
      pageName: "Change Password",
    },
    {
      link: "help-center",
      icon: RxQuestionMarkCircled,
      pageName: "Help Center",
    },
    {
      link: "share",
      icon: BsShare,
      pageName: "Share",
    },
    {
      link: "rate-us",
      icon: AiOutlineStar,
      pageName: "Rate Us",
    },
    {
      link: "faqs",
      icon: BsChatText,
      pageName: "FAQ's",
    },
    {
      link: "privacy-policy",
      icon: MdOutlinePrivacyTip,
      pageName: "Privacy Policy",
    },
  ];

  return (
    <>
      <Box id="account-page-wrapper">
        <Stack spacing={0}>
          <Card m={4} mih={300} pt={80}>
            <Flex h="100%">
              <Flex
                rowGap={8}
                h="100%"
                sx={{ flex: "1 0 auto" }}
                direction="column"
                align="center"
                justify="center"
              >
                <Image
                  src={accountImg}
                  alt="Account Profile Image"
                  maw={100}
                  radius={8}
                />
                <Stack align="center" spacing={0} mb={8}>
                  <Text fw={500} fz={21} c="neutral.7">
                    Joshua Kamar
                  </Text>
                  <Text fw={400} c="neutral5">
                    joshuakamar@serveprosplus.com
                  </Text>
                </Stack>
                <Button component={Link} to="0wv0j0q0fdjf0ajd/edit" variant="outline" color="accent" px={32}>
                  Edit Profile
                </Button>
              </Flex>
            </Flex>
          </Card>
          <Text px={16} c="primary" fw={500} fz={16}>
            Account
          </Text>
          <Card m={4}>
            {accountPages.map((page, i) => {
              return (
                <Flex key={i} columnGap={12} align="center" mb={24}>
                  <Box
                    sx={(theme) => ({
                      backgroundColor: theme.fn.lighten(
                        `${theme.colors.neutral[0]}`,
                        0.8
                      ),
                      borderRadius: 4,
                    })}
                    p={8}
                    display="flex"
                    c="neutral.1"
                  >
                    <Box component={page.icon} size={18} />
                  </Box>
                  <Anchor
                    sx={{ flex: "1 0 auto" }}
                    component={Link}
                    to={page.link}
                  >
                    <Text fz={18} fw={500} c="primary.6">
                      {page.pageName}
                    </Text>
                  </Anchor>

                  <Box component={RxCaretRight} size={32} c="neutral.1" />
                </Flex>
              );
            })}
            <Flex columnGap={12} align="center" mb={24}>
              <Box
                sx={(theme) => ({
                  backgroundColor: theme.fn.lighten(
                    `${theme.colors.neutral[0]}`,
                    0.8
                  ),
                  borderRadius: 4,
                })}
                p={8}
                display="flex"
                c="neutral.1"
              >
                <Box component={IoIosLogOut} size={18} />
              </Box>
              <Button
                onClick={handleLogout}
                variant="subtle"
                fz={18}
                fw={500}
                c="primary.6"
                sx={{ flex: "1 0 auto" }}
                pl={0}
                styles={{
                  inner: {
                    justifyContent: "left"
                  }
                }}
              >
                Logout
              </Button>
            </Flex>
          </Card>
        </Stack>
      </Box>
    </>
  );
}
