import { faker } from "@faker-js/faker";
import { AccountType } from "@prisma/client";
import { getAddress } from "./get-address";

export const userData = () => {
  const fullname = faker.name.fullName();
  return {
    email: faker.internet.email(fullname),
    fullname,
    primaryAddress: getAddress(),
    accountType: AccountType.Homeowner
  }
}