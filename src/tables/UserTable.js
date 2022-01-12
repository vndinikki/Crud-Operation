import React from "react";

const UserTable = (props) => {
  const { users } = props;
  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th> Name </th>
            <th> Username </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td> {user.name} </td>
                <td> {user.username} </td>
                <td>
                  <button onClick={() => props.editUser(user)}>Edit</button>
                  <button onClick={() => props.deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  table: {
    border: "1px",
    backgroundColor: "lightBlue"
  }
};

export default UserTable;
