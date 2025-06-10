import { CLServiceProviderType } from "~/routes/_static-site.company-account/service-provider-prospects/type/CLServiceProviderType";
import { apifyClient } from "../apify-client.server";

export const IvanvsCLDataset = async (): Promise<CLServiceProviderType[]> => {
  const listItems = await apifyClient.dataset("serveprosplus/craigslistpros").listItems();
  return listItems.items as CLServiceProviderType[];
}