import { createFormContext } from '@mantine/form';
import { BookingFieldsType } from './validation';

export interface BookingFormValues {
  customerName: string;
  customerUploadURLs: string[];
  availableBookingDates: string[];
  serviceAddress: string;
  bookingCategory: string;
  serviceType: string;
  hiringTimeline: string;
  propertyType: string;
  projectStatus: string;
  isAuthorizedPerson: boolean;
  projectFocus: string;
  projectDescription: string;
  contactTelephone: string;
  zipcode: string;
  email: string;
}

export const [BookingFormProvider, useBookingFormContext, useBookingForm] =
  createFormContext<BookingFieldsType>();

  export type BookingFormType = ReturnType<typeof useBookingForm>