import { z } from "zod";
import UserProfileSchema from "./UserProfileSchema";

export type UserProfileFieldsType = z.infer<typeof UserProfileSchema>