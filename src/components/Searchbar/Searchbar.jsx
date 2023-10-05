import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { InputGroup, Input, InputGroupText } from 'reactstrap';
import { fetchSearchedProducts } from '../../utils/fetchingData';
import './searchbarstyles.css';

function Searchbar({ className, setProducts, setLoading, setCurrentPage }) {
	const [input, setInput] = useState('');
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = queryString.parse(location.search);

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	const handleSearch = async () => {
		setLoading(true);

		if (input === '') {
			navigate(`/products`);
		} else {
			const newQueryParams = { ...queryParams, page: 1, search: input };
			const newSearch = queryString.stringify(newQueryParams);
			navigate(`/products?${newSearch}`);
			const searchedProducts = await fetchSearchedProducts(input);
			setProducts(searchedProducts);
		}

		setCurrentPage(1);
		setLoading(false);
	};

	return (
		<InputGroup className={`searchbar__container ${className}`}>
			<Input
				placeholder="Пошук продукції"
				name="searchparameter"
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={handleKeyPress}
			/>
			<InputGroupText
				tag="button"
				className="searchbar__btn"
				onClick={handleSearch}
			>
				<i className="fa-solid fa-magnifying-glass"></i>
			</InputGroupText>
		</InputGroup>
	);
}

export default Searchbar;
