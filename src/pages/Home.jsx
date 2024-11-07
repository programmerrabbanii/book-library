import { useLoaderData } from "react-router-dom";
import Book from "../components/Book";
import Bannar from "../components/bannar";

const Home = () => {
    const books=useLoaderData()
   
    return (
        <div className="w-11/12 mx-auto">
            <Bannar></Bannar>
            <h2 className="text-center text-5xl font-semibold py-12">Books</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                books.map((book)=> <Book book={book} key={book.bookId}></Book>)
            }
           </div>
            
        </div>
    );
};

export default Home;