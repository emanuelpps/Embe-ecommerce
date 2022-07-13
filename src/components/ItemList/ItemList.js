import React from 'react';
import {Item} from '../Item/Item';



export const ItemList = ({items}) =>{

return (
    <div className='container'>
    <section className="row row-cols-1 row-cols-md-3 g-4">
        {items?.map((item) => (
          <Item {...item} key={item.id}/>
          ))}
    </section>
    </div>
  );
};

export default ItemList;