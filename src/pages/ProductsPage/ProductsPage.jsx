import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap';
import ProductItems from '../../components/ProductItems/ProductItems.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import fetchProducts from '../../utils/fetchingData.js';

function Products({ title }) {
  document.title = 'УТБ Ресурс - ' + title;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsOnPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts(); //maybe a change if querries too slow
      setProducts(fetchedProducts);
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const indexOfLastProduct = currentPage * productsOnPage;
  const indexOfFirstProduct = indexOfLastProduct - productsOnPage;
  let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const handlePaginationClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
      <Container>
        <h1 className="text-center text-uppercase mt-5 mb-5">Продукція</h1>
        <ProductItems products={currentProducts} loading={loading} />
        {
          products.length > productsOnPage && 
          <Pagination
            productsOnPage={productsOnPage}
            totalProductsCount={products.length} 
            currentPage={currentPage} 
            handlePaginationClick={handlePaginationClick} 
          />
        }
      </Container>
  )
}

export default Products;