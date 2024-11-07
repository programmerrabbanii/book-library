import { Link } from "react-router-dom";

const ReadBooks = ({readbook}) => {
    const {bookId,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing,bookName}=readbook
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex items-center">
  <figure>
    <img className="h-80"
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>By: {author}</p>
    <div className="card-actions justify-end">
     <button className="px-6 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">  <Link to="/">Home</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReadBooks;