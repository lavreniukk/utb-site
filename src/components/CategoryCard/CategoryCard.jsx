import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import './categorycard.css';
import categoriesNames from '../../constants/categoriesNames';

export default function CategoryCard({item}) {
  return (
    <Link className='category-link' to={`/products/category/${item.title}`}>
    <Card className='mb-3 styled-card'>
        <img
            alt='alt'
            src={item.src}
            loading='lazy'
        />
        <CardBody>
            <CardTitle tag='h4'>
                {categoriesNames.get(item.title)}
            </CardTitle>
        </CardBody>
    </Card>
    </Link>
  )
};
