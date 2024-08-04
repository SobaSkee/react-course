import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-5xl text-black py-5 text-center">User: {userid}</div>
  );
}

export default User;
