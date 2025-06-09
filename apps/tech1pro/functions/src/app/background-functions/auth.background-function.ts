import * as functions from 'firebase-functions';
import { UserRecord } from 'firebase-functions/v1/auth';

export const createUser = functions.auth.user().onCreate((user: UserRecord) => {
  console.log(user);
  return 'user created successfully';
})