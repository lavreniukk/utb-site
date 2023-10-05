import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap';
import ProductImageSlider from '../../components/ProductImageSlider/ProductImageSlider';
import ColorPalette from '../../components/ColorPallete/ColorPalette';
import characteristicNames from '../../constants/characteristicNames';
import producerImage from '../../constants/producerImage';
import categoriesNames from '../../constants/categoriesNames';
import scrollToTop from '../../utils/scrollToTop.js';
import { fetchImagesUrls, fetchProductById } from '../../utils/fetchingData';
import setMetaDescription from '../../utils/setDescription';
import './productdetail.css';

function ProductDetailPage() {
	const [product, setProduct] = useState({});
	const [imageUrls, setImageUrls] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const { productId } = useParams();
	document.title = `${product.name} ${product.article}`;
	setMetaDescription(product.description);

	useEffect(() => {
		const fetchProduct = async () => {
			setLoading(true);
			const fetchedProduct = await fetchProductById(productId);
			const fetchedImages = await fetchImagesUrls(fetchedProduct.imageSrc);

			setProduct(fetchedProduct);
			setLoading(false);
			setImageUrls(fetchedImages);
		};

		scrollToTop();
		fetchProduct();
	}, [productId]);

	return (
		<Container className="mt-5">
			<Row className="mb-5">
				{loading ? (
					<div
						className="product-detail__skeleton-loading"
						style={{ width: '35vw', height: '30px' }}
					></div>
				) : (
					<div className='product-detail__upperpanel'>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link className="product-detail__link" to={'/products'}>
								Продукція
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<Link
								className="product-detail__link"
								to={`/products/category/${product.mainCategory}`}
							>
								{categoriesNames.get(product.mainCategory)}
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>
							{product.name} {product.article}
						</BreadcrumbItem>
					</Breadcrumb>
					<button className="product-detail__back product-detail__link" onClick={() => navigate(-1)}>
						<i class="fa-solid fa-chevron-left me-2"></i>
						Попередня сторінка
					</button>
					</div>
				)}
			</Row>
			<Row className="mb-3">
				<Col xs="12" sm="12" md="7">
					{loading ? (
						<div
							className="product-detail__skeleton-loading"
							style={{ width: '60%', aspectRatio: '3/4', margin: '30px auto' }}
						></div>
					) : (
						<ProductImageSlider imagesSrcArray={imageUrls} />
					)}
				</Col>
				<Col xs="12" sm="12" md="5" className="ps-5 pe-5">
					<Row className="mb-3">
						{loading ? (
							<div
								className="product-detail__skeleton-loading"
								style={{ width: '80%', height: '35px', marginBottom: '8px' }}
							></div>
						) : (
							<h2 className="product-detail__product-name">{product.name}</h2>
						)}
						{loading ? (
							<div
								className="product-detail__skeleton-loading"
								style={{ width: '30%', height: '30px' }}
							></div>
						) : (
							<span className="product-detail__product-article">
								{product.article}
							</span>
						)}
					</Row>
					<Row>
						<h4 className="blue-left">Опис</h4>
						{loading ? (
							<div
								className="product-detail__skeleton-loading"
								style={{ width: '100%', height: '250px', marginBottom: '16px' }}
							></div>
						) : (
							<p className="product-detail__description">
								{product.description}
							</p>
						)}
						<h4 className="blue-left">Виробник</h4>
						{loading ? (
							<div
								className="product-detail__skeleton-loading"
								style={{ width: '80%', height: '80px', marginBottom: '16px' }}
							></div>
						) : (
							<Link
								className="product-detail__link d-flex flex-column mb-3"
								to={`/products/producer/${product.producerName}`}
							>
								{product.producerName}
								<img
									src={producerImage[product.producerName]}
									alt={product.producerName}
									width="50%"
									loading="lazy"
								/>
							</Link>
						)}
						<h4 className="blue-left">Категорія</h4>
						{loading ? (
							<div
								className="product-detail__skeleton-loading"
								style={{ width: '80%', height: '80px', marginBottom: '16px' }}
							></div>
						) : (
							<Link
								className="product-detail__link mb-3"
								to={`/products/category/${product.mainCategory}`}
							>
								{categoriesNames.get(product.mainCategory)}
							</Link>
						)}
						{product.secondaryCategory && (
							<>
								<h4 className="blue-left">Підкатегорія</h4>
								<Link
									className="product-detail__link"
									to={`/products/category/${product.mainCategory}/${product.secondaryCategory}`}
								>
									{categoriesNames.get(product.secondaryCategory)}
								</Link>
							</>
						)}
					</Row>
				</Col>
			</Row>
			{product.characteristics && (
				<>
					<h2 className="text-center mb-3">Характеристики</h2>
					<div className="d-flex flex-column mb-5">
						{Object.keys(product.characteristics).map((key, index) => (
							<div className="characteristic__wrapper d-flex mb-2" key={index}>
								<span className="characteristic__name me-3">
									{characteristicNames.get(key)}
								</span>
								<span className="characteristic__value">
									{product.characteristics[key]}
								</span>
							</div>
						))}
					</div>
				</>
			)}
			{product.hasColorPalette && (
				<>
					<h2 className="text-center mb-3">Кольорова палітра</h2>
					<ColorPalette />
				</>
			)}
		</Container>
	);
}

export default ProductDetailPage;
