import { YServiceProviderType } from "~/routes/_static-site.company-account/service-provider-prospects/type/YServiceProviderType";
import { apifyClient } from "../apify-client.server";

export const YinYelpDataset = async (): Promise<YServiceProviderType[]> => {
  const listItems = await apifyClient.dataset("serveprosplus/yelppros").listItems();
  return listItems.items as YServiceProviderType[];
}