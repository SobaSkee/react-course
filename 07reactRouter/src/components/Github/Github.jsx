import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = React.useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/SobaSkee")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>Github number of repos: {data.public_repos}</p>
      <img src={data.avatar_url} alt="profile picture" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/SobaSkee");
  return response.json();
};
