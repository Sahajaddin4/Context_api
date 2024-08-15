import React, { useContext, useEffect, useState } from "react";
import Header from "../header/Header";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../body/Card";
import Spinner from "../spinner/Spinner";
import { AppContext } from "../../appcontext_Api/AppContext";

const Blog = () => {
  const navigate = useNavigate();

  const { blogId } = useParams();
  const { posts,page, loader, fetchData } = useContext(AppContext);

  useEffect(() => {
    fetchData(page,blogId,null,null);
  }, [blogId,page]);

  return (
    <div className="blog flex flex-col">
      <Header />
      {loader ? (
        <Spinner />
      ) : (
        <div className="w-[40rem] mx-auto my-5">
          <button
            className=" py-2 shadow-md rounded-md border border-gray-400 mb-3 px-4"
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
          {posts ? (
            <Card post={posts.find((post) => post.id === blogId)} />
          ) : (
            <div>Not data found</div>
          )}
          <div className="realted my-5">
            <h1 className="font-bold text-3xl">Related data</h1>
          </div>
          <div className="related-posts">
            {posts ? (
              posts
                .filter((deletePost) => deletePost.id !== blogId)
                .map((post) => {
                  return <Card post={post} key={post.id} />;
                })
            ) : (
              <div>No Data</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
