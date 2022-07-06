import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import {data}  from '../data/product';
import {useParams} from 'react-router-dom';


export const ItemListContainer = () => {
    
    const[items,setItem] = useState([]);

    const[loading, setLoading] = useState(true);

    const{catId} = useParams();

    useEffect(()=>{
        setLoading(true);
        const getItems = new Promise((resolve) => {
          setTimeout(() => {
            const info = catId
            ? data.filter((item) => item.category === catId)
            : data;

            resolve (info);
          }, 1000);
        });


        getItems
        .then((res) => {
          setItem(res);
        })
        .finally(() => setLoading(false));
      }, [catId]);

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
          <ItemList items= {items}/>
        </article>
    </section>
    
  );
};
