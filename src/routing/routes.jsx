import { createBrowserRouter } from "react-router-dom";
import Home from "../components/MainPage/MainPageComponent";
import { Layout } from "./layout";
import Contact from "../components/ContactComponent/Contact";
import About from "../components/AboutComponent/About";
import Products from "../components/ProductsComponent/Products";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                element: <Home title={'Головна'}/>,
                index: true,
            },
            {
                path: "/contact",
                element: <Contact title={'Контакти'}/>,
            },
            {
                path: "/aboutus",
                element: <About title={'Про компанію'}/>,
            },
            {
                path: "/products",
                element: <Products title={'Продукція'}/>,
            },
        ],
    },
]);