"use client";
import { auth, provider } from "@/libs/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // ログイン成功後の処理
      console.log(result.user);
    } catch (error) {
      // エラー処理
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
