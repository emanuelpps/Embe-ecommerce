import React from 'react';
import './CartItem.css';


const CartItem = ({ id, name, price, img, removeFromCart, } ) => {
        
    

    return (
        <article className="cart-item-card">
            <div className="cart-item__delete" onClick={()=>removeFromCart(id)}>
             </div>
            <div className="cart-item__img">
                <img src={img} alt=''/>
            </div>
            <h2 className="cart-item__name">{name}</h2>
            <span className="cart-item__price">${price}</span>
            <span className="cart-item__qty"><strong>Cantidad:</strong> </span>
            <span className="cart-item__qty"><strong>Total:</strong> ${price}</span>
            



        </article>
    );
}

export default CartItem;
