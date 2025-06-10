import { faker } from "@faker-js/faker"
import { BookingResponseType, ProjectTimeline, ProjectAuthorizedOwner, ProjectStatus, ServiceDetails, PreferredBookingDate, PropertyType } from "@prisma/client"
import { eachDayOfInterval, endOfMonth, getTime } from "date-fns"
import { timeSlots } from "~/routes/_static-site.booking/appointmentbooker/time-slot-strategy"
import { serviceCategories } from "~/routes/_static-site.company-account/service-provider-prospects/utils"
import randomArrayElements from "~/_lib/utils/random-array-elements"
import { getAddress } from "./get-address"

const dayIntervals = eachDayOfInterval({
  start: new Date(Date.now()),
  end: endOfMonth(Date.now()),
});

const preferredBookingDate = () => {
  return {
    appointmentDate: faker.helpers.arrayElement(dayIntervals),
    timeSlots: faker.helpers.arrayElements(timeSlots())
  } as PreferredBookingDate;
}

const preferredBookingDates = () => {
  return randomArrayElements(faker.datatype.number(3), () => preferredBookingDate())
}

export const bookingData = () => {
  const _preferredBookingDates = preferredBookingDates();
  const customerName = `${faker.name.firstName()} ${faker.name.lastName()}`;
  return {
    bookingCategory: faker.helpers.arrayElement(serviceCategories),
    bookingType: faker.helpers.arrayElement([BookingResponseType.In_Home_Estimate, BookingResponseType.Online_Quote]),
    contactTelephone: faker.phone.number('561-###-####'),
    customerName,
    email: faker.internet.email(),
    hiringTimeline: _preferredBookingDates.length ? ProjectTimeline.Custom_Appointment : faker.helpers.arrayElement([ProjectTimeline.Flexible, ProjectTimeline.One_Two_Weeks, ProjectTimeline.One_Week, ProjectTimeline.Two_Weeks_Or_More]),
    isAuthorizedPerson: faker.helpers.arrayElement([ProjectAuthorizedOwner.Authorized, ProjectAuthorizedOwner.No, ProjectAuthorizedOwner.Yes]),
    projectDescription: faker.lorem.paragraph(),
    projectFocus: faker.lorem.lines(),
    projectStatus: faker.helpers.arrayElement([ProjectStatus.Planning_And_Budgeting, ProjectStatus.Ready_To_Hire]),
    propertyType: faker.helpers.arrayElement([PropertyType.Commercial_Building, PropertyType.Condominium, PropertyType.Multi_Unit, PropertyType.Single_Family_Home, PropertyType.TownHome]),
    serviceAddress: getAddress(),
    serviceType: faker.helpers.arrayElement([ServiceDetails.Assembly, ServiceDetails.Repairs, ServiceDetails.Replacement, ServiceDetails.New_Installation]),
    zipcode: faker.address.zipCode('#####'),
    customerUploadURLs: randomArrayElements(8, () => faker.image.business()),
    preferredBookingDates: _preferredBookingDates,
    projectTitle: faker.lorem.words(4),
    bookingImageFolderId: {
      id: `${customerName
        .split(" ")
        .join("-")}/${getTime(new Date(Date.now())).toString()}`
    }
  }
}