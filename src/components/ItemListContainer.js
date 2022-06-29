/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './ItemListContainer.css';
import ItemList from './ItemList';

function ItemListContainer() {

  return (
    <section className='text-center'>
        <h1>EMBÉ <br/> Home + Deco</h1>
        <h3>Catalogo de Productos</h3>
        <article>
          <ItemList/>
        </article>
    </section>
    
  );
}

export default ItemListContainer;