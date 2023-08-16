import { db } from '../firebase/initializer';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore/lite';

const fetchProducts = async () => {
    try {
      let queryRef = query(collection(db, 'products'));
      
      //if querries will be too slow. ill try to implement pagination through firebase
      
      //const offset = (currentPage - 1) * productsOnPage;
      //queryRef = query(queryRef, limit(productsOnPage), startAt(offset));

      const productsSnapshot = await getDocs(queryRef);
      const productsData = productsSnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      return productsData;
    } catch (error) {
      console.error('Error fetching products: ', error);
      return [];
    }
}

const fetchFilteredProducts = async (mainCategory, secondaryCategory, producerName) => {
  try {
    let queryRef = query(collection(db, 'products'));

    if (mainCategory) {
      queryRef = query(queryRef, where('mainCategory', '==', mainCategory));
    }

    if (secondaryCategory) {
      queryRef = query(queryRef, where('secondaryCategory', '==', secondaryCategory));
    }

    if (producerName) {
      queryRef = query(queryRef, where('producerName', '==', producerName));
    }

    const productsSnapshot = await getDocs(queryRef);
    const productsData = productsSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    return productsData;
  } catch (error) {
    console.error('Error fetching products: ', error);
    return [];
  }
}

const fetchProductById = async (productId) => {
  try {
    let queryRef = query(doc(db, 'products', productId));

    const productSnapshot = await getDoc(queryRef);
    const productData = { 
      id: productSnapshot.id,
      ...productSnapshot.data()
    };

    return productData;
  } catch (error) {
    console.error('Error fetching products: ', error);
    return {};
  }
}

export { fetchProducts, fetchFilteredProducts, fetchProductById };