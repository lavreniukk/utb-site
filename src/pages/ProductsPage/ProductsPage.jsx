import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { Container, Row, Col, Collapse, NavbarToggler } from 'reactstrap';
import categories from '../../constants/productCategories.js';
import producers from '../../constants/productProducers.js';
import categoriesNames from '../../constants/categoriesNames.js';
import ProductItems from '../../components/ProductItems/ProductItems.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import ProductFilter from '../../components/ProductFilter/ProductFilter.jsx';
import Searchbar from '../../components/Searchbar/Searchbar.jsx';
import {
	fetchProducts,
	fetchFilteredProducts,
	fetchSearchedProducts,
} from '../../utils/fetchingData.js';
import setMetaDescription from '../../utils/setDescription.js';
import scrollToTop from '../../utils/scrollToTop.js';
import './productspage.css';

const productsOnPage = 6;

function Products() {
	const location = useLocation();
	const navigate = useNavigate();
	const { mainCategory, secondaryCategory, producerName } = useParams();
	const queryParams = queryString.parse(location.search);
	const [products, setProducts] = useState([]);
	const [currentProducts, setCurrentProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(
		parseInt(queryParams.page) || 1,
	);
	const [isOpenSideBar, setIsOpenSideBar] = useState(false);

	document.title = categoriesNames.get(mainCategory) || (producerName ? 'УТБ Ресурс - ' + producerName : 'УТБ Ресурс - Продукція');
	setMetaDescription(
		'Компанія “УТБ Ресурс” продуктивно працює на медичному ринку України, здійснюючи постачання та ремонт медичної техніки.',
	);

	useEffect(() => {
		const fetchData = async () => {
			let fetchedProducts;
			setLoading(true);

			if (mainCategory || secondaryCategory || producerName) {
				fetchedProducts = await fetchFilteredProducts(
					mainCategory,
					secondaryCategory,
					producerName,
				);
			} else if (queryParams.search) {
				fetchedProducts = await fetchSearchedProducts(queryParams.search);
			} else {
				fetchedProducts = await fetchProducts();
			}

			setProducts(fetchedProducts);
			setLoading(false);
		};

		scrollToTop();
		fetchData();
	}, [mainCategory, secondaryCategory, producerName, queryParams.search]);

	useEffect(() => {
		setCurrentPage(parseInt(queryParams.page) || 1);
	}, [queryParams.page]);

	useEffect(() => {
		const indexOfLastProduct = currentPage * productsOnPage;
		const indexOfFirstProduct = indexOfLastProduct - productsOnPage;
		setCurrentProducts(products.slice(indexOfFirstProduct, indexOfLastProduct));
	}, [products, currentPage]);

	const handlePaginationClick = (pageIndex) => {
		const newQueryParams = { ...queryParams, page: pageIndex };
		const newSearch = queryString.stringify(newQueryParams);
		navigate(`${location.pathname}?${newSearch}`);
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
