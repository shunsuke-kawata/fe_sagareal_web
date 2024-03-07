"use client";
import { useEffect, ReactNode } from "react";
import { useAuthStore } from "@/store/AuthStore";
import { AuthService } from "./AuthService";
import { auth } from "@/libs/firebaseConfig";
import Login from "@/component/page";
import SkeletonDisplay from "@/component/SkeletonDisplay";

export function AuthProvider({ children }: { children: ReactNode }) {
  const me = useAuthStore((state) => state.me);
  const { setAuthUser } = AuthService();

  useEffect(() => {
    // ログイン状態を監視し、変化があったら発動
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      console.log("ログイン状態の変化を検知");
      if (firebaseUser) {
        setAuthUser(firebaseUser.uid);
      } else {
        // ログインしていない場合、ユーザー情報を空にする
        setAuthUser(null);
      }
    });
    // このコンポーネントが不要になったら監視を終了する
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(me);

  return <>{me ? children : me === null ? <Login /> : <SkeletonDisplay />}</>;
}
