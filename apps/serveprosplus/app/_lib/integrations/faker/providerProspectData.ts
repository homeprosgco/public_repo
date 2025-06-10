import { faker } from "@faker-js/faker"
import { ServiceCategory, ServiceProviderProspectSource } from "@prisma/client"
import { serviceCategories } from "~/routes/_static-site.company-account/service-provider-prospects/utils"
import randomArrayElements from "~/_lib/utils/random-array-elements"

export const providerProspectData = () => {
  return {
    website: faker.internet.domainName(),
    title: faker.company.catchPhrase(),
    companyBio: faker.lorem.paragraph(),
    companyName: faker.company.name(),
    phoneNumber: faker.phone.number('561-###-###'),
    source: faker.helpers.arrayElement([ServiceProviderProspectSource.Other, ServiceProviderProspectSource.Yelp, ServiceProviderProspectSource.Craigslist]),
    serviceCategories: faker.helpers.arrayElements(serviceCategories, 4),
    location: faker.address.cityName(),
    imageURLs: [{ link: faker.image.abstract(), alt: faker.lorem.sentence() }],
    directURL: faker.internet.domainName(),
    primaryPhotoURL: faker.image.avatar(),
    prospectReviews: randomArrayElements(4, () => {
      return {
        date: faker.date.past(),
        photoURLs: [faker.image.abstract()],
        reviewerLocation: faker.address.city(),
        reviewerName: faker.name.fullName(),
        review: faker.lorem.paragraph(),
        rating: faker.datatype.number({ min: 1, max: 5 })
      }
    })
  }
}