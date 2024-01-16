import React from "react";

const Blog = ({ params }) => {
  const { id } = params;
  return (
    <div className=" bg-yellow-200 p-5 text-xl ">
      <h1>blog no - {id} </h1>
      <h1>blog no - {id} </h1>
      <h1>blog no - {id} </h1>
      <h1>blog no - {id} </h1>
    </div>
  );
};

export default Blog;
