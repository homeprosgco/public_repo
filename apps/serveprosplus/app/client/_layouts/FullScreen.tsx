import { Box, CSSObject, MantineTheme } from "@mantine/core";

type FullScreenProps = {
  children: React.ReactNode;
  id?: string;
  padding?: string;
};

export default function FullScreen({
  children,
  id = "fullscreen-component",
  padding = "8px"
}: FullScreenProps) {
  return (
    <Box
      id={id}
      sx={(theme) => ({
        ...theme.fn.cover(),
        zIndex: 1,
        backgroundColor: theme.fn.lighten(`${theme.colors.neutral[0]}`, 0.6),
        overflow: "hidden",
        padding: padding
      })}
    >
      {children}
    </Box>
  );
}
