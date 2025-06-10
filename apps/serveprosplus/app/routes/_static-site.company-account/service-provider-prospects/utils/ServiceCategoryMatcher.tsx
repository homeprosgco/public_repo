import { ServiceCategory } from "@prisma/client";
import { serviceCategoryMatchList } from "./ServiceCategoryMatchList";

export const ServiceCategoryMatcher = (text: string) => {
  const keys = Object.keys(serviceCategoryMatchList);
  const categories: ServiceCategory[] = [];

  for (const key of keys) {
    const matchFound = text.toLowerCase().match(key);
    if (matchFound && !categories.includes(serviceCategoryMatchList[key])) {
      if (serviceCategoryMatchList[key] === undefined) {
        console.log(key);
        console.log(serviceCategoryMatchList[key]);
      }
      categories.push(serviceCategoryMatchList[key]);
    }
  }

  if (categories.length === 0) return null;

  return categories;
}