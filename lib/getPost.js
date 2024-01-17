import React from "react";

const getPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return await response.json();
};

export default getPost;
