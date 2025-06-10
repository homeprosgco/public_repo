import { YinYelpDataset } from "~/_server/apify/actors/yin-yelp-scraper.server";
import { providersFromYinYelpDataset } from "../incoming-data-mappers/fromY";
import { YinYelpValidate } from "../validation/YinYelpValidate";
import { createManyProviderProspects } from "./create-provider-prospects.server";

export const createYProviderProspects = async () => {
  const yProspects = await YinYelpDataset();
  const validYProspects = YinYelpValidate(yProspects);
  const fromYinYelp = providersFromYinYelpDataset(validYProspects);
  await createManyProviderProspects(fromYinYelp);
  return fromYinYelp;
}

