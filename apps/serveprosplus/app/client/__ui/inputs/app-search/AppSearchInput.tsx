import { Autocomplete } from "@mantine/core";
import { CiSearch } from "react-icons/ci";

export default function AppSearchInput() {
  return (
    <>
      <Autocomplete
        placeholder="Search"
        icon={<CiSearch size={20} />}
        data={["React", "Angular", "Svelte", "Vue"]}
        radius="md"
        styles={(theme) => ({
          input: {
            "::placeholder": {
              fontWeight: 500,
            },
            backgroundColor: theme.fn.lighten(`${theme.colors.primary[0]}`, .3),
            border: "none"
          },
        })}
      />
    </>
  );
}
