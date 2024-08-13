import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { useParams } from "react-router-dom";
import Card from "../body/Card";
import Spinner from "../spinner/Spinner";


const Blog = () => {

  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";


  const {blogId} = useParams();

  async function fetchBlogData() {
    const url = `${newBaseUrl}?blog=${blogId}`
    try {
      setLoader(true);
      const response = await fetch(url);
      const result = await response.json();
    //   console.log(result);
      setPosts(result.posts);
      setLoader(false);
      
    } catch (error) {
        console.log("Error something");
    }
}
// console.log(posts[0])

  useEffect(()=>{
    fetchBlogData()
  },[])

  return (
    <div>
      <div className="app flex flex-col">
        <Header />
        {
            loader ? <Spinner/> :
            <div className="w-[40rem] mx-auto my-5">
        <button
              className=" py-2 shadow-md rounded-md border border-gray-400 px-4"
              
              >
              Back
            </button>
        {
            posts ?
            <Card post={posts[0]}/> : <div>Not data found</div>
            // posts?posts.map((post)=>{
            //     return <Card post={post}key={post.id} />
            // }):<div>No post found</div>
         }
        </div>
        }


      </div>
    </div>
  );
};

export default Blog;
