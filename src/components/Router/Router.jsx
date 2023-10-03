import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import About from "../../pages/About/About";
import Career from "../../pages/Career/Career";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
            }
        ]
    }
])
export default router;