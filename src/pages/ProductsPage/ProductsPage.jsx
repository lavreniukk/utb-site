import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import ProductItems from '../../components/ProductItems/ProductItems.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import { fetchProducts,fetchFilteredProducts } from '../../utils/fetchingData.js';
import scrollToTop from '../../utils/scrollToTop.js';
import ProductFilter from '../../components/ProductFilter/ProductFilter.jsx';
import categories from '../../constants/productCategories.js';
import producers from '../../constants/productProducers.js';

function Products({ title }) {
  document.title = 'УТБ Ресурс - ' + title;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsOnPage = 6;
  const { mainCategory, secondaryCategory, producerName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let fetchedProducts;
      console.log(mainCategory, secondaryCategory, producerName);
      if (mainCategory || secondaryCategory || producerName) {
        setLoading(true);
        setCurrentPage(1);
        fetchedProducts = await fetchFilteredProducts(mainCategory, secondaryCategory, producerName);
      } else {
        setLoading(true);
        setCurrentPage(1);
        fetchedProducts = await fetchProducts(); //maybe a change if querries too slow
      }

      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchData();
  }, [currentPage, mainCategory, secondaryCategory, producerName]);

  const indexOfLastProduct = currentPage * productsOnPage;
  const indexOfFirstProduct = indexOfLastProduct - productsOnPage;
  let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePaginationClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    scrollToTop();
  }

  return (
      <Container>
        <h1 className="text-center text-uppercase mt-5 mb-5">Продукція</h1>
        <ProductFilter categories={categories} producers={producers}/>
        <ProductItems products={currentProducts} loading={loading} />
        { products.length > productsOnPage && 
          <Pagination
            productsOnPage={productsOnPage}
            totalProductsCount={products.length} 
            currentPage={currentPage} 
            handlePaginationClick={handlePaginationClick} 
          /> }
      </Container>
  )
}

export default Products;