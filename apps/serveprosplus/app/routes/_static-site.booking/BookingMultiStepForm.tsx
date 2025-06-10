import {
  Box,
  Button,
  Flex,
  Group,
  Progress,
  Stack,
  Stepper,
  Text,
  Image,
  ActionIcon,
} from "@mantine/core";
import {
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { useFocusTrap, useListState } from "@mantine/hooks";
import { useFetcher, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi2";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import { bookingData } from "~/_lib/integrations/faker/bookingData";
import AppointmentBooker from "./appointmentbooker/AppointmentBooker";
import { useBookingForm, BookingFormProvider } from "./booking-form-context";
import BookingAuthorizedOwner from "./BookingAuthorizedOwner";
import BookingCustomerDetails from "./BookingCustomerDetails";
import BookingProjectDescriptionInput from "./BookingProjectDescription";
import BookingProjectStatus from "./BookingProjectStatus";
import BookingProjectUploads from "./BookingProjectUploads";
import BookingPropertyType from "./BookingPropertyType";
import BookingServiceDetails from "./BookingSeviceDetails";
import BookingProjectTimeline from "./BookingTimeline";
import BookingZipcodeInput from "./BookingZipcode";
import Resizer from "react-image-file-resizer";
import { SupabaseClient } from "@supabase/supabase-js";
import getTime from "date-fns/getTime";
import {
  BookingResponseType,
  ProjectAuthorizedOwner,
  ProjectStatus,
  ProjectTimeline,
  PropertyType,
  ServiceCategory,
  ServiceDetails,
  User,
} from "@prisma/client";
import successicon from "~/_images/demo/success-icon.png";
import { RxCaretLeft } from "react-icons/rx";

type BookingMultiStepFormProps = {
  supabase: SupabaseClient;
  user: User | null;
};

export type BookingDropzoneProps = {
  dropzoneProps: Partial<DropzoneProps>;
  files: { file: FileWithPath; imageURL: string }[];
  onFilesDrop: (files: FileWithPath[]) => void;
};

const resizeFile = (file: FileWithPath) => {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      100,
      100,
      "jpg",
      100,
      0,
      (uri) => resolve(uri),
      "base64",
      100,
      100
    );
  });
};

export default function BookingMultiStepForm({
  supabase,
  user = null,
}: BookingMultiStepFormProps) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressNumber = 12.5;
  const [files, handlers] = useListState<{
    file: FileWithPath;
    imageURL: string;
  }>([]);
  const navigate = useNavigate();

  const form = useBookingForm({
    initialValues: {
      preferredBookingDates: [],
      bookingCategory: ServiceCategory.Other,
      bookingType: BookingResponseType.Online_Quote,
      contactTelephone: "",
      customerName: user ? user.fullname : "",
      customerUploadURLs: [],
      projectDescription: "",
      hiringTimeline: ProjectTimeline.Flexible,
      isAuthorizedPerson: ProjectAuthorizedOwner.No,
      projectFocus: "",
      projectStatus: ProjectStatus.Planning_And_Budgeting,
      propertyType: PropertyType.Single_Family_Home,
      serviceAddress: user ? user.primaryAddress : "",
      serviceType: ServiceDetails.Maintenance,
      zipcode: "",
      email: user ? user.email : "",
      bookingImageFolderId: {
        id: "",
      },
      projectTitle: "",
    },
  });

  useEffect(() => {
    console.log(form.values);
  }, [form.values]);

  const booking = useFetcher();

  async function submitBooking() {
    const uplaodURLs: string[] = [];
    const bookingImageFolderId = `${form.values.customerName
      .split(" ")
      .join("-")}/${getTime(new Date(Date.now())).toString()}`;
    for await (const { file, imageURL } of files) {
      const { data, error } = await supabase.storage
        .from("bookings")
        .upload(`${bookingImageFolderId}/${file.name}`, file);

      if (error) {
        throw error;
      }

      if (data) {
        const {
          data: { publicUrl },
        } = supabase.storage.from("bookings").getPublicUrl(data.path);
        uplaodURLs.push(publicUrl);
      }
    }

    const bookingForm = {
      ...form.values,
      customerUploadURLs: uplaodURLs,
      bookingImageFolderId: {
        id: bookingImageFolderId,
      },
    };
    const bookingFields = JSON.stringify(bookingForm);
    booking.submit(
      { bookingFields: bookingFields },
      { method: "post", action: "/booking?index" }
    );
  }

  async function onFilesDrop(uploadFiles: FileWithPath[]) {
    if (files.length < 5) {
      for await (const file of uploadFiles) {
        const imageURL = (await resizeFile(file)) as string;
        handlers.append({ file, imageURL });
      }
    }
  }

  const focusTrapRef = useFocusTrap();
  useEffect(() => {
    form.setValues({ ...bookingData() });
  }, []);

  const firstStep = 0;
  const lastStep = 9;

  const nextStep = () => {
    console.log("active", active);
    if (active === lastStep) {
      console.log("submit form");
      submitBooking();
    } else if (
      active === 4 &&
      form.values.hiringTimeline !== ProjectTimeline.Custom_Appointment
    ) {
      setActive(6);
    } else {
      setActive((current) => (current < lastStep ? current + 1 : current));
      setProgress((p) => active * progressNumber);
    }
  };

  const prevStep = () => {
    if (
      active === 6 &&
      form.values.hiringTimeline !== ProjectTimeline.Custom_Appointment
    ) {
      setActive(4);
    } else {
      setProgress((p) => p - progressNumber);
      setActive((current) => (current > firstStep ? current - 1 : current));
    }
  };

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
      >
        <Flex
          columnGap={32}
          align="center"
          p={16}
          sx={(theme) => ({
            borderBottom: `1px solid ${theme.fn.lighten(
              theme.colors.neutral[1],
              0.6
            )}`,
            backgroundColor: theme.white,
            boxShadow: theme.shadows.xs,
          })}
        >
          <ActionIcon radius={12} bg="neutral.0" onClick={() => navigate(-1)}>
            <RxCaretLeft size={24} />
          </ActionIcon>
          <Group spacing={4}>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.white,
                borderRadius: 8,
                padding: 4,
                display: "flex",
                position: "relative",
                top: "-1px",
              })}
            >
              <Box component={HiHome} c="secondary.8" size={24} />
            </Box>

            <Text
              transform="uppercase"
              fw={700}
              fz={18}
              sx={(theme) => ({ color: theme.colors.neutral[8] })}
            >
              Serve Pros Plus
            </Text>
          </Group>
        </Flex>
        <Box>
          <Progress
            color="secondary.8"
            size="sm"
            value={progress}
            styles={{
              bar: {
                transition: "width 450ms ease",
              },
            }}
          />
        </Box>
        <Flex
          h="90%"
          align="center"
          justify="center"
          px={16}
          maw={500}
          mx="auto"
        >
          <BookingFormProvider form={form}>
            <Stack pos="relative" w="100%" ref={focusTrapRef}>
              <Flex
                sx={{ flex: "1 0 auto" }}
                direction="column"
                justify="center"
                rowGap={48}
              >
                <Stepper
                  active={active}
                  onStepClick={setActive}
                  breakpoint="xs"
                  styles={{
                    steps: {
                      display: "none",
                    },
                  }}
                >
                  <Stepper.Step
                    label="First step"
                    description="Service Location"
                  >
                    <BookingZipcodeInput />
                  </Stepper.Step>
                  <Stepper.Step
                    label="Second step"
                    description="Service Details"
                  >
                    <BookingServiceDetails />
                  </Stepper.Step>
                  <Stepper.Step label="Third step" description="Property Type">
                    <BookingPropertyType />
                  </Stepper.Step>
                  <Stepper.Step label="Third step" description="Project Status">
                    <BookingProjectStatus />
                  </Stepper.Step>
                  <Stepper.Step
                    label="Third step"
                    description="Project Timeline"
                  >
                    <BookingProjectTimeline />
                  </Stepper.Step>
                  <Stepper.Step>
                    <AppointmentBooker />
                  </Stepper.Step>
                  <Stepper.Step
                    label="Forth step"
                    description="Authorized Owner"
                  >
                    <BookingAuthorizedOwner />
                  </Stepper.Step>
                  <Stepper.Step
                    label="Fifth step"
                    description="Project Description"
                  >
                    <BookingProjectDescriptionInput />
                  </Stepper.Step>
                  <Stepper.Step label="Fifth step" description="Project Photos">
                    <BookingProjectUploads
                      dropzoneProps={{
                        accept: { IMAGE_MIME_TYPE },
                        maxFiles: 5,
                      }}
                      files={files}
                      onFilesDrop={onFilesDrop}
                    />
                  </Stepper.Step>
                  <Stepper.Step
                    label="Third step"
                    description="Service Details"
                  >
                    <BookingCustomerDetails user={user} />
                  </Stepper.Step>
                  {/* <Stepper.Completed>
                    <Flex
                      direction="column"
                      align="center"
                      sx={{ flex: "1 0 auto" }}
                      w="100%"
                      mah={400}
                      rowGap={64}
                    >
                      <Box>
                        <Image width={112} src={successicon} />
                      </Box>

                      <Stack align="center" maw={250} spacing={32}>
                        <Stack spacing={16} align="center">
                          <Text
                            c="neutral.8"
                            lh={1.1}
                            ta="center"
                            maw={200}
                            fw={700}
                            fz={18}
                          >
                            Your Booking is complete.
                          </Text>
                          <Text ta="center" c="neutral.6">
                            We look forward to helping you find a local home
                            service provider located in the Palm Beach County area.
                          </Text>
                        </Stack>
                      </Stack>
                    </Flex>
                  </Stepper.Completed> */}
                </Stepper>
                <Group position={active > 0 ? "apart" : "right"} mt="xl">
                  {active > 0 ? (
                    <Button
                      size="md"
                      variant="default"
                      onClick={prevStep}
                      leftIcon={<TbArrowLeft />}
                    >
                      Back
                    </Button>
                  ) : null}

                  <Button
                    size="md"
                    onClick={nextStep}
                    rightIcon={active === lastStep ? null : <TbArrowRight />}
                    type="button"
                  >
                    {active === lastStep ? "Submit Booking" : "Next step"}
                  </Button>
                </Group>
              </Flex>
            </Stack>
          </BookingFormProvider>
        </Flex>
      </Box>
    </>
  );
}
