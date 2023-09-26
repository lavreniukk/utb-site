import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import Home from '../pages/MainPage/MainPage';
import Contact from '../pages/ContactPage/Contact';
import About from '../pages/AboutPage/About';
import Products from '../pages/ProductsPage/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				element: <Home title={'Головна'} />,
				index: true,
			},
			{
				path: '/contact',
				element: <Contact title={'Контакти'} />,
			},
			{
				path: '/aboutus',
				element: <About title={'Про компанію'} />,
			},
			{
				path: '/products',
				element: <Products title={'Продукція'} />,
			},
			{
				path: '/products/category/:mainCategory/:secondaryCategory?',
				element: <Products title={'Продукція'} />,
			},
			{
				path: '/products/producer/:producerName',
				element: <Products title={'Продукція'} />,
			},
			{
				path: '/product/:productId',
				element: <ProductDetailPage />,
			},
		],
	},
]);
