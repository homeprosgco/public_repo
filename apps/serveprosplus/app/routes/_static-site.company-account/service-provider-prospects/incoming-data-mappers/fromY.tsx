import { ServiceCategory, ServiceProviderProspectSource } from "@prisma/client";
import { YServiceProviderType } from "../type/YServiceProviderType";
import { ProviderProspectType } from "../use-case/create-provider-prospects.server";
import { formatPhoneNumber } from "../utils/PhoneNumberFormat";
import { ServiceCategoryMatcher } from "../utils/ServiceCategoryMatcher";

export const providersFromYinYelpDataset = (
  data: YServiceProviderType[]
): Partial<ProviderProspectType>[] => {
  return data.map((record) => {
    const {
      name: companyName,
      phone,
      address: { city, postalCode },
      categories,
      images,
      primaryPhoto,
      directURL,
      reviews,
      website,
    } = record;
    const location = `${city} - ${postalCode}`;
    const serviceCategories = ServiceCategoryMatcher(
      categories.toString()
    ) as ServiceCategory[];
    const phoneNumber = formatPhoneNumber(phone) as string;

    return {
      companyName,
      website,
      phoneNumber,
      primaryPhotoURL: primaryPhoto,
      directURL,
      prospectReviews: reviews.map((_review) => {
        const {
          date,
          photoUrls: photoURLs,
          rating,
          reviewerLocation,
          reviewerName,
          text: review,
        } = _review;
        return {
          date: new Date(date),
          photoURLs,
          rating,
          reviewerLocation,
          reviewerName,
          review,
        };
      }),
      serviceCategories,
      location,
      imageURLs: images,
      source: ServiceProviderProspectSource.Yelp,
    };
  });
};
