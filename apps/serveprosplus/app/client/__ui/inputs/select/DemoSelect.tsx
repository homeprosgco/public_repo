import { useState } from "react";
import { Select, createStyles, ActionIcon, Group, Flex } from "@mantine/core";
import { IconSearch, IconSettings } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  input: {
    borderRadius: "8px 0px 0px 8px",
    borderRight: 0,
  },

  rightSection: {
    display: "none",
  },
}));

export default function DemoSelect() {
  const { classes } = useStyles();
  const [searchValue, onSearchChange] = useState("");

  return (
    <>
      <Flex align="center" wrap="nowrap">
        <Select
          classNames={{
            input: classes.input,
            rightSection: classes.rightSection,
          }}
          sx={{
            width: "100%",
          }}
          miw={248}
          placeholder="What service do you need?"
          searchable
          clearable
          onSearchChange={onSearchChange}
          searchValue={searchValue}
          nothingFound="No Options"
          maxDropdownHeight={280}
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
          transition="pop-top-left"
          transitionDuration={80}
          transitionTimingFunction="ease"
          radius="xl"
          size="lg"
        />
        <ActionIcon
          color="accent"
          variant="filled"
          size="lg"
          w={100}
          miw={56}
          h={50}
          sx={{
            borderRadius: "0px 8px 8px 0px",
          }}
        >
          <IconSearch size={16} />
        </ActionIcon>
      </Flex>
    </>
  );
}
