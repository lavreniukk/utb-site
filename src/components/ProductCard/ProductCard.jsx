import React from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import './productcard.css';
import { Link } from 'react-router-dom';

function ProductCard({product}) {
  return (
    <Card className='product-card'>
        <CardImg className='product-card__img' src='/assets/images/category-beds.jpg' alt={product.name} loading='lazy'/>
        <CardBody className='product-card__body'>
            <CardTitle tag='h4' className='product-card__title'>{product.name} {product.producerName} {product.mainCategory}</CardTitle>
            <Link to={`/product/${product.id}`} className='product-card__btn'>Детальніше</Link>
        </CardBody>
    </Card>
  )
}

export default ProductCard;