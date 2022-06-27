/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './ItemListContainer.css';
import ItemCount from './ItemCount';

function ItemListContainer() {
  return (
    <section className='text-center'>
        <h1>EMBÉ <br/> Home + Deco</h1>
        <h3>Catalogo de Productos</h3>
        <article>
          <ItemCount stock={10}/>
        </article>
    </section>
    
  );
}

export default ItemListContainer;