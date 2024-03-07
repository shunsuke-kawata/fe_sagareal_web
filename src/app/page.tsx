"use client";
import { AuthService } from "@/hooks/AuthService";

export default function Home() {
  const { logout } = AuthService();
  return (
    <div>
      <h1>閲覧画面</h1>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
}
