import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../ProductCard/ProductCard'
import './productitems.css';
import { fetchImagesUrls } from '../../utils/fetchingData';

function ProductItems({ currentProducts, loading }) {
    const [imagesUrls, setImagesUrls] = useState([]);
    const [imagesLoading, setImagesLoading] = useState(true);  

    useEffect(() => {
        setImagesLoading(true);

        const fetchImages = async () => {
            const fetchedImages = await fetchImagesUrls(currentProducts.map(product => product.imageSrc[0]));
            setImagesUrls(fetchedImages);
            setImagesLoading(false);
        }

        fetchImages();
    }, [currentProducts]);

    if (loading) {
        return (
            <Spinner/>
        )
    }

    return (
        <Container className='container__products'>
            <Row>
            { 
                currentProducts.map((product, index) => (
                    <Col className='d-flex justify-content-center' key={index} xs="12" sm="6" lg="4">
                        <ProductCard product={product} image={imagesLoading ? null : imagesUrls[index]}/>
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}

export default ProductItems;