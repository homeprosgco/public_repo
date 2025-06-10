import { ServiceCategory } from "@prisma/client";

export type CLServiceProviderType = {
  id: string;
  url: string;
  title: string;
  datetime: string;
  location: string;
  category: string;
  label: string;
  longitude: string;
  mapAccuracy: string;
  post: string;
  notices: string;
  pics: string[];
  attributes: string[];
  phoneNumber: string;
  companyName: string;
  serviceCategories: ServiceCategory[]
};