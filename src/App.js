import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import React from "react";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="*" element={<NoPage/>} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
