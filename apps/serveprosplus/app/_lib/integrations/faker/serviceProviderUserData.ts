import { faker } from "@faker-js/faker";
import { AccountType, ServiceDetails, ServiceProvider } from "@prisma/client";
import { serviceCategories } from "~/routes/_static-site.company-account/service-provider-prospects/utils";
import { userData } from "./userData";

export const serviceProviderUserData = () => {
  return {
    user: {
      ...userData(),
      accountType: AccountType.Service_Provider,
      website: {
        websiteURL: faker.internet.url()
      },
    },
    primaryTelephone: faker.phone.number('561-###-####'),
    companyBio: faker.lorem.paragraph(),
    companyName: faker.company.name(),
    serviceCategories: faker.helpers.arrayElements(serviceCategories, 5),
    serviceDetails: faker.helpers.arrayElements([ServiceDetails.Assembly, ServiceDetails.Commercial, ServiceDetails.Contractor, ServiceDetails.Free_Estimates, ServiceDetails.Maintenance, ServiceDetails.New_Installation, ServiceDetails.Repairs, ServiceDetails.Replacement, ServiceDetails.Residential, ServiceDetails.Warranty], 4),
  };
} 