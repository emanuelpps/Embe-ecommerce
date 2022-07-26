import React from 'react'
//import  {CartContext} from '../Context/CartContext';

import './Cart.css';
//import BuyingForm from 'components/BuyingForm/BuyingForm';

const CartList = ({id , name, quantity, price, img , removeFromCart }) => {

    return (
        <>
            <div className="cart-item ">
                <button className="material-icons delete-item item" onClick={()=>removeFromCart(id)}>X</button>
                <div  className="item-img item" style={{backgroundImage: `url(${img})`}}>
                </div>
                <div className="item-name item">
                    {name}
                </div>
                <div className="item-quantity item">
                    {quantity}
                </div>
                <div className="item-value item">
                    $ {price}
                </div>
                <div className="item-totalValue item">
                    $ {quantity * price}
                </div> 
            </div>
            <hr/> 
        </>
    )
}

export default CartList
