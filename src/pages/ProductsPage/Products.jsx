import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/initializer.js';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Container } from 'reactstrap';

function Products({title}) {
  document.title = 'УТБ Ресурс - ' + title; 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const produtsCol = collection(db, 'products');
        const productSnapshot = await getDocs(produtsCol);
        const productsData = productSnapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch(error) {
        console.error('Error fetching products: ', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Container>
      <h1 className="text-center text-uppercase mt-5 mb-5">Контакти</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
          </li>
        ))}
      </ul>
      </Container>
    </div>
  )
}

export default Products;