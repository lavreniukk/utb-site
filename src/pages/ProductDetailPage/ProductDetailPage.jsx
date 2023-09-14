import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap'
import { fetchImagesUrls, fetchProductById } from '../../utils/fetchingData';
import Spinner from '../../components/Spinner/Spinner';
import ProductImageSlider from '../../components/ProductImageSlider/ProductImageSlider';
import characteristicNames from '../../constants/characteristicNames';
import './productdetail.css';
import scrollToTop from '../../utils/scrollToTop.js';
import ColorPalette from '../../components/ColorPallete/ColorPalette';
import producerImage from '../../constants/producerImage';
import categoriesNames from '../../constants/categoriesNames';

function ProductDetailPage() {
    const [product, setProduct] = useState({});
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const fetchedProduct = await fetchProductById(productId);
            const fetchedImages = await fetchImagesUrls(fetchedProduct.imageSrc);
            
            setProduct(fetchedProduct);
            setLoading(false);
            setImageUrls(fetchedImages);
        }

        scrollToTop();
        fetchProduct();
    }, [productId]);

    if (loading) {
        return (
            <Spinner></Spinner>
        )
    }

    return (
        <Container className='mt-5'>
            <Row className='mb-5'>
                <Breadcrumb>
                    <BreadcrumbItem><Link className='product-detail__link' to={'/products'}>Продукція</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link className='product-detail__link' to={`/products/category/${product.mainCategory}`}>{categoriesNames.get(product.mainCategory)}</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{product.name} {product.article}</BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <Row className='mb-3'>
                <Col xs="12" sm="12" md="7">
                    <ProductImageSlider imagesSrcArray={imageUrls}/>
                </Col>
                <Col xs="12" sm="12" md="5" className='ps-5 pe-5'>
                    <Row className='mb-3'>
                        <h2 className='product-detail__product-name'>{product.name}</h2>
                        <span className='product-detail__product-article'>{product.article}</span>  
                    </Row>
                    <Row>
                       <h4 className='blue-left'>Опис</h4>
                        <p>
                            {product.description}
                        </p> 
                        <h4 className='blue-left'>Виробник</h4>
                        <Link className='product-detail__link d-flex flex-column mb-3' to={`/products/producer/${product.producerName}`}>
                            {product.producerName}
                            <img src={producerImage[product.producerName]} alt={product.producerName} width='50%' loading='lazy'/>
                        </Link>
                        <h4 className='blue-left'>Категорія</h4>
                        <Link className='product-detail__link mb-3' to={`/products/category/${product.mainCategory}`}>{categoriesNames.get(product.mainCategory)}</Link>
                        {
                            product.secondaryCategory && 
                            <>
                                <h4 className='blue-left'>Підкатегорія</h4>
                                <Link className='product-detail__link' to={`/products/category/${product.mainCategory}/${product.secondaryCategory}`}>{categoriesNames.get(product.secondaryCategory)}</Link>
                            </>
                        }
                    </Row>
                </Col>
            </Row>
            {
                product.characteristics &&
                <>
                <h2 className='text-center mb-3'>Характеристики</h2>
                <div className='d-flex flex-column mb-5'>
                    {
                        Object.keys(product.characteristics).map((key, index) => (
                        <div className='characteristic__wrapper d-flex mb-2' key={index}>
                            <span className='characteristic__name me-3'>{characteristicNames.get(key)}</span>
                            <span className='characteristic__value'>{product.characteristics[key]}</span>
                        </div>
                    ))
                    }
                </div>
                </>
            }
            {
                product.hasColorPalette && 
                <>
                    <h2 className='text-center mb-3'>Кольорова палітра</h2>
                    <ColorPalette />
                </>
            }
        </Container>
    )
}

export default ProductDetailPage