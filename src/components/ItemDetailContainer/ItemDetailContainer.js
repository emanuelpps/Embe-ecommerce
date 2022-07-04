
import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import productData from '../data/product';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
 
  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = productData.find((item) => item.id === 5);

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setProduct(res);
      })
      }, []);

  return <ItemDetail {...product} />;
};
