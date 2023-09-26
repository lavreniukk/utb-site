import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ColorCard from './ColorCard';
import {
	standardUpholsteryColors,
	prestigeUpholsteryColors,
	frontsColors,
	shelvesColors,
	housingsColors,
	woodColors,
} from '../../constants/colorLinks.js';
import './colorpalette.css';

function ColorPalette() {
	return (
		<Container>
			<h5 className="text-uppercase blue-left ps-3">Стандартна оббивка</h5>
			<Row className="color-palette__mb p-3 pt-4">
				{standardUpholsteryColors.map((color, index) => (
					<Col key={index} xs="auto" sm="4" md="auto">
						<ColorCard color={color} />
					</Col>
				))}
			</Row>
			<Row>
				<Col xs="12" lg="7" className="color-palette__mb">
					<h5 className="text-uppercase blue-left ps-3">Оббивка престиж</h5>
					<Row className="p-3 pt-4">
						{prestigeUpholsteryColors.map((color, index) => (
							<Col key={index} xs="auto" sm="4" md="auto">
								<ColorCard color={color} />
							</Col>
						))}
					</Row>
				</Col>
				<Col xs="12" lg="5" className="color-palette__mb">
					<h5 className="text-uppercase blue-left ps-3">Передня частина</h5>
					<Row className="p-3 pt-4">
						{frontsColors.map((color, index) => (
							<Col key={index} xs="auto" sm="4" md="auto">
								<ColorCard color={color} />
							</Col>
						))}
					</Row>
				</Col>
			</Row>
			<Row>
				<Col xs="12" md="6" lg="4" className="color-palette__mb">
					<h5 className="text-uppercase blue-left ps-3">Полиці</h5>
					<Row className="p-3 pt-4">
						{shelvesColors.map((color, index) => (
							<Col key={index} xs="auto" sm="4" md="auto">
								<ColorCard color={color} />
							</Col>
						))}
					</Row>
				</Col>
				<Col xs="12" md="6" lg="4" className="color-palette__mb">
					<h5 className="text-uppercase blue-left ps-3">Корпуси</h5>
					<Row className="p-3 pt-4">
						{housingsColors.map((color, index) => (
							<Col key={index} xs="auto" sm="4" md="auto">
								<ColorCard color={color} />
							</Col>
						))}
					</Row>
				</Col>
				<Col xs="12" md="6" lg="4" className="color-palette__mb">
					<h5 className="text-uppercase blue-left ps-3">Дерево</h5>
					<Row className="p-3 pt-4">
						{woodColors.map((color, index) => (
							<Col key={index} xs="auto" sm="4" md="auto">
								<ColorCard color={color} />
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default ColorPalette;
