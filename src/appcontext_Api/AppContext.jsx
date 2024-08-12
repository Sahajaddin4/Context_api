import { Children, createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ Children }) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const value = {
    page,
    setPage,
    totalPage,
    setTotalPage,
    posts,
    setPosts,
    loader,
    setLoader,
  };

  async function fetchData() {
    try {
      const response = await fetch(baseUrl);
      const result = await response.json();
      setPosts(result);
    } catch (error) {
      console.log("Error something");
    }
  }
  fetchData();
  return <AppContext.Provider value={value}>{Children}</AppContext.Provider>;
}
