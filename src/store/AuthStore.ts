import { User } from "@/types/user";
import { StateCreator, create } from "zustand";

type StoreUser = User;

interface AuthSlice {
  me: StoreUser | null | undefined;
  setStoreMe: (user: StoreUser | null) => void;
}

const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  me: undefined,
  setStoreMe: (user: StoreUser | null) => set({ me: user }),
});

export const useAuthStore = create<AuthSlice>(createAuthSlice);
