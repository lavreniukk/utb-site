import React, { useEffect, useState } from "react";
import CarouselComponent from "../../components/Carousel/Carousel";
import './mainpagestyles.css';
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Slider from "../../components/Slider/Slider";
import { Col, Container, Row } from "reactstrap";
import { sliderImageSrc, popularCategoriesItems, carouselItems, newItems } from "../../constants/mainPageConsts";
import { fetchImagesUrls } from "../../utils/fetchingData";
import Image from "../../components/Image/Image";

export default function Home({title}) {
    const [categoriesUrls, setCategoriesUrls] = useState([]);
    const [newItemsUrls, setNewItemsUrls] = useState([]);
    document.title = 'УТБ Ресурс - ' + title;

    useEffect(() => {
        const fetchMainPageImages = async () => {
            const categoriesImagesUrls = await fetchImagesUrls(popularCategoriesItems);
            setCategoriesUrls(categoriesImagesUrls);
            const newItemsImagesUrls = await fetchImagesUrls(newItems);
            setNewItemsUrls(newItemsImagesUrls);
        }
        fetchMainPageImages();
    }, []);

    return (
        <>
        <CarouselComponent carouselItems={carouselItems}/>
        <section className="section-margin">
            <h1 className="text-center text-uppercase mb-3">Популярні категорії</h1>
            <Container>
                <Row className="d-flex justify-content-center p-3" xs='1' md='3'>
                    {popularCategoriesItems.map((item, index) => <Col key={index}><CategoryCard item={item} src={categoriesUrls[index]}/></Col>)}
                </Row>
            </Container>
        </section>
        <section className="section-margin">
            <h1 className="text-center text-uppercase mb-4">Новинки</h1>
            <Container className="full-width">
               <Row className="new-items__container position-relative me-0" xs='1'>
                <Col className="d-flex flex-column new-items__tables-col" xs='12' md='10' lg='9' xl='8'>
                    <h2 className="text-white text-center">Ветеринарні столи WSTECH</h2>
                    <Row className="p-5 position-relative new-items__tables-row" xs='1' sm='2' md='3'>
                       { 
                        newItems.map((item, index) => {
                            if (index === newItems.length - 1) {
                                return null;
                            }
                            return (
                            <Col key={index} className="mb-4">
                                <CategoryCard item={item} src={newItemsUrls[index]}/>
                            </Col>)
                        })
                        } 
                    </Row>
                </Col>
                <div className="d-flex justify-content-center align-items-center new-items__image-wrap">
                    <Image src={newItemsUrls[newItemsUrls.length - 1]} title={newItems[newItems.length - 1].title}/>
                </div>
            </Row>   
            </Container>
        </section>
        <section className="section-margin">
            <h1 className="text-center text-uppercase">Виробники</h1>
            <Slider items={sliderImageSrc}/>
        </section>
        </>
    );
};