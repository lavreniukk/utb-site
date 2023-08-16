import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { fetchProductById } from '../../utils/fetchingData';
import Spinner from '../../components/Spinner/Spinner';
import ProductImageSlider from '../../components/ProductImageSlider/ProductImageSlider';
import './productdetail.css';

function ProductDetailPage() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    const images = [
        {id: 0, src: '/assets/images/category-chairs.jpg'},
        {id: 1, src: '/assets/images/category-tables.jpg'},
        {id: 2, src: '/assets/images/category-beds.jpg'},
        {id: 3, src: '/assets/images/category-chairs.jpg'},
        {id: 4, src: '/assets/images/category-tables.jpg'},
        {id: 5, src: '/assets/images/category-beds.jpg'}
    ];

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const fetchedProduct = await fetchProductById(productId);

            setProduct(fetchedProduct);
            setLoading(false);
        }

        fetchProduct();
    }, [productId]);

    if (loading) {
        return (
            <Spinner></Spinner>
        )
    }

    return (
        <Container>
            <h2>{product.name}</h2>
            <Row>
                <Col xs="12" md="6">
                    <ProductImageSlider imagesSrcArray={images}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailPage