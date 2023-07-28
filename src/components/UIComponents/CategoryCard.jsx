import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

function CategoryCard({item}) {
  return (
    <Card className='mb-3 styled-card'>
        <img
            alt='alt'
            src={item.src}
        />
        <CardBody>
            <CardTitle tag='h4'>
                {item.title}
            </CardTitle>
            {item.categories.map((category) => 
                <CardSubtitle>
                    <Link className='category-link'>{category}</Link>
                </CardSubtitle>
            )}
        </CardBody>
    </Card>
  )
};

export default CategoryCard;