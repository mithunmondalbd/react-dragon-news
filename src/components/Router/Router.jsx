import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import About from "../../pages/About/About";
import Career from "../../pages/Career/Career";
import Register from "../../pages/Register/Register";
import NewsDetails from "../../pages/NewsDetils/NewsDetails";


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('./news.json')
            },
            {
                path: '/news/:id',
                element: <NewsDetails></NewsDetails>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;