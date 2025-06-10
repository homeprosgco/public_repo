import { faker } from '@faker-js/faker';

const useFaker: boolean = true;

export const isDevFaker = process.env.NODE_ENV === 'development' && useFaker;

export default faker;