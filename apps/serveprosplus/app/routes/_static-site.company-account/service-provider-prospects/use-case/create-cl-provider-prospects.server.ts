import { IvanvsCLDataset } from "~/_server/apify/actors/ivanvs-craigslist-actor.server";
import { providersFromIvansCLDataset } from "../incoming-data-mappers/fromCL";
import { IvansCLValidate } from "../validation/IvansCLValidate";
import { createManyProviderProspects } from "./create-provider-prospects.server";

export const createCLProviderProspects = async () => {
  const prospects = await IvanvsCLDataset();
  const validProspects = IvansCLValidate(prospects);
  const fromCL = providersFromIvansCLDataset(validProspects);
  await createManyProviderProspects(fromCL);
  return fromCL;
}