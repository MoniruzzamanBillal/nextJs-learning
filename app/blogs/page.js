import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className=" bg-sky-300 ">
      <h1>blogs page </h1>
      <h1>blogs page </h1>
      <h1>blogs page </h1>
      <h1>blogs page </h1>
      <h1>blogs page </h1>
      <h1>blogs page </h1>

      <Link href={`/blogs/1`} className=" text-xl p-2 font-medium ">
        Blog no 1
      </Link>
      <Link href={`/blogs/2`} className=" text-xl p-2 font-medium ">
        Blog no 2
      </Link>
    </div>
  );
};

export default Blogs;
