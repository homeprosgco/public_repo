import { createFormContext } from '@mantine/form';

interface AuthFormValues {
  email: string;
  password: string;
  passwordConfirm?: string;
}

// You can give context variables any name
export const [AuthFormProvider, useAuthFormContext, useAuthForm] =
  createFormContext<AuthFormValues>();