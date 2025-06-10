
export const PhoneNumberSearch = (text: string) => {
  return text.match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/)
}