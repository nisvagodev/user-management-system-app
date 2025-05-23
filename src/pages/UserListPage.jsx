import { useState } from "react";
import { useUserManagement } from "../hooks/useUserManagement";
import { filterUsers } from "../utils/userHelpers";
import UserForm from "../components/UserForm/UserForm";
import UserTable from "../components/UserTable/UserTable";
import SearchBar from "../components/SearchBar/SearchBar";
import "./UserListPage.css";

const UserListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    users,
    currentUser,
    setCurrentUser,
    addUser,
    updateUser,
    deleteUser,
    resetCurrentUser,
  } = useUserManagement([
    { id: 1, name: "Nico", email: "nico@test.com", age: 23 },
  ]);

  const filteredUsers = filterUsers(users, searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser.id) {
      updateUser(currentUser);
    } else {
      addUser(currentUser);
    }
    resetCurrentUser();
  };

  return (
    <div className="user-list-container">
      <div className="form-section">
        <UserForm
          user={currentUser}
          onChange={setCurrentUser}
          onSubmit={handleSubmit}
          isEditing={!!currentUser.id}
        />
      </div>

      <div className="content-section">
        <div className="search-section">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <p className="user-count">
            Mostrando {filteredUsers.length} de {users.length} usuarios
          </p>
        </div>

        <div className="table-container">
          <UserTable
            users={filteredUsers}
            onEdit={setCurrentUser}
            onDelete={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default UserListPage;
