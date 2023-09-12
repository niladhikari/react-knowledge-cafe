
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const BookMarkes = ({bookMarks}) => {
 
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-4xl">Reading Time: {bookMarks.length}</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookMarks.length}</h2>
            {
                bookMarks.map((bookmark, idx) => <Bookmark  
                key={idx} bookmark={bookmark}>
                </Bookmark> )
            }
        </div>
    );
};

BookMarkes.propTypes = {
    bookMarks: PropTypes.array,
    // readingTime: PropTypes.number
  };
export default BookMarkes;