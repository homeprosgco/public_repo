import { faker } from "@faker-js/faker";

export const seedAddress = () => {
  return {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipcode: faker.address.zipCodeByState("FL")
  }
}

const address = seedAddress();
const prospect = {
  displayName: faker.internet.userName(),
  type: faker.datatype.boolean() ? 'COMPANY' : 'INDIVIDUAL',
  address,
  created: faker.date.recent().toISOString(),
  email: faker.internet.email(),
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  phone: faker.phone.number(`561-###-####`),
}

console.log(JSON.stringify(prospect));