import { AccountStatus, AccountType, MembershipStatus, Role, ServiceCategory, ServiceProviderProspect } from "@prisma/client";
import { Provider } from "~/routes/_static-site.service-providers._index";
import { userData } from "~/_lib/integrations/faker";
import { ProviderProspectType } from "../use-case/create-provider-prospects.server";
import { CompleteProspect } from "../use-case/prospect-by-id.server";
import { CategorizedProspects } from "../use-case/providerProspectsByServiceCategory.server";
import { removeUnderscore } from "../utils/ServiceCategoriesSelectOptions";

export const fromProspectToProvider = (prospectId: string, prospect: CompleteProspect, serviceCategories: ServiceCategory[]): Provider => {
  return {
    id: '',
    serviceDetails: [],
    areasOfExpertise: [],
    logoURL: null,
    profileProjectURLs: [],
    userId: '',
    verifiedLicense: false,
    companyBio: prospect.companyBio ? prospect.companyBio : '',
    companyName: removeUnderscore(prospect.companyName.replace("&amp;", 'And')),
    primaryTelephone: prospect.phoneNumber,
    serviceCategories: serviceCategories,
    serviceProviderReviews: prospect.prospectReviews.map(review => ({
      providerId: prospectId,
      reviewId: '',
      review: {
        id: '',
        comment: review.review,
        customerName: review.reviewerName,
        location: review.reviewerLocation,
        rating: review.rating,
        createdAt: review.date
      }
    })),
    user: {
      ...userData(),
      avatarURL: {
        userId: '',
        src: ''
      },
      accountStatus: AccountStatus.Active,
      accountType: AccountType.Service_Provider,
      authId: '',
      createdAt: new Date(Date.now()),
      email: '',
      fullname: '',
      id: '',
      isAdmin: false,
      membershipStatus: MembershipStatus.Valued,
      primaryAddress: '',
      updatedAt: new Date(Date.now()),
      roles: [Role.User]
    }
  }
}