import { Col, Container, Row } from 'reactstrap';
import ProductCard from '../ProductCard/ProductCard';

function ProductsContainer({ currentProducts, imagesUrls }) {
	return (
		<Container className="container__products">
			<Row>
				{currentProducts.length !== 0 ? (
					currentProducts.map((product, index) => {
						return (
							<Col
								className="d-flex justify-content-center"
								key={product.id}
								xs="12"
								sm="6"
								lg="4"
							>
								<ProductCard product={product} image={imagesUrls[index]} />
							</Col>
						);
					})
				) : (
					<h3>Товар відсутній</h3>
				)}
			</Row>
		</Container>
	);
}

export default ProductsContainer;
