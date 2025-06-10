import { PhoneNumberSearch } from "./PhoneNumberSearch";

export const formatPhoneNumber = (text: string) => {
  const phone = PhoneNumberSearch(text);
  if (!phone) return null;
  return `${phone?.[1]}-${phone?.[2]}-${phone?.[3]}`;
};
