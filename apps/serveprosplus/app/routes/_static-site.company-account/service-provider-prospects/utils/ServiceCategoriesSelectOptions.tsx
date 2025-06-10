import { serviceCategories } from "./ServiceCategoryMatchList";

export const removeUnderscore = (underscoreString: string) =>
  underscoreString.split("_").join(" ");

export const addUnderscore = (str: string) => str.split(" ").join("_");

export const serviceCategorySelectOptions = serviceCategories.map(
  (category) => ({
    label: removeUnderscore(category),
    value: category,
  })
);
