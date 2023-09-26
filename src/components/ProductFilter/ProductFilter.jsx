import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Accordion from '../Accordion/Accordion';
import categoriesNames from '../../constants/categoriesNames';
import './productfilter.css';

function ProductFilter({ categories, producers }) {
	return (
		<Container className="d-flex flex-column container__product-filter">
			<h3 className="product-filter__header">Категорії</h3>
			{categories.map((category, index) =>
				'secondaryCategory' in category ? (
					<Accordion
						header={
							<Link
								to={`/products/category/${category.mainCategory}`}
								className="product-filter__link"
							>
								{categoriesNames.get(category.mainCategory)}
							</Link>
						}
						body={category.secondaryCategory.map((secondary, index) => (
							<Link
								to={`/products/category/${category.mainCategory}/${secondary}`}
								key={index}
								className="product-filter__link"
							>
								{categoriesNames.get(secondary)}
							</Link>
						))}
						key={index}
					/>
				) : (
					<Link
						to={`/products/category/${category.mainCategory}`}
						key={index}
						className="product-filter__link"
					>
						{categoriesNames.get(category.mainCategory)}
					</Link>
				),
			)}
			<h3 className="product-filter__header mt-2">Виробники</h3>
			{producers.map((producer, index) => (
				<Link
					to={`/products/producer/${producer.producerName}`}
					key={index}
					className="product-filter__link"
				>
					{producer.producerName}
				</Link>
			))}
		</Container>
	);
}

export default ProductFilter;
