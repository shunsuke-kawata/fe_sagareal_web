"use client";
import { useAuthStore } from "@/store/AuthStore";
import UserService from "./UserService";
import { getAuth, signOut } from "firebase/auth";

export const AuthService = () => {
  const { fetchUser } = UserService();
  const setStoreMe = useAuthStore((state) => state.setStoreMe);

  const setAuthUser = async (uid: string | null) => {
    if (uid) {
      const user = await fetchUser(uid);
      setStoreMe(user);
    } else {
      setStoreMe(null);
    }
  };

  const logout = () => {
    signOut(getAuth());
    setStoreMe(null);
  };

  return {
    setAuthUser,
    logout,
  };
};
