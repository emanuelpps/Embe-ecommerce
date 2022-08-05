import '../ItemDetail/ItemDetail.css';
import ItemCount from 'components/ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from 'components/Context/CartContext';

export const ItemDetail = ({id,name,price,details,img,stock,}) => {


  const {addToCart} = useContext(CartContext);

  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const onAdd = (num) => {
    setPurchaseCompleted (true);
    addToCart ({ id, name, price, details, img, stock}, num)
  };


    return(
        <div class="mt-5 container text-center" /*style="max-width: 540px;"*/>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={img} class="img-fluid rounded-start" alt={`${id}`}/>
              </div>
                <div class="col-md-8">
                  <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                  <p class="card-text card-price">${price}</p>
                  <p class="card-text mx-5">{details}</p>
                  <p><strong>Stock Disponible:</strong> {stock}</p>
                  {purchaseCompleted ? (<Link to='/cart' /*element={<Cart onAdd={onAdd}/>}*/><button type="button" className='btn btn-success mt-3 mb-3' onClick={() => (onAdd)}>Ir al Carrito</button></Link>)
                  :(<ItemCount stock={stock} onAdd={onAdd} />)}
              </div>
              <div>
                <Link to="*"><button type='button' className='btn btn-color'>Volver</button></Link>
              </div>
              </div>
            </div>
  </div>

    );
};


export default ItemDetail;