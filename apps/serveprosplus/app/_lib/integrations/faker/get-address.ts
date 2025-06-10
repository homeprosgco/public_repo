import { faker } from "@faker-js/faker"

export const getAddress = () => {
  return `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCodeByState("FL")}`
}