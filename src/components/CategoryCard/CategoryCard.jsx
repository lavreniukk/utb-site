import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './categorycard.css';
import categoriesNames from '../../constants/categoriesNames';
import Image from '../Image/Image';

export default function CategoryCard({item, src}) {
  return (
    <Link className='category-link' to={`/products/category/${item.title}`}>
    <Card className='mb-3 styled-card'>
        <div className='d-flex justify-content-center align-items-center position-relative category-card__image-wrap'>
          <Image src={src}/>
        </div>
        <CardBody>
            <CardTitle tag='h4'>
                {categoriesNames.get(item.title)}
            </CardTitle>
        </CardBody>
    </Card>
    </Link>
  )
};
