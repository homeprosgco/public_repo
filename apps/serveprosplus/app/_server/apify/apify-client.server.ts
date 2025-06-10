import { ApifyClient, DatasetClient } from 'apify-client';

if (!process.env.APIFY_TOKEN)
  throw new Error('Missing apify client token env variable');

const apifyClient = new ApifyClient({ token: process.env.APIFY_TOKEN });

export { apifyClient, DatasetClient }