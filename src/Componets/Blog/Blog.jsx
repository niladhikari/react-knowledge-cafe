import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog , handleAddToBookmark,handleMarkAsRead}) => {
//   console.log(blog);
  const {id,title,cover,author,author_img,reading_time,posted_date,hashtags,} = blog;
  
  return (
    <div className="mb-20  space-y-4">
      <img
        className="mb-8 w-full"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4 ">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={()=>handleAddToBookmark(blog)}
          className="ml-2 text-2xl text-red-600">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl md:w-[700px]">{title}</h2>
      <p>
        {
        hashtags.map((hash, idx) => (
          <span key={idx}>
          <a className="pr-2" href="">#{hash}</a>{" "}
          </span>))
        }
      </p>
      <button onClick={()=> handleMarkAsRead(id,reading_time)}
                className='text-purple-800 font-bold pt-3 underline'
            >Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
