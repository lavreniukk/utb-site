import React from "react";
import CarouselComponent from "../../components/Carousel/Carousel";
import './mainpagestyles.css';
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Slider from "../../components/Slider/Slider";
import { Col, Container, Row } from "reactstrap";

const carouselItems = [
    {
        src: 'assets/images/carousel-item-1.jpg',
        key: 1,
    },
    {
        src: 'assets/images/carousel-item-2.jpg',
        key: 2,
    },
    {
        src: 'assets/images/carousel-item-3.jpg',
        key: 3,
    },
];

const popularCategoriesItems = [
    {
        src: 'assets/images/category-chairs.jpg',
        title: 'Медицинські крісла',
        categories: [
            'Гінекологічні',
            'Для забору крові',
            'Універсальні'
        ]
    },
    {
        src: 'assets/images/category-tables.jpg',
        title: 'Медицинські столи',
        categories: [
            'Операційні',
            'Реабілітаційні',
            'Столики'
        ]
    },
    {
        src: 'assets/images/category-beds.jpg',
        title: 'Загальнолікарняне обладнання',
        categories: [
            'Ліжка',
            'Стійки',
            'Візки'
        ]
    },
]

const sliderImageSrc = [
    '/assets/images/logos/tekno-logo.png', 
    '/assets/images/logos/burmeier-logo.png', 
    '/assets/images/logos/drmach-logo.png', 
    '/assets/images/logos/wstech-logo.png', 
];


export default function Home(props) {
    document.title = 'УТБ Ресурс - ' + props.title;

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