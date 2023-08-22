import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './categorycard.css';
import categoriesNames from '../../constants/categoriesNames';

export default function CategoryCard({item, src}) {
  console.log(src);
  return (
    <Link className='category-link' to={`/products/category/${item.title}`}>
    <Card className='mb-3 styled-card'>
        <img
            alt={item.title}
            src={src}
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
