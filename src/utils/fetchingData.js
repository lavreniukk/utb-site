import { db } from '../firebase/initializer';
import { collection, getDocs, query } from 'firebase/firestore/lite';

const fetchProducts = async () => {
    try {
      let queryRef = query(collection(db, 'products'));
      
      //if querries will be too slow. ill try to implement pagination through firebase
      
      //const offset = (currentPage - 1) * productsOnPage;
      //queryRef = query(queryRef, limit(productsOnPage), startAt(offset));

      const productSnapshot = await getDocs(queryRef);
      const productsData = productSnapshot.docs.map(doc => doc.data());

      return productsData;
    } catch (error) {
      console.error('Error fetching products: ', error);
      return [];
    }
}

export default fetchProducts;