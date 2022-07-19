import React from 'react';
import './CartItem.css';


const CartItem = ({product, quantity, removeFromCart, id} ) => {
        
    

    return (
        <article className="cart-item-card">
            <div className="cart-item__delete" onClick={()=>removeFromCart(id)}>
            </div>
            <div className="cart-item__img">
                <img src={product.img} alt="" />
            </div>
            <h2 className="cart-item__name">{product.name}</h2>
            <span className="cart-item__price">${product.price}</span>
            <span className="cart-item__qty"><strong>Cantidad: {quantity}</strong> </span>
            <span className="cart-item__qty"><strong>Total:</strong> ${product.price} * {quantity} </span>
            
        </article>
    );
}

export default CartItem;
