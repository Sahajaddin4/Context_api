import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import TagBlogs from "./components/tag-blogs/TagBlogs";
import CategoryBlog from "./components/category/CategoryBlog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />}></Route>
        <Route path="/tag/:blogTag" element={<TagBlogs />} />
        <Route path="/categories/:category" element={<CategoryBlog/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
