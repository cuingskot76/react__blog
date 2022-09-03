import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, posts, i }) => {
  return (
    <article
      className={`${
        posts.length - 1 === i ? "" : "border-b-2 border-blue-400 "
      } mb-4`}
    >
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <span className="text-[#758297]">{post.date}</span>
      <p className="mb-4 mt-2">
        {post.body?.length <= 25
          ? post.body
          : post.body?.slice(0, 100) + " . . ."}
      </p>
    </article>
  );
};

export default Post;
