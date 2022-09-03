import React from "react";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post, i) => (
        <Post key={post.id} post={post} posts={posts} i={i} />
      ))}
    </>
  );
};

export default Feed;
