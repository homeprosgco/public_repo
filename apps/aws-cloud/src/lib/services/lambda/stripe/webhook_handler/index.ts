import { APIGatewayProxyHandler } from 'aws-lambda';
import { StripeService } from '@homeprosgco/stripe_client';
import { getStripeSecrets } from 'libs/aws-cloud/src/lib/system';
import Stripe from 'stripe';

export const handler: APIGatewayProxyHandler = async (event) => {
  const { secretKey, signingSecret } = await getStripeSecrets();
  const stripe = new StripeService(secretKey);

  const signature = event.headers['stripe-signature'];
  const body = JSON.parse(event.body || '{}');

  let stripeEvent: Stripe.Event;

  try {
    stripeEvent = stripe.constructEvent(body, signature!, signingSecret);
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid signature' }),
    };
  }

  console.log('✅ Webhook received:', stripeEvent.type);

  // Handle different event types
  switch (stripeEvent.type) {
    case 'checkout.session.completed':
      const session = stripeEvent.data.object;
      console.log('✅ Checkout complete for session:', session.id);
      break;

    case 'invoice.payment_succeeded':
      console.log('💰 Payment succeeded:', stripeEvent.data.object);
      break;

    case 'customer.subscription.deleted':
      console.log('🚫 Subscription cancelled:', stripeEvent.data.object);
      break;

    default:
      console.warn('⚠️ Unhandled event type:', stripeEvent.type);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};
