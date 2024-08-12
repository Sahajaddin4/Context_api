import React from "react";

function Card({ post }) {
  return (
    <div className="blog mb-4">
      <div className="title">
        <h1 className="font-bold text-lg">{post.title}</h1>
      </div>

      <div className="author">
        <p className="italic">By {post.author} on <span className="underline  font-semibold">{post.category}</span></p>
      </div>
      <div className="date">
        <p>Posted On {post.date}</p>
      </div>

      <div className="content mt-2">
        <p className="text-md">{post.content}</p>
      </div>

    </div>
  );
}

export default Card;
