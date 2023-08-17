import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { fetchProductById } from '../../utils/fetchingData';
import Spinner from '../../components/Spinner/Spinner';
import ProductImageSlider from '../../components/ProductImageSlider/ProductImageSlider';
import characteristicNames from '../../constants/characteristicNames';
import './productdetail.css';
import ColorPalette from '../../components/ColorPallete/ColorPalette';
import producerImage from '../../constants/producerImage';

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
        <Container className='mt-5'>
            <Row className='mb-5'>
                <Col xs="12" sm="12" md="7">
                    <ProductImageSlider imagesSrcArray={images}/>
                </Col>
                <Col xs="12" sm="12" md="5" className='ps-5 pe-5'>
                    <Row className='mb-3'>
                        <h2 className='product-detail__product-name'>{product.name}</h2>
                        <span className='product-detail__product-article'> АА-4389 {product.article}</span>  
                    </Row>
                    <Row>
                       <h4 className='blue-left'>Опис</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor lacus sed consectetur volutpat. Nullam sollicitudin tincidunt mi id mollis. Aliquam hendrerit aliquam lacus et ornare. Proin efficitur tincidunt suscipit. Aenean pharetra ornare eros id sollicitudin. Duis non sagittis arcu, sed iaculis lectus. Nunc a ipsum nec sem dapibus faucibus non vitae leo. In placerat accumsan neque id semper. In non nibh id magna pellentesque rhoncus vel a magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu condimentum metus. In venenatis condimentum erat, non vulputate eros porta at. Sed tincidunt tortor eros. Nullam vel enim nec velit mollis tincidunt.
                            {product.description}
                        </p> 
                        <h4 className='blue-left'>Виробник</h4>
                        <Link className='product-detail__link d-flex flex-column mb-3' to={`/products/producer/${product.producerName}`}>
                            {product.producerName}
                            <img src={producerImage[product.producerName]} alt={product.producerName} width='50%'/>
                        </Link>
                        <h4 className='blue-left'>Категорія</h4>
                        <Link className='product-detail__link mb-3' to={`/products/category/${product.mainCategory}`}>{product.mainCategory}</Link>
                        {
                            product.secondaryCategory && 
                            <>
                                <h4 className='blue-left'>Підкатегорія</h4>
                                <Link className='product-detail__link' to={`/products/category/${product.mainCategory}/${product.secondaryCategory}`}>{product.secondaryCategory}</Link>
                            </>
                        }
                    </Row>
                </Col>
            </Row>
            <h2 className='text-center mb-3'>Характеристики</h2>
            <div className='d-flex flex-column mb-5'>
                {
                Object.keys(product.characteristics).map((key, index) => (
                    <div className='characteristic__wrapper d-flex mb-2' key={index}>
                        <span className='characteristic__name me-3'>{characteristicNames[key]}</span>
                        <span className='characteristic__value'>{product.characteristics[key]}</span>
                    </div>
                ))
            }
            </div>
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