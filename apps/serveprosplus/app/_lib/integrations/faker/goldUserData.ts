import { faker } from "@faker-js/faker"
import { AccountType } from "@prisma/client"
import { userData } from "./userData"

export const goldUserData = () => {
  return {
    companyName: faker.company.name(),
    primaryTelephone: faker.phone.number('561-###-####'),
    user: {
      ...userData(),
      accountType: faker.helpers.arrayElement([AccountType.Realtor, AccountType.Property_Manager])
    },
    website: {
      websiteURL: faker.internet.url()
    }
  }
}