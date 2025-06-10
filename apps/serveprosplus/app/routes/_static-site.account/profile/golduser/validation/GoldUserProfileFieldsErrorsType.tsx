import { z } from "zod";
import GoldUserProfileSchema from "./GoldUserProfileSchema";

export type GoldUserProfileFieldsErrorsType = z.infer<typeof GoldUserProfileSchema>;
