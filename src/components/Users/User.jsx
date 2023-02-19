import "./User.css";

const User = (props) => {
  const deleteHandler = (event) => {
    props.toDelete(props.user.id);
  };

  return (
    <li>
      <div className="user" onClick={deleteHandler}>
        <h2 className="user-data">
          {props.user.name} ({props.user.age} years old)
        </h2>
      </div>
    </li>
  );
};

export default User;
