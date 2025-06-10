export const FormEntries = async <T>({ request }: { request: Request; }) => {
  const formData = await request.formData();
  return Object.fromEntries(formData.entries()) as T;
} 