import './Item.css';
import { Link } from 'react-router-dom';
//import { useContext } from 'react';

export const Item = ({ id, name, price, img, category, }) =>{

  //const cartContext = useContext;
  //const {cart, addToCart} = cartContext

    return(    
            
            <div class="col h-100 textDecoration">
              <div class="card">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title titleText" alt={category}>{name}</h5>
                  <p class="card-text priceText">${price}</p>
                  <Link to={`/product/${id}`}><button type="button" className="btn btn-color flex-fill ms-1">Ver Producto</button></Link>
                </div>
              </div>
                </div>
            
  
  
                     
    );
};

export default Item;