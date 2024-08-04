import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h1>Not Logged In</h1>;
  }
  // console.log("username:" + username);
  return (
    <div>
      <h1>Profile: {user.username}</h1>
      <h2>password: {user.password}</h2>
    </div>
  );
}

export default Profile;
