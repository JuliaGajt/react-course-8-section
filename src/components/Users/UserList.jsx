import classes from "./UserList.module.css";
import User from "../Users/User.jsx";
import Card from "../UI/Card.jsx";

const UserList = (props) => {
  const deleteHandler = (userId) => {
    props.toDelete(userId);
  };

  return (
    <Card className={classes.usersList}>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} user={user} toDelete={deleteHandler} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
