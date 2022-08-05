import React from 'react';
import {Item} from '../Item/Item';



export const ItemList = ({items, catId, featured}) =>{

return (
    <div className='container'>
    <section className="row row-cols-1 row-cols-md-3 g-4">
        {items?.map((item) => (
          <Item {...item} key={item.id} category={catId} featured={featured}/>
          ))}
    </section>
    </div>
  );
};

export default ItemList;