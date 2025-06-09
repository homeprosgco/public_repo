import { Address } from "src/generated/graphql";

export const dateNowIsoString = new Date(Date.now()).toISOString();
export const parseBase10Int = (integer: string) => (parseInt(integer, 10));
export const totalNumbers = (integers: number[]) => {
  return integers.reduce((allTotals: number, currentTotal: number) => allTotals += currentTotal, 0)
}
export const createAddress = ({ city, state, zipcode, streetAddress }: Address) => {
  return { city, state, streetAddress, zipcode } as Address;
}

export const sortStrings = (stringArr: string[]) => {
  return stringArr.sort((stringA: string, stringB: string) => stringA.localeCompare(stringB));
}