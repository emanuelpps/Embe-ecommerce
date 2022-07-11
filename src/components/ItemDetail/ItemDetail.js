import '../ItemDetail/ItemDeatail.css';
import React from 'react';
import ItemCount from 'components/ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export const ItemDetail = ({id,name,price,details,img,stock,}) => {

  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const onAdd = (num) => {
    setPurchaseCompleted (true);
    
  }

    return(
        <div class="card mb-3 text-center" /*style="max-width: 540px;"*/>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt={`${id}`}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">${price}</p>
        <p class="card-text mx-5">{details}</p>
        <p><strong>Stock Disponible:</strong> {stock}</p>
        
        
         {purchaseCompleted ? (<Link to='/cart'><button type="button" className='btn btn-success mt-3'>Ir al Carrito</button></Link>)
         :(<ItemCount ItemDetail={stock} onAdd={onAdd}/>)} 
        </div>
      </div>
    </div>
  </div>

    );
};

export default ItemDetail;