import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '../firebase/initializer';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	where,
} from 'firebase/firestore/lite';
import searchFilter from './searchFilter';

const fetchProducts = async () => {
	try {
		let queryRef = query(collection(db, 'products'), orderBy('article', 'asc'));

		const productsSnapshot = await getDocs(queryRef);
		const productsData = productsSnapshot.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});

		return productsData;
	} catch (error) {
		console.error('Error fetching products: ', error);
		return [];
	}
};

const fetchFilteredProducts = async (
	mainCategory,
	secondaryCategory,
	producerName,
) => {
	try {
		let queryRef = query(collection(db, 'products'), orderBy('article', 'asc'));

		if (mainCategory) {
			queryRef = query(queryRef, where('mainCategory', '==', mainCategory));
		}

		if (secondaryCategory) {
			queryRef = query(
				queryRef,
				where('secondaryCategory', '==', secondaryCategory),
			);
		}

		if (producerName) {
			queryRef = query(queryRef, where('producerName', '==', producerName));
		}

		const productsSnapshot = await getDocs(queryRef);
		const productsData = productsSnapshot.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});

		return productsData;
	} catch (error) {
		console.error('Error fetching products: ', error);
		return [];
	}
};

const fetchSearchedProducts = async (searchParameter) => {
	try {
		let queryRef = query(collection(db, 'products'), orderBy('article', 'asc'));

		const productsSnapshot = await getDocs(queryRef);
		const productsData = productsSnapshot.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});

		if (searchParameter === '') {
			return productsData;
		}

		return searchFilter(productsData, searchParameter);
	} catch (error) {
		console.error('Error fetching products: ', error);
		return [];
	}
};

const fetchProductById = async (productId) => {
	try {
		let queryRef = query(doc(db, 'products', productId));

		const productSnapshot = await getDoc(queryRef);
		const productData = {
			id: productSnapshot.id,
			...productSnapshot.data(),
		};

		return productData;
	} catch (error) {
		console.error('Error fetching products: ', error);
		return {};
	}
};

const fetchImagesUrls = async (images) => {
	const promises = images.map((image) => {
		if (typeof image === 'object') {
			return getDownloadURL(ref(storage, image.src));
		}
		return getDownloadURL(ref(storage, image));
	});

	try {
		const urls = await Promise.all(promises);
		return urls;
	} catch (error) {
		console.error('Error fetching image URLs:', error);
		return [];
	}
};

export {
	fetchProducts,
	fetchFilteredProducts,
	fetchSearchedProducts,
	fetchProductById,
	fetchImagesUrls,
};
