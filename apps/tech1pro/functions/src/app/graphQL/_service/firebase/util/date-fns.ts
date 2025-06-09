import { compareDesc, isAfter, isBefore, isDate, parseISO } from 'date-fns';

export const sortByISOStringCreatedDate = <T extends {created: string}>(items: T[]) => {
  return items.sort((itemA: T, itemB: T) => {
    return compareDesc(parseISO(itemA.created), parseISO(itemB.created))
  })
}

export const sortByISOStringUpdatedDate = <T extends {updated: string}>(items: T[]) => {
  return items.sort((itemA: T, itemB: T) => {
    return compareDesc(parseISO(itemA.updated), parseISO(itemB.updated))
  })
}

export const createdBetweenDate = <T extends {created: string}>(items: T[], afterISODateString: string, beforeISODateString: string | undefined) => {
  const afterDate = parseISO(afterISODateString);
  const beforeDate = beforeISODateString ? parseISO(beforeISODateString) : Date.now();
  if(isDate(afterDate) || isDate(beforeDate) ) {
    return [];
  }
  return items.filter(item => isAfter(parseISO(item.created), afterDate) && isBefore(parseISO(item.created), beforeDate));
}