import { User } from "@prisma/client"

export type AppUser = {
  user: Omit<User, 'createdAt' | 'updatedAt'>
}