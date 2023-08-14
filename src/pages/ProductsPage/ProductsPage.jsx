import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/initializer.js';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Container } from 'reactstrap';
import ProductItems from '../../components/ProductItems/ProductItems.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';

function Products({ title }) {
  document.title = 'УТБ Ресурс - ' + title;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsOnPage = 1;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const produtsCol = collection(db, 'products');
        const productSnapshot = await getDocs(produtsCol);
        const productsData = productSnapshot.docs.map(doc => doc.data());
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    }

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsOnPage;
  const indexOfFirstProduct = indexOfLastProduct - productsOnPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const handlePaginationClick = (pageIndex) => setCurrentPage(pageIndex);

  return (
    <div>
      <Container>
        <h1 className="text-center text-uppercase mt-5 mb-5">Продукція</h1>
        <ProductItems products={currentProducts} loading={loading} />
        <Pagination
          productsOnPage={productsOnPage}
          totalProductsCount={products.length} 
          currentPage={currentPage} 
          handlePaginationClick={handlePaginationClick} 
        />
      </Container>
    </div>
  )
}

export default Products;