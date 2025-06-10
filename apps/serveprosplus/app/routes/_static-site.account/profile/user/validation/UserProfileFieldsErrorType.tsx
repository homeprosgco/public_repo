import { z } from "zod";
import { inferSafeParseErrors } from "~/_lib/utils/infer-safe-parse-errors";
import UserProfileSchema from "./UserProfileSchema";

export type UserProfileFieldsErrorsType = inferSafeParseErrors<typeof UserProfileSchema>;
