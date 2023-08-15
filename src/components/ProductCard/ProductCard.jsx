import React from 'react'
import { Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import './productcard.css';

function ProductCard({product}) {
  return (
    <Card className='product-card'>
        <CardImg className='product-card__img' src='/assets/images/category-beds.jpg' alt={product.name}/>
        <CardBody className='product-card__body'>
            <CardTitle tag='h4' className='product-card__title'>{product.name} {product.producerName} {product.mainCategory}</CardTitle>
            <Button className='product-card__btn'>Детальніше</Button>
        </CardBody>
    </Card>
  )
}

export default ProductCard;