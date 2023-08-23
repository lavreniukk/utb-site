import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../ProductCard/ProductCard'
import './productitems.css';
import { fetchImagesUrls } from '../../utils/fetchingData';

function ProductItems({ products, loading }) {
    const [imagesUrls, setImagesUrls] = useState([]);    
    const allImagesSrc = products.map(product => product.imageSrc[0]);

    useEffect(() => {
        const fetchImages = async () => {
            const fetchedImages = await fetchImagesUrls(allImagesSrc);
            setImagesUrls(fetchedImages);
        }
        fetchImages();
    }, [allImagesSrc]);

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
                        <ProductCard product={product} image={imagesUrls[index]}/>
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}

export default ProductItems