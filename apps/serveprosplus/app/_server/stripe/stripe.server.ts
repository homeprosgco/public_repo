import { loadStripe as _loadStripe, Stripe } from "@stripe/stripe-js";

export const loadStripe = (): Promise<Stripe | null> => {
  let stripKey: string = "";

  if(!process.env.STRIPE_API_TEST_KEY || !process.env.STRIPE_API_KEY) {
    throw new Error("Stripe Api Key not initialized");
  }

  if(process.env.NODE_ENV === "development") {
    stripKey = process.env.STRIPE_API_TEST_KEY;
  } else {
    stripKey = process.env.STRIPE_API_KEY;
  }
  
  return _loadStripe(stripKey);
}