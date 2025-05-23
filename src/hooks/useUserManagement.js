import { useState } from "react";

export const useUserManagement = (initialUsers = []) => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    email: "",
    age: "",
  });

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers((prev) => [...prev, newUser]);
    return newUser;
  };

  const updateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const resetCurrentUser = () => {
    setCurrentUser({ id: null, name: "", email: "", age: "" });
  };

  return {
    users,
    currentUser,
    setCurrentUser,
    addUser,
    updateUser,
    deleteUser,
    resetCurrentUser,
  };
};
