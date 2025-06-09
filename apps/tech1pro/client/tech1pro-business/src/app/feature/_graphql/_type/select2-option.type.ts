import { Select2Option as SelectOption } from '../_input/form/_control/select2-form-group/_type/select2-option.type';
export type Select2Option<Type> = {
  [Property in keyof Type]: Type[Property];
} & SelectOption;