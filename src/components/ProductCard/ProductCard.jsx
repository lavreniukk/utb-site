import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './productcard.css';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

function ProductCard({ product, image }) {
	return (
		<Card className="product-card overflow-hidden">
			<div className="d-flex justify-content-center align-items-center position-relative overflow-hidden product-card__image-wrap">
				<Image src={image} title={product.title} />
			</div>
			<CardBody className="d-flex flex-column">
				<CardTitle tag="h4" className="product-card__title">
					{product.name}
				</CardTitle>
				<div className="d-flex justify-content-between mb-auto">
					<CardTitle tag="h5" className="product-card__article">
						{product.article}
					</CardTitle>
					<CardTitle tag="h5" className="product-card__article">
						{product.producerName}
					</CardTitle>
				</div>
				<Link
					to={`/product/${product.id}`}
					className="product-card__btn text-decoration-none"
				>
					Детальніше
				</Link>
			</CardBody>
		</Card>
	);
}

export default ProductCard;
