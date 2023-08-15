import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../Accordion/Accordion';
import { Container } from 'reactstrap';

function ProductFilter({categories, producers}) {

    return (
        <Container className='d-flex flex-column'>
        <h3>Категорії</h3>
        {
            categories.map((category, index) => (
                'secondaryCategory' in category ? 
                <Accordion 
                    header={<Link to={`/products/category/${category.mainCategory}`}>{category.mainCategory}</Link>} 
                    body={
                        category.secondaryCategory.map((secondary, index) => (
                        <Link to={`/products/category/${category.mainCategory}/${secondary}`} key={index}>{secondary}</Link>
                    ))}
                    key={index}
                /> 
                :
                <Link to={`/products/category/${category.mainCategory}`} key={index}>{category.mainCategory}</Link>
            ))
        }
        <h3>Виробники</h3>
        {
            producers.map((producer, index) => (
                <Link to={`/products/producer/${producer.producerName}`} key={index}>{producer.producerName}</Link>
            ))
        }
        </Container>
        
    )
}

export default ProductFilter