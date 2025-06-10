import { faker } from "@faker-js/faker"

export const feedbackData = () => {
  return {
    feedback: faker.lorem.paragraph()
  }
}