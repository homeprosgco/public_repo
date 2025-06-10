import {
  CampaignSentStatus,
  ServiceCategory,
  ServiceProviderProspectSource,
} from "@prisma/client";
import { CLServiceProviderType } from "../type/CLServiceProviderType";
import { ProviderProspectType } from "../use-case/create-provider-prospects.server";
import { formatPhoneNumber } from "../utils/PhoneNumberFormat";
import { ServiceCategoryMatcher } from "../utils/ServiceCategoryMatcher";

export const providersFromIvansCLDataset = (data: CLServiceProviderType[]): Partial<ProviderProspectType>[] => {
  return data.map((record) => {
    const { location, title, post, pics, url } = record;
    const searchData = `${title} ${post}`;
    const phoneNumber = formatPhoneNumber(searchData) as string;
    const serviceCategories = ServiceCategoryMatcher(
      searchData
    ) as ServiceCategory[];
    const companyName = serviceCategories[0] || title.split(" ").slice(0, 2);
    const bio = post.replace(/[^A-Za-z0-9\.]+/g, " ");
    const companyBio = bio.replace(/\.+/, ".").trim();
    return {
      location,
      companyName,
      phoneNumber,
      serviceCategories,
      imageURLs: pics.map((pic) => {
        return {
          link: pic,
          alt: `${companyName} - ${serviceCategories.toString()}`,
        };
      }),
      source: ServiceProviderProspectSource.Craigslist,
      title,
      companyBio,
    };
  });
};
