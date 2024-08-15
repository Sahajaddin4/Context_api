import React, { useContext,useEffect } from 'react'
import Header from "../header/Header";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { AppContext } from '../../appcontext_Api/AppContext';
import Body from '../body/Body';
import Footer from '../footer/Footer';
function CategoryBlog() {
    const { category } = useParams();
    const{page,posts,fetchData,totalPages,loader,pageChange}=useContext(AppContext);
    const navigate=useNavigate();

   useEffect(()=>{
     fetchData(page,null,null,category);
   },[page,category])
    return (
        <div className="app flex flex-col">
          <Header />
          {loader ? (
            <Spinner />
          ) : (
            <div className="w-[40rem] mx-auto my-5">
              <div className="flex">
                <button
                  className=" py-2 shadow-md rounded-md border border-gray-400 mb-3 px-4"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </button>
                <span className="text-2xl px-3">
                  Blogs On <span className=" underline">{category}</span>
                </span>
              </div>
              <div className="app flex flex-col">
                <div className="mid w-[40rem] mx-auto">
                  <Body posts={posts} />
                </div>
                <Footer
                  page={page}
                  totalPages={totalPages}
                  pageChange={pageChange}
                />
              </div>
    
            </div>
          )}
        </div>
      );
    };
    



export default CategoryBlog