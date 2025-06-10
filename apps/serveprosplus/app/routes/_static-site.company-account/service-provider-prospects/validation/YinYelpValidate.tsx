import { serviceCities } from "~/_server/utils/sevice-cities.server";
import { YServiceProviderType } from "../type/YServiceProviderType";
import { ServiceCategoryMatcher } from "../utils";
import { formatPhoneNumber } from "../utils/PhoneNumberFormat";

export const YinYelpValidate = (data: YServiceProviderType[]) => {
  return data.filter((post) => {
    if (!post.phone) return false;
    if (!ServiceCategoryMatcher(post.categories.toString())) {
      return false;
    }

    const phoneRegEx = new RegExp("561");

    if (
      !serviceCities.includes(post.address.city) ||
      !phoneRegEx.test(post.phone)
    )
      return false;

    const phoneNumber = formatPhoneNumber(post.phone);
    return !!phoneNumber;
  });
};
