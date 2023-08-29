import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../ProductCard/ProductCard'
import './productitems.css';
import { fetchImagesUrls } from '../../utils/fetchingData';

function ProductItems({ currentProducts, loading}) {
    const [imagesUrls, setImagesUrls] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            setImagesUrls([]);
            const images = currentProducts.map(product => product.imageSrc[0]);
            const fetchedImages = await fetchImagesUrls(images);
            setImagesUrls(fetchedImages);
        }

        fetchImages();
    }, [currentProducts, setImagesUrls]);

    if (loading) {
        return (
            <Spinner/>
        )
    }

    return (
        <Container className='container__products'>
            <Row>
            { 
                currentProducts.map((product, index) => {
                    return (
                        <Col className='d-flex justify-content-center' key={index} xs="12" sm="6" lg="4">
                        <ProductCard product={product} image={imagesUrls[index]}/>
                    </Col>
                    )
                }      )              
            }
            </Row>
        </Container>
    )
}

export default ProductItems;