import { z } from "zod";
import GoldUserProfileSchema from "./GoldUserProfileSchema";

export type GoldUserProfileFieldsType = z.infer<typeof GoldUserProfileSchema>