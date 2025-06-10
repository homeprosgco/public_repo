import { createFormContext } from '@mantine/form';
import { OnboardingFieldsType } from './validation/OnboardingFieldsType';

export const [OnboardingFormProvider, useOnboardingFormContext, useOnboardingForm] =
  createFormContext<OnboardingFieldsType>();