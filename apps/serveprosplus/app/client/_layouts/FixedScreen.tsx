import { Box } from "@mantine/core";

type FixedScreenProps = {
  children: React.ReactNode;
  id?: string;
  padding?: string;
};

export default function FixedScreen({
  children,
  id = "fixedscreen-component",
  padding = "8px"
}: FixedScreenProps) {
  return (
    <>
      <Box
        pos="fixed"
        top={0}
        bottom={0}
        left={0}
        right={0}
        sx={(theme) => ({
          zIndex: 9,
          backgroundColor: theme.fn.lighten(`${theme.colors.primary[0]}`, 0.3),
        })}
        p={padding}
      >
        {children}
      </Box>
    </>
  );
}
