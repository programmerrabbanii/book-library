import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import BookDetails from "../components/BookDetails";
import ListedBook from "../components/ListedBook";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/booksapi.json')
            },
           {
            path:"/books/:bookId",
            element:<BookDetails></BookDetails>,
            loader:()=> fetch('/booksapi.json')

           },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
          {
            path:"/listbook",
            element:<ListedBook></ListedBook>,
            loader:()=>fetch('/booksapi.json')
          }
        ]
    }
])

export {router}