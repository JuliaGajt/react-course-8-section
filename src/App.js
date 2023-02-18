import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList/UserList.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";

function App() {
  let users = [
    { id: "e1", name: "Anne", age: 12 },
    { id: "e2", name: "Andre", age: 21 },
  ];

  const [usersList, setUsersList] = useState(users);

  const deleteHandler = (userId) => {
    let newUsers = usersList.filter((user) => user.id !== userId);
    setUsersList(newUsers);
  };

  let content = <p>No users added.</p>;
  if (usersList.length > 0) {
    content = <UserList users={usersList} toDelete={deleteHandler}></UserList>;
  }

  const AddUserHandler = (name, age) => {
    setUsersList((previousUsers) => {
      return [
        ...previousUsers,
        { id: Math.random().toString(), name: name, age: age },
      ];
    });
  };

  return (
    <div className="App">
      <UserInput addUser={AddUserHandler} />
      {content}
    </div>
  );
}

export default App;
