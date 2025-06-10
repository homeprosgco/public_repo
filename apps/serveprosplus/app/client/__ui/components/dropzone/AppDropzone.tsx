import {
  Group,
  Text,
  useMantineTheme,
  Image,
  SimpleGrid,
  Box,
  Flex,
} from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { BookingDropzoneProps } from "~/routes/_static-site.booking/BookingMultiStepForm";

export function AppDropzone({
  dropzoneProps,
  files,
  onFilesDrop,
}: BookingDropzoneProps) {
  const theme = useMantineTheme();

  const previews = files.map((file, index) => {
    return (
      <Image
        key={index}
        src={file.imageURL}
        imageProps={{ onLoad: () => URL.revokeObjectURL(file.imageURL) }}
        radius={8}
        width={100}
        height={100}
      />
    );
  });

  return (
    <>
      <Dropzone
        onDrop={(files) => {
          console.log("accepted files", files);
          onFilesDrop(files);
        }}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        {...dropzoneProps}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: 220, pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              size={50}
              stroke={1.5}
              color={
                theme.colors[theme.primaryColor][
                  theme.colorScheme === "dark" ? 4 : 6
                ]
              }
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size={50}
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={50} stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach up to 5 photos of your project, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Box mih={200} pos="relative">
        <Box mih={200} pos="absolute">
          <Flex align="center" columnGap={8} rowGap={16} wrap="wrap">
            {previews}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
