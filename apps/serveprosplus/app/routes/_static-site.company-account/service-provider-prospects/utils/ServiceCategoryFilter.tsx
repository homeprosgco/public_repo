import { ServiceCategory } from "./ServiceCategoryMatchList";

export const ServiceCategoryFilter = (filterCategories: ServiceCategory[], iServiceCategory: { serviceCategories: ServiceCategory[] }[]) => {
  if(!filterCategories.length) return iServiceCategory;
  
  return iServiceCategory.filter(item => {
    return item.serviceCategories.some( category => filterCategories.includes(category));
  })
}