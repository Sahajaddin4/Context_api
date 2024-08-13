import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
