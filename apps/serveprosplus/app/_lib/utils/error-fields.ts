const errorFields = <T>(formErrors: { fieldErrors: { [key: string]: string[] }, formErrors: string[] }) => {
  const fieldErrors: { [key: string]: string } = {};
  for (const [key, value] of Object.entries(formErrors.fieldErrors)) {
    fieldErrors[key] = value[0]
  }
  return fieldErrors;
}

export default errorFields;