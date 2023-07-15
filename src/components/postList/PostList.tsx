import React from "react";
import PostCard from "../postCard/PostCard";
import { PostProps } from "@/types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Fetching went wrong");
  }

  return res.json();
}

const PostList = async () => {
  const data: PostProps[] = await getData();

  return (
    <div className="postList">
      <div className="postCard">
        {data.map((item) => (
          <PostCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
