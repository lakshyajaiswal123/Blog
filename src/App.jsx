import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './blogPage/Blog';
import Home from './homePage/Home';
import DataScience from './dataSciencePage/DataScience';




export default function App() {
  return (
    <div>
  

  <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/data-science" element={<DataScience />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}
