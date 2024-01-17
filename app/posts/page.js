import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

const Posts = async () => {
  const postsData = await getAllPosts();

  console.log(postsData);

  return (
    <div className="postsContainer p-4  ">
      <h1>All posts </h1>

      <p className=" py-3 text-lg font-medium ">
        total posts = {postsData?.length}{" "}
      </p>

      <div className="posts mt-3 bg-sky-50 flex flex-col gap-2 ">
        {postsData.map((post) => (
          <Link href={`/posts/${post?.id}`}> {post?.title} </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
