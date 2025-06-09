import { APIGatewayProxyHandler } from 'aws-lambda';
import { StripeService } from '@homeprosgco/stripe_client';
import { getStripeSecrets } from 'libs/aws-cloud/src/lib/system';
import Stripe from 'stripe';

// And create the secret in Secrets Manager with value:

// {
//   "secretKey": "sk_live_..."
// }

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const { secretKey } = await getStripeSecrets();
    const stripe = new StripeService(secretKey);

    const body = JSON.parse(event.body || '{}');

    const url = await stripe.createCheckoutSession({
      priceId: body.priceId,
      successUrl: body.successUrl,
      cancelUrl: body.cancelUrl,
      customerEmail: body.customerEmail,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url }),
    };
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Something went wrong' }),
    };
  }
};
