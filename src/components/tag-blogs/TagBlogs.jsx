import React, { useEffect, useContext } from "react";
import Header from "../header/Header";
import Spinner from "../spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../appcontext_Api/AppContext";
import Body from "../body/Body";
import Footer from "../footer/Footer";
function TagBlogs() {
  const navigate = useNavigate();

  const { page,posts, loader, fetchData,totalPages,pageChange } = useContext(AppContext);
  const { blogTag } = useParams();

  const tag = blogTag.replace(/-/g, " ");


  useEffect(() => {
    fetchData(page,null,tag,null);
  }, [tag,page]);

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
          <div className="tagged-blog">
            <h1>
              Blogs Tagged #{" "}
              <span className="text-blue-600 font-semibold text-xl underline">
                {tag}
              </span>
            </h1>
          </div>
          <div className="tagged-post">
            {posts ? 
              <Body posts={posts} />
             : (
              <div>Not data found</div>
            )}
          </div>
        </div>
      )}
       <Footer
                  page={page}
                  totalPages={totalPages}
                  pageChange={pageChange}
                />
    </div>
  );
}

export default TagBlogs;
