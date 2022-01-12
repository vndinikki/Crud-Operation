import React, { useEffect, useState } from "react";

const AddUser = (props) => {
  const initState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initState);

  useEffect(() => {
    if (props.edit) {
      setUser(props.currentUser);
    }
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", user);
    props.edit !== true ? props.addUser(user) : props.updateUser(user.id, user);
    setUser(initState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label> UserName</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <button>{props.edit ? "Update User" : "Add User"}</button>
      </form>
    </div>
  );
};

export default AddUser;
