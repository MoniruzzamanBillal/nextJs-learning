import getPost from "@/lib/getPost";
import React from "react";

const Post = async ({ params }) => {
  const { id } = params;

  const post = await getPost(id);

  //   console.log(post);

  return (
    <div className=" bg-lime-50  flex flex-col gap-3 text-lg p-3 ">
      <p>
        <span className="font-semibold">post title = </span> {post?.title}{" "}
      </p>
      <p>
        <span className="font-semibold">post body = </span> {post?.body}{" "}
      </p>
    </div>
  );
};

export default Post;
