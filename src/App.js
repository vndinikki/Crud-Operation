import { useState } from "react";
import "./styles.css";
import UserTable from "./tables/UserTable";
import AddUser from "./tables/AddUser";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];

  const initState = { id: null, name: "", username: "" };
  const [users, setUser] = useState(usersData);

  const [edit, setEdit] = useState(false);

  const [currentUser, setCurrentUser] = useState(initState);

  const editUser = (user) => {
    setEdit(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const addUser = (user) => {
    user.id = users.length + 1;
    setUser([...users, user]);
  };

  const updateUser = (id, updatedUser) => {
    setEdit(false);
    setUser(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUser(users.filter((user) => user.id !== id));
  };

  return (
    <div style={styles.appStyle}>
      <div style={styles.header}>
        <h1>App</h1>
      </div>
      {edit ? (
        <div style={styles.apps}>
          <h2>Edit User</h2>

          <AddUser
            edit={true}
            currentUser={currentUser}
            setEdit={setEdit}
            updateUser={updateUser}
          />
        </div>
      ) : (
        <div style={styles.apps}>
          <h2>Add Users</h2>
          <AddUser addUser={addUser} />
        </div>
      )}
      <div style={styles.users}>
        <h2>View Users</h2>
        <UserTable users={users} editUser={editUser} deleteUser={deleteUser} />
      </div>
    </div>
  );
};

const styles = {
  appStyle: {
    padding: "20px"
  },
  header: {
    position: "relative",
    right: 0,
    top: 0
  },
  apps: {
    position: "fixed",
    padding: "10px",
    left: 0
  },
  users: {
    position: "fixed",
    right: 50
  }
};
export default App;
