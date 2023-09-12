
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const BookMarkes = ({bookMarks,readingTime}) => {
 
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 mr-4 md:mr-0">
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
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
    readingTime: PropTypes.number
  };
export default BookMarkes;