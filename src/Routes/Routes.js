import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import About from "../Pages/About/About";
import Contactus from "../Pages/Contactus/Contactus";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";


 export const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/contactus',
                element:<Contactus></Contactus>
            },
        ]
    }
])