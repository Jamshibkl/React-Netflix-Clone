import React from 'react'
import { Routes, Route} from "react-router-dom";
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact'
import Home from '../pages/Home';

function Router() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="/contact" element={<Contact />} />

  </Routes>
  )
}

export default Router
