import { faker } from "@faker-js/faker"

export const reviewData = () => {
  return {
    rating: faker.datatype.number({min: 1, max: 5 }),
    customerName: faker.name.fullName(),
    location: faker.address.cityName(),
    comment: faker.lorem.paragraph()
  }
}