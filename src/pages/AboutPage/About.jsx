import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import projectPhotos from '../../constants/projectPhotos';
import Image from '../../components/Image/Image';
import { fetchImagesUrls } from '../../utils/fetchingData';
import setMetaDescription from '../../utils/setDescription';
import scrollToTop from '../../utils/scrollToTop';
import './aboutstyles.css';

function About({ title }) {
	const [projectsUrls, setProjectsUrls] = useState([]);
	document.title = 'УТБ Ресурс - ' + title;
	setMetaDescription(
		'Компанія “УТБ Ресурс” продуктивно працює на медичному ринку України, здійснюючи постачання та ремонт медичної техніки.',
	);

	useEffect(() => {
		const fetchImages = async () => {
			const projectImagesUrls = await fetchImagesUrls(projectPhotos);
			setProjectsUrls(projectImagesUrls);
		};

		scrollToTop();
		fetchImages();
	}, []);

	return (
		<Container className="mb-5">
			<h1 className="mt-5 text-center text-uppercase">Компанія "УТБ Ресурс"</h1>
			<Row className="mt-4 mb-5">
				<p className="about-page__description">
					Компанія «УТБ Ресурс» продуктивно працює на медичному ринку України, здійснюючи постачання та ремонт медичної техніки. Ми пропонуємо обладнання провідних світових виробників, а також комплексне оснащення медичних закладів  у всіх існуючих напрямках: урологічні, гінекологічні, хірургічні відділення, реанімації та анестезіології, діагностичні і ветеринарні амбулаторії, клініки, репродуктивні центри, пологові будинки. Поставляючи сучасне медичне обладнання, ми забезпечуємо гарантійне сервісне обслуговування, а також післягарантійне обслуговування за бажанням замовника. Кваліфіковані інженери сервісної служби навчають медичний персонал правилам експлуатації запропонованого устаткування. Наші співробітники мають великий досвід та визнання у своїх замовників.
				</p>
			</Row>
			<Row className="d-flex justify-content-center mb-5">
				<h2 className="ps-5 mb-4">Ми виконуємо:</h2>
				<Col xs="12" sm="6">
					<Card className="about-card mb-3">
						<CardBody className="d-flex align-items-center">
							<i className="fa-solid fa-truck"></i>
							<CardTitle
								tag="h4"
								className="about-page__card-title text-center"
							>
								Постачання сучасного медичного обладнання
							</CardTitle>
						</CardBody>
					</Card>
				</Col>
				<Col xs="12" sm="6">
					<Card className="about-card mb-3">
						<CardBody className="d-flex align-items-center">
							<i className="fa-solid fa-hammer"></i>
							<CardTitle
								tag="h4"
								className="about-page__card-title text-center"
							>
								Сервісне обслуговування та ремонт
							</CardTitle>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<h2 className="ps-5 mb-4">Наші роботи:</h2>
				<div className="parent">
					{projectPhotos.map((projectImage, index) => (
						<div
							key={index}
							className={`div${
								index + 1
							} d-flex justify-content-center align-items-center position-relative about-page__image-wrap`}
						>
							<Image src={projectsUrls[index]}></Image>
						</div>
					))}
				</div>
			</Row>
		</Container>
	);
}

export default About;
