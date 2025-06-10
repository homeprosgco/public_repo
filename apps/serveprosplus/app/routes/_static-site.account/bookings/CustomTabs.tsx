import { Tabs, TabsProps } from '@mantine/core';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: theme.fn.lighten(`${theme.colors.neutral[0]}`, .4),
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          // border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}`,
          border: "none",
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.md,
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          '&[data-active]': {
            backgroundColor: theme.colors.secondary[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
            borderRadius: theme.radius.md
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
         display: 'flex',
         padding: 4,
         backgroundColor: theme.fn.lighten(`${theme.colors.neutral[0]}`, .4),
         borderRadius: theme.radius.md
        }, 
      })}
      {...props}
    />
  );
}

export default function CustomTabs() {
  return (
    <StyledTabs defaultValue="active">
      <Tabs.List grow>
        <Tabs.Tab value="active">
          Active
        </Tabs.Tab>
        <Tabs.Tab value="completed">
          Completed
        </Tabs.Tab>
        <Tabs.Tab value="cancelled">
          Cancelled
        </Tabs.Tab>
      </Tabs.List>
    </StyledTabs>
  );
}