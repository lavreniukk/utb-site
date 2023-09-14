import React, { useState } from 'react';
import { InputGroup, Input, InputGroupText } from 'reactstrap';
import './searchbarstyles.css';
import { fetchSearchedProducts } from '../../utils/fetchingData';

function Searchbar({className, setProducts, setLoading, setCurrentPage}) {
    const [input, setInput] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = async () => {
        setLoading(true);
        setCurrentPage(1);
        const searchedProducts = await fetchSearchedProducts(input);

        setProducts(searchedProducts);
        setLoading(false);
    };

    return (
    <InputGroup className={`searchbar__container ${className}`}>
        <Input 
            placeholder='Пошук продукції' 
            name='searchparameter' 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
        />
        <InputGroupText tag='button' className='searchbar__btn' onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </InputGroupText>
    </InputGroup>
    )
}

export default Searchbar