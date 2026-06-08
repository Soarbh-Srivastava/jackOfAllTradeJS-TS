import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import Home from "./home"
import DashBoard  from "./dashboard"
import NotFound from "./notFound";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element:<Home/>
            },
            {
                path:'dashboard',
                element:<DashBoard/>
            }
        ]
    }
])