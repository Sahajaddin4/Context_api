import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";


function Card({ post }) {
  return (
    <>
      {!post ? (
        <Spinner />
      ) : (
        <div className="blog mb-4">
          <div className="title">
            <Link to={`/blog/${post.id}`}>
              <h1 className="font-bold text-lg">{post.title}</h1>
            </Link>
          </div>

          <div className="author">
            <p className="italic">
              By {post.author} on{" "}
              <Link to={`/categories/${post.category}`}>
                <span className="underline  font-semibold">
                  {post.category}
                </span>
              </Link>
            </p>

          </div>
          <div className="date">
            <p>Posted On {post.date}</p>
          </div>

          <div className="content mt-2">
            <p className="text-md">{post.content}</p>
          </div>
          <div className="gap-x-2">
            {post.tags.map((tag, index) => {
              const formattedTag = tag.trim().split(" ").join("-"); //tag.replace(/ /g,'-');
              return (
                <Link key={index} to={`/tag/${formattedTag}`}>
                  <span className="text-blue-700 underline px-1">#{tag}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
