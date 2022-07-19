import ItemCount from 'components/ItemCount/ItemCount';
import React from 'react';
import './Cart.css';


const CartItem = ({product, quantity, removeFromCart, id, clearCart} ) => {
        
    

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
            <span className="cart-item__qty"><strong>Total:</strong> ${product.price * quantity} </span>
            
        </article>


      






        /* 
        -- Cart View Prueba 2 --
        
        <div className='Cart-Container'>
                <div className='Cart-Items'>
                <button  className="Action"  onClick={clearCart}>Vaciar Carrito</button>
                    <div className='image-box'>
                    <img src={product.img} className='Cart-img'style="{{ height=”120px” }}" alt='' />
                    </div>
                    <div className='about'>
                        <h1 className='title'>{product.name}</h1>
                    </div>
                    <div className='counter'>
                        <ItemCount/>
                        <div className='cartBtn'>+</div>
                        <div className='count'>{quantity}</div>
                        <div className='cartBtn'>-</div>
                    </div>
                <div className='prices'>
                    <div className='amount'>${product.price}</div>
                    <div className='save'><u>Save for later</u></div>
                    <div className='remove' onClick={()=>removeFromCart(id)}><u>Remove</u></div>
                </div>
                </div>
                <hr /> 
                <div className='checkout'>
                <div className='total'>
                <div>
                <div className='Subtotal'>Sub-Total</div>
                <div className='items'>{quantity}</div>
                </div>
                <div className='total-amount'>${product.price * quantity}</div>
                </div>
                <button className='checkoutButton'>Checkout</button>
                </div>
            </div>*/
    );
}

export default CartItem;





