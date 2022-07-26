import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
//import {data}  from '../data/product';
import {useParams} from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../services/firestore';


export const ItemListContainer = () => {
    
    const[items,setItem] = useState([]);

    const[loading, setLoading] = useState(true);

    const{catId} = useParams();


    
    const loadingProducts = (catId) =>{
    if (catId === undefined){
      return (getProducts());
    } else {
      return(getProductsByCategory());
    }
  };
    
    useEffect(()=>{
      setLoading(true);
      loadingProducts().then((data) =>{
          setLoading(false);
          setItem(data);
        })
        .catch((errorMsg)=> {
          console.error(errorMsg);
        })
      },
      [catId]
    );
      

    
    if (items.length > 0){

      if(catId !== undefined){
          return loading ? (
            <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          ) : (
            <section className='text-center'>
            <h3>Catalogo de Productos</h3>
            <article>  
              {
                  <ItemList items={ items.filter(product => product.category === `${catId}`) } />
              }  
              </article>
            </section>
          ) 
      }else{
          return loading ? (
            <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          ) : (
            <section className='text-center'>
            <h3>Catalogo de Productos</h3>
            {/* agregar button -> VER TODOS LOS PRODUCTOS */}
            <article>    
                  <ItemList items={items} />
                  </article>
            </section>
          )
      }}
};
