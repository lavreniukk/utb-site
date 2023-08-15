import React from 'react'
import Spinner from '../Spinner/Spinner'
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../ProductCard/ProductCard'
import './productitems.css';

function ProductItems({ products, loading }) {
    if (loading) {
        return (
            <Spinner></Spinner>
        )
    }

    return (
        <Container className='container__products'>
            <Row>
            { 
                products.map((product, index) => (
                    <Col className='d-flex justify-content-center' key={index} xs="12" sm="6" lg="4">
                        <ProductCard product={product}/>
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}

export default ProductItems