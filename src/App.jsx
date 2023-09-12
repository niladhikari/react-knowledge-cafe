import "./App.css";
import Blogs from "./Componets/Blogs/Blogs";
import BookMarkes from "./Componets/BookMarkes/BookMarkes";
import Header from "./Componets/Header/Header";
import { useState } from 'react';

function App() {
  const [bookMarks,setBookMarks] = useState([])

  const handleAddToBookmark = (blog)=>{
    const newBookmarkes = [...bookMarks,blog]
    setBookMarks(newBookmarkes);
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMarkes bookMarks={bookMarks}></BookMarkes>
      </div>
    </div>
  );
}

export default App;
