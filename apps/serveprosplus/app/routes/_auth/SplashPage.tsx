import { Box, Center, Flex, Transition } from "@mantine/core";
import { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { useShallowEffect, useTimeout } from "@mantine/hooks";

export default function SplashPage() {
  const [opened, setOpened] = useState(true);
  const { start, clear } = useTimeout(() => setOpened(false), 2000);

  useShallowEffect(() => {
    start();
    return () => clear();
  }, [opened]);

  return (
    <>
      <Transition
        mounted={opened}
        transition="fade"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => (
          <Flex
            direction="column"
            bg="secondary.8"
            sx={(theme) => ({
              ...theme.fn.cover(),
              zIndex: 999,
            })}
            style={{ ...styles }}
          >
            <Center sx={{ flex: "1 0 auto" }}>
              <Flex>
                <Box
                  sx={(theme) => ({
                    backgroundColor: theme.white,
                    borderRadius: 8,
                    padding: 4,
                    display: "flex",
                    zIndex: 999,
                  })}
                >
                  <Box component={HiHome} c="secondary.8" size={80} />
                </Box>
              </Flex>
            </Center>
          </Flex>
        )}
      </Transition>
    </>
  );
}
