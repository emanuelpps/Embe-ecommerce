
import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
/*import productData from '../data/product';*/
import { useParams } from 'react-router-dom';
import { getProduct } from 'services/firestore';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
 
  useEffect(() => {
    setLoading(true);
    getProduct(itemId)
    .then((Promise) =>{
      setProduct(Promise);
    })
    .catch((errorMsg) => {
      console.error(errorMsg);
    })
    .finally(() => setLoading(false));
      }, [itemId]);
  
    
    
    
    
    
    
    /*setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = productData.find((item) => item.id === itemId);

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setProduct(res);
      })
      .finally(() => setLoading(false));
      }, [itemId]);*/

      return loading ? <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
     : <ItemDetail {...product} />;
};
