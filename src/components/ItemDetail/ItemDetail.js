import '../ItemDetail/ItemDeatail.css';
import React from 'react';

export const ItemDetail = ({
    id,
    name,
    price,
    details,
    img,
    }) => {
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
        <p>Stock</p>
        <p>0</p>
         {/*<p>Productos Agregados al carrito: {num} Unidades</p>*/}
                        
                        {/*<button type="button" className="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark" onClick={vaciar}>Vaciar</button>*/}
                        
            
        <div>
        <button className='btn btn-primary mx-1'>+</button><button className='btn btn-danger mx-1'>-</button>
        </div>
          <button type="button" className='btn btn-success mt-3'>Comprar Producto</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default ItemDetail;