import { CLServiceProviderType } from "../type/CLServiceProviderType";
import { formatPhoneNumber } from "../utils/PhoneNumberFormat";
import { ServiceCategoryMatcher } from "../utils/ServiceCategoryMatcher";

export const IvansCLValidate = (
  data: CLServiceProviderType[]
) => {
  return data.filter((post) => {
    const searchData = `${post.title} ${post.post}`;
    const phoneNumber = formatPhoneNumber(searchData);
    const serviceCategories = ServiceCategoryMatcher(searchData);

    if(!phoneNumber) return false;

    const phoneRegEx = new RegExp("561");

    if (!phoneRegEx.test(phoneNumber)) return false;
    
    return phoneNumber && serviceCategories;
  });
};
