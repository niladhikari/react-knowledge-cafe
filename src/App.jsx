import "./App.css";
import Blogs from "./Componets/Blogs/Blogs";
import BookMarkes from "./Componets/BookMarkes/BookMarkes";
import Header from "./Componets/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <BookMarkes></BookMarkes>
      </div>
    </>
  );
}

export default App;
