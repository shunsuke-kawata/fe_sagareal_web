import UserService from "./UserService";

export const UpdateUserName = () => {
  const { fetchUser, createUser } = UserService();

  const syncUserName = async (
    uid: string,
    displayName: string,
    email: string
  ) => {
    const user = await fetchUser(uid);
    if (!user) {
      createUser({ uid, name: displayName, email: email });
    }
  };

  return {
    syncUserName,
  };
};
