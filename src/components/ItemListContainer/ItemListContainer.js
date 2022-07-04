/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';

function ItemListContainer() {
    
    const[Item,setItem] = useState([])

    useEffect(()=>{
        setTimeout(() => {
        fetch('products_data.json')
        .then((resp) => resp.json())
        .then((data) => setItem(data))
        }, 2000)
    },[])

return (
    <section className='text-center'>
        <h1>EMBÉ <br/> Home + Deco</h1>
        <h3>Catalogo de Productos</h3>
        <article>
          <ItemList Items= {Item}/>
        </article>
    </section>
    
  );
}

export default ItemListContainer;