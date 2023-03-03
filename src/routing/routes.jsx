import { createBrowserRouter } from "react-router-dom";
import Home from "../components/MainPage/MainPageComponent";
import { Layout } from "./layout";
import Contact from "../components/ContactComponent/Contact";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/home",
                element: <Home/>,
                index: true,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
        ],
    },
]);