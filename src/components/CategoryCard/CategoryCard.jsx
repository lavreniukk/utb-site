import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import categoriesNames from '../../constants/categoriesNames';
import Image from '../Image/Image';
import './categorycard.css';

export default function CategoryCard({ item, src }) {
	const link = item.secondaryCategory
		? `/products/category/${item.mainCategory}/${item.secondaryCategory}`
		: `/products/category/${item.mainCategory}`;
	return (
		<Link className="category-link d-flex w-100 h-100" to={link}>
			<Card className="mb-3 overflow-hidden styled-card w-100">
				<div className="d-flex justify-content-center align-items-center position-relative overflow-hidden category-card__image-wrap">
					<Image src={src} />
				</div>
				<CardBody>
					{item.secondaryCategory ? (
						<CardTitle tag="h4">
							{categoriesNames.get(item.mainCategory)}{' '}
							{categoriesNames.get(item.secondaryCategory).toLowerCase()}
						</CardTitle>
					) : (
						<CardTitle tag="h4">
							{categoriesNames.get(item.mainCategory)}
						</CardTitle>
					)}
				</CardBody>
			</Card>
		</Link>
	);
}
