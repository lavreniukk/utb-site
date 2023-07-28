import React, { useState } from "react";
import CarouselComponent from "./CarouselComponent";
import './mainpagestyles.css';
import CategoryCard from "../UIComponents/CategoryCard";
import Slider from "../UIComponents/SliderComponent/Slider";
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
    '/assets/images/tekno-logo.png', 
    '/assets/images/burmeier-logo.png', 
    '/assets/images/drmach-logo.png', 
    '/assets/images/wstech-logo.png', 
];

export default function Home(props) {
    document.title = 'УТБ Ресурс - ' + props.title;

    const popularCategories = popularCategoriesItems.map((item) => <Col><CategoryCard item={item}/></Col>);

    return (
        <>
        <CarouselComponent carouselItems={carouselItems}/>
        <section className="mt-5">
            <h1 className="text-center text-uppercase mb-3">Популярні категорії</h1>
            <Container>
                <Row className="d-flex justify-content-center p-3" xs='1' md='3'>
                    {popularCategories}
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