import { z } from "zod";

// This type infer errors from a ZodType, as produced by `flatten()` of a parsed schema.
export type inferSafeParseErrors<T extends z.ZodType<any, any, any>, U = string> = {
  formErrors: U[];
  fieldErrors: {
    [P in keyof z.infer<T>]?: U[];
  };
};