import { faker } from '@faker-js/faker';
import { Activity, Address, Comment } from '../graphql.schema.interface';
export { faker } from '@faker-js/faker';

export const NextStepHomeRepairAccountsPath = 'app/nextstephomerepair/accounts';
export const NextStepHomeRepairUsersPath = 'app/nextstephomerepair/users';

export const randomArrayAmount = (min: number, max: number) => {
  return Array.from({ length: faker.datatype.number({ min, max }) });
}

export const selectRandom = <T>(arr: Array<T>) => {
  return faker.helpers.arrayElement(arr);
}

export const address = () => {
  return {
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    streetAddress: faker.address.streetAddress(),
    zipcode: faker.address.zipCodeByState('FL')
  } as Address;
}

export const createdDate = () => faker.date.recent(30).toISOString();
export const email = () => faker.internet.email();
export const phone = () => faker.phone.number('561-###-####');
export const imageURLs = () => randomArrayAmount(1, 5).map( _ => faker.image.imageUrl());
export const fakecomments = (userIds: string[]) => randomArrayAmount(5,12).map( _ => {
  return {
    userId: faker.helpers.arrayElement(userIds),
    comment: faker.lorem.sentences(),
    created: createdDate()
  } as Comment;
});
export const fakeactivities = (userIds: string[]) => randomArrayAmount(5,12).map( _ => {
  return {
    userId: faker.helpers.arrayElement(userIds),
    activity: faker.lorem.sentences(),
    created: createdDate()
  } as Activity;
});