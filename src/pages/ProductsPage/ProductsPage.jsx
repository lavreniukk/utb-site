import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Collapse, NavbarToggler } from 'reactstrap';
import ProductItems from '../../components/ProductItems/ProductItems.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import {
	fetchProducts,
	fetchFilteredProducts,
} from '../../utils/fetchingData.js';
import scrollToTop from '../../utils/scrollToTop.js';
import ProductFilter from '../../components/ProductFilter/ProductFilter.jsx';
import categories from '../../constants/productCategories.js';
import producers from '../../constants/productProducers.js';
import './productspage.css';
import Searchbar from '../../components/Searchbar/Searchbar.jsx';
import setMetaDescription from '../../utils/setDescription.js';

const productsOnPage = 6;

function Products({ title }) {
	const [products, setProducts] = useState([]);
	const [currentProducts, setCurrentProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [isOpenSideBar, setIsOpenSideBar] = useState(false);
	const { mainCategory, secondaryCategory, producerName } = useParams();
	document.title = 'УТБ Ресурс - ' + title;
	setMetaDescription(
		'Компанія “УТБ Ресурс” продуктивно працює на медичному ринку України, здійснюючи постачання та ремонт медичної техніки.',
	);

	useEffect(() => {
		const fetchData = async () => {
			let fetchedProducts;

			if (mainCategory || secondaryCategory || producerName) {
				setLoading(true);
				setCurrentPage(1);
				fetchedProducts = await fetchFilteredProducts(
					mainCategory,
					secondaryCategory,
					producerName,
				);
			} else {
				setLoading(true);
				setCurrentPage(1);
				fetchedProducts = await fetchProducts(); //maybe a change if querries too slow
			}

			setProducts(fetchedProducts);
			setLoading(false);
		};

		scrollToTop();
		fetchData();
	}, [mainCategory, secondaryCategory, producerName]);

	useEffect(() => {
		const indexOfLastProduct = currentPage * productsOnPage;
		const indexOfFirstProduct = indexOfLastProduct - productsOnPage;
		setCurrentProducts(products.slice(indexOfFirstProduct, indexOfLastProduct));
	}, [products, currentPage]);

	const handlePaginationClick = (pageIndex) => {
		setCurrentPage(pageIndex);
		scrollToTop();
	};

	const toggleSideBar = () => setIsOpenSideBar(!isOpenSideBar);

	return (
		<Container>
			<h1 className="text-center text-uppercase mt-5 mb-5">Продукція</h1>
			<Row className="container__products-page">
				<Col xs="12" className="d-md-none d-flex justify-content-end mb-1">
					<span className="mt-1 me-2"> Фільтри </span>
					<NavbarToggler
						className="product-filter__toggler"
						onClick={toggleSideBar}
					/>
				</Col>
				<Col xs="12" md="3" className="column__product-filter mb-3">
					<Collapse className="d-md-flex" isOpen={isOpenSideBar}>
						<ProductFilter categories={categories} producers={producers} />
					</Collapse>
				</Col>
				<Col xs="12" md="9">
					<Searchbar
						className="products-page__searchbar mb-4"
						setProducts={setProducts}
						setLoading={setLoading}
						setCurrentPage={setCurrentPage}
					/>
					<ProductItems currentProducts={currentProducts} loading={loading} />
					{products.length > productsOnPage && (
						<Pagination
							productsOnPage={productsOnPage}
							totalProductsCount={products.length}
							currentPage={currentPage}
							handlePaginationClick={handlePaginationClick}
						/>
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default Products;
