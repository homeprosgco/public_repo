import { faker } from "@faker-js/faker"

export const onlineQuoteData = () => {
  return {
    comment: faker.lorem.paragraph(),
    highPriceRange: faker.commerce.price(4900),
    lowPriceRange: faker.commerce.price(49),
  }
}