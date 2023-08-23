import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import './productcard.css';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

function ProductCard({product, image}) {
  return (
    <Card className='product-card'>
        <div className='d-flex justify-content-center align-items-center position-relative category-card__image-wrap'>
          <Image src={image} title={product.title}/>
        </div>
        <CardBody className='product-card__body'>
            <CardTitle tag='h4' className='product-card__title'>{product.name}</CardTitle>
            <Link to={`/product/${product.id}`} className='product-card__btn'>Детальніше</Link>
        </CardBody>
    </Card>
  )
}

export default ProductCard;