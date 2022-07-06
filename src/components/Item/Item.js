import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({id,name, price, img, category, }) =>{

    return(    
            <Link to={`/product/${id}`}>
            <div class="col">
              <div class="card h-100">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title" alt="{category}">{name}</h5>
                  <p class="card-text">${price}</p>
                  <button type="button" className="btn btn-danger flex-fill ms-1" /*onClick={sumar}*/>Ver detalle de producto</button>
                </div>
              </div>
                </div>
            </Link>
  
  
                     
    );
};

export default Item;