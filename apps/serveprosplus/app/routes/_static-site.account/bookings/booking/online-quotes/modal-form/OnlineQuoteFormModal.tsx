import {
  Modal,
  Stack,
  Flex,
  TextInput,
  Textarea,
  Button,
  Text,
  Box,
  Image,
  Transition,
} from "@mantine/core";
import { BsCurrencyDollar } from "react-icons/bs";
import { OnlineQuoteFormProvider } from "../OnlineFormContext";
import { OnlineQuoteModalProps } from "./modalProps";
import quoteReview from "~/_images/app/images/quote-review.png";

export default function OnlineQuoteFormModal({
  quoteFormOpened,
  setQuoteFormOpened,
  submitQuote,
  form,
  onlineQuoteForm,
}: OnlineQuoteModalProps) {
  const isMounted = !(
    onlineQuoteForm.data !== undefined &&
    onlineQuoteForm.data.errors === undefined
  );

  console.log(isMounted);

  return (
    <>
      <Modal
        opened={quoteFormOpened}
        onClose={setQuoteFormOpened}
        title="Appliance Repair Quote"
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        overlayOpacity={0.55}
        overlayBlur={3}
        styles={(theme) => ({
          body: {
            paddingBottom: 64,
          },
          header: {
            fontSize: 21,
            fontWeight: 700,
            color: theme.colors.neutral[7],
            lineHeight: 1.2,
          },
          overlay: {
            backgroundColor: theme.fn.lighten(
              `${theme.colors.primary[6]}`,
              0.5
            ),
            opacity: 0.6,
          },
        })}
      >
        <OnlineQuoteFormProvider form={form}>
          <Stack spacing={32} pos="relative">
            <Stack spacing={8}>
              <Stack spacing={0}>
                <Text fw={500} c="neutral.8">
                  Louisa Sullivan
                </Text>
                <Text fw={500} c="primary.4" fz={12}>
                  Appliances - Replacement
                </Text>
              </Stack>

              <Stack spacing={0}>
                <Text fz={14} c="neutral.5" lh={1.1}>
                  1228 Thurston Place, Unit 8
                </Text>
                <Text fz={14} c="neutral.5" lh={1.1}>
                  {" "}
                  Greenacres, FL 33122
                </Text>
                <Text fz={14} c="neutral.5" lh={1.1}>
                  561-465-4659
                </Text>
              </Stack>
            </Stack>
            <Box pos="relative" h={375}>
              <Transition
                mounted={isMounted}
                transition="fade"
                duration={100}
                timingFunction="ease-out"
              >
                {(styles) => (
                  <div
                    style={{
                      ...styles,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <ModalForm form={form} submitQuote={submitQuote} />
                  </div>
                )}
              </Transition>
              <Transition
                mounted={!isMounted}
                transition="fade"
                duration={1000}
                timingFunction="ease-in"
              >
                {(styles) => (
                  <div
                    style={{
                      ...styles,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <SuccessfulSubmitResponse
                      setQuoteFormOpened={setQuoteFormOpened}
                    />
                  </div>
                )}
              </Transition>
            </Box>
          </Stack>
        </OnlineQuoteFormProvider>
      </Modal>
    </>
  );
}

const SuccessfulSubmitResponse = ({
  setQuoteFormOpened,
}: Pick<OnlineQuoteModalProps, "setQuoteFormOpened">) => {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        sx={{ flex: "1 0 auto" }}
        w="100%"
        mah={550}
        mih={452}
        rowGap={32}
        justify="center"
      >
        <Box>
          <Image
            width={112}
            height={112}
            src={quoteReview}
            alt="Successful quote submission"
          />
        </Box>

        <Stack spacing={16}>
          <Stack spacing={16}>
            <Stack spacing={0} align="center">
              <Text c="neutral.8" lh={1.1} fw={500} fz={18}>
                Your Quote is under review.
              </Text>
              <Text c="neutral.5" fz={12}>
                Thank you for submitting an online quote to help serve our
                customers.
              </Text>
            </Stack>
            <Text c="neutral.5" fz={14} ta="center">
              For Quality Assurance purposes we review all online quotes
              submitted to deliver a seamless user experience.
            </Text>
          </Stack>
          <Button
            type="button"
            variant="subtle"
            c="secondary.8"
            onClick={() => setQuoteFormOpened()}
            styles={(theme) => ({
              root: {
                "&:hover": {
                  backgroundColor: "transparent",
                  color: theme.fn.darken(`${theme.colors.secondary[8]}`, 0.5),
                },
              },
            })}
          >
            Return to Booking Details
          </Button>
        </Stack>
      </Flex>
    </>
  );
};

const ModalForm = ({
  submitQuote,
  form,
}: Pick<OnlineQuoteModalProps, "submitQuote" | "form">) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitQuote();
        }}
      >
        <Stack spacing={32}>
          <Flex
            columnGap={{ base: 0, xs: 16 }}
            rowGap={{ base: 16, xs: 0 }}
            direction={{ base: "column", xs: "row" }}
          >
            <TextInput
              name="lowPriceRange"
              withAsterisk
              label="Low Price Range"
              placeholder="Low Price Range"
              {...form.getInputProps("lowPriceRange")}
              icon={<BsCurrencyDollar size={16} />}
              styles={(theme) => ({
                icon: {
                  color: theme.colors.primary[3],
                },
              })}
            />
            <TextInput
              name="highPriceRange"
              withAsterisk
              label="High Price Range"
              placeholder="High Price Range"
              {...form.getInputProps("highPriceRange")}
              icon={<BsCurrencyDollar size={16} />}
              styles={(theme) => ({
                icon: {
                  color: theme.colors.primary[3],
                },
              })}
            />
          </Flex>

          <Textarea
            name="comment"
            label="Comment"
            placeholder="Give the customer an idea of service price range"
            autosize
            minRows={4}
            maxRows={8}
            {...form.getInputProps("comment")}
          />
          <Button color="secondary.8" type="submit">
            Submit Qutoe
          </Button>
        </Stack>
      </form>
    </>
  );
};
