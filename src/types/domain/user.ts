import { User } from "@/types/user";

export type UserEntity = User;

export type CreateUserInput = Omit<User, "createAt" | "updatedAt" | "uid"> & {
  password: string;
};

export type UpdateUserInput = Omit<Partial<User>, "email" | "createAt">;
