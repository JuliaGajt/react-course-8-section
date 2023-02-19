import { useState } from "react";
import "./App.css";
import UserList from "./components/Users/UserList.jsx";
import UserInput from "./components/Users/UserInput.jsx";

function App() {
  let users = [
    { id: "e1", name: "Anne", age: 12 },
    { id: "e2", name: "Andre", age: 21 },
    { id: "e3", name: "Anne", age: 12 },
    { id: "e4", name: "Andre", age: 21 },
    { id: "e5", name: "Anne", age: 12 },
    { id: "e6", name: "Andre", age: 21 },
    { id: "e7", name: "Anne", age: 12 },
    { id: "e8", name: "Andre", age: 21 },
    { id: "e9", name: "Anne", age: 12 },
    { id: "e21", name: "Andre", age: 21 },
    { id: "e11", name: "Anne", age: 12 },
    { id: "e22", name: "Andre", age: 21 },
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
