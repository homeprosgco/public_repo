export type YServiceProviderType = {
  directURL: string;
  bizId: string;
  name: string;
  phone: string;
  website: string;
  images: {link: string; alt: string}[];
  address: {
    city: string;
    postalCode: string;
  };
  primaryPhoto: string;
  cuisine: string;
  categories: string[];
  reviews: {
    date: Date;
    rating: number;
    text: string;
    photoUrls: string[];
    reviewerName: string;
    reviewerLocation: string
  }[]
};