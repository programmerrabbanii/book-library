import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing,bookName}=book
    return (
        <div>
            
           <Link to={`/books/${bookId}`}>
           <div className="card bg-base-100  shadow-xl">
  <figure>
    <img 
    className="h-56 w-full object-cover"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex gap-3">
        {
            tags.map((tag)=> <button className="text-[#23BE0A] btn  btn-xs">{tag}</button>)
        }
    </div>
    <h2 className="card-title">{bookName}</h2>
    <p>By: {author}</p>

      <div className="flex justify-between">
        <h3> {category}</h3>
        <h2>5.00  <i class="fa-regular fa-star"></i></h2>
      </div>
    
  </div>
        </div>
           
           </Link>
        </div>
    );
};

export default Book;