import { Link, useLoaderData, useParams } from "react-router-dom";
import { addTostoredReadList } from "../utility/utility";

const BookDetails = () => {
    const {bookId}=useParams()
    const data=useLoaderData()
    const id=parseInt(bookId)
    const book=data.find(bok=> bok.bookId===id);
    const {bookId: currentId,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing,bookName}=book;

    const handlerMark=(id)=>{
        addTostoredReadList(id)

    }
    return (
        <div>

<div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="w-6/12 rounded-lg shadow-2xl h-[700px]" />
    <div className="w-5/12 ">
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <h4 className="border-b py-2">By: {author}</h4>
      <h4 className="border-b py-2">{category}</h4>
      <p className="py-6">
       <h3 className="font-bold">Review:</h3> {review}
      </p>
      <h3 className="flex items-center  gap-5 mt-5">
        <h4 className="font-bold">Tags</h4>
        {
           tags.map(tag=> <button className="py-2 px-6 rounded-xl bg-gray-200">   {tag} </button>)
        }
      </h3>
      <div className="mt-5">
        <div className="flex justify-between items-center">
            <p className="font-semibold">Number Of Page:</p>
            <h2> {totalPages}</h2>
        </div>
        <div className="flex justify-between items-center">
            <p className="font-semibold">publisher:</p>
            <h2> {publisher}</h2>
        </div>
        <div className="flex justify-between items-center">
            <p className="font-semibold">year Of Publishing:</p>
            <h2> {yearOfPublishing}</h2>
        </div>
        <div className="flex justify-between items-center">
            <p className="font-semibold">Rating:</p>
            <h2> {rating}</h2>
        </div>
       
      </div>

      <div className="flex gap-2 mt-7">

      <button onClick={()=>handlerMark(bookId)} className="btn btn-outline btn-info"> Mark As Read</button>
      <button className="btn btn-active btn-ghost"> Add To Wish list</button>
        
      </div>
      <div className="flex justify-end items-center">
            <Link className="bg-green-400 py-2 px-6 rounded-lg font-semibold" to="/"> Go To Home</Link>
        </div>

    </div>
  </div>
           </div>
            
        </div>
    );
};

export default BookDetails;