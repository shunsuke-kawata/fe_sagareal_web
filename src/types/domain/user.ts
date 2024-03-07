import { User } from "@/types/user";

export type UserEntity = User;

export type CreateUserInput = Omit<User, "createAt" | "updatedAt">;

export type UpdateUserInput = Omit<Partial<User>, "email" | "createAt">;
