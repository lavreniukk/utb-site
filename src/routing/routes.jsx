import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/MainPage/MainPage";
import { Layout } from "./layout";
import Contact from "../pages/ContactPage/Contact";
import About from "../pages/AboutPage/About";
import Products from "../pages/ProductsPage/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";

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
                element: <Products />,
            },
            {
                path: "/products/category/:mainCategory/:secondaryCategory?",
                element: <Products />
            },
            {
                path: "/products/producer/:producerName",
                element: <Products />
            },
            {
                path: "/product/:productId",
                element: <ProductDetailPage/>
            },
        ],
    },
]);