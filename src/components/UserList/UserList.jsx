import "./UserList.css";
import User from "../User/User.jsx";

const UserList = (props) => {
  const deleteHandler = (userId) => {
    props.toDelete(userId);
  };

  return (
    <div className="users-list">
      <ul>
        {props.users.map((user) => (
          <User key={user.id} user={user} toDelete={deleteHandler} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
