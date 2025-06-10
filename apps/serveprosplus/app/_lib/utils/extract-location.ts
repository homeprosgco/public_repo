export const extractLocation = (address: string, startIndex = 1, endIndex = 3) => {
  console.log(address)
  const partialAddress = address.split(',').slice(startIndex, endIndex).join();
  return partialAddress;
};