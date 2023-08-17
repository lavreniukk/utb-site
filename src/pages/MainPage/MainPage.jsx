import React from "react";
import CarouselComponent from "../../components/Carousel/Carousel";
import './mainpagestyles.css';
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Slider from "../../components/Slider/Slider";
import { Col, Container, Row } from "reactstrap";
import sliderImageSrc from "../../constants/mainPageProducerSlider";
import popularCategoriesItems from "../../constants/popularCategories";
import carouselItems from "../../constants/mainPageCarousel";

export default function Home({title}) {
    document.title = 'УТБ Ресурс - ' + title;

    return (
        <>
        <CarouselComponent carouselItems={carouselItems}/>
        <section className="mt-5">
            <h1 className="text-center text-uppercase mb-3">Популярні категорії</h1>
            <Container>
                <Row className="d-flex justify-content-center p-3" xs='1' md='3'>
                    {popularCategoriesItems.map((item) => <Col key={item.title}><CategoryCard item={item}/></Col>)}
                </Row>
            </Container>
        </section>
        <section className="mt-3">
            <h1 className="text-center text-uppercase">Виробники</h1>
            <Slider items={sliderImageSrc}/>
        </section>
        </>
    );
};