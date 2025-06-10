import { createHmac } from 'crypto';

export const hmacDigest = (identifier: string) => {
  const hmac = createHmac('sha256', (process.env.ONESIGNAL_REST_API_KEY as string));
  hmac.update(identifier);
  return hmac.digest('hex');
}