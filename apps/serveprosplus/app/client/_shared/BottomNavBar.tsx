import { Box, Flex, Group, Text } from "@mantine/core";
import { IconType } from "react-icons/lib";
import { RiHomeLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { TfiUser } from "react-icons/tfi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgToolbox } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "@remix-run/react";
import { AppUser } from "~/routes/_static-site/app-user.type";
import { AccountType, User } from "@prisma/client";

type BottomNavBarProps = {
  user: User;
}

export default function BottomNavBar({user}: BottomNavBarProps) {
  const [active, setActive] = useState<string | null>(null);

  const setActiveNav = (label: string) => {
    const clickLabel = label.toLowerCase();
    if (clickLabel === "account") {
      setActive("profile");
    } else {
      setActive(label.toLowerCase());
    }
  };

  const location = useLocation();
  const isServiceProvider = user.accountType !== AccountType.Service_Provider;

  useEffect(() => {
    const urlPath = location.pathname.split("/");
    let routePath = urlPath[urlPath.length - 1];
    if (routePath === "") routePath = "home";
    setActive(routePath);
  }, [location]);

  const navItems: BottomNavbarItemProps[] = [
    {
      icon: RiHomeLine,
      label: "Home",
      onClick: setActiveNav,
      active: active === "home",
      navigateTo: "",
    },
    {
      icon: RxCalendar,
      label: "Bookings",
      onClick: setActiveNav,
      active: active === "bookings" || active === "calendar-bookings",
      navigateTo: isServiceProvider
        ? "/account/bookings"
        : "/account/service-provider/oahocehdohdf/calendar-bookings",
    },
    {
      icon: isServiceProvider ? MdOutlineFavoriteBorder : CgToolbox,
      label: isServiceProvider ? "Favorites" : "Job Leads",
      onClick: setActiveNav,
      active: active === "favorites" || active === "job-leads",
      navigateTo: isServiceProvider
        ? "/"
        : "/account/service-provider/oahocehdohdf/job-leads",
    },
    {
      icon: TfiUser,
      label: "Account",
      onClick: setActiveNav,
      active: active === "profile",
      navigateTo: "/account/profile",
    },
  ];

  return (
    <>
      <Box
        pos="fixed"
        w="99%"
        bottom={0}
        pt={8}
        pb={12}
        sx={(theme) => ({
          backgroundColor: theme.white,
          borderTop: `1px solid ${theme.fn.lighten(
            theme.colors.neutral[3],
            0.92
          )}`,
        })}
      >
        <Group position="apart" px={16}>
          {navItems.map((item) => {
            return <BottomNavbarItem {...item} key={item.label} />;
          })}
        </Group>
      </Box>
    </>
  );
}

type BottomNavbarItemProps = {
  icon: IconType;
  label: string;
  onClick: (label: string) => void;
  active: boolean;
  navigateTo: string;
};

const BottomNavbarItem = ({
  icon,
  label,
  onClick,
  active,
  navigateTo,
}: BottomNavbarItemProps) => {
  const updateActive = (label: string) => {
    onClick(label);
    return true;
  };

  const navigate = useNavigate();

  return (
    <>
      <Flex
        direction="column"
        rowGap={2}
        align="center"
        sx={(theme) => ({ backgroundColor: theme.white, cursor: "pointer" })}
        onClick={() => updateActive(label) && navigate(navigateTo)}
      >
        <Box
          component={icon}
          w={24}
          h={24}
          sx={(theme) => ({
            color: active ? theme.colors.secondary[6] : theme.colors.neutral[4],
          })}
        ></Box>
        <Text
          sx={(theme) => ({
            color: active ? theme.colors.secondary[6] : theme.colors.neutral[4],
            fontWeight: active ? 500 : 300,
            fontSize: 14,
          })}
        >
          {label}
        </Text>
      </Flex>
    </>
  );
};
