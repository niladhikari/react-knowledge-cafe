import "./App.css";
import Blogs from "./Componets/Blogs/Blogs";
import BookMarkes from "./Componets/BookMarkes/BookMarkes";
import Header from "./Componets/Header/Header";
import { useState } from 'react';

function App() {
  const [bookMarks,setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog)=>{
    const newBookmarkes = [...bookMarks,blog]
    setBookMarks(newBookmarkes);
  }


  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the read blog from bookmark
    console.log('remove bookmark', id)
    const remainingBookmarks = bookMarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookmarks);

  }

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarkes bookMarks={bookMarks} readingTime={readingTime}></BookMarkes>
      </div>
    </div>
  );
}

export default App;
