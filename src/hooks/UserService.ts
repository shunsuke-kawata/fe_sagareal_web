import { CreateUserInput, UpdateUserInput } from "@/types/domain/user";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function UserService() {
  const fetchUsers = async () => {
    const response = await fetch(`${baseUrl}/api/v1/users/`);
    return response.json();
  };

  const fetchUser = async (uid: string) => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/users/${uid}`);
      const user = response.json();

      if (!user) {
        throw new Error(`ユーザーが見つかりませんでした: ${uid}`);
      }

      return user;
    } catch (error: any) {
      console.error(`ユーザーの取得に失敗しました: ${error.message}`);
      throw error;
    }
  };

  const createUser = async (data: CreateUserInput) => {
    const response = await fetch(`${baseUrl}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const updateUser = async (data: UpdateUserInput) => {
    const response = await fetch(`${baseUrl}/api/v1/users/${data.uid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const deleteUser = async (uid: string) => {
    console.log("DELETE", uid);

    const response = await fetch(`${baseUrl}/api/v1/users/${uid}`, {
      method: "DELETE",
    });
    return response.json();
  };

  return {
    fetchUsers,
    fetchUser,
    createUser,
    updateUser,
    deleteUser,
  };
}
