import React, { useEffect, useRef, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { fetchImagesUrls } from '../../utils/fetchingData';
import './productitems.css';
import ProductsContainer from './ProductsContainer';

function ProductItems({ currentProducts, loading }) {
	const [imagesUrls, setImagesUrls] = useState([]);
	const currentProductsRef = useRef(currentProducts);

	useEffect(() => {
		currentProductsRef.current = currentProducts;
		const fetchImages = async () => {
			setImagesUrls([]);
			const images = currentProducts.map((product) => product.imageSrc[0]);
			const fetchedImages = await fetchImagesUrls(images);

			if (currentProductsRef.current === currentProducts) setImagesUrls(fetchedImages);
		};

		fetchImages();
	}, [currentProducts]);

	console.log(imagesUrls);
	if (loading) {
		return <Spinner />;
	}

	return (
		<ProductsContainer currentProducts={currentProducts} imagesUrls={imagesUrls}/>
	)
}

export default ProductItems;
