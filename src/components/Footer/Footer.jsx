import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './footerstyles.css';

const setActiveLink = ({ isActive }) =>
	isActive ? 'footer-link footer-link-active' : 'footer-link';

function Footer() {
	return (
		<div className="styled-footer px-2 py-5 mt-3">
			<Container>
				<Row
					className="pb-3 d-flex justify-content-center"
					xs="1"
					md="2"
					lg="4"
				>
					<Col
						className="d-flex d-lg-block justify-content-center pb-4"
						md="12"
					>
						<img
							className="logo-footer"
							src="/assets/images/utb/utb-logo-footer.webp"
							alt="УТБ Ресурс"
							loading="lazy"
						/>
					</Col>
					<Col className="text-center ">
						<i className="fa-solid fa-envelope fa-lg me-2" />
						<span className="fw-bold"> Електронна пошта:</span>
						<p>utbresurs.info@gmail.com</p>
					</Col>
					<Col className="text-center pb-4">
						<i className="fa-solid fa-phone fa-lg me-2" />
						<span className="fw-bold"> Номер телефону:</span>
						<p className='mb-0'>+38 (067) 243 38 48</p>
						<p>+38 (099) 715 25 26</p>
					</Col>
					<Col className="text-center text-lg-end">
						<ul className="footer-links m-0 p-0">
							<li>
								<NavLink to="/" className={setActiveLink}>
									Головна
								</NavLink>
							</li>
							<li>
								<NavLink to="/products" className={setActiveLink}>
									Продукція
								</NavLink>
							</li>
							<li>
								<NavLink to="/aboutus" className={setActiveLink}>
									Про компанію
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact" className={setActiveLink}>
									Контакти
								</NavLink>
							</li>
						</ul>
					</Col>
				</Row>
				<hr className="ms-auto me-auto"></hr>
				<Row className="text-center pt-4 pb-1">
					<span>&copy; 2023 &nbsp;</span>
					<span>ТОВ «УТБ РЕСУРС» </span>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
