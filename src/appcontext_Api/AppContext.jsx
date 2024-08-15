import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const value = {
    page,
    setPage,
    totalPages,
    setTotalPages,
    posts,
    setPosts,
    loader,
    setLoader,
    fetchData,
    pageChange,
  };

  async function fetchData(page = 1, blogId=null, blogTag=null,blogCategory=null) {
    let url = `${baseUrl}?page=${page}`;

    if (blogId) {
      url += `&blog=${blogId}`;
    } else if (blogTag) {
      url += `&tag=${blogTag}`;
    } 
    else if(blogCategory){
          url+=`&category=${blogCategory}`;     
    }
  
    try {
      setLoader(true);
      console.log(url);
      const response = await fetch(url);
      const result = await response.json();
      setPosts(result.posts);
      setPage(result.page);
      setTotalPages(result.totalPages);
      setLoader(false);
    } catch (error) {
      console.log("Error something");
    }
  }

  function pageChange(page) {
    fetchData(page);
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
