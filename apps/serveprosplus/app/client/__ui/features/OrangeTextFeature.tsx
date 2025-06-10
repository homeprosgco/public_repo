import { Box } from "@mantine/core";

export default function OrangeTextFeature() {
  return (
    <Box sx={(theme) => ({
      height: '2px',
      width: '100px',
      backgroundColor: theme.fn.lighten('#f48304', .2)
    })} />
  );
}