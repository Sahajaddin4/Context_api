import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../body/Card";
import Spinner from "../spinner/Spinner";


const Blog = () => {
  
  const navigate=useNavigate();
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
   
      <div className="app flex flex-col">
        <Header />
        {
            loader ? <Spinner/> :
            <div className="w-[40rem] mx-auto my-5">
        <button
              className=" py-2 shadow-md rounded-md border border-gray-400 mb-3 px-4"
              onClick={()=>{
                navigate('/')
              }}
              >
              Back
            </button>
        {
            posts ?
            <Card post={posts.find((post)=>post.id===blogId)}/>
            : <div>Not data found</div>
            
         }
         <div className="realted my-5">
          <h1 className="font-bold text-3xl">Related data</h1>
         </div>
         <div className="related-posts">
           {
            posts?
            posts.filter(deletePost=>deletePost.id!==blogId).map((post)=>{
              return <Card post={post} key={post.id}/>
            }):<div>No Data</div>
           }
         </div>
        </div>
        }


      </div>
 
  );
};

export default Blog;
