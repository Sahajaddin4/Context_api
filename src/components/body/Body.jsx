import React from "react";
import Card from "./Card";

function Body({ posts }) {
  return (
    <div className="flex-1 overflow-y-auto my-[10px]  w-[40rem] mx-auto">
      {posts ? (
        posts.map((post) => {
          return <Card post={post} key={post.id} page={posts.page} />;
        })
      ) : (
        <div>No post found</div>
      )}
    </div>
  );
}

export default Body;
