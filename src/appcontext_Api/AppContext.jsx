import { Children, createContext, useState } from "react";
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
    fetchData
  };

  async function fetchData() {
    try {
      setLoader(true)
      const response = await fetch(baseUrl);
      const result = await response.json();
      setPosts(result.posts);
      setPage(result.page)
      setTotalPages(result.totalPages)
      setLoader(false);

    } catch (error) {
      console.log("Error something");
    }
  }
 
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
